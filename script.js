// ========================================
// SMARTMATH - INTERACTIVE GRAPH LEARNING PLATFORM
// ========================================

// ========================================
// GLOBAL STATE MANAGEMENT
// ========================================

const state = {
    currentLanguage: 'ms',
    currentUser: null,
    currentPage: 'languageSelector',
    currentTopic: null,
    currentDifficulty: 'easy',
    score: 0,
    questionsAnswered: 0,
    totalQuestions: 5,
    currentQuestion: 0,
    questions: [],
    currentAnswerIndex: 0,
    chatHistory: [],
};

// ========================================
// PRAISE & MEME COLLECTIONS
// ========================================

const praises = {
    ms: [
        '🎉 Luar biasa! Anda adalah bintang!',
        '⭐ Sempurna! Anda menguasainya!',
        '🚀 Fantastis! Teruskan momentum ini!',
        '💯 Wow! Jawapan yang tepat!',
        '🔥 Gila gila! Anda genius!',
        '👏 Bravo! Kerja yang luar biasa!',
        '✨ Sangat bagus! Teruskan begini!',
        '🎊 Tahniah! Anda berbakat!',
        '💪 Kuat gila! Bolehlah!',
        '🌟 Cemerlang sekali!',
        '😎 Cool gila! Anda pro!',
        '🏆 Champion! Anda terbaik!',
    ],
    en: [
        '🎉 Amazing! You are a star!',
        '⭐ Perfect! You nailed it!',
        '🚀 Fantastic! Keep the momentum!',
        '💯 Wow! Spot on!',
        '🔥 Awesome! You\'re a genius!',
        '👏 Bravo! Great job!',
        '✨ Brilliant! Keep it up!',
        '🎊 Congratulations! Very talented!',
        '💪 Strong work! You got this!',
        '🌟 Excellent effort!',
        '😎 So cool! You\'re a pro!',
        '🏆 Champion! You\'re the best!',
    ],
};

const failMemes = {
    ms: [
        '😅 Oops! Bukan itu jawapannya, cuba lagi!',
        '🤔 Hmm... hampir! Tapi bukan begitu!',
        '📚 Jangan risau, belajar dari kesilapan!',
        '💭 Fikir lagi sebentar... pasti boleh!',
        '🎯 Belum tepat, tapi sudah dekat!',
        '🧠 Otak tak on ke hari ni? 😄',
        '⚡ Sekali lagi! Kali ini pasti betul!',
        '🤷 Hmm, bukan main-main soalan ni!',
    ],
    en: [
        '😅 Oops! That\'s not quite right, try again!',
        '🤔 Hmm... close but not quite!',
        '📚 Don\'t worry, learn from mistakes!',
        '💭 Think again... you can do it!',
        '🎯 Not quite, but you\'re getting there!',
        '🧠 Brain not working today? 😄',
        '⚡ Try once more! This time for sure!',
        '🤷 Hmm, this one\'s tricky!',
    ],
};

// ========================================
// TRANSLATIONS
// ========================================

const translations = {
    ms: {
        loginSubtitle: 'Belajar Graf Dengan Interaktif',
        studentNamePlaceholder: 'Masukkan Nama Pelajar',
        loginBtn: 'Log Masuk',
        changeLanguageBtn: 'Tukar Bahasa',
        menuTitle: 'Pilih Topik',
        difficultyLabel: 'Pilih Kesulitan:',
        diffEasy: 'Mudah',
        diffMedium: 'Sederhana',
        diffHard: 'Sukar',
        topicLinear: 'Graf Linear',
        topicQuadratic: 'Graf Kuadratik',
        topicExponential: 'Graf Eksponen',
        topicTrigonometric: 'Graf Trigonometrik',
        guessGraphLabel: 'Teka Graf',
        aiTutorLabel: 'AI Tutor',
        statsLabel: 'Statistik',
        logoutBtn: 'Keluar',
        backLabel: 'Kembali',
        submitBtn: 'Hantar Jawapan',
        hintBtn: 'Hint',
        hintTitle: '💡 Hint',
        aiTutorTitle: '🤖 AI Tutor',
        aiTutorSubtitle: 'Tanya soalan Matematik sahaja!',
        suggestedLabel: '💡 Soalan Dicadangkan:',
        guessGraphTitle: '🎮 Teka Bentuk Graf',
        level2Title: '⭐ Level 2 🔓',
        level2Text1: 'Tahniah! Anda berjaya unlock level baru.',
        level2Text2: 'Lanjutkan ke topik yang lebih mencabar!',
        level2BackBtn: 'Kembali ke Menu',
        successTitle: 'Tahniah!',
        successText: 'Anda berjaya menyelesaikan topik ini.',
        scoreLabel: 'Markah:',
        statsTitle: '📊 Statistik Anda',
        sendBtn: 'Hantar',
        answerPlaceholder: 'Masukkan Jawapan',
    },
    en: {
        loginSubtitle: 'Learn Graphs Interactively',
        studentNamePlaceholder: 'Enter Student Name',
        loginBtn: 'Login',
        changeLanguageBtn: 'Change Language',
        menuTitle: 'Choose Topic',
        difficultyLabel: 'Choose Difficulty:',
        diffEasy: 'Easy',
        diffMedium: 'Medium',
        diffHard: 'Hard',
        topicLinear: 'Linear Graph',
        topicQuadratic: 'Quadratic Graph',
        topicExponential: 'Exponential Graph',
        topicTrigonometric: 'Trigonometric Graph',
        guessGraphLabel: 'Guess The Graph',
        aiTutorLabel: 'AI Tutor',
        statsLabel: 'Statistics',
        logoutBtn: 'Logout',
        backLabel: 'Back',
        submitBtn: 'Submit Answer',
        hintBtn: 'Hint',
        hintTitle: '💡 Hint',
        aiTutorTitle: '🤖 AI Tutor',
        aiTutorSubtitle: 'Ask Mathematics questions!',
        suggestedLabel: '💡 Suggested Questions:',
        guessGraphTitle: '🎮 Guess The Graph',
        level2Title: '⭐ Level 2 🔓',
        level2Text1: 'Congratulations! You unlocked a new level.',
        level2Text2: 'Continue to more challenging topics!',
        level2BackBtn: 'Back to Menu',
        successTitle: 'Congratulations!',
        successText: 'You completed this topic successfully.',
        scoreLabel: 'Score:',
        statsTitle: '📊 Your Statistics',
        sendBtn: 'Send',
        answerPlaceholder: 'Enter Answer',
    },
};

