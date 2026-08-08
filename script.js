/**
 * RUSLAN ANTONENKO PORTFOLIO WEBSITE
 * Interactive Engine: Custom Cursor, Runtime Image Transparencifier, Physics Grid Canvas, 
 * 3D Parallax Tilt, Live Time Zones, Full-screen Overlays, and Dual Language System (EN / UA)
 */

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
    initCustomCursor();
    initImageTransparencifier();
    initPhysicsCanvas();
    init3DParallax();
    initThemeToggle();
    initNavigationMenu();
    initOverlays();
    initProjectGallery();
    initContactPanel();
    initInteractiveHovers();
});

/* ----------------------------------------------------
   1. TRANSLATION ENGINE & DATA DICTIONARY
---------------------------------------------------- */
let currentLanguage = 'en';

const staticTranslations = {
    en: {
        "menu": "MENU",
        "close": "CLOSE",
        "role-label": "ROLE",
        "role-value": "ARCHITECT/DESIGNER/URBAN PLANNER",
        "based-label": "BASED",
        "based-value": "KYIV",
        "email-label": "EMAIL",
        "email-tooltip": "Click to copy",
        "start-project": "START A PROJECT",
        "menu-index": "INDEX",
        "menu-works": "SELECTED WORKS",
        "menu-perspectives": "PERSPECTIVES",
        "menu-contact": "CONTACT",
        "menu-social": "SOCIAL",
        "menu-time": "LOCAL TIME",
        "menu-design-code": "DESIGN & CODE",
        "overlay-works-title": "SELECTED WORKS",
        "overlay-perspectives-title": "PERSPECTIVES",
        "param-client": "CLIENT",
        "param-services": "SERVICES",
        "param-year": "YEAR",
        "param-category": "CATEGORY",
        "form-name": "NAME",
        "form-email": "EMAIL ADDRESS",
        "form-project": "PROJECT BRIEF",
        "form-submit": "SEND INQUIRY",
        "form-success": "Thank you! Your project brief has been sent. I will get back to you shortly.",
        "copied": "Copied!",
        "view-btn": "VIEW"
    },
    ua: {
        "menu": "МЕНЮ",
        "close": "ЗАКРИТИ",
        "role-label": "РОЛЬ",
        "role-value": "АРХІТЕКТОР/ДИЗАЙНЕР/МІСЬКИЙ ПЛАНУВАЛЬНИК",
        "based-label": "ЛОКАЦІЯ",
        "based-value": "КИЇВ",
        "email-label": "EMAIL",
        "email-tooltip": "Скопіювати",
        "start-project": "РОЗПОЧАТИ ПРОЄКТ",
        "menu-index": "ГОЛОВНА",
        "menu-works": "ОБРАНІ РОБОТИ",
        "menu-perspectives": "ПЕРСПЕКТИВИ",
        "menu-contact": "КОНТАКТИ",
        "menu-social": "СОЦ. МЕРЕЖІ",
        "menu-time": "МІСЦЕВИЙ ЧАС",
        "menu-design-code": "ДИЗАЙН ТА КОД",
        "overlay-works-title": "ОБРАНІ РОБОТИ",
        "overlay-perspectives-title": "ПЕРСПЕКТИВИ",
        "param-client": "КЛІЄНТ",
        "param-services": "ПОСЛУГИ",
        "param-year": "РІК",
        "param-category": "КАТЕГОРІЯ",
        "form-name": "ІМ'Я",
        "form-email": "EMAIL АДРЕСА",
        "form-project": "БРИФ ПРОЄКТУ",
        "form-submit": "НАДІСЛАТИ",
        "form-success": "Дякую! Бриф вашого проєкту надіслано. Я зв'яжуся з вами найближчим часом.",
        "copied": "Скопійовано!",
        "view-btn": "ПЕРЕГЛЯД"
    }
};

