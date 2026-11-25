
/* =========================================================
   LINK ENGLISH — MULTILINGUAL TRANSLATION SYSTEM
   Languages: English, Portuguese, Spanish, French, Russian
   Designed to match the original Link English index.html
   ========================================================= */

(function () {
    "use strict";

    const STORAGE_KEY = "linkEnglishLanguage";
    const languages = ["en", "pt", "es", "fr", "ru"];

    const translations = {
        en: {},

        pt: {
            "meta.description": "A Link English ajuda-te a desenvolver competências de inglês para situações reais através de aulas práticas e aprendizagem flexível.",

            "nav.home": "Início",
            "nav.courses": "Cursos",
            "nav.about": "Sobre nós",
            "nav.reviews": "Avaliações",
            "nav.contact": "Contacto",
            "nav.login": "Entrar",
            "nav.start": "Iniciar conversa",

            "hero.eyebrow": "O TEU PRÓXIMO CAPÍTULO COMEÇA AQUI",
            "hero.title": "Uma aula<br>de cada vez.",
            "hero.description": "A confiança cresce quando utilizas o inglês. Desenvolve competências de comunicação para situações reais através de aulas práticas e de uma comunidade acolhedora.",
            "hero.google": "Avaliações no Google",
            "hero.trial": "Marcar uma aula experimental",
            "hero.imageAlt": "Três estudantes de diferentes origens a conversar amigavelmente em inglês",
            "hero.bubble1": "Olá!<br>Como estás?",
            "hero.bubble2": "Estou bem, obrigado!<br>E tu?",
            "hero.bubble3": "Estou ótimo!<br>Vamos praticar inglês!",
            "hero.bottom1": "APRENDE COM CONFIANÇA",
            "hero.bottom2": "DESLIZA PARA DESCOBRIR ↓",

            "courses.kicker": "ENCONTRA O TEU CAMINHO",
            "courses.heading": "Aula experimental gratuita",
            "courses.intro": "Explora os nossos cursos e encontra aquele que melhor corresponde aos teus objetivos.",
            "courses.learnMore": "Saber mais sobre este curso",
            "courses.bookTrial": "Marcar a tua aula experimental gratuita",

            "carousel.label": "Cursos de inglês disponíveis",
            "carousel.previous": "Cursos anteriores",
            "carousel.next": "Próximos cursos",
            "carousel.position": "Posição do carrossel",

            "course.a1.number": "01 · INGLÊS GERAL",
            "course.a2.number": "02 · INGLÊS GERAL",
            "course.b1.number": "03 · INGLÊS GERAL",
            "course.b2.number": "04 · INGLÊS GERAL",
            "course.c1.number": "05 · INGLÊS GERAL",
            "course.business1.number": "06 · CARREIRA",
            "course.business2.number": "07 · CARREIRA",
            "course.it.number": "08 · TECNOLOGIA",
            "course.tourism.number": "09 · HOTELARIA E TURISMO",
            "course.grammar.number": "10 · COMPETÊNCIAS LINGUÍSTICAS",

            "course.general.tagline": "Desenvolve o teu inglês passo a passo",
            "course.general.title": "Inglês Geral",

            "course.a1.description": "Cinco níveis, desde iniciante até avançado: A1.",
            "course.a2.description": "Cinco níveis, desde iniciante até avançado: A2.",
            "course.b1.description": "Cinco níveis, desde iniciante até avançado: B1.",
            "course.b2.description": "Cinco níveis, desde iniciante até avançado: B2.",
            "course.c1.description": "Cinco níveis, desde iniciante até avançado: C1.",

            "course.business1.title": "Inglês para Negócios 1",
            "course.business1.tagline": "Comunicação profissional",
            "course.business1.description": "Constrói uma base sólida para comunicar no local de trabalho, escrever e-mails e participar em reuniões.",

            "course.business2.title": "Inglês para Negócios 2",
            "course.business2.tagline": "Comunica com impacto",
            "course.business2.description": "Desenvolve competências linguísticas avançadas para apresentações, negociações e liderança.",

            "course.it.title": "Inglês para TI",
            "course.it.tagline": "Linguagem para o mundo digital",
            "course.it.description": "Aprende vocabulário técnico e desenvolve competências de comunicação para o setor tecnológico e carreiras em TI.",

            "course.tourism.title": "Inglês para Turismo",
            "course.tourism.tagline": "Dá as boas-vindas ao mundo",
            "course.tourism.description": "Pratica o inglês utilizado em viagens, hotéis, hotelaria e atendimento ao cliente.",

            "course.grammar.title": "Gramática",
            "course.grammar.tagline": "Compreende como o inglês funciona",
            "course.grammar.description": "Melhora a estrutura das tuas frases, a precisão e a confiança através do estudo da gramática inglesa.",

            "intro.kicker": "BEM-VINDO À LINK ENGLISH",
            "intro.title": "Mais do que aprender inglês.<br><span>É abrir novas possibilidades.</span>",
            "intro.description": "Tornamos a aprendizagem do inglês prática, acolhedora e ligada às coisas que realmente importam na tua vida. Quer estejas a começar ou queiras melhorar o teu nível, a tua jornada começa com um próximo passo claro.",
            "intro.link": "Vamos conversar sobre os teus objetivos",

            "method.stamp": "PEQUENOS PASSOS.<br>PROGRESSO REAL.",
            "method.kicker": "UMA FORMA MELHOR DE APRENDER",
            "method.title": "Feito para a vida real.<br><span>Pensado para ti.</span>",
            "method.description": "A aprendizagem funciona melhor quando está alinhada com os teus objetivos, a tua rotina e a forma como pretendes utilizar o inglês.",
            "method.oneTitle": "Aulas práticas",
            "method.oneText": "Concentra-te nas competências de que mais precisas, desde a comunicação diária até ao crescimento profissional.",
            "method.twoTitle": "Prática ativa",
            "method.twoText": "Utiliza atividades interativas e exemplos práticos para transformar conhecimento em confiança.",
            "method.threeTitle": "Progresso real",
            "method.threeText": "Celebra cada conquista e continua a melhorar, um passo de cada vez.",

            "benefits.teachers": "Professores qualificados",
            "benefits.teachersText": "Aprende com professores competentes e dedicados.",
            "benefits.flexible": "Aprendizagem flexível",
            "benefits.flexibleText": "Aulas online ou presenciais.",
            "benefits.progress": "Progresso real",
            "benefits.progressText": "Desenvolve as tuas competências passo a passo.",
            "benefits.community": "Uma comunidade acolhedora",
            "benefits.communityText": "Uma comunidade de aprendizagem onde todos são bem-vindos.",

            "signup.kicker": "A TUA JORNADA DE APRENDIZAGEM",
            "signup.title": "Ainda não tens uma conta?",
            "signup.description": "Cria a tua conta Link English e prepara-te para começar a tua jornada de aprendizagem.",
            "signup.button": "Registar gratuitamente",
            "signup.decoration": "Aprender · Praticar · Alcançar",

            "contact.kicker": "A TUA JORNADA COMEÇA AQUI",
            "contact.title": "Pronto para fazer o inglês<br>trabalhar <em>para ti?</em>",
            "contact.description": "Conta-nos o que pretendes alcançar. Vamos ajudar-te a encontrar o próximo passo.",
            "contact.button": "Fala connosco",

            "footer.tagline": "Inglês para o teu próximo passo.",
            "footer.portal": "Portal do aluno",
            "footer.createAccount": "Criar uma conta",
            "footer.rights": "Todos os direitos reservados.",
            "footer.whatsapp": "Contacta a Link English pelo WhatsApp",

            "language.label": "Escolher idioma"
        },

        es: {
            "meta.description": "Link English te ayuda a desarrollar habilidades de inglés para situaciones reales mediante clases prácticas y aprendizaje flexible.",

            "nav.home": "Inicio",
            "nav.courses": "Cursos",
            "nav.about": "Sobre nosotros",
            "nav.reviews": "Opiniones",
            "nav.contact": "Contacto",
            "nav.login": "Iniciar sesión",
            "nav.start": "Iniciar conversación",

            "hero.eyebrow": "TU PRÓXIMO CAPÍTULO COMIENZA AQUÍ",
            "hero.title": "Una lección<br>a la vez.",
            "hero.description": "La confianza crece cuando utilizas el inglés. Desarrolla habilidades de comunicación para situaciones reales mediante clases prácticas y una comunidad acogedora.",
            "hero.google": "Reseñas de Google",
            "hero.trial": "Reservar una clase de prueba",
            "hero.imageAlt": "Tres estudiantes de diferentes orígenes conversando amigablemente en inglés",
            "hero.bubble1": "¡Hola!<br>¿Cómo estás?",
            "hero.bubble2": "¡Estoy bien, gracias!<br>¿Y tú?",
            "hero.bubble3": "¡Estoy genial!<br>¡Practiquemos inglés!",
            "hero.bottom1": "APRENDE CON CONFIANZA",
            "hero.bottom2": "DESLIZA PARA DESCUBRIR ↓",

            "courses.kicker": "ENCUENTRA TU CAMINO",
            "courses.heading": "Clase de prueba gratuita",
            "courses.intro": "Explora nuestros cursos y encuentra el que mejor se adapte a tus objetivos.",
            "courses.learnMore": "Más información sobre este curso",
            "courses.bookTrial": "Reserva tu clase de prueba gratuita",

            "carousel.label": "Cursos de inglés disponibles",
            "carousel.previous": "Cursos anteriores",
            "carousel.next": "Próximos cursos",
            "carousel.position": "Posición del carrusel",

            "course.a1.number": "01 · INGLÉS GENERAL",
            "course.a2.number": "02 · INGLÉS GENERAL",
            "course.b1.number": "03 · INGLÉS GENERAL",
            "course.b2.number": "04 · INGLÉS GENERAL",
            "course.c1.number": "05 · INGLÉS GENERAL",
            "course.business1.number": "06 · CARRERA PROFESIONAL",
            "course.business2.number": "07 · CARRERA PROFESIONAL",
            "course.it.number": "08 · TECNOLOGÍA",
            "course.tourism.number": "09 · HOSTELERÍA Y TURISMO",
            "course.grammar.number": "10 · HABILIDADES LINGÜÍSTICAS",

            "course.general.tagline": "Desarrolla tu inglés paso a paso",
            "course.general.title": "Inglés General",

            "course.a1.description": "Cinco niveles, desde principiante hasta avanzado: A1.",
            "course.a2.description": "Cinco niveles, desde principiante hasta avanzado: A2.",
            "course.b1.description": "Cinco niveles, desde principiante hasta avanzado: B1.",
            "course.b2.description": "Cinco niveles, desde principiante hasta avanzado: B2.",
            "course.c1.description": "Cinco niveles, desde principiante hasta avanzado: C1.",

            "course.business1.title": "Inglés para los Negocios 1",
            "course.business1.tagline": "Comunicación profesional",
            "course.business1.description": "Construye una base sólida para comunicarte en el trabajo, escribir correos electrónicos y participar en reuniones.",

            "course.business2.title": "Inglés para los Negocios 2",
            "course.business2.tagline": "Comunica con impacto",
            "course.business2.description": "Desarrolla habilidades lingüísticas avanzadas para presentaciones, negociaciones y liderazgo.",

            "course.it.title": "Inglés para TI",
            "course.it.tagline": "Idioma para el mundo digital",
            "course.it.description": "Aprende vocabulario técnico y desarrolla habilidades de comunicación para el sector tecnológico y las carreras de TI.",

            "course.tourism.title": "Inglés para Turismo",
            "course.tourism.tagline": "Da la bienvenida al mundo",
            "course.tourism.description": "Practica el inglés utilizado en viajes, hoteles, hostelería y atención al cliente.",

            "course.grammar.title": "Gramática",
            "course.grammar.tagline": "Comprende cómo funciona el inglés",
            "course.grammar.description": "Mejora la estructura de tus frases, la precisión y la confianza mediante el estudio de la gramática inglesa.",

            "intro.kicker": "BIENVENIDO A LINK ENGLISH",
            "intro.title": "Más que aprender inglés.<br><span>Es abrir nuevas posibilidades.</span>",
            "intro.description": "Hacemos que aprender inglés sea práctico, acogedor y conectado con las cosas que realmente importan en tu vida. Tanto si estás empezando como si quieres mejorar tu nivel, tu camino comienza con un siguiente paso claro.",
            "intro.link": "Hablemos de tus objetivos",

            "method.stamp": "PEQUEÑOS PASOS.<br>PROGRESO REAL.",
            "method.kicker": "UNA MEJOR FORMA DE APRENDER",
            "method.title": "Hecho para la vida real.<br><span>Diseñado para ti.</span>",
            "method.description": "El aprendizaje funciona mejor cuando se adapta a tus objetivos, tu horario y la forma en que quieres utilizar el inglés.",
            "method.oneTitle": "Clases prácticas",
            "method.oneText": "Concéntrate en las habilidades que más necesitas, desde la comunicación diaria hasta el crecimiento profesional.",
            "method.twoTitle": "Práctica activa",
            "method.twoText": "Utiliza actividades interactivas y ejemplos prácticos para convertir el conocimiento en confianza.",
            "method.threeTitle": "Progreso real",
            "method.threeText": "Celebra cada logro y sigue mejorando, un paso alcanzable a la vez.",

            "benefits.teachers": "Profesores cualificados",
            "benefits.teachersText": "Aprende con profesores capacitados y comprometidos.",
            "benefits.flexible": "Aprendizaje flexible",
            "benefits.flexibleText": "Clases online o presenciales.",
            "benefits.progress": "Progreso real",
            "benefits.progressText": "Desarrolla tus habilidades paso a paso.",
            "benefits.community": "Una comunidad acogedora",
            "benefits.communityText": "Una comunidad de aprendizaje donde todos son bienvenidos.",

            "signup.kicker": "TU CAMINO DE APRENDIZAJE",
            "signup.title": "¿Todavía no tienes una cuenta?",
            "signup.description": "Crea tu cuenta de Link English y prepárate para comenzar tu camino de aprendizaje.",
            "signup.button": "Registrarse gratis",
            "signup.decoration": "Aprender · Practicar · Lograr",

            "contact.kicker": "TU CAMINO COMIENZA AQUÍ",
            "contact.title": "¿Listo para hacer que el inglés<br>trabaje <em>para ti?</em>",
            "contact.description": "Cuéntanos qué quieres conseguir. Te ayudaremos a encontrar tu siguiente paso.",
            "contact.button": "Habla con nosotros",

            "footer.tagline": "Inglés para tu próximo paso.",
            "footer.portal": "Portal del estudiante",
            "footer.createAccount": "Crear una cuenta",
            "footer.rights": "Todos los derechos reservados.",
            "footer.whatsapp": "Contacta con Link English por WhatsApp",

            "language.label": "Seleccionar idioma"
        },

        fr: {
            "meta.description": "Link English vous aide à développer vos compétences en anglais pour des situations réelles grâce à des cours pratiques et un apprentissage flexible.",

            "nav.home": "Accueil",
            "nav.courses": "Cours",
            "nav.about": "À propos",
            "nav.reviews": "Avis",
            "nav.contact": "Contact",
            "nav.login": "Connexion",
            "nav.start": "Commencer une conversation",

            "hero.eyebrow": "VOTRE PROCHAIN CHAPITRE COMMENCE ICI",
            "hero.title": "Une leçon<br>à la fois.",
            "hero.description": "La confiance grandit lorsque vous utilisez l'anglais. Développez vos compétences en communication pour des situations réelles grâce à des cours pratiques et une communauté accueillante.",
            "hero.google": "Avis Google",
            "hero.trial": "Réserver un cours d'essai",
            "hero.imageAlt": "Trois étudiants d'origines différentes discutant amicalement en anglais",
            "hero.bubble1": "Bonjour !<br>Comment allez-vous ?",
            "hero.bubble2": "Je vais bien, merci !<br>Et vous ?",
            "hero.bubble3": "Je vais très bien !<br>Pratiquons l'anglais !",
            "hero.bottom1": "APPRENEZ AVEC CONFIANCE",
            "hero.bottom2": "FAITES DÉFILER POUR DÉCOUVRIR ↓",

            "courses.kicker": "TROUVEZ VOTRE PARCOURS",
            "courses.heading": "Cours d'essai gratuit",
            "courses.intro": "Découvrez nos cours et trouvez celui qui correspond le mieux à vos objectifs.",
            "courses.learnMore": "En savoir plus sur ce cours",
            "courses.bookTrial": "Réserver votre cours d'essai gratuit",

            "carousel.label": "Cours d'anglais disponibles",
            "carousel.previous": "Cours précédents",
            "carousel.next": "Cours suivants",
            "carousel.position": "Position du carrousel",

            "course.a1.number": "01 · ANGLAIS GÉNÉRAL",
            "course.a2.number": "02 · ANGLAIS GÉNÉRAL",
            "course.b1.number": "03 · ANGLAIS GÉNÉRAL",
            "course.b2.number": "04 · ANGLAIS GÉNÉRAL",
            "course.c1.number": "05 · ANGLAIS GÉNÉRAL",
            "course.business1.number": "06 · CARRIÈRE",
            "course.business2.number": "07 · CARRIÈRE",
            "course.it.number": "08 · TECHNOLOGIE",
            "course.tourism.number": "09 · HÔTELLERIE ET TOURISME",
            "course.grammar.number": "10 · COMPÉTENCES LINGUISTIQUES",

            "course.general.tagline": "Développez votre anglais étape par étape",
            "course.general.title": "Anglais général",

            "course.a1.description": "Cinq niveaux, du débutant à l'avancé : A1.",
            "course.a2.description": "Cinq niveaux, du débutant à l'avancé : A2.",
            "course.b1.description": "Cinq niveaux, du débutant à l'avancé : B1.",
            "course.b2.description": "Cinq niveaux, du débutant à l'avancé : B2.",
            "course.c1.description": "Cinq niveaux, du débutant à l'avancé : C1.",

            "course.business1.title": "Anglais des affaires 1",
            "course.business1.tagline": "Communication professionnelle",
            "course.business1.description": "Construisez une base solide pour communiquer au travail, rédiger des e-mails et participer à des réunions.",

            "course.business2.title": "Anglais des affaires 2",
            "course.business2.tagline": "Communiquez avec impact",
            "course.business2.description": "Développez des compétences linguistiques avancées pour les présentations, les négociations et le leadership.",

            "course.it.title": "Anglais pour l'informatique",
            "course.it.tagline": "La langue du monde numérique",
            "course.it.description": "Apprenez le vocabulaire technique et développez vos compétences de communication dans le secteur technologique et les métiers de l'informatique.",

            "course.tourism.title": "Anglais pour le tourisme",
            "course.tourism.tagline": "Accueillez le monde",
            "course.tourism.description": "Pratiquez l'anglais utilisé dans les voyages, les hôtels, l'hôtellerie et le service client.",

            "course.grammar.title": "Grammaire",
            "course.grammar.tagline": "Comprenez le fonctionnement de l'anglais",
            "course.grammar.description": "Renforcez la structure de vos phrases, votre précision et votre confiance grâce à l'étude de la grammaire anglaise.",

            "intro.kicker": "BIENVENUE CHEZ LINK ENGLISH",
            "intro.title": "Bien plus qu'apprendre l'anglais.<br><span>C'est ouvrir de nouvelles possibilités.</span>",
            "intro.description": "Nous rendons l'apprentissage de l'anglais pratique, accueillant et lié aux choses qui comptent vraiment dans votre vie. Que vous débutiez ou souhaitiez améliorer votre niveau, votre parcours commence par une prochaine étape claire.",
            "intro.link": "Parlons de vos objectifs",

            "method.stamp": "PETITS PAS.<br>VRAIS PROGRÈS.",
            "method.kicker": "UNE MEILLEURE FAÇON D'APPRENDRE",
            "method.title": "Pensé pour la vraie vie.<br><span>Conçu pour vous.</span>",
            "method.description": "L'apprentissage est plus efficace lorsqu'il correspond à vos objectifs, à votre emploi du temps et à la façon dont vous souhaitez utiliser l'anglais.",
            "method.oneTitle": "Cours pratiques",
            "method.oneText": "Concentrez-vous sur les compétences dont vous avez le plus besoin, de la communication quotidienne à l'évolution professionnelle.",
            "method.twoTitle": "Pratique active",
            "method.twoText": "Utilisez des activités interactives et des exemples pratiques pour transformer vos connaissances en confiance.",
            "method.threeTitle": "De vrais progrès",
            "method.threeText": "Célébrez chaque réussite et continuez à progresser, une étape à la fois.",

            "benefits.teachers": "Enseignants qualifiés",
            "benefits.teachersText": "Apprenez avec des enseignants compétents et attentifs.",
            "benefits.flexible": "Apprentissage flexible",
            "benefits.flexibleText": "Cours en ligne ou en présentiel.",
            "benefits.progress": "De vrais progrès",
            "benefits.progressText": "Développez vos compétences étape par étape.",
            "benefits.community": "Une communauté accueillante",
            "benefits.communityText": "Une communauté d'apprentissage où tout le monde est le bienvenu.",

            "signup.kicker": "VOTRE PARCOURS D'APPRENTISSAGE",
            "signup.title": "Vous n'avez pas encore de compte ?",
            "signup.description": "Créez votre compte Link English et préparez-vous à commencer votre parcours d'apprentissage.",
            "signup.button": "S'inscrire gratuitement",
            "signup.decoration": "Apprendre · Pratiquer · Réussir",

            "contact.kicker": "VOTRE PARCOURS COMMENCE ICI",
            "contact.title": "Prêt à faire travailler l'anglais<br><em>pour vous ?</em>",
            "contact.description": "Dites-nous ce que vous souhaitez accomplir. Nous vous aiderons à trouver votre prochaine étape.",
            "contact.button": "Parlez avec nous",

            "footer.tagline": "L'anglais pour votre prochaine étape.",
            "footer.portal": "Espace étudiant",
            "footer.createAccount": "Créer un compte",
            "footer.rights": "Tous droits réservés.",
            "footer.whatsapp": "Contactez Link English sur WhatsApp",

            "language.label": "Choisir la langue"
        },

        ru: {
            "meta.description": "Link English помогает развивать навыки английского языка для реальных ситуаций благодаря практическим занятиям и гибкому обучению.",

            "nav.home": "Главная",
            "nav.courses": "Курсы",
            "nav.about": "О нас",
            "nav.reviews": "Отзывы",
            "nav.contact": "Контакты",
            "nav.login": "Войти",
            "nav.start": "Начать разговор",

            "hero.eyebrow": "ВАША СЛЕДУЮЩАЯ ГЛАВА НАЧИНАЕТСЯ ЗДЕСЬ",
            "hero.title": "Один урок<br>за раз.",
            "hero.description": "Уверенность растёт, когда вы используете английский язык. Развивайте навыки общения для реальных ситуаций благодаря практическим занятиям и дружелюбному учебному сообществу.",
            "hero.google": "Отзывы Google",
            "hero.trial": "Записаться на пробный урок",
            "hero.imageAlt": "Трое студентов разного происхождения дружелюбно общаются на английском языке",
            "hero.bubble1": "Привет!<br>Как дела?",
            "hero.bubble2": "Всё хорошо, спасибо!<br>А у тебя?",
            "hero.bubble3": "Отлично!<br>Давай практиковать английский!",
            "hero.bottom1": "УЧИТЕСЬ УВЕРЕННО",
            "hero.bottom2": "ПРОКРУТИТЕ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ ↓",

            "courses.kicker": "НАЙДИТЕ СВОЙ ПУТЬ",
            "courses.heading": "Бесплатный пробный урок",
            "courses.intro": "Изучите наши курсы и выберите тот, который лучше всего соответствует вашим целям.",
            "courses.learnMore": "Подробнее об этом курсе",
            "courses.bookTrial": "Записаться на бесплатный пробный урок",

            "carousel.label": "Доступные курсы английского языка",
            "carousel.previous": "Предыдущие курсы",
            "carousel.next": "Следующие курсы",
            "carousel.position": "Положение карусели",

            "course.a1.number": "01 · ОБЩИЙ АНГЛИЙСКИЙ",
            "course.a2.number": "02 · ОБЩИЙ АНГЛИЙСКИЙ",
            "course.b1.number": "03 · ОБЩИЙ АНГЛИЙСКИЙ",
            "course.b2.number": "04 · ОБЩИЙ АНГЛИЙСКИЙ",
            "course.c1.number": "05 · ОБЩИЙ АНГЛИЙСКИЙ",
            "course.business1.number": "06 · КАРЬЕРА",
            "course.business2.number": "07 · КАРЬЕРА",
            "course.it.number": "08 · ТЕХНОЛОГИИ",
            "course.tourism.number": "09 · ГОСТЕПРИИМСТВО И ТУРИЗМ",
            "course.grammar.number": "10 · ЯЗЫКОВЫЕ НАВЫКИ",

            "course.general.tagline": "Развивайте английский шаг за шагом",
            "course.general.title": "Общий английский",

            "course.a1.description": "Пять уровней — от начального до продвинутого: A1.",
            "course.a2.description": "Пять уровней — от начального до продвинутого: A2.",
            "course.b1.description": "Пять уровней — от начального до продвинутого: B1.",
            "course.b2.description": "Пять уровней — от начального до продвинутого: B2.",
            "course.c1.description": "Пять уровней — от начального до продвинутого: C1.",

            "course.business1.title": "Деловой английский 1",
            "course.business1.tagline": "Профессиональное общение",
            "course.business1.description": "Создайте прочную основу для общения на работе, написания электронных писем и участия во встречах.",

            "course.business2.title": "Деловой английский 2",
            "course.business2.tagline": "Общайтесь убедительно",
            "course.business2.description": "Развивайте продвинутые языковые навыки для презентаций, переговоров и руководства.",

            "course.it.title": "Английский для IT",
            "course.it.tagline": "Язык цифрового мира",
            "course.it.description": "Изучайте техническую лексику и развивайте навыки общения для технологической отрасли и IT-карьеры.",

            "course.tourism.title": "Английский для туризма",
            "course.tourism.tagline": "Открывайте мир гостям",
            "course.tourism.description": "Практикуйте английский, используемый в путешествиях, гостиницах, сфере гостеприимства и обслуживании клиентов.",

            "course.grammar.title": "Грамматика",
            "course.grammar.tagline": "Поймите, как работает английский",
            "course.grammar.description": "Улучшайте структуру предложений, точность и уверенность благодаря изучению английской грамматики.",

            "intro.kicker": "ДОБРО ПОЖАЛОВАТЬ В LINK ENGLISH",
            "intro.title": "Больше, чем изучение английского.<br><span>Это новые возможности.</span>",
            "intro.description": "Мы делаем изучение английского практичным, комфортным и связанным с тем, что действительно важно в вашей жизни. Независимо от того, начинаете ли вы с нуля или хотите улучшить свой уровень, ваш путь начинается со следующего понятного шага.",
            "intro.link": "Давайте поговорим о ваших целях",

            "method.stamp": "МАЛЕНЬКИЕ ШАГИ.<br>РЕАЛЬНЫЙ ПРОГРЕСС.",
            "method.kicker": "ЛУЧШИЙ СПОСОБ УЧИТЬСЯ",
            "method.title": "Для реальной жизни.<br><span>Создано для вас.</span>",
            "method.description": "Обучение эффективнее, когда оно соответствует вашим целям, расписанию и тому, как вы хотите использовать английский язык.",
            "method.oneTitle": "Практические занятия",
            "method.oneText": "Сосредоточьтесь на самых необходимых навыках — от повседневного общения до профессионального роста.",
            "method.twoTitle": "Активная практика",
            "method.twoText": "Используйте интерактивные задания и практические примеры, чтобы превратить знания в уверенность.",
            "method.threeTitle": "Реальный прогресс",
            "method.threeText": "Отмечайте каждое достижение и продолжайте совершенствоваться шаг за шагом.",

            "benefits.teachers": "Квалифицированные преподаватели",
            "benefits.teachersText": "Учитесь с опытными и внимательными преподавателями.",
            "benefits.flexible": "Гибкое обучение",
            "benefits.flexibleText": "Занятия онлайн или лично.",
            "benefits.progress": "Реальный прогресс",
            "benefits.progressText": "Развивайте навыки шаг за шагом.",
            "benefits.community": "Дружелюбное сообщество",
            "benefits.communityText": "Учебное сообщество, где рады каждому.",

            "signup.kicker": "ВАШ ПУТЬ К ОБУЧЕНИЮ",
            "signup.title": "У вас ещё нет аккаунта?",
            "signup.description": "Создайте аккаунт Link English и приготовьтесь начать свой путь обучения.",
            "signup.button": "Зарегистрироваться бесплатно",
            "signup.decoration": "Учиться · Практиковаться · Достигать",

            "contact.kicker": "ВАШ ПУТЬ НАЧИНАЕТСЯ ЗДЕСЬ",
            "contact.title": "Готовы сделать английский<br>полезным <em>для вас?</em>",
            "contact.description": "Расскажите нам, чего хотите достичь. Мы поможем найти ваш следующий шаг.",
            "contact.button": "Свяжитесь с нами",

            "footer.tagline": "Английский для вашего следующего шага.",
            "footer.portal": "Портал студента",
            "footer.createAccount": "Создать аккаунт",
            "footer.rights": "Все права защищены.",
            "footer.whatsapp": "Свяжитесь с Link English через WhatsApp",

            "language.label": "Выбрать язык"
        }
    };

    const whatsappMessages = {
        "Hello! I am interested in General English (A1–C1).": {
            pt: "Olá! Tenho interesse no curso de Inglês Geral (A1–C1).",
            es: "¡Hola! Me interesa el curso de Inglés General (A1–C1).",
            fr: "Bonjour ! Je suis intéressé par le cours d'anglais général (A1–C1).",
            ru: "Здравствуйте! Меня интересует курс общего английского (A1–C1)."
        },
        "Hello! I am interested in Business English 1.": {
            pt: "Olá! Tenho interesse no curso de Inglês para Negócios 1.",
            es: "¡Hola! Me interesa el curso de Inglés para los Negocios 1.",
            fr: "Bonjour ! Je suis intéressé par le cours d'anglais des affaires 1.",
            ru: "Здравствуйте! Меня интересует курс делового английского 1."
        },
        "Hello! I am interested in Business English 2.": {
            pt: "Olá! Tenho interesse no curso de Inglês para Negócios 2.",
            es: "¡Hola! Me interesa el curso de Inglés para los Negocios 2.",
            fr: "Bonjour ! Je suis intéressé par le cours d'anglais des affaires 2.",
            ru: "Здравствуйте! Меня интересует курс делового английского 2."
        },
        "Hello! I am interested in the English for IT course.": {
            pt: "Olá! Tenho interesse no curso de Inglês para TI.",
            es: "¡Hola! Me interesa el curso de Inglés para TI.",
            fr: "Bonjour ! Je suis intéressé par le cours d'anglais pour l'informatique.",
            ru: "Здравствуйте! Меня интересует курс английского для IT."
        },
        "Hello! I am interested in the English for Tourism course.": {
            pt: "Olá! Tenho interesse no curso de Inglês para Turismo.",
            es: "¡Hola! Me interesa el curso de Inglés para Turismo.",
            fr: "Bonjour ! Je suis intéressé par le cours d'anglais pour le tourisme.",
            ru: "Здравствуйте! Меня интересует курс английского для туризма."
        },
        "Hello! I am interested in the Grammar course.": {
            pt: "Olá! Tenho interesse no curso de Gramática.",
            es: "¡Hola! Me interesa el curso de Gramática.",
            fr: "Bonjour ! Je suis intéressé par le cours de grammaire.",
            ru: "Здравствуйте! Меня интересует курс грамматики."
        },
        "Hello! I would like to book a free trial lesson at Link English.": {
            pt: "Olá! Gostaria de marcar uma aula experimental gratuita na Link English.",
            es: "¡Hola! Me gustaría reservar una clase de prueba gratuita en Link English.",
            fr: "Bonjour ! Je souhaiterais réserver un cours d'essai gratuit chez Link English.",
            ru: "Здравствуйте! Я хотел бы записаться на бесплатный пробный урок в Link English."
        }
    };

    const originalContent = new WeakMap();
    const originalAttributes = new WeakMap();
    const originalMessages = new WeakMap();

    function getLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return languages.includes(saved) ? saved : "en";
        } catch (error) {
            return "en";
        }
    }

    function getTranslation(key, language) {
        const lang = language || getLanguage();

        if (lang === "en") {
            return originalContent.get(document.querySelector(`[data-i18n="${key}"]`)) ?? key;
        }

        return translations[lang]?.[key] ?? translations.pt?.[key] ?? key;
    }

    function translateElement(element, language) {
        if (!(element instanceof Element)) return;

        const lang = language || getLanguage();

        if (element.hasAttribute("data-i18n")) {
            const key = element.getAttribute("data-i18n");

            if (!originalContent.has(element)) {
                originalContent.set(element, element.innerHTML);
            }

            element.innerHTML = lang === "en"
                ? originalContent.get(element)
                : (translations[lang]?.[key] ?? originalContent.get(element));
        }

        const rules = element.getAttribute("data-i18n-attr");

        if (rules) {
            rules.split(",").forEach(rule => {
                const [attribute, key] = rule.split(":").map(part => part.trim());

                if (!attribute || !key) return;

                let saved = originalAttributes.get(element);

                if (!saved) {
                    saved = {};
                    originalAttributes.set(element, saved);
                }

                if (!(attribute in saved)) {
                    saved[attribute] = element.getAttribute(attribute);
                }

                const translated = lang === "en"
                    ? saved[attribute]
                    : (translations[lang]?.[key] ?? saved[attribute]);

                element.setAttribute(attribute, translated);
            });
        }

        if (element.hasAttribute("data-message")) {
            if (!originalMessages.has(element)) {
                originalMessages.set(element, element.getAttribute("data-message"));
            }

            const originalMessage = originalMessages.get(element);
            const translatedMessage = whatsappMessages[originalMessage]?.[lang];

            element.setAttribute(
                "data-message",
                lang === "en" ? originalMessage : (translatedMessage || originalMessage)
            );
        }
    }

    function translatePage(language) {
        const lang = languages.includes(language) ? language : "en";

        document.documentElement.lang = lang;

        document.querySelectorAll(
            "[data-i18n], [data-i18n-attr], [data-message]"
        ).forEach(element => translateElement(element, lang));

        const selector = document.getElementById("languageSelect");

        if (selector) {
            selector.value = lang;
        }

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            console.warn("Could not save language preference.", error);
        }

        window.dispatchEvent(
            new CustomEvent("linkEnglishLanguageChanged", {
                detail: { language: lang }
            })
        );
    }

    window.setLinkEnglishLanguage = translatePage;
    window.getLinkEnglishLanguage = getLanguage;

    window.linkEnglishTranslate = function (key) {
        const lang = getLanguage();

        if (lang === "en") return key;

        return translations[lang]?.[key] ?? key;
    };

    window.translateWhatsAppMessage = function (message) {
        const lang = getLanguage();

        return lang === "en"
            ? message
            : (whatsappMessages[message]?.[lang] || message);
    };

    window.checkLinkEnglishTranslations = function () {
        const missing = [];

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");

            languages.forEach(lang => {
                if (lang !== "en" && !translations[lang]?.[key]) {
                    missing.push({ language: lang, key });
                }
            });
        });

        console.table(missing);
        return missing;
    };

    function initialise() {
        const selector = document.getElementById("languageSelect");

        if (selector) {
            selector.addEventListener("change", function () {
                translatePage(this.value);
            });
        }

        translatePage(getLanguage());

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (!(node instanceof Element)) return;

                    translateElement(node);

                    node.querySelectorAll?.(
                        "[data-i18n], [data-i18n-attr], [data-message]"
                    ).forEach(element => translateElement(element));
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialise);
    } else {
        initialise();
    }

})();