// ========================================
// MATH KNOWLEDGE BASE (NO API KEY NEEDED)
// ========================================

const mathKnowledgeBase = {
    ms: {
        'persamaan linear': 'Persamaan linear adalah persamaan dengan pemboleh ubah berpangkat 1. Bentuk umum: y = mx + c, di mana m adalah cerun dan c adalah pintasan-y. Contoh: y = 2x + 3',
        'cerun': 'Cerun (gradient) adalah kecerunan garis. Formula: m = (y₂ - y₁) / (x₂ - x₁). Cerun positif = garis naik, cerun negatif = garis turun.',
        'pintasan y': 'Pintasan-y adalah titik di mana graf memotong paksi-y. Ia adalah nilai y apabila x = 0. Dalam y = mx + c, pintasan-y adalah c.',
        'persamaan kuadratik': 'Persamaan kuadratik adalah persamaan dengan pemboleh ubah berpangkat 2. Bentuk umum: y = ax² + bx + c. Contoh: y = x² + 2x + 1. Grafnya berbentuk parabola.',
        'diskriminan': 'Diskriminan = b² - 4ac. Jika Δ > 0: 2 akar nyata. Jika Δ = 0: 1 akar nyata. Jika Δ < 0: tiada akar nyata.',
        'fungsi eksponen': 'Fungsi eksponen: y = aˣ. Ciri: garis tidak melalui paksi-x, selalu positif. Contoh: y = 2ˣ. Semakin besar x, semakin cepat pertumbuhan.',
        'trigonometri': 'Trigonometri melibatkan sin, cos, tan. sin(0°)=0, sin(90°)=1. cos(0°)=1, cos(90°)=0. tan(45°)=1.',
        'logaritma': 'Logaritma adalah songsangan eksponen. Jika aˣ = b, maka x = logₐ(b). Contoh: log₁₀(100) = 2 kerana 10² = 100.',
    },
    en: {
        'linear equation': 'A linear equation has variables with power 1. General form: y = mx + c, where m is slope and c is y-intercept. Example: y = 2x + 3',
        'slope': 'Slope (gradient) is the steepness of a line. Formula: m = (y₂ - y₁) / (x₂ - x₁). Positive slope = line rises, negative slope = line falls.',
        'y intercept': 'The y-intercept is where the graph crosses the y-axis. It is the value of y when x = 0. In y = mx + c, the y-intercept is c.',
        'quadratic equation': 'A quadratic equation has variables with power 2. General form: y = ax² + bx + c. Example: y = x² + 2x + 1. Graph is a parabola.',
        'discriminant': 'Discriminant = b² - 4ac. If Δ > 0: 2 real roots. If Δ = 0: 1 real root. If Δ < 0: no real roots.',
        'exponential function': 'Exponential function: y = aˣ. Characteristics: never crosses x-axis, always positive. Example: y = 2ˣ. Larger x means faster growth.',
        'trigonometry': 'Trigonometry involves sin, cos, tan. sin(0°)=0, sin(90°)=1. cos(0°)=1, cos(90°)=0. tan(45°)=1.',
        'logarithm': 'Logarithm is the inverse of exponent. If aˣ = b, then x = logₐ(b). Example: log₁₀(100) = 2 because 10² = 100.',
    }
};

const suggestedQuestions = {
    ms: [
        'Bagaimana cara menyelesaikan persamaan kuadratik?',
        'Apa itu cerun sebuah garis?',
        'Jelaskan tentang fungsi eksponen',
        'Apa perbezaan antara graf linear dan kuadratik?',
        'Bagaimana mencari diskriminan?',
    ],
    en: [
        'How to solve quadratic equations?',
        'What is the slope of a line?',
        'Explain exponential functions',
        'What is the difference between linear and quadratic graphs?',
        'How to find the discriminant?',
    ],
};

// ========================================
// HELPER FUNCTIONS
// ========================================

function getRandomPraise() {
    const praisingArray = praises[state.currentLanguage] || praises.en;
    return praisingArray[Math.floor(Math.random() * praisingArray.length)];
}

function getRandomFailMeme() {
    const failArray = failMemes[state.currentLanguage] || failMemes.en;
    return failArray[Math.floor(Math.random() * failArray.length)];
}