const projectsData = [
    {
        id: 0,
        year: "2026",
        image: "assets/chair_01.png",
        gallery: [
            { src: "assets/chair_02.png" },
            { src: "assets/chair_03.png" },
            { src: "assets/chair_04.png" },
            { src: "assets/chair_05.png" },
            { src: "assets/chair_06.png" },
            { src: "assets/chair_07.png" },
            { src: "assets/chair_08.png" }
        ],
        en: {
            title: "One-Leg Oak Chair",
            category: "WOOD WORKING",
            client: "Personal studio work",
            services: "Furniture Design, Material Study, Chair Development",
            description: "Created during the Vares Residency, this one oak leg chair became a personal healing project, a way to slow down, regain focus, and reconnect with making through working with wood. In the midst of the constant pressure of war in Ukraine, the physical process of shaping, sanding, and assembling the wood offered a rare opportunity to concentrate on something tangible and immediate. \n\n The project was about designing an object inspired by Japanese aesthetics, an object that could create a sense of focus both through the hands-on process of making it and through its final form. The result is a chair that is deliberately simple, comfortable, and slightly funky. Its single oak leg gives it a playful character while the proportions and curved seat make it comfortable to use. \n\n It is both a functional piece of furniture and a small personal exercise in finding calm through making."
        },
        ua: {
            title: "Стілець на одній дубовій ніжці",
            category: "РОБОТА З ДЕРЕВОМ",
            client: "Проєкти студії",
            services: "Дизайн меблів, дослідження матеріалу, розробка стільцяв",
            description: "Створений під час резиденції у Vares (Естонія), цей стілець на дубової ніжці став особистим проєктом для відновлення. Способом сповільнитися, повернути концентрацію та знову відчути задоволення від роботи руками й деревом. На тлі постійного тиску війни в Україні фізичний процес формування, шліфування та роботи з деревої став рідкісною можливістю зосередитися на чомусь конкретному й відчутному. \n\n Проєкт полягав у створенні об’єкта, натхненого японською естетикою, який би допомагав зосередитися під час роботи руками та водночас був естетично привабливим. У результаті вийшов простий, комфортний і водночас трохи хуліганський стілець. Одна дубова ніжка надає йому грайливого характеру, а пропорції та вигнуте сидіння роблять його зручним у використанні. \n\n Це одночасно функціональний предмет меблів і невелика особиста практика пошуку спокою через процес створення."
        }
    },

    {
        id: 1,
        year: "2025",
        image: "assets/lamp_01.png",
        gallery: [
            { src: "assets/lamp_02.png" },
            { src: "assets/lamp_03.png" },
            { src: "assets/lamp_04.png" },
            { src: "assets/lamp_05.png" }
        ],
        en: {
            title: "Brutal Printing",
            category: "3D PRINTING",
            client: "Personal studio work",
            services: "Parametric Design, Grasshopper, 3D Scanning, 3D Printing",
            description: "The project explores the combination of digital technology and organic forms through experiments with 3D printing. The main idea was to investigate how natural, fluid forms can be reinterpreted through digital modelling and transformed into functional objects. \n\n The result is a series of 3D-printed lamps, where organic forms are combined with the function of lighting, creating objects that exist somewhere between the natural and the artificial."
        },
        ua: {
            title: "Брутальна Друкарня",
            category: "3Д ДРУК",
            client: "Проєкти студії",
            services: "Індустріальний дизайн, 3D-моделювання, параметричний дизайн Grasshopper, 3Dдрук",
            description: "Проєкт досліджує поєднання цифрової технології та органічних форм через експерименти з 3D-друком. Основною ідеєю було дослідити, як природні, пластичні форми можуть бути переосмислені за допомогою цифрового моделювання та перетворені на функціональні об’єкти. \n\n Результатом стала серія 3D-друкованих ламп, у яких органічна форма поєднується з функцією освітлення, створюючи об’єкти на межі між природним і штучним."
        }
    },

    {
        id: 2,
        year: "2022",
        image: "assets/amsterdam_01.png",
          gallery: [
            { src: "assets/amsterdam_02.png" },
            { src: "assets/amsterdam_03.png" },
            { src: "assets/amsterdam_04.png" },
            { src: "assets/amsterdam_05.png" },
            { src: "assets/amsterdam_06.png" },
            { src: "assets/amsterdam_07.png" },
            { src: "assets/amsterdam_08.png" }
        ],
        en: {
            title: "Teremky Amsterdam",
            category: "ARCHITECTURE",
            client: "ALL RIGHT DEVELOPMENT",
            services: "Concept, Architecture, Visualisation",
            description: "This project was my first independent work with the Kyiv-based developer ALL RIGHT, shortly before the full-scale invasion of Ukraine by russia in 2022. \n\n The site was relatively constrained, but its location near Teremky metro station offered strong potential. The main idea was to create a new identity for this semi-residential area and give it a distinct character.n\nThe project was inspired by the theme of travel, with Amsterdam, the Netherlands, chosen as its destination and conceptual reference. n\n As the area lacks shopping and recreational functions, the ground floor along the main road was designed to accommodate public and commercial uses.n\nThe facades facing neighbouring buildings and green areas are dedicated to residential functions, with private gardens providing a more secluded and intimate living environment."
        },
        ua: {
            title: "Теремківський Амстердам",
            category: "АРХІТЕКТУРА",
            client: "ALL RIGHT DEVELOPMENT",
            services: "Концепція, Архітектура, Візуалізація",
            description: "Цей проєкт був моєю першою самостійною роботою з київським девелопером ALL RIGHT, виконаною незадовго до повномасштабного вторгнення росії в Україну у 2022 році.n\n Ділянка була відносно обмеженою, проте її розташування поблизу станції метро «Теремки» мало значний потенціал. Основною ідеєю було створити нову ідентичність для цієї напів житлової території та надати їй виразного характеру. n\n Проєкт був натхненний темою подорожей, а Амстердам, Нідерланди, був обраний як напрямок і концептуальний референс. n\n Оскільки району бракує торговельних і рекреаційних функцій, перший поверх уздовж основної дороги було запропоновано відвести під громадські та комерційні функції. n\n Фасади, орієнтовані на сусідні будівлі та зелені зони, відведені під житлову функцію, із приватними садами, що створюють більш відокремлене та камерне середовище для мешканців."
        }
    },
    {
        id: 3,
        year: "2022",
        image: "assets/kyiv_avenue_01.png",
        gallery: [
            { src: "assets/kyiv_avenue_02.png" },
            { src: "assets/kyiv_avenue_03.png" },
            { src: "assets/kyiv_avenue_04.png" },
            { src: "assets/kyiv_avenue_05.png" },
            { src: "assets/kyiv_avenue_06.png" },
            { src: "assets/kyiv_avenue_07.png" },
            { src: "assets/kyiv_avenue_08.png" }
        ],
        en: {
            title: "7 AVENUE",
            category: "ARCHITECTURE & DESIGN",
            client: "ALL RIGHT DEVELOPMENT",
            services: "Concept, Architecture, Design, Visualisation",
            description: "Project 7 Avenue is a unique co-living concept in the heart of Kyiv. Located behind the Vernadsky Library, the residence occupies a quiet area while remaining close to the city centre. \n\n The project features a private swimming pool, a coworking space in the basement, and recreational functions on the top floor, offering panoramic views towards the city centre. Each apartment has its own private loggia, providing residents with an additional outdoor space."
        },
        ua: {
            title: "7 АВЕНЮ",
            category: "АРХІТЕКТУРА ТА ДИЗАЙН",
            client: "ALL RIGHT DEVELOPMENT",
            services: "Концепція, Архітектура, Дизайн, Візуалізація",
            description: "Проєкт 7 Avenue, унікальна концепція колівінгу в самому серці Києва. Розташований позаду бібліотеки Вернадського, комплекс знаходиться у тихій частині міста, водночас залишаючись близько до центру. \n\n Проєкт передбачає приватний басейн, коворкінг у цокольному поверсі та рекреаційні функції на верхньому поверсі з панорамними видами на центр міста. Кожна квартира має власну приватну лоджію, що створює додатковий відкритий простір для мешканців."
        }
    },

    {
        id: 4,
        year: "2025",
        image: "assets/truskavets_01.png",
         gallery: [
            { src: "assets/truskavets_02.png" },
            { src: "assets/truskavets_03.png" },
            { src: "assets/truskavets_04.png" },
            { src: "assets/truskavets_05.png" },
            { src: "assets/truskavets_06.png" },
            { src: "assets/truskavets_07.png" },
            { src: "assets/truskavets_08.png" },
            { src: "assets/truskavets_09.png" }
        ],
        en: {
            title: "Chrome Aesthetics",
            category: "URBAN CONCEPT",
            client: "UN HABITAT, RO3KVIT",
            services: "Supervision, urban development, Participation, Interviewing",
            description: "Supported by: the Federal Ministry for Economic Cooperation and Development of Germany (BMZ), UN-Habitat, and NGO Ro3kvit. \n\n Team: Truskavets City Council, UN-Habitat Ukraine, and NGO Ro3kvit.\n\n Acknowledgements: Charitable Foundation Voices of Children, NGO Association of People with Disabilities, NGO Kebeta, the House of Student Creativity, University of the Third Age, the Truskavets IDP Council, the principal of School No. 2, and heads of condominium associations for their participation and valuable input. \n\n The conclusions and recommendations presented in this report do not necessarily reflect the official position of UN-Habitat, its Governing Council, or its Member States. The designations and presentation of materials do not imply any position by the United Nations regarding the legal status of territories, boundaries, or authorities.\n\n Urban acupuncture is a targeted intervention that can trigger broader positive changes across a neighbourhood. \n\n In this project, the key “pain point” is the abandoned former boiler house, which has the potential to become a catalyst for development and improved quality of life throughout the neighbourhood. \n\n On 11 October 2025, a participatory workshop with local residents was held in Truskavets. Its aim was to identify key challenges, everyday needs, and priorities for future spatial interventions. Participants from different age and social groups worked with neighbourhood maps, identifying problematic and unsafe areas, desired routes, green spaces, and potential points for development.\n\n The collected input formed the basis for the spatial concept and further development scenarios, grounded in the real needs and priorities of the community."
        },
        ua: {
            title: "Концепція розвитку сусідства м. Трускавец",
            category: "УРБАН КОНЦЕПЦІЯ",
            client: "UN HABITAT, RO3KVIT",
            services: "Координація, міський розвиток, партисипація, проведення інтерв’ю",
            description: "За підтримки: Федерального міністерства економічного співробітництва та розвитку Німеччини (BMZ), ООН-Хабітат та ГО «Ро3квіт». \n\n Команда: Трускавецька міська рада, ООН-Хабітат Україна та ГО «Ро3квіт».\n\n Подяки: благодійному фонду «Голоси дітей», ГО «Асоціація інвалідів», ГО «Кебєта», Будинку учнівської творчості, Університету третього віку, Раді ВПО м. Трускавець, директору школи №2 та головам ОСББ за участь і цінні коментарі. \n\n Викладені у звіті висновки та рекомендації не обов’язково відображають офіційну позицію ООН-Хабітат, її Керівної ради чи держав-членів. Позначення та матеріали документа не визначають позицію ООН щодо правового статусу територій, кордонів чи органів влади.\n\n Міська акупунктура — точкове втручання, що запускає ширші позитивні зміни в районі. \n\n У цьому проєкті ключовою «больовою точкою» є занедбаний простір колишньої котельні, який може стати каталізатором розвитку та покращення якості життя всього району. \n\n 11 жовтня 2025 року в Трускавці відбувся партисипативний воркшоп із мешканцями району. Його метою було виявити ключові проблеми території, щоденні потреби мешканців та визначити пріоритети для майбутніх просторових втручань. Учасники різного віку та соціальних груп працювали з картами району, позначаючи проблемні місця, небезпечні ділянки, бажані маршрути, зелені зони та потенційні точки розвитку. \n\n Зібрані пропозиції стали основою для формування просторової концепції та подальших сценаріїв розвитку району, заснованих на реальних потребах громади."
        }
    },

    {
        id: 5,
        year: "2025",
        image: "assets/mosaic_01.png",
        gallery: [
            { src: "assets/mosaic_02.png" },
            { src: "assets/mosaic_03.png" },
            { src: "assets/mosaic_04.png" },
            { src: "assets/mosaic_05.png" },
            { src: "assets/mosaic_06.png" },
            { src: "assets/mosaic_07.png" },
            { src: "assets/mosaic_08.png" },
            { src: "assets/mosaic_09.png" }
        ],
        en: {
            title: "Volumetric Shapes",
            category: "VISUAL IDENTITY",
            client: "Personal work",
            services: "Logo Design, Packaging Concept",
            description: "Volumetric Shapes is a project developed as an attempt to regain focus, manage anxiety, and learn the essential techniques of working with tile. \n\n The project uses old reclaimed tiles. One of the exercises was to create a mosaic featuring a cat named Hapukoor, which means “sour cream” in Estonian. \n\n The brick-sized mosaic pieces are part of WILDA, a project in which two architects / urbanists explored ways of designing spaces for non-human life. My focus was on filling gaps left by missing bricks with tiles, creating small spaces behind them where insects could live and nest."
        },
        ua: {
            title: "Об'ємні фігури",
            category: "ВІЗУАЛЬНА АЙДЕНТИКА",
            client: "Персональна робота",
            services: "Дизайн мозаїки, Концепція біорізноманіття",
            description: "Об’ємні форми це проєкт, розроблений як спроба повернути собі концентрацію, впоратися з тривожністю та опанувати базові техніки роботи з плиткою. \n\n У проєкті використано стару плитку повторного використання. Однією з вправ було створення мозаїки із зображенням кота на ім’я Hapukoor, що естонською означає «сметана». \n\n Мозаїчні елементи розміром із цеглу є частиною проєкту WILDA, у межах якого двоє архітекторів та урбаністів досліджували способи створення просторів для нечеловічого життя. Моєю метою було заповнити плиткою порожнини, що залишилися після відсутніх цеглин, створюючи за нею невеликі простори, де могли б жити та облаштовуватися комахи."
        }
    },
    
     {
        id: 6,
        year: "2025",
        image: "assets/modulehouse_01.png",
        gallery: [
            { src: "assets/modulehouse_02.png" },
            { src: "assets/modulehouse_03.png" },
            { src: "assets/modulehouse_04.png" },
            { src: "assets/modulehouse_05.png" },
            { src: "assets/modulehouse_06.png" },
            { src: "assets/modulehouse_07.png" },
            { src: "assets/modulehouse_08.png" },
            { src: "assets/modulehouse_09.png" },
            { src: "assets/modulehouse_10.png" },
            { src: "assets/modulehouse_11.png" },
            { src: "assets/modulehouse_12.png" },
            { src: "assets/modulehouse_13.png" }
        ],
        en: {
            title: "Module",
            category: "ARCHITECTURE & DESIGN",
            client: "ALL RIGHT DEVELOPMENT",
            services: "Concept, Architecture, Design, Visualisation",
            description: "The project is a collaborative search with the client for alternative models of affordable housing for the Ukrainian market, responding to growing housing needs and reduced financial capacity caused by the war. The proposed space is one possible approach to organising the interior of a modular housing unit. \n\n This option is about space and possibilities, rather than a single fixed solution. Modular housing can adapt to different needs and budgets — from more comfortable living spaces to more modest solutions focused on providing basic housing. \n\n The key principle is affordability through material optimisation and the reuse of resources, including bio-based insulation and reclaimed timber."
        },
        ua: {
            title: "Модуль",
            category: "АРХІТЕКТУРА ТА ДИЗАЙН",
            client: "ALL RIGHT DEVELOPMENT",
            services: "Концепція, Архітектура, Дизайн, Візуалізація",
            description: "Проєкт це спільний з замовником пошук альтернативних моделей доступного житла для українського ринку в умовах зростання потреб та зниження фінансових можливостей населення через війну. Запропонований простір є одним із можливих варіантів організації внутрішнього середовища модульного житла. \n\n Цей варіант — про простір і можливості, а не про єдине фіксоване рішення. Модульне житло може адаптуватися до різних потреб і бюджетів: від більш комфортних просторів до скромніших рішень, орієнтованих на базове забезпечення житлом. \n\n Ключовий принцип — доступність за рахунок оптимізації матеріалів і повторного використання ресурсів: біоутеплювача та повторно використаної деревини."
        }
    }
];

