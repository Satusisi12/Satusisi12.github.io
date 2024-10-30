const questions = [
    {
        question: "Orang-orang mengenal Anda sebagai pribadi yang...",
        options: [
            { text: "Logis dan suka berbicara blak-blakan", type: "thinker" },
            { text: "Sensitif dan hangat", type: "feeler" }
        ]
    },
    {
        question: "Biasanya Anda mengambil keputusan berdasarkan...",
        options: [
            { text: "Logika, sesekali menggunakan perasaan", type: "thinker" },
            { text: "Perasaan, sesekali menggunakan logika", type: "feeler" }
        ]
    },
    {
        question: "Anda sangat memperhatikan...",
        options: [
            { text: "Saat seseorang bertindak irasional", type: "thinker" },
            { text: "Saat seseorang membutuhkan bantuan dan dukungan", type: "feeler" }
        ]
    },
    {
        question: "Saat berbeda pendapat dengan teman, Anda akan...",
        options: [
            { text: "Mengungkapkan pendapat Anda secara karena menurut Anda kebenaran adalah kebenaran", type: "thinker" },
            { text: "Mencari cara agar perasaannya tidak terluka, jika tahu pendapat Anda menyakitinya maka Anda lebih memilih diam", type: "feeler" }
        ]
    },
    {
        question: "Jika terjadi perbedaan pendapat di antara Anda dan teman Anda, maka akan berlangsung dengan...",
        options: [
            { text: "Rasional", type: "thinker" },
            { text: "Hangat dan simpatik", type: "feeler" }
        ]
    },
    {
        question: "Saat membina hubungan dengan seseorang, Anda akan...",
        options: [
            { text: "Menyesuikan logika, berkomunikasi secara naluriah dan berdiskusi", type: "thinker" },
            { text: "Menyesuaikan emosi, mengekspresikan perasaan dan indera dalam merespons kebutuhan orang tersebut", type: "feeler" }
        ]
    },
    {
        question: "Saat mengakhiri sebuah hubungan, Anda akan...",
        options: [
            { text: "Melepas perasaan Anda tanpa ragu meski terasa sesak di dada", type: "thinker" },
            { text: "Melepaskan perasaan Anda hingga akhirnya paham bahwa mengakhiri hubungan itu sulit ", type: "feeler" }
        ]
    },
    {
        question: "Apa reaksi alami Anda ketika seorang teman memberi tahu Anda tentang masalah hubungan?",
        options: [
            { text: "Saya akan mendengarkannya dengan seksama", type: "thinker" },
            { text: "Saya akan membantu menemukan solusinya ", type: "feeler" }
        ]
    },
    {
        question: "Apa yang lebih penting bagi Anda?",
        options: [
            { text: "Pemikiran yang logis", type: "thinker" },
            { text: "Kasih sayang ", type: "feeler" }
        ]
    },
    {
        question: "Apa cara terbaik untuk membujuk diri Anda?",
        options: [
            { text: "Kepercayaan diri dan penjelasan yang logis", type: "thinker" },
            { text: "Daya tarik emosional yang kuat ", type: "feeler" }
        ]
    },
];

let currentQuestionIndex = 0;
let feelerScore = 0;
let thinkerScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    feelerScore = 0;
    thinkerScore = 0;
    document.getElementById("result").innerText = '';
    document.getElementById("next-button").style.display = "none";
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.className = option.type === "thinker" ? "thinker" : "feeler";
        button.onclick = () => selectOption(option.type);
        optionsElement.appendChild(button);
    });
}

function selectOption(type) {
    if (type === "thinker") {
        thinkerScore++;
    } else {
        feelerScore++;
    }
    document.getElementById("next-button").style.display = "block"; // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    document.getElementById("question").style.display = 'none';
    document.getElementById("options").style.display = 'none';
    document.getElementById("next-button").style.display = 'none';

    if (thinkerScore > feelerScore) {
        resultElement.innerText = "Kamu lebih cenderung Thinker!. Pentingnya beradaptasi agar kamu lebih mengenal dunia luar";
    } else if (feelerScore > thinkerScore) {
        resultElement.innerText = "Kamu lebih cenderung Feeler!. Pentingnya beradaptasi agar kamu lebih mengenal dunia luar";
    } else {
        resultElement.innerText = "Kamu seimbang antara Thinker dan Feeler!. Pentingnya beradaptasi agar kamu lebih mengenal dunia luar";
    }
}

// Start the quiz when the page loads
startQuiz();