function searchMathKnowledge(question) {
    const kb = mathKnowledgeBase[state.currentLanguage] || mathKnowledgeBase.en;
    const questionLower = question.toLowerCase();
    
    // Search for keywords
    for (const [keyword, answer] of Object.entries(kb)) {
        if (questionLower.includes(keyword)) {
            return answer;
        }
    }
    
    // If no match found, return a helpful message
    return state.currentLanguage === 'ms' 
        ? '📚 Saya tidak mempunyai jawapan khusus untuk soalan ini. Tetapi saya boleh membantu dengan: persamaan linear, cerun, pintasan-y, persamaan kuadratik, diskriminan, fungsi eksponen, trigonometri, logaritma. Coba tanya tentang topik-topik ini!'
        : '📚 I don\'t have a specific answer for this question. But I can help with: linear equations, slope, y-intercepts, quadratic equations, discriminant, exponential functions, trigonometry, logarithms. Try asking about these topics!';
}

// ========================================
// LANGUAGE MANAGEMENT
// ========================================

function setLanguage(lang) {
    if (lang === null) {
        state.currentLanguage = state.currentLanguage === 'ms' ? 'en' : 'ms';
    } else {
        state.currentLanguage = lang;
    }
    updateLanguage();
    showPage('login');
}

function updateLanguage() {
    const t = translations[state.currentLanguage];

    document.getElementById('loginSubtitle').textContent = t.loginSubtitle;
    document.getElementById('studentName').placeholder = t.studentNamePlaceholder;
    document.getElementById('loginBtn').textContent = t.loginBtn;
    document.getElementById('changeLanguageBtn').textContent = t.changeLanguageBtn;
    document.getElementById('menuTitle').textContent = t.menuTitle;
    document.getElementById('difficultyLabel').textContent = t.difficultyLabel;
    document.getElementById('diffEasy').textContent = t.diffEasy;
    document.getElementById('diffMedium').textContent = t.diffMedium;
    document.getElementById('diffHard').textContent = t.diffHard;
    document.getElementById('topicLinear').textContent = t.topicLinear;
    document.getElementById('topicQuadratic').textContent = t.topicQuadratic;
    document.getElementById('topicExponential').textContent = t.topicExponential;
    document.getElementById('topicTrigonometric').textContent = t.topicTrigonometric;
    document.getElementById('guessGraphLabel').textContent = t.guessGraphLabel;
    document.getElementById('aiTutorLabel').textContent = t.aiTutorLabel;
    document.getElementById('statsLabel').textContent = t.statsLabel;
    document.getElementById('logoutBtn').textContent = t.logoutBtn;
    document.getElementById('answerInput').placeholder = t.answerPlaceholder;
    document.getElementById('hintTitle').textContent = t.hintTitle;
    document.getElementById('aiTutorTitle').textContent = t.aiTutorTitle;
    document.getElementById('aiTutorSubtitle').textContent = t.aiTutorSubtitle;
}

// ========================================
// PAGE NAVIGATION
// ========================================

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const page = document.getElementById(pageName);
    if (page) {
        page.classList.add('active');
        state.currentPage = pageName;

        if (pageName === 'menu') {
            initializeMenu();
        } else if (pageName === 'aiTutor') {
            initializeAiTutor();
        } else if (pageName === 'stats') {
            displayStats();
        } else if (pageName === 'guessTheGraph') {
            initializeGuessTheGraph();
        }
    }
}

function goBack() {
    state.currentQuestion = 0;
    state.currentAnswerIndex = 0;
    showPage('menu');
}

function backToQuestion() {
    showPage('questionContainer');
}

// ========================================
// AUTHENTICATION
// ========================================

function startGame(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value.trim();

    if (!name) {
        showFeedback('Please enter your name', 'error', 'login');
        return;
    }

    state.currentUser = name;
    document.getElementById('studentName').value = '';
    showPage('menu');
}

function logout() {
    state.currentUser = null;
    state.score = 0;
    state.questionsAnswered = 0;
    state.chatHistory = [];
    showPage('languageSelector');
}

// ========================================
// QUESTION MANAGEMENT
// ========================================