const perspectivesData = [
    {
        id: 0,
        en: {
            date: "OCTOBER 2026",
            read: "5 MIN READ",
            title: "THE RESURGENCE OF SWISS BRUTALISM IN DIGITAL PLATFORMS",
            excerpt: "How high-contrast grotesque typefaces, geometric grids, and unyielding layouts are redefining the user experience in a sea of homogenized SaaS designs."
        },
        ua: {
            date: "ЖОВТЕНЬ 2026",
            read: "5 ХВ ЧИТАННЯ",
            title: "ВІДРОДЖЕННЯ ШВЕЙЦАРСЬКОГО БРУТАЛІЗМУ В ЦИФРОВИХ ПЛАТФОРМАХ",
            excerpt: "Як висококонтрастні гротескні шрифти, геометричні сітки та безкомпромісні макети переосмислюють досвід користувачів у морі одноманітного дизайну."
        }
    },
    {
        id: 1,
        en: {
            date: "JUNE 2026",
            read: "7 MIN READ",
            title: "CHAOS AS A STRUCTURAL DESIGN PARADIGM",
            excerpt: "Exploring the tension between rigid grid systems and mathematical distortion. Why breaking the rules yields more memorable visual identity systems."
        },
        ua: {
            date: "ЧЕРВЕНЬ 2026",
            read: "7 ХВ ЧИТАННЯ",
            title: "ХАОС ЯК ПАРАДИГМА СТРУКТУРНОГО ДИЗАЙНУ",
            excerpt: "Дослідження напруги між жорсткими сітками та математичним спотворенням. Чому порушення правил створює айдентику, яка запам'ятовується краще."
        }
    },
    {
        id: 2,
        en: {
            date: "MARCH 2026",
            read: "4 MIN READ",
            title: "WEBGL & THE PHYSICALITY OF DIGITIZED GRAPHICS",
            excerpt: "A deep-dive into mimicking physical foil, metallic reflections, and natural lighting offsets programmatically inside a standard viewport."
        },
        ua: {
            date: "БЕРЕЗЕНЬ 2026",
            read: "4 ХВ ЧИТАННЯ",
            title: "WEBGL ТА ФІЗИЧНІСТЬ ОЦИФРОВАНОЇ ГРАФІКИ",
            excerpt: "Глибоке занурення в імітацію фізичної фольги, металевих відблисків та природного освітлення програмним шляхом у вікні звичайного браузера."
        }
    }
];

