/* Parts of this project was assisted and inspired by
 * simplestepcode.com and watching youtube tutorial
 * from Brian Design (https://www.youtube.com/watch?v=f4fB9Xg2JEY)
 */

// Const variables to get elements by ids 
const highScoresList = document.getElementById("highScoresList");
const highScoresFinal = JSON.parse(localStorage.getItem("highScores")) || [];


