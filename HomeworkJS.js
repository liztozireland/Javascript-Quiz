var myQuestins = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
//starting over

var questions = ["variable","array", "modulus", "object", "function", "string", "boolean"];

function init() {
  getWins();
  getlosses();
}

function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  showQuestions()
  startTimer()
}


function showQuestions() {

}
function startTimer() {
  
}

startButton.addEventListener("click", startGame);