function initLanguageSystem() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Check saved preference
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'ua') {
        currentLanguage = 'ua';
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === 'ua') btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang === currentLanguage) return;

            currentLanguage = lang;
            localStorage.setItem('language', lang);
            
            // Toggle active classes
            langButtons.forEach(b => b.classList.toggle('active', b === btn));
            
            // Translate page content
            translatePage();
        });
    });

    translatePage(); // Run initial translations
}

function translatePage() {
    const dict = staticTranslations[currentLanguage];
    
    // 1. Translate static text with data-i18n
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (dict[key]) {
            elem.innerText = dict[key];
        }
    });

    // 2. Translate project items inside Selected Works overlay
    projectsData.forEach(project => {
        const titleElem = document.querySelector(`[data-project-title-id="${project.id}"]`);
        const catElem = document.querySelector(`[data-project-cat-id="${project.id}"]`);
        
        if (titleElem) titleElem.innerText = project[currentLanguage].title;
        if (catElem) catElem.innerText = project[currentLanguage].category;
    });

    // 3. Translate perspective essays inside Perspectives overlay
    perspectivesData.forEach(essay => {
        const dateElem = document.querySelector(`[data-post-date-id="${essay.id}"]`);
        const readElem = document.querySelector(`[data-post-read-id="${essay.id}"]`);
        const titleElem = document.querySelector(`[data-post-title-id="${essay.id}"]`);
        const excerptElem = document.querySelector(`[data-post-excerpt-id="${essay.id}"]`);
        const linkElem = document.querySelector(`[data-post-link-id="${essay.id}"]`);
        
        if (dateElem) dateElem.innerText = essay[currentLanguage].date;
        if (readElem) readElem.innerText = essay[currentLanguage].read;
        if (titleElem) titleElem.innerText = essay[currentLanguage].title;
        if (excerptElem) excerptElem.innerText = essay[currentLanguage].excerpt;
        if (linkElem) linkElem.innerText = currentLanguage === 'ua' ? 'ЧИТАТИ ЕСЕ →' : 'READ ESSAY →';
    });

    // 4. Update placeholder of form inputs if applicable (labels handle themselves)
    const emailTooltip = document.getElementById('email-copy');
    if (emailTooltip) {
        const tooltip = emailTooltip.querySelector('.tooltip');
        if (tooltip) tooltip.innerText = dict["email-tooltip"];
    }

    // 5. Update custom cursor VIEW text if it exists
    const cursor = document.getElementById('custom-cursor');
    if (cursor && document.body.classList.contains('project-hover')) {
        cursor.setAttribute('data-text', dict["view-btn"]);
    }
}

