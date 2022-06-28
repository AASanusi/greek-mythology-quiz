/* Parts of this project was assisted and inspired by
 * simplestepcode.com and Brian Design youtube tutorialwatching youtube tutorial
 */

// Const variables to get elements by ids 
const highScoresList = document.getElementById("highScoresList");
const highScoresFinal = JSON.parse(localStorage.getItem("highScores")) || [];

/* Shows the score and details 
 * inputted in box on end page
 */
highScoresList.innerHTML = highScoresFinal.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");