
(() => {
    'use strict';

    const carousel = document.getElementById('programCarousel');

    if (!carousel) return;

    const WHATSAPP_NUMBER = '258845441607';

    const translations = {
        en: {
            kicker: 'COURSE DETAILS',
            chooseLevel: 'Choose your English level',
            duration: 'Course duration',
            durationValue: '3 months',
            frequency: 'Lessons per week',
            frequencyValue: '3 lessons',
            currency: 'Select your currency',
            price: 'Course price',
            priceValue: 'Price details coming soon',
            contact: 'Ask about this course',
            close: 'Close',
            levelNames: {
                A1: 'Beginner',
                A2: 'Elementary',
                B1: 'Intermediate',
                B2: 'Upper-intermediate',
                C1: 'Advanced'
            },
            descriptions: {
                A1: 'Learn basic words and expressions, introduce yourself, ask and answer simple questions, and communicate in familiar everyday situations.',
                A2: 'Talk about familiar topics, describe your background and routine, and handle simple everyday exchanges with greater confidence.',
                B1: 'Understand the main points of clear conversations, deal with common travel situations, and express opinions and experiences.',
                B2: 'Communicate fluently with greater independence, discuss complex topics, and explain your opinions with supporting details.',
                C1: 'Use English flexibly and effectively in academic, professional and social contexts, understanding demanding texts and expressing ideas fluently.'
            }
        },

        pt: {
            kicker: 'DETALHES DO CURSO',
            chooseLevel: 'Escolha o seu nível de inglês',
            duration: 'Duração do curso',
            durationValue: '3 meses',
            frequency: 'Aulas por semana',
            frequencyValue: '3 aulas',
            currency: 'Selecione a sua moeda',
            price: 'Preço do curso',
            priceValue: 'Detalhes do preço em breve',
            contact: 'Perguntar sobre este curso',
            close: 'Fechar',
            levelNames: {
                A1: 'Iniciante',
                A2: 'Elementar',
                B1: 'Intermédio',
                B2: 'Intermédio superior',
                C1: 'Avançado'
            },
            descriptions: {
                A1: 'Aprenda palavras e expressões básicas, apresente-se, faça e responda a perguntas simples e comunique em situações do dia a dia.',
                A2: 'Converse sobre assuntos familiares, descreva a sua rotina e experiência e participe em conversas simples com mais confiança.',
                B1: 'Compreenda os pontos principais de conversas claras, resolva situações comuns de viagem e expresse opiniões e experiências.',
                B2: 'Comunique com fluência e independência, discuta assuntos complexos e explique as suas opiniões com argumentos.',
                C1: 'Utilize o inglês com flexibilidade em contextos académicos, profissionais e sociais, compreendendo textos exigentes e expressando ideias com fluência.'
            }
        },

        es: {
            kicker: 'DETALLES DEL CURSO',
            chooseLevel: 'Elige tu nivel de inglés',
            duration: 'Duración del curso',
            durationValue: '3 meses',
            frequency: 'Clases por semana',
            frequencyValue: '3 clases',
            currency: 'Selecciona tu moneda',
            price: 'Precio del curso',
            priceValue: 'Detalles del precio próximamente',
            contact: 'Consultar sobre este curso',
            close: 'Cerrar',
            levelNames: {
                A1: 'Principiante',
                A2: 'Elemental',
                B1: 'Intermedio',
                B2: 'Intermedio alto',
                C1: 'Avanzado'
            },
            descriptions: {
                A1: 'Aprende palabras y expresiones básicas, preséntate, haz y responde preguntas sencillas y comunícate en situaciones cotidianas.',
                A2: 'Habla sobre temas conocidos, describe tu rutina y experiencia y participa en conversaciones sencillas con mayor confianza.',
                B1: 'Comprende los puntos principales de conversaciones claras, resuelve situaciones comunes de viaje y expresa opiniones y experiencias.',
                B2: 'Comunícate con fluidez e independencia, debate temas complejos y explica tus opiniones con argumentos.',
                C1: 'Utiliza el inglés con flexibilidad en contextos académicos, profesionales y sociales, comprendiendo textos exigentes y expresando ideas con fluidez.'
            }
        },

        fr: {
            kicker: 'DÉTAILS DU COURS',
            chooseLevel: 'Choisissez votre niveau d’anglais',
            duration: 'Durée du cours',
            durationValue: '3 mois',
            frequency: 'Cours par semaine',
            frequencyValue: '3 cours',
            currency: 'Choisissez votre devise',
            price: 'Prix du cours',
            priceValue: 'Informations sur le prix bientôt disponibles',
            contact: 'Demander des informations',
            close: 'Fermer',
            levelNames: {
                A1: 'Débutant',
                A2: 'Élémentaire',
                B1: 'Intermédiaire',
                B2: 'Intermédiaire supérieur',
                C1: 'Avancé'
            },
            descriptions: {
                A1: 'Apprenez des mots et expressions de base, présentez-vous, posez et répondez à des questions simples et communiquez dans des situations quotidiennes.',
                A2: 'Parlez de sujets familiers, décrivez votre routine et votre expérience et participez à des conversations simples avec plus d’assurance.',
                B1: 'Comprenez les points principaux des conversations claires, gérez des situations de voyage courantes et exprimez vos opinions et expériences.',
                B2: 'Communiquez avec aisance et autonomie, discutez de sujets complexes et expliquez vos opinions avec des arguments.',
                C1: 'Utilisez l’anglais avec souplesse dans des contextes académiques, professionnels et sociaux, en comprenant des textes exigeants et en exprimant vos idées avec aisance.'
            }
        },

        ru: {
            kicker: 'ИНФОРМАЦИЯ О КУРСЕ',
            chooseLevel: 'Выберите свой уровень английского',
            duration: 'Продолжительность курса',
            durationValue: '3 месяца',
            frequency: 'Занятий в неделю',
            frequencyValue: '3 занятия',
            currency: 'Выберите валюту',
            price: 'Стоимость курса',
            priceValue: 'Информация о цене скоро появится',
            contact: 'Узнать об этом курсе',
            close: 'Закрыть',
            levelNames: {
                A1: 'Начальный',
                A2: 'Элементарный',
                B1: 'Средний',
                B2: 'Выше среднего',
                C1: 'Продвинутый'
            },
            descriptions: {
                A1: 'Изучайте базовые слова и выражения, учитесь представляться, задавать простые вопросы и общаться в повседневных ситуациях.',
                A2: 'Общайтесь на знакомые темы, описывайте свой распорядок дня и опыт, увереннее участвуйте в простых разговорах.',
                B1: 'Понимайте основные идеи разговоров, справляйтесь с типичными ситуациями в путешествиях и выражайте своё мнение.',
                B2: 'Общайтесь свободнее и самостоятельнее, обсуждайте сложные темы и аргументированно выражайте свою точку зрения.',
                C1: 'Гибко используйте английский в учебной, профессиональной и социальной среде, понимая сложные тексты и свободно выражая свои мысли.'
            }
        }
    };

    const currencies = [
        ['MZN', '🇲🇿 MZN — Metical'],
        ['ZAR', '🇿🇦 ZAR — Rand'],
        ['AOA', '🇦🇴 AOA — Kwanza'],
        ['USD', '🇺🇸 USD — US Dollar'],
        ['EUR', '🇪🇺 EUR — Euro'],
        ['GBP', '🇬🇧 GBP — Pound Sterling'],
        ['BRL', '🇧🇷 BRL — Brazilian Real'],
        ['NGN', '🇳🇬 NGN — Naira'],
        ['KES', '🇰🇪 KES — Kenyan Shilling'],
        ['TZS', '🇹🇿 TZS — Tanzanian Shilling'],
        ['XOF', '🌍 XOF — West African CFA Franc'],
        ['INR', '🇮🇳 INR — Indian Rupee'],
        ['CNY', '🇨🇳 CNY — Chinese Yuan'],
        ['RUB', '🇷🇺 RUB — Russian Ruble']
    ];

    function getLanguage() {
        const language = window.getLinkEnglishLanguage
            ? window.getLinkEnglishLanguage()
            : document.documentElement.lang;

        return translations[language] ? language : 'en';
    }

    function detectCurrency() {
        let region = '';

        try {
            const locale = new Intl.Locale(
                Intl.DateTimeFormat().resolvedOptions().locale ||
                navigator.language
            );

            region = locale.region || '';
        } catch (error) {
            region = '';
        }

        const regionCurrencies = {
            MZ: 'MZN',
            ZA: 'ZAR',
            AO: 'AOA',
            US: 'USD',
            GB: 'GBP',
            PT: 'EUR',
            FR: 'EUR',
            DE: 'EUR',
            ES: 'EUR',
            IT: 'EUR',
            BR: 'BRL',
            NG: 'NGN',
            KE: 'KES',
            TZ: 'TZS',
            RU: 'RUB',
            IN: 'INR',
            CN: 'CNY'
        };

        return regionCurrencies[region] || 'MZN';
    }

    const savedCurrency = localStorage.getItem('linkEnglishPaymentCurrency');
    const initialCurrency = currencies.some(item => item[0] === savedCurrency)
        ? savedCurrency
        : detectCurrency();

    let selectedCurrency = initialCurrency;
    let selectedLevel = 'A1';
    let activeCard = null;
    let lastFocusedElement = null;

    const overlay = document.createElement('div');
    overlay.className = 'course-details-overlay';
    overlay.hidden = true;

    overlay.innerHTML = `
        <div class="course-details-modal"
             role="dialog"
             aria-modal="true"
             aria-labelledby="courseDetailsTitle">

            <button class="course-details-close"
                    type="button"
                    aria-label="Close">×</button>

            <div class="course-details-kicker" id="courseDetailsKicker"></div>

            <h2 id="courseDetailsTitle"></h2>

            <p class="course-details-description"
               id="courseDetailsDescription"></p>

            <div class="course-details-levels" id="courseDetailsLevels">
                <span class="course-details-label"
                      id="courseDetailsLevelLabel"></span>
                <div class="course-level-buttons"
                     id="courseLevelButtons"></div>
            </div>

            <div class="course-details-info">
                <div class="course-info-item">
                    <span id="courseDurationLabel"></span>
                    <strong id="courseDurationValue"></strong>
                </div>

                <div class="course-info-item">
                    <span id="courseFrequencyLabel"></span>
                    <strong id="courseFrequencyValue"></strong>
                </div>
            </div>

            <div class="course-details-currency">
                <label class="course-details-label"
                       id="courseCurrencyLabel"
                       for="courseCurrencySelect"></label>

                <select id="courseCurrencySelect"></select>
            </div>

            <div class="course-details-price">
                <span id="coursePriceLabel"></span>
                <strong id="coursePriceValue"></strong>
            </div>

            <a class="course-details-action"
               id="courseDetailsContact"
               href="#"
               target="_blank"
               rel="noopener noreferrer">
            </a>
        </div>
    `;

    document.body.appendChild(overlay);

    const modal = overlay.querySelector('.course-details-modal');
    const closeButton = overlay.querySelector('.course-details-close');
    const currencySelect = overlay.querySelector('#courseCurrencySelect');

    currencies.forEach(([code, label]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = label;
        currencySelect.appendChild(option);
    });

    currencySelect.value = selectedCurrency;

    function updateLanguage() {
        const language = getLanguage();
        const t = translations[language];

        overlay.querySelector('#courseDetailsKicker').textContent = t.kicker;
        overlay.querySelector('#courseDetailsLevelLabel').textContent = t.chooseLevel;
        overlay.querySelector('#courseDurationLabel').textContent = t.duration;
        overlay.querySelector('#courseDurationValue').textContent = t.durationValue;
        overlay.querySelector('#courseFrequencyLabel').textContent = t.frequency;
        overlay.querySelector('#courseFrequencyValue').textContent = t.frequencyValue;
        overlay.querySelector('#courseCurrencyLabel').textContent = t.currency;
        overlay.querySelector('#coursePriceLabel').textContent = t.price;
        overlay.querySelector('#coursePriceValue').textContent = t.priceValue;
        closeButton.setAttribute('aria-label', t.close);

        overlay.querySelector('#courseDetailsContact').textContent =
            t.contact + ' ↗';

        if (activeCard) {
            updateCourseDetails();
        }
    }

    function updateCourseDetails() {
        if (!activeCard) return;

        const language = getLanguage();
        const t = translations[language];

        const title = activeCard.querySelector('.course-copy h3');
        const description = activeCard.querySelector('.course-copy p');
        const levelElement = activeCard.querySelector('.course-visual span');

        const isGeneral = activeCard.classList.contains('course-general');

        const courseTitle = title
            ? title.textContent.trim()
            : 'English Course';

        overlay.querySelector('#courseDetailsTitle').textContent =
            isGeneral
                ? `${courseTitle} — ${selectedLevel}`
                : courseTitle;

        const descriptionElement =
            overlay.querySelector('#courseDetailsDescription');

        if (isGeneral) {
            descriptionElement.textContent =
                t.descriptions[selectedLevel];

            overlay.querySelector('#courseDetailsLevels').hidden = false;

            renderLevelButtons(t);
        } else {
            descriptionElement.textContent = description
                ? description.textContent.trim()
                : '';

            overlay.querySelector('#courseDetailsLevels').hidden = true;
        }

        const message = `Hello! I am interested in ${courseTitle}${isGeneral ? ` (${selectedLevel})` : ''}. I would like to know more about the course, its price in ${selectedCurrency}, and how to register.`;

        overlay.querySelector('#courseDetailsContact').href =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    function renderLevelButtons(t) {
        const container = overlay.querySelector('#courseLevelButtons');
        container.innerHTML = '';

        Object.keys(t.levelNames).forEach(level => {
            const button = document.createElement('button');

            button.type = 'button';
            button.className = 'course-level-button';
            button.textContent = level;
            button.title = t.levelNames[level];

            if (level === selectedLevel) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            } else {
                button.setAttribute('aria-pressed', 'false');
            }

            button.addEventListener('click', () => {
                selectedLevel = level;
                updateCourseDetails();
            });

            container.appendChild(button);
        });
    }

    function openCourse(card) {
        activeCard = card;

        const levelElement = card.querySelector('.course-visual span');

        if (card.classList.contains('course-general')) {
            const level = levelElement
                ? levelElement.textContent.trim().toUpperCase()
                : 'A1';

            selectedLevel = translations.en.descriptions[level]
                ? level
                : 'A1';
        }

        lastFocusedElement = document.activeElement;

        updateLanguage();

        overlay.hidden = false;
        document.body.classList.add('course-modal-open');

        requestAnimationFrame(() => {
            overlay.classList.add('active');
            closeButton.focus();
        });
    }

    function closeCourse() {
        overlay.classList.remove('active');
        document.body.classList.remove('course-modal-open');

        setTimeout(() => {
            overlay.hidden = true;
            activeCard = null;

            if (lastFocusedElement && document.contains(lastFocusedElement)) {
                lastFocusedElement.focus();
            }
        }, 300);
    }

    /* Make original and duplicated carousel cards clickable. */
    carousel.querySelectorAll('.course-card[inert]').forEach(card => {
        card.removeAttribute('inert');
    });

    carousel.addEventListener('click', event => {
        const card = event.target.closest('.course-card');

        if (!card || !carousel.contains(card)) return;

        event.preventDefault();
        event.stopPropagation();

        openCourse(card);
    });

    closeButton.addEventListener('click', closeCourse);

    overlay.addEventListener('click', event => {
        if (event.target === overlay) {
            closeCourse();
        }
    });

    document.addEventListener('keydown', event => {
        if (overlay.hidden) return;

        if (event.key === 'Escape') {
            closeCourse();
        }

        if (event.key === 'Tab') {
            const focusable = [
                ...modal.querySelectorAll(
                    'button:not([disabled]), select:not([disabled]), a[href]'
                )
            ];

            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    currencySelect.addEventListener('change', () => {
        selectedCurrency = currencySelect.value;

        localStorage.setItem(
            'linkEnglishPaymentCurrency',
            selectedCurrency
        );

        updateCourseDetails();
    });

    document.addEventListener('linkEnglishLanguageChanged', updateLanguage);

    updateLanguage();
})();
