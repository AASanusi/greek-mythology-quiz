/* Parts of this project was assisted and inspired by
* simplestepcode.com and watching youtube tutorial
* from Brian Design (https://www.youtube.com/watch?v=f4fB9Xg2JEY)
*/

// Variables to target Ids and classess
const name = document.getElementById("name");
const totalScore = document.getElementById("totalScore");
const saveScoreButton = document.getElementById("saveScoreButton");
const mostRecentScore = document.querySelector("#mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const maxHighScores = 5;

finalScore.innerText = mostRecentScore