let currentQuestion = 1;
const answers = {
    1: 'yes', 2: 'yes', 3: 'no', 4: 'yes',
    5: 'yes', 6: 'yes', 7: 'yes', 8: 'yes'
};

// Tombol Start Quiz
document.getElementById('startBtn').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('q1').style.display = 'block';
});

// Fungsi Cek Jawaban
function checkAnswer(questionNumber, userAnswer) {
    let questionDiv = document.getElementById('q' + questionNumber);

    // Hapus class lama biar tidak numpuk efeknya
    questionDiv.classList.remove('correct', 'wrong');

    if (userAnswer === answers[questionNumber]) {
        questionDiv.classList.add('correct');  
        setTimeout(() => {
            questionDiv.style.display = 'none';  
            currentQuestion++;
            let nextQuestion = document.getElementById('q' + currentQuestion);
            if (nextQuestion) {
                nextQuestion.style.display = 'block';  
            } else {
                startLoveAnimation();  
            }
        }, 500); // Delay biar user lihat efek warna dulu
    } else {
        questionDiv.classList.add('wrong');
    }
}

// Efek Animasi Hati
function startLoveAnimation() {
    const love = document.getElementById("love");
    love.style.display = "block";
    love.classList.add("spin");

    setTimeout(() => {
        love.classList.add("grow");
    }, 2000);

    setTimeout(() => {
        love.classList.add("explode");
    }, 4000);

    setTimeout(() => {
        love.style.display = "none";
        showExplosionText();
    }, 5000);
}

// Teks Setelah Animasi
function showExplosionText() {
    const text = document.getElementById("explosionText");
    text.innerHTML = "🎉 Happy Birthday Mamah !! Sehat Selalu dan Panjang Umur 🎉<br>💰 Jangan Lupa Ya Duit Hehehe 💰";
    text.style.display = "block";
    text.style.textAlign = "center";
}
