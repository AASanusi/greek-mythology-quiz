/* Parts of this project was assisted and inspired by
* simplestepcode.com and watching youtube tutorial
* from Brian Design (https://www.youtube.com/watch?v=f4fB9Xg2JEY)
*/

// Questions and answers for the quiz
let questions = [
    {
        question: "Who was the ruler of Olympus?",
        a: "Hades",
        b: "Apollo",
        c: "Zeus",
        d: "Hermes",
        answer: 3,
    },
    {
        question: "Who was the goddess of beauty and love?",
        a: "Hera",
        b: "Aphrodite",
        c: "Demeter",
        d: "Persephone",
        answer: 2,
    }, {
        question: "Which demi-god defeated Medusa?",
        a: "Theseus",
        b: "Hercules",
        c: "Dionysus",
        d: "Perseus",
        answer: 4,
    }, {
        question: "How many years did the war between the Olympians and Titans last for?",
        a: "27 years",
        b: "12 years",
        c: "62 years",
        d: "10 years",
        answer: 4,
    }, {
        question: "What was the name of hades three-headed dog called?",
        a: "Cerberus",
        b: "Chimera",
        c: "Hecatoncheires",
        d: "Nemean Lion",
        answer: 1,
    }
]

// const variables
const question = document.getElementById("question");
const selections = Array.from(document.getElementsByClassName("selection-text"));
const displayText = document.getElementById("displayText");
const scoreText = document.getElementById("score");
const displayBarProgress = document.getElementById("displayBarProgress");

// variables for running the game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


const scorePoints = 10;
const maxQuestions = 5;

// How to write a function taken from W3schools

/* Function that starts the game
 * keeps track of scores and questions
 * and sets new one
 */

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/* To keep track of the scores
 * and to increase displaybar when
 * moving throught the questions
 */

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("end.html");
    }

    questionCounter++;
    displayText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
    displayBarProgress.style.width = `${(questionCounter/maxQuestions) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    selections.forEach((choice, i) => {
        choice.innerText = currentQuestion[String.fromCharCode(97 +i)];
    });

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

selections.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedSelection = e.target;
        const selectedAnswer = selectedSelection.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === "correct") {
            incrementScore(scorePoints);
        }

        selectedSelection.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedSelection.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};


startGame();