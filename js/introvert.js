const questions = [
    {
        question: "Anda sangat bersemangat saat...",
        options: [
            { text: "Sendirian", type: "introvert" },
            { text: "Bersama orang lain", type: "ekstrovert" }
        ]
    },
    {
        question: "Saat bersama teman-teman, Anda merasa?",
        options: [
            { text: "Asyik dan ingin mengobrol lebih lama", type: "ekstrovert" },
            { text: "Lebih banyak diam dan baru berbicara saat situasinya nyaman", type: "introvert" }
        ]
    },
    {
        question: "Saat sedang melakukan aktivitas tugas kelompok, semangat Anda menggebu-gebu...",
        options: [
            { text: "Anda merasa lelah dan ingin pulang padahal pekerjaan belum selesai", type: "introvert" },
            { text: "Saking semangatnya kamu menjadi orang terakhir yang pulang", type: "ekstrovert" }
        ]
    },
    {
        question: "Manakah yang paling sesuai dengan Anda?",
        options: [
            { text: "Mempunyai sedikit teman dekat", type: "introvert" },
            { text: "Mempunyai banyak teman dekat dan kenalan", type: "ekstrovert" }
        ]
    },
    {
        question: "Teman-teman Anda bilang bahwa Anda itu orangnya...",
        options: [
            { text: "Pendiam dan hanya bicara seperlunya", type: "introvert" },
            { text: "Cerewet", type: "ekstrovert" }
        ]
    },
    {
        question: "Pertanyaan mana yang paling sesuai dengan Anda?",
        options: [
            { text: "Anda lebih suka beraktivitas di rumah seperti nonton film, bermain video game, atau menghabiskan waktu Bersama keluarga", type: "introvert" },
            { text: "Anda suka pergi bersama teman-teman ke tempat yang ramai", type: "ekstrovert" }
        ]
    },
    {
        question: "Bagaimana Anda mengenal teman-teman Anda?",
        options: [
            { text: "Rata-rata dikenalkan oleh keluarga, saudara, atau teman", type: "introvert" },
            { text: "Berkenalan langsung di kampus, café, pesta, tempat kerja, dan tempat rekreasi ", type: "ekstrovert" }
        ]
    },
    {
        question: "Bagaimana penilaian orang lain terhadap diri Anda?",
        options: [
            { text: "Tenang, enak untuk diajak ngobrol, dan pandai menjaga rahasia", type: "introvert" },
            { text: "Pandai bergaul, berkomunikasi, dan aktif ", type: "ekstrovert" }
        ]
    },
    {
        question: "Jika boleh memilih, hadiah mana yang akan Anda pilih dibawah ini?",
        options: [
            { text: "Buku kesukaan dan parfum", type: "introvert" },
            { text: "Voucher gym dan sandal travel ", type: "ekstrovert" }
        ]
    },
    {
        question: "Bagaimana reaksi Anda ketika mendengar kabar yang mengejutkan?",
        options: [
            { text: "Langsung terkejut dan menunjukkan reaksi", type: "introvert" },
            { text: "Mencerna dan berpikir lebih dahulu ", type: "ekstrovert" }
        ]
    },
];

let currentQuestionIndex = 0;
let introvertScore = 0;
let ekstrovertScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    introvertScore = 0;
    ekstrovertScore = 0;
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
        button.className = option.type === "introvert" ? "introvert" : "ekstrovert";
        button.onclick = () => selectOption(option.type);
        optionsElement.appendChild(button);
    });
}

function selectOption(type) {
    if (type === "introvert") {
        introvertScore++;
    } else {
        ekstrovertScore++;
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

    if (introvertScore > ekstrovertScore) {
        resultElement.innerText = "Anda lebih cenderung Introvert!. Anda merupakan individu yang lebih merasa senang untuk menghabiskan waktu sendirian. Ketika bersama orang lain, Anda akan memilih untuk lebih banyak diam di awal dan baru akan berbicara ketika sudah mulai nyaman dengan suasananya. Anda akan mudah untuk merasa lelah jika dihadapkan dengan tugas-tugas yang melibatkan kelompok ataupun orang banyak, sehingga akan memiliki keinginan untuk cepat menyelesaikannya dan pulang. Anda merupakan pribadi yang memiliki beberapa kerabat dekat yang dapat Anda ajak bicara dengan leluasa, sehingga jika bersama kerabat baru, kesan awal mereka terhadapmu adalah seseorang yang pendiam dan bicara seperlunya. ";
    } else if (ekstrovertScore > introvertScore) {
        resultElement.innerText = "Anda lebih cenderung Ekstrovert!. Anda merupakan individu yang cenderung lebih senang menghabiskan waktu dengan orang lain. Baik itu bersama keluarga, maupun teman dekat. Saat sedang berkumpul bersama kerabat, Anda akan lebih merasa memiliki banyak energi sehingga membuatmu memiliki keinginan untuk bercengkrama lebih lama. Anda dapat dikategorikan sebagai individu yang senang ketika mendapat tugas yang bersifat kelompok, sehingga membuatmu memiliki intensitas yang lebih banyak dalam bertemu dengan teman atau kenalan. Anda biasa dikenal sebagai pribadi yang pandai bergaul, berkomunikasi, dan aktif dalam kegiatan bersosialiasi.";
    } else {
        resultElement.innerText = "Anda seimbang antara Introvert dan Ekstrovert!. Tetap bersosialisasi pada lingkungan disekitarmu.";
    }
}

// Start the quiz when the page loads
startQuiz();