/* ----------------------------------------------------
   2. CUSTOM CURSOR
---------------------------------------------------- */
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('custom-cursor-dot');
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.12;
        cursorY += (mouseY - cursorY) * 0.12;
        
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(updateCursor);
    }
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });

    updateCursor();
}

/* ----------------------------------------------------
   3. IMAGE TRANSPARENCIFIER (RUNTIME BG REMOVAL)
---------------------------------------------------- */
function initImageTransparencifier() {
    const foilImg = document.getElementById('crumpled-foil');
    if (!foilImg) return;

    const img = new Image();
    img.src = foilImg.src;
    img.crossOrigin = "anonymous";

    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            const alpha = data[i+3];

            const maxColor = Math.max(r, g, b);
            const minColor = Math.min(r, g, b);
            
            if (maxColor > 220 && (maxColor - minColor) < 30) {
                const factor = Math.max(0, 1 - (maxColor - 220) / (255 - 220));
                data[i+3] = Math.min(alpha, factor * 255);
            }
        }

        ctx.putImageData(imageData, 0, 0);
        foilImg.src = canvas.toDataURL('image/png');
        foilImg.style.opacity = '1';
    };

    img.onerror = () => {
        foilImg.style.opacity = '1';
    };
}

/* ----------------------------------------------------
   4. PHYSICS CANVAS (INTERACTIVE PROJECTS / FLOATING DOTS)
---------------------------------------------------- */
let hoveredProject = null;

