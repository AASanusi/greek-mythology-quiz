/* Parts of this project was assisted and inspired by
 * simplestepcode.com and Brian Design youtube tutorialwatching youtube tutorial
 */

// Const variables to get elements by Ids and classess
const uname = document.getElementById("uname");
const totalScore = document.getElementById("totalScore");
const saveScoreButton = document.getElementById("saveScoreButton");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


totalScore.innerText = mostRecentScore;

/* To allow users to "save" once details have been filled in box,
 * To send scores to highscores and not to automatically refresh,
 * show scores on highscores table
 */
uname.addEventListener("keyup", () => {
    saveScoreButton.disabled = !uname.value;
});

saveTotalScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: uname.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");
};