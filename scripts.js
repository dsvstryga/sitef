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
            title: "Унікальне дослідження: Вплив клімату на міграцію птахів",
            image: "images/news1.jpg",
            description: "Вчені опублікували результати багаторічного дослідження, яке розкриває нові аспекти впливу глобальних кліматичних змін на міграційні шляхи та поведінку птахів...",
            link: "#"
        },
        {
            id: 2,
            title: "Інновації в робототехніці: Представлено новий покоління автономних дронів",
            image: "images/news2.jpg",
            description: "На щорічній конференції з технологій було презентовано передові розробки в галузі автономних літальних апаратів, що відкривають нові можливості для логістики та моніторингу...",
            link: "#"
        },
        {
            id: 3,
            title: "Економічні прогнози: Очікуване зростання IT-сектору в наступному році",
            image: "images/news3.jpg",
            description: "Аналітики прогнозують значне зростання українського IT-ринку, що обумовлено збільшенням інвестицій та розвитком нових технологій...",
            link: "#"
        },
        {
            id: 4,
            title: "Культурні події: Відкриття міжнародного фестивалю сучасної скульптури",
            image: "images/news4.jpg",
            description: "У столиці стартував масштабний фестиваль, що зібрав митців з усього світу, які представили свої унікальні роботи, виконані в різних стилях...",
            link: "#"
        },
        {
            id: 5,
            title: "Здоров'я та наука: Прорив у розробці нової вакцини",
            image: "images/news5.jpg",
            description: "Команда вчених з університету досягла значного прогресу у створенні ефективної вакцини проти поширеного вірусного захворювання...",
            link: "#"
        },
        {
            id: 6,
            title: "Спорт: Українські спортсмени завоювали медалі на світовому чемпіонаті",
            image: "images/news6.jpg",
            description: "Наші атлети блискуче виступили на міжнародних змаганнях, продемонструвавши високий рівень майстерності та командного духу...",
            link: "#"
        },
        {
            id: 7,
            title: "Екологія: Нова програма по очищенню річок та озер",
            image: "images/news7.jpg",
            description: "Уряд анонсував запуск національної програми, спрямованої на покращення екологічного стану водних ресурсів країни...",
            link: "#"
        },
        {
            id: 8,
            title: "Технології: Штучний інтелект у медицині: нові горизонти",
            image: "images/news8.jpg",
            description: "Дослідники обговорюють перспективи використання ШІ для діагностики захворювань та персоналізованого лікування...",
            link: "#"
        },
        {
            id: 9,
            title: "Соціальні ініціативи: Проект підтримки молодих підприємців",
            image: "images/news9.jpg",
            description: "Запущено грантову програму, що надасть фінансову та менторську підтримку стартапам з інноваційними ідеями...",
            link: "#"
        },
        {
            id: 10,
            title: "Освіта: Реформи у шкільній програмі: що зміниться для учнів",
            image: "images/news10.jpg",
            description: "Міністерство освіти презентувало оновлення навчальних планів, що мають на меті підвищити якість середньої освіти...",
            link: "#"
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
    const logoLightPath = 'images/logo-light.png';
    const logoDarkPath = 'images/logo-dark.png';

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