function initPhysicsCanvas() {
    const canvas = document.getElementById('physics-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let dots = [];
    let mouse = { x: -1000, y: -1000, radius: 180 };
    
    const springTension = 0.015;
    const friction = 0.2
    const repulsionStrength = 1.5;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    // Detect click events globally on window to trigger projects
    window.addEventListener('click', () => {
        if (hoveredProject !== null) {
            openProjectModal(hoveredProject);
        }
    });

    class Dot {
        constructor(baseX, baseY, projectId) {
            this.baseX = baseX;
            this.baseY = baseY;
            this.x = baseX;
            this.y = baseY;
            this.vx = 0;
            this.vy = 0;
            this.radius = 3.5; // Slightly larger for comfortable hovers
            this.projectId = projectId;
            this.isHovered = false;
        }

        update() {
            const dxHome = this.baseX - this.x;
            const dyHome = this.baseY - this.y;
            
            this.vx += dxHome * springTension;
            this.vy += dyHome * springTension;

            const dxMouse = this.x - mouse.x;
            const dyMouse = this.y - mouse.y;
            const dist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

            // Proximity Hover Detection
            // If cursor is within 15px, lock it as hovered and skip repulsion
            if (dist < 15) {
                this.isHovered = true;
                hoveredProject = this.projectId;
                
                // Slow down particle completely on hover
                this.vx = 0;
                this.vy = 0;
                this.x += (mouse.x - this.x) * 0.15;
                this.y += (mouse.y - this.y) * 0.15;
            } else {
                this.isHovered = false;
                
                // Apply normal physics if not hovered
                if (dist < mouse.radius && dist > 0) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const pushX = (dxMouse / dist) * force * repulsionStrength;
                    const pushY = (dyMouse / dist) * force * repulsionStrength;
                    
                    this.vx += pushX;
                    this.vy += pushY;
                }
                
                this.vx *= friction;
                this.vy *= friction;
                this.x += this.vx;
                this.y += this.vy;
            }
        }

        draw() {
            const color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.isHovered ? 6 : this.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = this.isHovered ? 12 : 4;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Draw technical HUD line if hovered
            if (this.isHovered) {
                const project = projectsData[this.projectId];
                const text = project[currentLanguage].title;
                const idxStr = `0${project.id + 1}/`;
                
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.5;
                ctx.setLineDash([2, 4]); // Technical dotted line
                
                // Draw dotted line extending horizontally to the right
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + 80, this.y);
                ctx.stroke();
                ctx.setLineDash([]); // Reset dash style
                
                // Draw technical callout text
                ctx.font = `500 9px 'JetBrains Mono', monospace`;
                ctx.fillStyle = color;
                ctx.fillText(`${idxStr} ${text.toUpperCase()}`, this.x + 88, this.y + 3);
            }
        }
    }

    function calculateGridIntersections() {
        dots = [];
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const padding = width * 0.04;
        const gridWidth = width - (padding * 2);
        const columnWidth = gridWidth / 12;

        const columns = [];
        for (let i = 0; i <= 12; i++) {
            columns.push(padding + i * columnWidth);
        }

        // Project dots (6 dots mapped to projects 0 to 6)
        const dotPlacements = [
            { col: 1, yFactor: 0.22, id: 0 },
            { col: 2, yFactor: 0.68, id: 1 },
            { col: 4, yFactor: 0.41, id: 2 },
            { col: 5, yFactor: 0.72, id: 3 },
            { col: 7, yFactor: 0.55, id: 4 },
            { col: 8, yFactor: 0.22, id: 5 },
            { col: 10, yFactor: 0.72, id: 6 }
        ];

        dotPlacements.forEach(placement => {
            if (placement.col < columns.length) {
                const x = columns[placement.col];
                const y = height * placement.yFactor;
                dots.push(new Dot(x, y, placement.id));
            }
        });
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        calculateGridIntersections();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Faint constellation lines
        ctx.lineWidth = 0.5;
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 320) {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = `rgba(0, 60, 255, ${Math.max(0, 0.05 * (1 - dist / 320))})`;
                    ctx.stroke();
                }
            }
        }

        // Draw and update dots
        hoveredProject = null; // Reset hovered state
        dots.forEach(dot => {
            dot.update();
            dot.draw();
        });

        // Trigger float card preview positioning
        updateFloatingPreview();

        requestAnimationFrame(animate);
    }

    // Custom helper to display float card alongside cursor
    const floatCard = document.getElementById('floating-project-preview');
    const floatImg = document.getElementById('preview-img');
    const floatNum = document.getElementById('preview-num');
    const floatTitle = document.getElementById('preview-title');

    let currentCardX = 0;
    let currentCardY = 0;

    function updateFloatingPreview() {
        if (hoveredProject !== null && floatCard) {
            const project = projectsData[hoveredProject];
            
            // Populate float preview data
            floatImg.src = project.image;
            floatNum.innerText = `0${project.id + 1}/`;
            floatTitle.innerText = project[currentLanguage].title;
            
            // Toggle states on body and card
            document.body.classList.add('project-hover');
               const cursor = document.getElementById('custom-cursor');
        if (cursor) {
            cursor.setAttribute(
                'data-text',
                staticTranslations[currentLanguage]["view-btn"]
            );
        }
            floatCard.classList.add('active');
            
            // Position card near mouse coordinate with spring lag
            currentCardX += (mouse.x - currentCardX) * 0.15;
            currentCardY += (mouse.y - currentCardY) * 0.15;
            
            floatCard.style.left = `${currentCardX}px`;
            floatCard.style.top = `${currentCardY}px`;
        } else if (floatCard) {
            document.body.classList.remove('project-hover');
            floatCard.classList.remove('active');
        }
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

/* ----------------------------------------------------
   5. PROJECT DETAILS MODAL
---------------------------------------------------- */
function openProjectModal(id) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const project = projectsData[id];
    
    // Populate Modal Content
    document.getElementById('modal-project-idx').innerText = `0${project.id + 1} / 0${projectsData.length}`;
    document.getElementById('modal-project-title').innerText = project[currentLanguage].title.toUpperCase();
    document.getElementById('modal-project-desc').innerText = project[currentLanguage].description;
    
    document.getElementById('modal-param-client').innerText = project[currentLanguage].client;
    document.getElementById('modal-param-services').innerText = project[currentLanguage].services;
    document.getElementById('modal-param-year').innerText = project.year;
    document.getElementById('modal-param-category').innerText = project[currentLanguage].category;
    
    // Prefer webp srcset if manifest is available, otherwise set original src
    const modalImgWrapper = document.querySelector('.modal-img-wrapper');
    if (modalImgWrapper) {
        fetch('assets/generated-webp/srcsets.json').then(r => r.json()).catch(() => null).then(manifest => {
            const src = project.image || '';
            const basename = src.split('/').pop();
            const entry = manifest && manifest[basename];
            if (entry && Array.isArray(entry.srcset) && entry.srcset.length) {
                // build picture element
                modalImgWrapper.innerHTML = '';
                const picture = document.createElement('picture');
                const source = document.createElement('source');
                source.type = 'image/webp';
                source.srcset = entry.srcset.join(', ');
                source.sizes = '(max-width: 1024px) 100vw, 580px';
                picture.appendChild(source);

                const img = document.createElement('img');
                img.id = 'modal-project-img';
                img.className = 'modal-main-img';
                img.alt = project[currentLanguage]?.title || project.en.title;
                img.src = entry.generated && entry.generated.length ? entry.generated[entry.generated.length-1] : src;
                picture.appendChild(img);

                modalImgWrapper.appendChild(picture);
            } else {
                // fallback to original single image
                const imgEl = document.getElementById('modal-project-img');
                if (imgEl) imgEl.src = project.image;
            }
        });
    }

    modal.classList.add('active');
    // Build gallery (thumbnails, lazy loading, lightbox)
    buildGalleryForProject(project);
    // Build vertical stacked high-res images (3-5) under the main visual
    buildStackedImages(project);
    
}

