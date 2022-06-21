/* Parts of this project was assisted and inspired by
 * simplestepcode.com and watching youtube tutorial
 * from Brian Design (https://www.youtube.com/watch?v=f4fB9Xg2JEY)
 */

// Const variables to get elements by Ids and classess
const uname = document.getElementById("uname");
const totalScore = document.getElementById("totalScore");
const saveScoreButton = document.getElementById("saveScoreButton");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const maxHighScores = 5;

finalScore.innerText = mostRecentScore;

/* To allow users to "save" once details have been filled in box,
* To send scores to highscores and not to automatically refresh,
* show scores on highscores table
*/
uname.addEventListener("keyup", () => {
    saveScoreButton.disabled = !uname.value
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: uname.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");
}