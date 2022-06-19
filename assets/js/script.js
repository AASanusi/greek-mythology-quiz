const question =  document.getElementById("question");
const answers =  Array.from(document.getElementsByClassName("answer-text"));
const progressText =  document.getElementById("progressText");
const scoreText =  document.getElementById("score");
const progressTextFull =  document.getElementById("progressTextFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