function initOverlays() {
    // Modal Close
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    
    const closeModal = () => {
        modal?.classList.remove('active');
    };
    
    closeBtn?.addEventListener('click', closeModal);

    // Selected Works Overlay
    const worksOverlay = document.getElementById('selected-works-overlay');
    const worksClose = document.getElementById('selected-works-close');
    const menuWorksLink = document.getElementById('menu-link-works');

    menuWorksLink?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu-overlay')?.classList.remove('active');
        worksOverlay?.classList.add('active');
    });

    worksClose?.addEventListener('click', () => {
        worksOverlay?.classList.remove('active');
    });

    // Link items inside Selected Works grid directly to project modals
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('click', () => {
            const pId = parseInt(item.getAttribute('data-project-id'));
            worksOverlay?.classList.remove('active');
            setTimeout(() => openProjectModal(pId), 400);
        });
    });

    // Perspectives Overlay
    const perspectivesOverlay = document.getElementById('perspectives-overlay');
    const perspectivesClose = document.getElementById('perspectives-close');
    const menuPerspectivesLink = document.getElementById('menu-link-perspectives');

    menuPerspectivesLink?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu-overlay')?.classList.remove('active');
        perspectivesOverlay?.classList.add('active');
    });

    perspectivesClose?.addEventListener('click', () => {
        perspectivesOverlay?.classList.remove('active');
    });

    // Index Link - closes menu, returns home
    const menuIndexLink = document.getElementById('menu-link-index');
    menuIndexLink?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu-overlay')?.classList.remove('active');
        worksOverlay?.classList.remove('active');
        perspectivesOverlay?.classList.remove('active');
    });
}

/* ----------------------------------------------------
   X. PROJECT GALLERY, LAZY LOAD, LIGHTBOX
---------------------------------------------------- */
function initProjectGallery() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    const visualsCol = modal.querySelector('.modal-visuals-col');
    if (!visualsCol) return;

    // If the gallery scaffolding is already present, do nothing — buildGalleryForProject runs on modal open
    if (!visualsCol.querySelector('.project-gallery')) return;
}

function buildGalleryForProject(project) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    const thumbnails = modal.querySelector('.thumbnails');
    const viewport = modal.querySelector('.gallery-viewport');
    if (!thumbnails || !viewport) return;

    thumbnails.innerHTML = ''; // clear previous

    const items = project.gallery && project.gallery.length ? project.gallery : [{ src: project.image, caption: project[currentLanguage]?.title || '' }];

    // If only the main image exists, avoid duplicating it in the thumbnails stack
    if (items.length === 1) {
        thumbnails.innerHTML = '';
    } else {
        items.forEach((it, idx) => {
            const figure = document.createElement('figure');
            figure.className = 'thumb-figure';
            figure.setAttribute('data-index', idx);
            figure.setAttribute('aria-label', (it.caption || `Image ${idx+1}`));

            // Use a picture/img for responsive and lazy loading; data-src used for lazy loader
            figure.innerHTML = `
                <picture>
                    <img data-src="${it.src}" alt="${(it.caption || project[currentLanguage]?.title || '')}" loading="lazy" class="thumb-img vertical-img">
                </picture>
            `;

            thumbnails.appendChild(figure);
        });
    }

    // Log how many images are available for this project
    const stackedCount = items.length;
    console.info(`Project ${project.id} gallery images: ${stackedCount}`);

    setupLazyLoading(modal);

    // Reveal animation for vertical thumbnails
    const thumbObserver = ('IntersectionObserver' in window) ? new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.02 }) : null;
    thumbnails.querySelectorAll('figure, .thumb-btn').forEach(el => { if (thumbObserver) thumbObserver.observe(el); });

}

function setupLazyLoading(root, options = {}) {
    const imgs = root.querySelectorAll('img[data-src]');
    const rootEl = options.rootEl || root.querySelector('.gallery-viewport') || null;
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    obs.unobserve(img);
                }
            });
        }, { root: rootEl, rootMargin: options.rootMargin || '200px', threshold: options.threshold || 0.01 });
        imgs.forEach(i => io.observe(i));
    } else {
        imgs.forEach(img => { img.src = img.getAttribute('data-src'); img.removeAttribute('data-src'); img.classList.add('loaded'); });
    }
}

// Stacked vertical images (3-5) below main visual — disabled to avoid duplicate gallery
function buildStackedImages(project) {
    const container = document.getElementById('stacked-images');
    if (!container) return;
    // Clear out stacked-images; primary vertical gallery is served by the main project gallery (.thumbnails)
    container.innerHTML = '';
    container.style.display = 'none';
}


