var myQuestions = document.querySelector(".my-questions");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");

var questionArray = ["how are you?" , "question 2", "question 3"]
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
  // showQuestions()
  startTimer()
}

function loseGame() {
  myQuestions.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
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
      loseGame();
    }
  }, 1000);
}

function showQuestions() {
  currentQuestion = questionArray [index]
  questionEl.textContent = currentQuestion
  var currentChoices; 
  if (index===0) {
currentChoices = question1Array
  } else if (index===1){
      currentChoices = question2Array
  } 
  choice1El.textContent = currentChoices[0]
  choice1El.onclick = checkAnswer
  choice2El.textContent = currentChoices[1]
  choice2El.onclick = checkAnswer
  for (i=0; i<currentChoices.length; i++) {
      var choice = currentChoices [i]
      
  }  
index++
}
function checkAnswer(event){
  var choice = event.target.textContent
  if (choice!==answerArray[index]) {
      time=time-10
  }
  showquestions();
}



startButton.addEventListener("click", startGame);