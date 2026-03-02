const questions = [
    {
        question: "What's your college name?",
        answers: [
            { text: "SAITM", correct: true },
            { text: "GITM", correct: false },
            { text: "World", correct: false },
            { text: "BM", correct: false },
        ]
    },
    {
        question: "Which language is used for web development?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false },
        ]
    },
    {
        question: "Which tag is used for JavaScript?",
        answers: [
            { text: "script", correct: true },
            { text: "js", correct: false },
            { text: "javascript", correct: false },
            { text: "code", correct: false },
        ]
    },
    {
        question: "HTML stands for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "None", correct: false },
        ]
    }
];

const quesElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next");

let questionnumber = 0;
let score = 0;

function startQuiz() {
    questionnumber = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQ();
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function showQ() {
    resetState();

    if (questionnumber >= questions.length) {
        showScore();
        return;
    }

    let currQ = questions[questionnumber];
    quesElement.innerHTML = `${questionnumber + 1}. ${currQ.question}`;

    currQ.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectans);
    });
}

function selectans(e) {
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct === "true";

    if (iscorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("correct");
        selectBtn.classList.add("incorrect");
    }
    
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function handleNext() {
    questionnumber++;
    showQ();
}

function showScore() {
    resetState();
    quesElement.innerHTML = `Your Score: ${score} / ${questions.length}`;
    nextBtn.innerHTML = "Restart";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (questionnumber < questions.length) {
        handleNext();
    } else {
        startQuiz();
    }
});

startQuiz();