const questionDatabase = {
    ms: {
        linear: {
            easy: [
                {
                    question: 'Berapakah nilai y apabila x = 2 untuk persamaan y = 2x + 1?',
                    answer: '5',
                    hint: 'Gantikan x dengan 2 dalam persamaan y = 2(2) + 1',
                },
                {
                    question: 'Berapakah cerun (gradient) untuk graf y = 3x + 2?',
                    answer: '3',
                    hint: 'Cerun adalah pekali x dalam bentuk y = mx + c',
                },
                {
                    question: 'Apakah pintasan-y untuk graf y = x - 4?',
                    answer: '-4',
                    hint: 'Pintasan-y adalah nilai apabila x = 0',
                },
                {
                    question: 'Berapakah nilai y apabila x = 0 untuk persamaan y = -2x + 6?',
                    answer: '6',
                    hint: 'Gantikan x dengan 0',
                },
                {
                    question: 'Berapakah cerun untuk graf yang melalui titik (0, 0) dan (1, 5)?',
                    answer: '5',
                    hint: 'Cerun = (y2 - y1) / (x2 - x1)',
                },
            ],
            medium: [
                {
                    question: 'Cari persamaan graf yang melalui titik (0, 3) dengan cerun 2',
                    answer: 'y = 2x + 3',
                    hint: 'Gunakan bentuk y = mx + c',
                },
                {
                    question: 'Apakah pintasan-x untuk graf y = 2x - 8?',
                    answer: '4',
                    hint: 'Pintasan-x adalah nilai x apabila y = 0',
                },
                {
                    question: 'Berapakah cerun garis yang melalui (1, 2) dan (3, 6)?',
                    answer: '2',
                    hint: 'Cerun = (6 - 2) / (3 - 1)',
                },
                {
                    question: 'Tuliskan persamaan graf melalui (-1, 0) dan (1, 4)',
                    answer: 'y = 2x + 2',
                    hint: 'Cari cerun terlebih dahulu, kemudian gunakan y = mx + c',
                },
                {
                    question: 'Jika y = ax + 5 melalui titik (2, 11), cari nilai a',
                    answer: '3',
                    hint: 'Gantikan x = 2 dan y = 11',
                },
            ],
            hard: [
                {
                    question: 'Cari persamaan garis yang selari dengan y = 3x + 1 dan melalui (0, -2)',
                    answer: 'y = 3x - 2',
                    hint: 'Garis selari mempunyai cerun yang sama',
                },
                {
                    question: 'Persamaan garis yang serenjang dengan y = 2x + 3 dan melalui (0, 5) adalah?',
                    answer: 'y = -0.5x + 5',
                    hint: 'Cerun serenjang adalah negatif salingan',
                },
                {
                    question: 'Cari titik persilangan untuk y = 2x + 1 dan y = -x + 4',
                    answer: '(1, 3)',
                    hint: 'Samakan kedua-dua persamaan dan selesaikan untuk x',
                },
                {
                    question: 'Tuliskan persamaan dalam bentuk ax + by + c = 0 untuk y = 2x - 5',
                    answer: '2x - y - 5 = 0',
                    hint: 'Atur semula persamaan ke bentuk umum',
                },
                {
                    question: 'Cari jarak titik (3, 4) dari garis y = x + 1',
                    answer: '√2 atau 1.414',
                    hint: 'Gunakan formula jarak titik dari garis',
                },
            ],
        },
        quadratic: {
            easy: [
                {
                    question: 'Apakah nilai diskriminan untuk y = x² + 2x + 1?',
                    answer: '0',
                    hint: 'Diskriminan = b² - 4ac, di mana a=1, b=2, c=1',
                },
                {
                    question: 'Berapakah akar-akar untuk x² - 5x + 6 = 0?',
                    answer: '2 dan 3',
                    hint: 'Faktorkan atau gunakan formula kuadratik',
                },
                {
                    question: 'Apakah titik puncak (vertex) untuk y = (x - 2)²?',
                    answer: '(2, 0)',
                    hint: 'Bentuk puncak ialah y = (x - h)² + k',
                },
                {
                    question: 'Berapa nilai c untuk y = x² + 3x + c melalui (1, 5)?',
                    answer: '1',
                    hint: 'Gantikan x = 1 dan y = 5',
                },
                {
                    question: 'Apakah pintasan-y untuk y = 2x² + 3x - 5?',
                    answer: '-5',
                    hint: 'Pintasan-y adalah nilai c',
                },
            ],
            medium: [
                {
                    question: 'Tuliskan y = x² + 4x + 3 dalam bentuk puncak',
                    answer: 'y = (x + 2)² - 1',
                    hint: 'Lengkapkan kuasa dua',
                },
                {
                    question: 'Cari pintasan-x untuk y = x² - 4',
                    answer: '2 dan -2',
                    hint: 'Setkan y = 0 dan selesaikan',
                },
                {
                    question: 'Apakah persamaan parabola dengan puncak (1, 2) dan melalui (2, 5)?',
                    answer: 'y = 3(x - 1)² + 2',
                    hint: 'Gunakan bentuk puncak y = a(x - h)² + k',
                },
                {
                    question: 'Jika y = ax² dan melalui (2, 8), cari nilai a',
                    answer: '2',
                    hint: 'Gantikan x = 2 dan y = 8',
                },
                {
                    question: 'Berapa nilai minimum untuk y = x² - 6x + 5?',
                    answer: '-4',
                    hint: 'Gunakan formula x = -b/2a atau lengkapkan kuasa dua',
                },
            ],
            hard: [
                {
                    question: 'Cari persamaan parabola yang melalui (1, 0), (2, 0), dan (0, 4)',
                    answer: 'y = -2x² + 6x - 4',
                    hint: 'Gunakan tiga titik untuk membentuk sistem persamaan',
                },
                {
                    question: 'Apakah diskriminan untuk x² - 6x + 9 = 0?',
                    answer: '0',
                    hint: 'Diskriminan = b² - 4ac = 36 - 36',
                },
                {
                    question: 'Tuliskan persamaan dengan akar-akar 3 dan -2',
                    answer: 'x² - x - 6 = 0',
                    hint: 'Gunakan (x - 3)(x + 2) = 0',
                },
                {
                    question: 'Cari nilai k jika x² + kx + 4 mempunyai akar yang sama',
                    answer: '4 atau -4',
                    hint: 'Untuk akar yang sama, diskriminan = 0',
                },
                {
                    question: 'Tentukan julat untuk y = -x² + 4',
                    answer: 'y ≤ 4',
                    hint: 'Parabola terbuka ke bawah dengan maksimum 4',
                },
            ],
        },
        exponential: {
            easy: [
                {question: 'Apakah nilai 2³?', answer: '8', hint: '2 × 2 × 2'},
                {question: 'Apakah nilai 5⁰?', answer: '1', hint: 'Apa-apa nombor dipangkat 0 ialah 1'},
                {question: 'Apakah nilai 10²?', answer: '100', hint: '10 × 10'},
                {question: 'Apakah nilai 3⁴?', answer: '81', hint: '3 × 3 × 3 × 3'},
                {question: 'Apakah nilai 2⁵?', answer: '32', hint: '2 × 2 × 2 × 2 × 2'},
            ],
            medium: [
                {question: 'Selesaikan: 2ˣ = 16', answer: '4', hint: '2⁴ = 16'},
                {question: 'Selesaikan: 3ˣ = 27', answer: '3', hint: '3³ = 27'},
                {question: 'Apakah nilai log₂(8)?', answer: '3', hint: '2³ = 8'},
                {question: 'Selesaikan: 5ˣ = 125', answer: '3', hint: '5³ = 125'},
                {question: 'Apakah nilai log₁₀(100)?', answer: '2', hint: '10² = 100'},
            ],
            hard: [
                {question: 'Selesaikan: 2ˣ × 2³ = 32', answer: '2', hint: '2ˣ⁺³ = 2⁵'},
                {question: 'Apakah nilai e (anggaran)?', answer: '2.718', hint: 'Pemalar Euler'},
                {question: 'Selesaikan: e^x = 10', answer: 'ln(10) atau 2.303', hint: 'Gunakan logaritma asli'},
                {question: 'Cari x: 10²ˣ = 1000', answer: '1.5', hint: '10²ˣ = 10³'},
                {question: 'Apakah nilai ln(e)?', answer: '1', hint: 'ln adalah songsangan e^x'},
            ],
        },
        trigonometric: {
            easy: [
                {question: 'Apakah nilai sin(90°)?', answer: '1', hint: 'sin 90° ialah maksimum'},
                {question: 'Apakah nilai cos(0°)?', answer: '1', hint: 'cos 0° ialah 1'},
                {question: 'Apakah nilai tan(45°)?', answer: '1', hint: 'tan 45° ialah 1'},
                {question: 'Apakah nilai sin(0°)?', answer: '0', hint: 'sin 0° ialah 0'},
                {question: 'Apakah nilai cos(90°)?', answer: '0', hint: 'cos 90° ialah 0'},
            ],
            medium: [
                {question: 'Apakah nilai sin(30°)?', answer: '0.5', hint: 'sin 30° = 1/2'},
                {question: 'Apakah nilai cos(60°)?', answer: '0.5', hint: 'cos 60° = 1/2'},
                {question: 'Apakah nilai sin(180°)?', answer: '0', hint: 'sin 180° ialah 0'},
                {question: 'Apakah sin²θ + cos²θ =?', answer: '1', hint: 'Identiti trigonometri'},
                {question: 'Apakah nilai tan(0°)?', answer: '0', hint: 'tan 0° ialah 0'},
            ],
            hard: [
                {question: 'Selesaikan: sin(x) = 0.5, untuk 0° ≤ x ≤ 360°', answer: '30° dan 150°', hint: 'Cari kedua-dua sudut'},
                {question: 'Apakah tempoh fungsi sin(x)?', answer: '360° atau 2π', hint: 'Berapa lama untuk ulangi'},
                {question: 'Selesaikan: cos(2x) = 0.5', answer: 'x = 60° atau x = 300°', hint: 'Gunakan formula sudut berganda'},
                {question: 'Apakah amplitud untuk y = 3sin(x)?', answer: '3', hint: 'Pekali di hadapan sin'},
                {question: 'Apakah nilai tan(60°)?', answer: '√3 atau 1.732', hint: 'tan 60° = √3'},
            ],
        },
    },
    en: {
        linear: {
            easy: [
                {
                    question: 'What is the value of y when x = 2 for the equation y = 2x + 1?',
                    answer: '5',
                    hint: 'Substitute x = 2 into the equation',
                },
                {
                    question: 'What is the slope of the line y = 3x + 2?',
                    answer: '3',
                    hint: 'The slope is the coefficient of x',
                },
                {
                    question: 'What is the y-intercept for y = x - 4?',
                    answer: '-4',
                    hint: 'The y-intercept is the value when x = 0',
                },
                {
                    question: 'What is y when x = 0 for y = -2x + 6?',
                    answer: '6',
                    hint: 'Substitute x = 0',
                },
                {
                    question: 'What is the slope through (0, 0) and (1, 5)?',
                    answer: '5',
                    hint: 'Slope = (y2 - y1) / (x2 - x1)',
                },
            ],
            medium: [
                {
                    question: 'Find the equation passing through (0, 3) with slope 2',
                    answer: 'y = 2x + 3',
                    hint: 'Use the form y = mx + c',
                },
                {
                    question: 'What is the x-intercept for y = 2x - 8?',
                    answer: '4',
                    hint: 'Set y = 0 and solve',
                },
                {
                    question: 'What is the slope through (1, 2) and (3, 6)?',
                    answer: '2',
                    hint: 'Use the slope formula',
                },
                {
                    question: 'Write the equation through (-1, 0) and (1, 4)',
                    answer: 'y = 2x + 2',
                    hint: 'Find the slope first',
                },
                {
                    question: 'If y = ax + 5 passes through (2, 11), find a',
                    answer: '3',
                    hint: 'Substitute the point into the equation',
                },
            ],
            hard: [
                {
                    question: 'Find the parallel line to y = 3x + 1 through (0, -2)',
                    answer: 'y = 3x - 2',
                    hint: 'Parallel lines have same slope',
                },
                {
                    question: 'Find the perpendicular line to y = 2x + 3 through (0, 5)',
                    answer: 'y = -0.5x + 5',
                    hint: 'Perpendicular slope is the negative reciprocal',
                },
                {
                    question: 'Find the intersection of y = 2x + 1 and y = -x + 4',
                    answer: '(1, 3)',
                    hint: 'Set the equations equal',
                },
                {
                    question: 'Write in standard form: y = 2x - 5',
                    answer: '2x - y - 5 = 0',
                    hint: 'Rearrange the equation',
                },
                {
                    question: 'Find the distance from (3, 4) to the line y = x + 1',
                    answer: '√2 or 1.414',
                    hint: 'Use the distance formula',
                },
            ],
        },
        quadratic: {
            easy: [
                {question: 'What is the discriminant for y = x² + 2x + 1?', answer: '0', hint: 'b² - 4ac = 4 - 4'},
                {question: 'What are the roots of x² - 5x + 6 = 0?', answer: '2 and 3', hint: 'Factor the quadratic'},
                {question: 'What is the vertex of y = (x - 2)²?', answer: '(2, 0)', hint: 'Vertex form is y = (x - h)² + k'},
                {question: 'Find c for y = x² + 3x + c through (1, 5)', answer: '1', hint: 'Substitute the point'},
                {question: 'What is the y-intercept for y = 2x² + 3x - 5?', answer: '-5', hint: 'Set x = 0'},
            ],
            medium: [
                {question: 'Write y = x² + 4x + 3 in vertex form', answer: 'y = (x + 2)² - 1', hint: 'Complete the square'},
                {question: 'Find the x-intercepts for y = x² - 4', answer: '2 and -2', hint: 'Set y = 0'},
                {question: 'Find the parabola equation with vertex (1, 2) through (2, 5)', answer: 'y = 3(x - 1)² + 2', hint: 'Use vertex form'},
                {question: 'If y = ax² through (2, 8), find a', answer: '2', hint: 'Substitute the point'},
                {question: 'What is the minimum for y = x² - 6x + 5?', answer: '-4', hint: 'Complete the square'},
            ],
            hard: [
                {question: 'Find the parabola through (1, 0), (2, 0), (0, 4)', answer: 'y = -2x² + 6x - 4', hint: 'Use three equations'},
                {question: 'What is the discriminant for x² - 6x + 9 = 0?', answer: '0', hint: 'Perfect square'},
                {question: 'Write an equation with roots 3 and -2', answer: 'x² - x - 6 = 0', hint: 'Use (x - r₁)(x - r₂)'},
                {question: 'Find k if x² + kx + 4 has equal roots', answer: '4 or -4', hint: 'Discriminant = 0'},
                {question: 'Determine the range for y = -x² + 4', answer: 'y ≤ 4', hint: 'Opens downward'},
            ],
        },
        exponential: {
            easy: [
                {question: 'What is 2³?', answer: '8', hint: '2 × 2 × 2'},
                {question: 'What is 5⁰?', answer: '1', hint: 'Any number to power 0 is 1'},
                {question: 'What is 10²?', answer: '100', hint: '10 × 10'},
                {question: 'What is 3⁴?', answer: '81', hint: '3 × 3 × 3 × 3'},
                {question: 'What is 2⁵?', answer: '32', hint: '2 × 2 × 2 × 2 × 2'},
            ],
            medium: [
                {question: 'Solve: 2ˣ = 16', answer: '4', hint: '2⁴ = 16'},
                {question: 'Solve: 3ˣ = 27', answer: '3', hint: '3³ = 27'},
                {question: 'What is log₂(8)?', answer: '3', hint: '2³ = 8'},
                {question: 'Solve: 5ˣ = 125', answer: '3', hint: '5³ = 125'},
                {question: 'What is log₁₀(100)?', answer: '2', hint: '10² = 100'},
            ],
            hard: [
                {question: 'Solve: 2ˣ × 2³ = 32', answer: '2', hint: '2ˣ⁺³ = 2⁵'},
                {question: 'What is e (approximate)?', answer: '2.718', hint: 'Eulers number'},
                {question: 'Solve: e^x = 10', answer: 'ln(10) or 2.303', hint: 'Use natural logarithm'},
                {question: 'Find x: 10²ˣ = 1000', answer: '1.5', hint: '10²ˣ = 10³'},
                {question: 'What is ln(e)?', answer: '1', hint: 'ln is the inverse of e^x'},
            ],
        },
        trigonometric: {
            easy: [
                {question: 'What is sin(90°)?', answer: '1', hint: 'sin 90° is the maximum'},
                {question: 'What is cos(0°)?', answer: '1', hint: 'cos 0° equals 1'},
                {question: 'What is tan(45°)?', answer: '1', hint: 'tan 45° equals 1'},
                {question: 'What is sin(0°)?', answer: '0', hint: 'sin 0° is 0'},
                {question: 'What is cos(90°)?', answer: '0', hint: 'cos 90° is 0'},
            ],
            medium: [
                {question: 'What is sin(30°)?', answer: '0.5', hint: 'sin 30° = 1/2'},
                {question: 'What is cos(60°)?', answer: '0.5', hint: 'cos 60° = 1/2'},
                {question: 'What is sin(180°)?', answer: '0', hint: 'sin 180° is 0'},
                {question: 'sin²θ + cos²θ = ?', answer: '1', hint: 'Pythagorean identity'},
                {question: 'What is tan(0°)?', answer: '0', hint: 'tan 0° is 0'},
            ],
            hard: [
                {question: 'Solve: sin(x) = 0.5, for 0° ≤ x ≤ 360°', answer: '30° and 150°', hint: 'Find both angles'},
                {question: 'What is the period of sin(x)?', answer: '360° or 2π', hint: 'When does it repeat'},
                {question: 'Solve: cos(2x) = 0.5', answer: 'x = 60° or x = 300°', hint: 'Use double angle formula'},
                {question: 'What is the amplitude of y = 3sin(x)?', answer: '3', hint: 'The coefficient in front'},
                {question: 'What is tan(60°)?', answer: '√3 or 1.732', hint: 'tan 60° = √3'},
            ],
        },
    },
};

