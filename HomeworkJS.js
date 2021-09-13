var questionContainer = document.querySelector(".question-container");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var questionClass = document.querySelector(".question-deck")

var someQuestion = "";
var someAnswer = "";
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var question = [];
var blanksLetters = [];


// var question1 =  [
// 	{
// 		question: "What is 10/2?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '115'
// 		},
// 		correctAnswer: 'b'
// 	}
// ];
var question1Array = ["answer 1", "answer 1", "answer 3"]
var question2Array = ["answers 1", "answerd 1", "answerl 3"]
var answerArray = ["answer 1", "answerd 1", "answer 3"]

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
  questionContainer.textContent = question1Array[0];
      for (var i = 0; i < question1Array.length; i++) {
        // var createquestionClassEl = document.createElement("div")
        // createquestionClassEl.classList.add("question-card");
        // // var questionData = document.createElement("p");
        // // var questionText = document.createElement("h4");
        // textContent = question1Array[0];
        // createquestionClassEl.appendChild(text);
      }
}

startButton.addEventListener("click", startGame);