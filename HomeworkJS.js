var myQuestions = document.querySelector(".my-questions");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");

var chosenQuestion = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var startQuestion = [];
var blanksLetters = [];


var questions = ["how are you?" , "question 2", "question 3"]
// var question1Array = ["answer 1", "answer 1", "answer 3"]
// var question2Array = ["answers 1", "answerd 1", "answerl 3"]
// var answerArray = ["answer 1", "answerd 1", "answer 3"]

var i = 0
while (i<5) { i++}

function init() {
  getWins();
  getlosses();
}

function startGame() {
  isWin = false;
  timerCount = 10;
  startButton.disabled = true;
  startQuestions()
  startTimer()
}

function loseGame() {
  myQuestions.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  // setLosses()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timeEl.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // loseGame();
    }
  }, 1000);
}

function startQuestions() {
  console.log("hello")
  myQuestions.textContent = "how are you?";
}

startButton.addEventListener("click", startGame);