function startTopic(topic) {
    state.currentTopic = topic;
    state.currentQuestion = 0;
    state.currentAnswerIndex = 0;

    const dbQuestions = questionDatabase[state.currentLanguage]?.[topic]?.[state.currentDifficulty] || [];

    if (dbQuestions.length === 0) {
        showFeedback('No questions available', 'error');
        return;
    }

    state.questions = [...dbQuestions].sort(() => Math.random() - 0.5);
    displayQuestion();
    showPage('questionContainer');
}

function displayQuestion() {
    if (state.currentQuestion >= state.questions.length) {
        showSuccessPage();
        return;
    }

    const question = state.questions[state.currentQuestion];
    const questionDiv = document.getElementById('questionContent');
    questionDiv.innerHTML = `<h3>${state.currentQuestion + 1}. ${question.question}</h3>`;

    const progress = ((state.currentQuestion + 1) / state.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = `${state.currentQuestion + 1}/${state.questions.length}`;

    const feedbackDiv = document.getElementById('feedbackMessage');
    feedbackDiv.className = 'feedback-message';
    feedbackDiv.textContent = '';

    const answerInput = document.getElementById('answerInput');
    answerInput.value = '';
    answerInput.focus();
}

function submitAnswer(event) {
    event.preventDefault();
    const answer = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswer = state.questions[state.currentQuestion].answer.toLowerCase();

    const feedbackDiv = document.getElementById('feedbackMessage');

    if (answer === correctAnswer) {
        state.score += 20;
        state.questionsAnswered++;
        feedbackDiv.className = 'feedback-message success';
        const praise = getRandomPraise();
        feedbackDiv.textContent = praise;

        setTimeout(() => {
            state.currentQuestion++;
            displayQuestion();
        }, 1500);
    } else {
        feedbackDiv.className = 'feedback-message error';
        const failMeme = getRandomFailMeme();
        feedbackDiv.textContent = `${failMeme}\n\n✓ ${state.currentLanguage === 'ms' ? 'Jawapan' : 'Answer'}: ${state.questions[state.currentQuestion].answer}`;
    }
}

function showHint() {
    const hint = state.questions[state.currentQuestion].hint;
    document.getElementById('hintContent').textContent = hint;
    showPage('hintPage');
}

// ========================================
// GUESS THE GRAPH GAME
// ========================================

let gameChart = null;
let currentGameType = '';

function initializeGuessTheGraph() {
    state.currentQuestion = 0;
    displayGameQuestion();
}

function displayGameQuestion() {
    if (state.currentQuestion >= 5) {
        showSuccessPage();
        showPage('success');
        return;
    }

    const graphTypes = ['Linear', 'Quadratic', 'Exponential', 'Cubic'];
    const randomIndex = Math.floor(Math.random() * graphTypes.length);
    currentGameType = graphTypes[randomIndex];

    const canvas = document.getElementById('gameChart');
    const ctx = canvas.getContext('2d');

    const labels = Array.from({ length: 10 }, (_, i) => i - 4);
    let data;

    if (currentGameType === 'Linear') {
        const slope = Math.random() * 4 - 2;
        data = labels.map(x => slope * x + (Math.random() - 0.5) * 2);
    } else if (currentGameType === 'Quadratic') {
        data = labels.map(x => x * x + (Math.random() - 0.5) * 2);
    } else if (currentGameType === 'Exponential') {
        data = labels.map(x => Math.pow(2, x / 2) + (Math.random() - 0.5) * 2);
    } else {
        data = labels.map(x => x * x * x + (Math.random() - 0.5) * 5);
    }

    if (gameChart) gameChart.destroy();

    gameChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Graph',
                data: data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true,
            }],
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } },
        },
    });

    const optionsDiv = document.getElementById('graphOptions');
    optionsDiv.innerHTML = '';

    graphTypes.forEach(type => {
        const btn = document.createElement('button');
        btn.className = 'graph-option-btn';
        btn.textContent = type;
        btn.onclick = () => checkGraphAnswer(type, currentGameType, btn);
        optionsDiv.appendChild(btn);
    });

    const gameProgress = ((state.currentQuestion + 1) / 5) * 100;
    document.getElementById('gameProgressFill').style.width = gameProgress + '%';
    document.getElementById('gameCounter').textContent = `${state.currentQuestion + 1}/5`;
}

