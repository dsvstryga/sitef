document.addEventListener('DOMContentLoaded', () => {
    // 1. Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const menuList = document.querySelector('.menu-list');

    if (burgerMenu && menuList) {
        burgerMenu.addEventListener('click', () => {
            menuList.classList.toggle('active');
            burgerMenu.querySelector('i').classList.toggle('fa-bars');
            burgerMenu.querySelector('i').classList.toggle('fa-times');
        });

        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (menuList.classList.contains('active')) {
                    menuList.classList.remove('active');
                    burgerMenu.querySelector('i').classList.remove('fa-times');
                    burgerMenu.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Слайдер
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const sliderDotsContainer = document.querySelector('.slider-dots');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function updateSlider() {
        if (sliderWrapper) { // Додана перевірка на існування елемента
            sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
        resetSlideInterval();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
        resetSlideInterval();
    }

    function createDots() {
        if (!sliderDotsContainer) return;
        sliderDotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.slideIndex = i;
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateSlider();
                resetSlideInterval();
            });
            sliderDotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.slider-dots .dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    if (sliderWrapper && slides.length > 0 && prevButton && nextButton) { // Додана перевірка на існування всіх елементів слайдера
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        createDots();
        updateSlider();
        startSlideShow();
    }


    // 3. Вивід 10 головних новин порталу (Без змін)
    const newsGrid = document.querySelector('.news-grid');

    const newsData = [
      {
        id: 1,
        title: "Цікаві факти про технології, що змінюють наше життя",
        image: "https://fact-news.com.ua/wp-content/uploads/1-231.jpg",
        description: "Цікаві факти про технології розкривають перед нами безмежний потенціал інновацій. Наприклад, впровадження штучного інтелекту в медицину дозволяє діагностувати захворювання на ранніх стадіях і розробляти ефективні ліки. Розробка еко-технологій допомагає зберігати навколишнє середовище і зменшує негативний вплив на природу. Технології у сфері розваг створюють нові можливості для творчого самовираження і розвитку.",
        link: "https://fact-news.com.ua/tsikavi-fakti-pro-texnologii-sho-zminyuyut-nashe-zhittya/"
      },
      {
        id: 2,
        title: "ВІЛ-терапія, дрони та роботаксі: які технології змінять світ і життя людства вже у 2025 році",
        image: "https://24tv.ua/resources/photos/news/202503/2785708_17230389.jpg?v=1743084109000&w=5760&h=3201&fit=cover&output=webp",
        description: "MIT Technology Review опублікував список проривних технологій 2025 року, які можуть суттєво вплинути на світ, зокрема ВІЛ-терапію, роботаксі та екологічну сталь.",
        link: "https://24tv.ua/prorivni-tehnologiyi-2025-roku-shho-zminit-svit-tsogo-roku_n2785708"
      },
      {
        id: 3,
        title: "Google Beam представляє футуристичні 3D-відеодзвінки — з голосовим перекладом",
        image: "https://itc.ua/wp-content/uploads/2025/05/Google-Beam-IO-2025-stage-835x470.jpg",
        description: "Кілька років тому Google представив Project Starline, експеримент з переосмислення відеодзвінків. Він трансформувався у в «нову платформу 3D-комунікацій» Google Beam.Технологія Beam реалістично імітує об’ємний вигляд співрозмовників один для одного. Вона використовує шість камер для знімання людини з різних ракурсів з частотою 60 кадрів в секунду, та за допомогою штучного інтелекту Google створює її 3D-образ в реальному часі.",
        link: "https://itc.ua/ua/novini/google-beam-predstavlyaye-futurystychni-3d-videodzvinky-z-golosovym-perekladom/"
      },
      {
        id: 4,
        title: "Вітрогенератор без обертових частин виробляє енергію за допомогою п’єзоелектрики",
        image: "https://itc.ua/wp-content/uploads/2025/05/power-out-of-thin-air-835x385.jpg",
        description: "Дослідники з Індії створили простий вітрогенератор з гнучкого полімерного листа з п’єзоелектричними елементами.У своїй роботі науковці з Індійського інституту технологій у Мумбаї прикріпили гнучку пластину з п’єзоелектричним листом до зовнішньої сторони циліндру, що обдувався повітрям. Вітер змушував пластину майоріти наче прапор.",
        link: "https://itc.ua/ua/novini/vitrogenerator-bez-obertovyh-chastyn-vyroblyaye-energiyu-za-dopomogoyu-p-yezoelektryky/"
      },
      {
        id: 5,
        title: "Виробник принтерів Procolored за $6000 заражав системи їхніх користувачів шкідливим ПЗ",
        image: "https://itc.ua/wp-content/uploads/2025/05/P13-kv-pc_e3dd20c8-a2ae-4f64-afcf-448b96635f7d_3840x_crop_center_edited-835x493.jpeg",
        description: "У наш час ми звикли, що навіть найдорожчі пристрої можуть часом мати недоліки — але рідко хто очікує, що професійний принтер за кілька тисяч доларів принесе із собою небезпечне шкідливе ПЗ. Проте саме це сталося з клієнтами бренду Procolored, який спеціалізується на принтерах прямого друку для футболок та іншої сувенірної продукції. І ця історія — дуже показова.",
        link: "https://itc.ua/ua/novini/vyrobnyk-prynteriv-procolored-za-6000-kilka-misyatsiv-goduvav-yihnih-vlasnykiv-shkidlyvym-pz/"
      },
      {
        id: 6,
        title: "Google запустив ультра-передплату на ШІ за $250 на місяць — 30 ТБ сховища і YouTube Premium на додачу",
        image: "https://itc.ua/wp-content/uploads/2025/05/google-ai-ultra_8f12a4-835x433.webp",
        description: "Google переплюнув за цінами на ШІ всіх найближчих конкурентів із запуском нової передплати AI Ultra, яка обійдеться у $250 на місяць; натомість попередній преміальний тариф «AI Premium» перейменовують на «Google AI Pro» зі збереженою ціною у $20.",
        link: "https://itc.ua/ua/novini/google-zapustyv-ultra-peredplatu-na-shi-za-250-na-misyats-30-tb-shovyshha-i-youtube-premium-na-dodachu/"
      },
      {
        id: 7,
        title: "Google створив «ШІ-примірку» одягу в онлайні — просто у результатах пошуку",
        image: "https://itc.ua/wp-content/uploads/2025/05/Google-Try-it-On-with-background-convert.io_-835x456.jpg",
        description: "Google анонсував нову функцію — тепер можна не гадати, як виглядаєш в одязі, а віртуально його «приміряти». Від користувача просять лише одне — фото в повний зріст. Для українських користувачів є нюанс, бо функція в Search Labs поки що доступна лише для мешканців США. Швидше за все, якщо вона буде мати популярність, то з часом збільшить географічне охоплення. Наразі функція показує, як «сидять» штани, сорочки, сукні та спідниці.",
        link: "https://itc.ua/ua/novini/google-stvoryv-shi-prymirku-odyagu-v-onlajni-prosto-u-rezultatah-poshuku/"
      },
      {
        id: 8,
        title: "Найменшу у світі напівпровідникову структуру використали для отримання «чистого» водню",
        image: "https://itc.ua/wp-content/uploads/2025/05/1b8fbe61f43fca709e9207b61a610edd-835x557.jpg",
        description: "Науковці з Південної Кореї вперше в історії отримали екологічно чистий водень, використавши надмалий, квантовий напівпровідниковий матеріал у якості фотоелектроду.Зазначається, що дослідники з Інституту науки та технологій Тегу Кенбук, Університету Ханьян та Корейського університету вперше використали крихітний матеріал розміром усього у 26 атомів для проведення ефективного і стабільного фотокаталізу у воді. Матеріал складається з селеніду кадмію (CdSe₁₃), що належить до напівпровідників групи II-VI, а його розміри складають менше одного нанометра.",
        link: "https://itc.ua/ua/novini/najmenshu-u-sviti-napivprovidnykovu-strukturu-vykorystaly-dlya-otrymannya-chystogo-vodnyu/"
      },
      {
        id: 9,
        title: "Аудіокодеки простими словами, або як отримати максимум від своїх Bluetooth навушників",
        image: "https://itc.ua/wp-content/uploads/2025/05/67b2ab8b-32f7-4f36-a5a3-e73e4942cf6f-835x470.png",
        description: "Під час купівлі нових бездротових навушників в таблиці характеристик вказуються невідомі для багатьох абревіатури. Наприклад, AAC або aptX. Вони потрібні для передачі звуку «по повітрю» з вашого смартфона чи ноутбука в потенційні навушники",
        link: "https://itc.ua/ua/articles/znajomymosya-z-bluetooth-audiokodekamy-dlya-bezprovidnyh-navushnykiv/"
      },
      {
        id: 10,
        title: "Google Meet навчився перекладати голос — і звучати, як ви",
        image: "https://itc.ua/wp-content/uploads/2025/05/google-meet-translate_185f9d-835x561.webp",
        description: "Світ месенджерів динамічно змінюється. В той час як Microsoft виводить з ринку Skype, Google продовжує активно розвивати Meet та додавати в нього нові функції. Під час проведення конференції Google I/O пошуковий гігант представив нову можливість в Meet – під час відеодзвінків сервіс здатен автоматично перекладати вашу мову іншою мовою. При цьому зберігаються звучання вашого голосу, інтонації та емоції.",
        link: "https://itc.ua/ua/novini/google-meet-navchyvsya-perekladaty-golos-i-zvuchaty-yak-vy/"
      }
    ];

    function displayNews() {
        if (!newsGrid) return;
        newsGrid.innerHTML = '';

        newsData.forEach((news, index) => {
            const newsItem = document.createElement('article');
            newsItem.classList.add('news-item', 'animate-on-scroll');
            newsItem.style.animationDelay = `${index * 0.1}s`;

            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                    <a href="${news.link}" class="read-more">Читати далі</a>
                </div>
            `;
            newsGrid.appendChild(newsItem);
        });
    }

    displayNews();

    // 4. Анімація при прокрутці (Без змін)
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        observer.observe(el);
    });

    setTimeout(() => {
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('in-view');
            }
        });
    }, 100);

    // 5. Перемикач теми та зміна логотипу
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    const siteLogo = document.getElementById('site-logo'); // Отримуємо елемент логотипу

    // Шляхи до логотипів
    const logoLightPath = 'images/logow.png';
    const logoDarkPath = 'images/logow.png';

    // Функція для встановлення теми та логотипу
    function setAndSaveTheme(theme) {
        if (theme === 'dark-theme') {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            if (siteLogo) siteLogo.src = logoDarkPath; // Змінюємо логотип на темний
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            if (siteLogo) siteLogo.src = logoLightPath; // Змінюємо логотип на світлий
        }
    }

    // Перевіряємо збережену тему в localStorage при завантаженні сторінки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setAndSaveTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Якщо немає збереженої теми, перевіряємо системні налаштування
        setAndSaveTheme('dark-theme');
    } else {
        // За замовчуванням встановлюємо світлу тему, якщо нічого не знайдено
        setAndSaveTheme('light-theme');
    }


    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            setAndSaveTheme('light-theme');
        } else {
            setAndSaveTheme('dark-theme');
        }
    });
});
