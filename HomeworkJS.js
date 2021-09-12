var wordQuestion = document.getElementById(".quiz-question");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var questions = ["who was the green river killer?" , "who was the co-ed killer?" , "Where was Ted Bundy executed?"]
var answers = ["Gary Ridgeway","Edmund Kemper", "Florida"];

function init() {
  getWins();
  getlosses();
}

function startGame() {
  isWin = false;
  timerCount = 10;
  startButton.disabled = true;
  renderQuestions()
  startTimer()
}

function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

var secondsLeft = 10;

startButton.onclick = function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left in game!";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "Time's out! 😢";

      }
  
    }, 1000);
  }
  
  setTime();