function checkGraphAnswer(selected, correct, btn) {
    const msgDiv = document.getElementById('gameMessage');

    if (selected === correct) {
        state.score += 10;
        msgDiv.className = 'feedback-message success';
        const praise = getRandomPraise();
        msgDiv.textContent = praise;
        btn.classList.add('selected');

        setTimeout(() => {
            state.currentQuestion++;
            msgDiv.className = 'feedback-message';
            displayGameQuestion();
        }, 1500);
    } else {
        msgDiv.className = 'feedback-message error';
        const failMeme = getRandomFailMeme();
        msgDiv.textContent = `${failMeme}\n\n✓ ${state.currentLanguage === 'ms' ? 'Jawapan' : 'Answer'}: ${correct}`;
    }
}

// ========================================
// AI TUTOR - NO API KEY NEEDED
// ========================================

function initializeAiTutor() {
    displaySuggestedQuestions();
    state.chatHistory = [];
    document.getElementById('chatMessages').innerHTML = '';
}

function displaySuggestedQuestions() {
    const container = document.getElementById('suggestedQuestionsContainer');
    container.innerHTML = '';

    const questions = suggestedQuestions[state.currentLanguage] || suggestedQuestions.en;
    questions.forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'suggestion-btn';
        btn.textContent = q;
        btn.onclick = () => {
            document.getElementById('userQuestion').value = q;
            sendQuestion({ preventDefault: () => {} });
        };
        container.appendChild(btn);
    });
}

