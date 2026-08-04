/*
  Convert images in ./assets to WebP at multiple widths and generate srcset JSON.
  Usage: node scripts/convert-images.js
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  try {
    const repoRoot = path.resolve(__dirname, '..');
    const assetsDir = path.join(repoRoot, 'assets');
    const outDir = path.join(assetsDir, 'generated-webp');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const exts = ['.jpg', '.jpeg', '.png', '.tif', '.tiff'];
    const files = fs.readdirSync(assetsDir).filter(f => exts.includes(path.extname(f).toLowerCase()));

    if (files.length === 0) {
      console.log('No source images found in assets/');
      return;
    }

    const widths = [400, 800, 1200, 2000];
    const quality = 80;

    const mappings = {};

    for (const file of files) {
      const inputPath = path.join(assetsDir, file);
      const base = path.parse(file).name;

      mappings[file] = { srcset: [], generated: [] };

      // produce webp at each width
      for (const w of widths) {
        const outName = `${base}-${w}.webp`;
        const outPath = path.join(outDir, outName);

        try {
          await sharp(inputPath)
            .resize({ width: w, withoutEnlargement: true })
            .webp({ quality })
            .toFile(outPath);

          const relPath = path.relative(repoRoot, outPath).replace(/\\/g, '/');
          mappings[file].srcset.push(`${relPath} ${w}w`);
          mappings[file].generated.push(relPath);
          console.log(`Created ${outName}`);
        } catch (err) {
          console.error('Error processing', file, 'width', w, err.message);
        }
      }

      // Also create an "original size" webp (no resize) for fallback
      const outNameFull = `${base}-orig.webp`;
      const outPathFull = path.join(outDir, outNameFull);
      try {
        await sharp(inputPath)
          .webp({ quality })
          .toFile(outPathFull);
        const rel = path.relative(repoRoot, outPathFull).replace(/\\/g, '/');
        mappings[file].srcset.push(`${rel} 1000w`); // approximate
        mappings[file].generated.push(rel);
        console.log(`Created ${outNameFull}`);
      } catch (err) {
        console.error('Error creating original-size webp for', file, err.message);
      }
    }

    // Write JSON manifest
    const manifestPath = path.join(outDir, 'srcsets.json');
    fs.writeFileSync(manifestPath, JSON.stringify(mappings, null, 2));
    console.log(`Wrote srcsets manifest to ${path.relative(repoRoot, manifestPath)}`);
    console.log('Done.');
  } catch (err) {
    console.error('Fatal', err);
    process.exit(1);
  }
})();
