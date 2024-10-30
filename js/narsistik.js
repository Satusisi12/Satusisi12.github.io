const questions = [
    {
        question: "Pernyataan mana yang paling cocok dengan Anda?",
        options: [
            { text: "Saya tahu saya baik karena semua orang terus mengatakannya kepada saya", type: "narsistik" },
            { text: "Ketika orang memuji saya, saya terkadang merasa malu", type: "empati" }
        ]
    },
    {
        question: "Apakah kamu membutuhkan kekaguman lebih terhadap orang lain?",
        options: [
            { text: "Tidak", type: "empati" },
            { text: "Ya", type: "narsistik" }
        ]
    },
    {
        question: "Apakah Anda percaya bahwa Anda istimewa, unik, dan hanya dapat dipahami atau harus bergaul dengan orang/lembaga istimewa/orang berstatus tinggi lainnya?",
        options: [
            { text: "Ya", type: "narsistik" },
            { text: "Tidak", type: "empati" }
        ]
    },
    {
        question: "Ketika mendapatkan suatu tantangan, Anda akan?",
        options: [
            { text: "Saya akan melakukan apa saja jika diberikan tantangan", type: "narsistik" },
            { text: "Saya akan cenderung melakukannya dengan berhati-hati", type: "empati" }
        ]
    },
    {
        question: "Pernyataan mana yang paling cocok dengan Anda?",
        options: [
            { text: "Saya mencoba menerima konsekuensi perilaku saya", type: "narsistik" },
            { text: "Biasanya saya bisa mengatasi masalah apapun dengan bicara", type: "empati" }
        ]
    },
    {
        question: "Bagaimana tanggapan Anda mengenai masa depan?",
        options: [
            { text: "Saya tidak terlalu khawatir tentang kesuksesan", type: "narsistik" },
            { text: "Saya akan sukses", type: "empati" }
        ]
    },
    {
        question: "Ketika Anda menjadi pemimpin dalam sekelompok anggota, Anda akan merasa bahwa?",
        options: [
            { text: "Saya harap saya harus lebih tegas", type: "narsistik" },
            { text: "Saya harus tegas ", type: "empati" }
        ]
    },
    {
        question: "Pernyataan yang paling cocok dengan Anda?",
        options: [
            { text: "Saya tidak suka jika mendapati diri saya memanipulasi orang lain", type: "narsistik" },
            { text: "Saya merasa mudah untuk memanipulasi orang ", type: "empati" }
        ]
    },
    {
        question: "Pernyataan yang paling cocok dengan Anda?",
        options: [
            { text: "Saya ingin menjadi berarti di mata orang-orang sekitar saya", type: "narsistik" },
            { text: "Saya hanya ingin cukup Bahagia ", type: "empati" }
        ]
    },
    {
        question: "Bagaimana tanggapan Anda mengenai tubuh Anda?",
        options: [
            { text: "Tidak ada yang istimewa terhadap tubuh saya", type: "narsistik" },
            { text: "Saya sangat suka memperhatikan tubuh saya ", type: "empati" }
        ]
    },
];

let currentQuestionIndex = 0;
let empatiScore = 0;
let narsistikScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    narsistikScore = 0;
    empatiScore = 0;
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
        button.className = option.type === "narsistik" ? "narsistik" : "empati";
        button.onclick = () => selectOption(option.type);
        optionsElement.appendChild(button);
    });
}

function selectOption(type) {
    if (type === "narsistik") {
        narsistikScore++;
    } else {
        empatiScore++;
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

    if (narsistikScore > empatiScore) {
        resultElement.innerText = "Kamu lebih cenderung Narsistik!. Pentingnya beradaptasi agar kamu lebih mengenal dunia luar";
    } else if (empatiScore > narsistikScore) {
        resultElement.innerText = "Kamu lebih cenderung Empati!. Pentingnya beradaptasi agar kamu lebih mengenal dunia luar";
    } else {
        resultElement.innerText = "Kamu seimbang antara Narsistik dan Empati!. Pentingnya beradaptasi agar kamu lebih mengenal dunia luar";
    }
}

// Start the quiz when the page loads
startQuiz();