function sendQuestion(event) {
    event.preventDefault();
    const question = document.getElementById('userQuestion').value.trim();

    if (!question) return;

    addChatMessage(question, 'user');
    document.getElementById('userQuestion').value = '';

    // Show loading indicator briefly
    addChatMessage(state.currentLanguage === 'ms' ? '⏳ Mencari jawapan...' : '⏳ Finding answer...', 'ai-loading');

    // Get response from knowledge base (instant, no API)
    setTimeout(() => {
        const response = searchMathKnowledge(question);
        
        // Remove loading message
        const chatMessages = document.getElementById('chatMessages');
        const lastMessage = chatMessages.lastElementChild;
        if (lastMessage && lastMessage.classList.contains('ai-loading')) {
            lastMessage.remove();
        }

        addChatMessage(response, 'ai');
    }, 500);
}

function addChatMessage(content, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = `message ${sender}`;
    
    // Format text with line breaks
    const formattedContent = content.replace(/\n/g, '<br>');
    messageEl.innerHTML = `<div class="message-content">${formattedContent}</div>`;
    
    messagesDiv.appendChild(messageEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ========================================
// MENU & STATS
// ========================================

function initializeMenu() {
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.addEventListener('click', function () {
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentDifficulty = this.getAttribute('data-difficulty');
        });
    });

    const activeDiff = document.querySelector(`[data-difficulty="${state.currentDifficulty}"]`);
    if (activeDiff) activeDiff.classList.add('active');

    document.getElementById('score').textContent = state.score;
}

