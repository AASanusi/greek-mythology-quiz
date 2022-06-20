// const variables
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const displayText = document.getElementById("displayText");
const scoreText = document.getElementById("score");
const displayBarProgress = document.getElementById("displayBarProgress");

// let variables for running the game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions and answers for the quiz
let questions = [{
        question: "Who was the ruler of Olympus?",
        answer1: "Hades",
        answer2: "Apollo",
        answer3: "Zeus",
        answer4: "Hermes",
        correctAnswer: 3,
    },
    {
        question: "Who was the goddess of beauty and love?",
        answer1: "Hera",
        answer2: "Aphrodite",
        answer3: "Demeter",
        answer4: "Persephone",
        correctAnswer: 2,
    }, {
        question: "Which demi-god defeated Medusa?",
        answer1: "Theseus",
        answer2: "Hercules",
        answer3: "Dionysus",
        answer4: "Perseus",
        correctAnswer: 4,
    }, {
        question: "How many years did the war between the Olympians and Titans last for?",
        answer1: "27 years",
        answer2: "12 years",
        answer3: "62 years",
        answer4: "10 years",
        correctAnswer: 4,
    }, {
        question: "What was the name of hades three-headed dog called?",
        answer1: "Cerberus",
        answer2: "Chimera",
        answer3: "Hecatoncheires",
        answer4: "Nemean Lion",
        correctAnswer: 1,
    }
]

const scorePoints = 10;
const maxQuestions = 5;

// How to write a function taken from W3schools

// Function that keeps score, progression and sets new questions

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}