/* ----------------------------------------------------
   6. 3D PARALLAX TILT EFFECT
---------------------------------------------------- */
function init3DParallax() {
    const container = document.getElementById('parallax-container');
    const shadow = container?.querySelector('.glow-shadow');
    
    if (!container) return;

    let targetRotateX = 0;
    let targetRotateY = 0;
    let targetTranslateX = 0;
    let targetTranslateY = 0;
    
    let currentRotateX = 0;
    let currentRotateY = 0;
    let currentTranslateX = 0;
    let currentTranslateY = 0;

    window.addEventListener('mousemove', (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const normX = (e.clientX / width) - 0.5;
        const normY = (e.clientY / height) - 0.5;

        targetRotateX = -normY * 25;
        targetRotateY = normX * 25;
        targetTranslateX = normX * 30;
        targetTranslateY = normY * 30;
    });

    document.addEventListener('mouseleave', () => {
        targetRotateX = 0;
        targetRotateY = 0;
        targetTranslateX = 0;
        targetTranslateY = 0;
    });

    function renderTilt() {
        currentRotateX += (targetRotateX - currentRotateX) * 0.08;
        currentRotateY += (targetRotateY - currentRotateY) * 0.08;
        currentTranslateX += (targetTranslateX - currentTranslateX) * 0.08;
        currentTranslateY += (targetTranslateY - currentTranslateY) * 0.08;

        container.style.transform = `
            rotateX(${currentRotateX}deg) 
            rotateY(${currentRotateY}deg) 
            translateX(${currentTranslateX}px) 
            translateY(${currentTranslateY}px)
        `;
        
        if (shadow) {
            shadow.style.transform = `
                translateZ(-1px)
                translateX(${-currentTranslateX * 0.5}px)
                translateY(${-currentTranslateY * 0.5}px)
            `;
        }

        requestAnimationFrame(renderTilt);
    }

    renderTilt();
}

/* ----------------------------------------------------
   7. THEME TOGGLE (LIGHT / DARK)
---------------------------------------------------- */
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }

    toggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        
        const cursor = document.getElementById('custom-cursor');
        if (cursor) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            setTimeout(() => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 200);
        }
    });
}

/* ----------------------------------------------------
   8. NAVIGATION MENU (KYIV LOCAL TIME SOURCE)
---------------------------------------------------- */
function initNavigationMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');
    const timeDisplay = document.getElementById('local-time');
    
    if (!menuToggle || !menuOverlay) return;

    let timeInterval;

    function updateTime() {
        const options = {
            timeZone: 'Europe/Kyiv',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        timeDisplay.textContent = `KYIV ${formatter.format(new Date())}`;
    }

    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        updateTime();
        timeInterval = setInterval(updateTime, 1000);
    });

    const closeMenu = () => {
        menuOverlay.classList.remove('active');
        clearInterval(timeInterval);
    };

    if (menuClose) menuClose.addEventListener('click', closeMenu);
}

/* ----------------------------------------------------
   9. CONTACT PANEL SLIDE-OUT
---------------------------------------------------- */
function initContactPanel() {
    const startBtn = document.getElementById('start-project-btn');
    const panel = document.getElementById('contact-panel');
    const closeBtn = document.getElementById('panel-close');
    const backdrop = document.getElementById('panel-backdrop');
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success-message');
    const menuContactLink = document.getElementById('menu-link-contact');

    if (!startBtn || !panel || !backdrop) return;

    const openPanel = () => {
        panel.classList.add('active');
        backdrop.classList.add('active');
    };

    const closePanel = () => {
        panel.classList.remove('active');
        backdrop.classList.remove('active');
        
        setTimeout(() => {
            form.style.display = 'flex';
            successMsg.style.display = 'none';
            form.reset();
        }, 600);
    };

    startBtn.addEventListener('click', openPanel);
    
    // Connect menu overlay contact link
    menuContactLink?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu-overlay')?.classList.remove('active');
        setTimeout(openPanel, 400);
    });

    closeBtn?.addEventListener('click', closePanel);
    backdrop.addEventListener('click', closePanel);

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn');
        const isUa = (currentLanguage === 'ua');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>${isUa ? 'НАДСИЛАННЯ...' : 'SENDING...'}</span>`;

        setTimeout(() => {
            form.style.display = 'none';
            successMsg.style.display = 'flex';
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>${isUa ? 'НАДІСЛАТИ' : 'SENDING INQUIRY'}</span>`;
            
            setTimeout(closePanel, 3500);
        }, 1500);
    });
}

/* ----------------------------------------------------
   10. INTERACTIVE HOVER UTILITIES
---------------------------------------------------- */
function initInteractiveHovers() {
    const clickables = document.querySelectorAll('button, a, .header-logo, .hero-name, .work-item');
    clickables.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            document.body.classList.add('clickable-hover');
        });
        elem.addEventListener('mouseleave', () => {
            document.body.classList.remove('clickable-hover');
        });
    });

    const emailCopy = document.getElementById('email-copy');
    if (emailCopy) {
        emailCopy.addEventListener('mouseenter', () => {
            document.body.classList.add('copyable-hover');
        });
        emailCopy.addEventListener('mouseleave', () => {
            document.body.classList.remove('copyable-hover');
        });

        emailCopy.addEventListener('click', () => {
            const email = emailCopy.getAttribute('data-email');
            const tooltip = emailCopy.querySelector('.tooltip');
            
            navigator.clipboard.writeText(email).then(() => {
                if (tooltip) {
                    const originalText = tooltip.textContent;
                    tooltip.textContent = staticTranslations[currentLanguage]["copied"];
                    tooltip.style.color = '#00ff66';
                    
                    setTimeout(() => {
                        tooltip.textContent = staticTranslations[currentLanguage]["email-tooltip"];
                        tooltip.style.color = '';
                    }, 2000);
                }
            });
        });
    }
}