function displayStats() {
    const statsContent = document.getElementById('statsContent');
    const accuracy = state.questionsAnswered > 0 ? Math.round((state.score / (state.questionsAnswered * 20)) * 100) : 0;

    statsContent.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${state.score}</div>
            <div class="stat-label">${state.currentLanguage === 'ms' ? 'Jumlah Markah' : 'Total Score'}</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${state.questionsAnswered}</div>
            <div class="stat-label">${state.currentLanguage === 'ms' ? 'Soalan Dijawab' : 'Answered'}</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${accuracy}%</div>
            <div class="stat-label">${state.currentLanguage === 'ms' ? 'Ketepatan' : 'Accuracy'}</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${state.currentUser || '-'}</div>
            <div class="stat-label">${state.currentLanguage === 'ms' ? 'Pelajar' : 'Student'}</div>
        </div>
    `;
}

function showSuccessPage() {
    const accuracy = state.questionsAnswered > 0 ? Math.round((state.score / (state.questionsAnswered * 20)) * 100) : 0;
    const finalScore = Math.min(state.score, 100);

    document.getElementById('finalScore').textContent = finalScore;

    const t = translations[state.currentLanguage];
    document.getElementById('successTitle').textContent = t.successTitle;
    document.getElementById('successText').textContent = t.successText;

    const performanceText = document.getElementById('performanceText');
    if (accuracy >= 80) {
        performanceText.textContent = state.currentLanguage === 'ms' ? '🌟 Cemerlang!' : '🌟 Excellent!';
    } else if (accuracy >= 60) {
        performanceText.textContent = state.currentLanguage === 'ms' ? '👍 Bagus! Teruskan.' : '👍 Good! Keep going.';
    } else {
        performanceText.textContent = state.currentLanguage === 'ms' ? '💪 Coba lagi!' : '💪 Try again!';
    }

    if (state.score >= 80) {
        document.getElementById('level2Btn').style.display = 'block';
    }
}

function showFeedback(message, type = 'warning') {
    const feedback = document.getElementById('feedbackMessage');
    if (feedback) {
        feedback.textContent = message;
        feedback.className = `feedback-message ${type}`;
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});
