var quizQuestions = document.querySelector(".quizQuestions");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var quizQuestions = "";
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


var quizQuestions = ["who was the green river killer?" , "who was the co-ed killer?" , "Where was Ted Bundy executed?"]
var quizAnswers = ["Gary Ridgeway","Edmund Kemper", "Florida"];

function init() {
  getWins();
  getlosses();
}

startButton.onclick = function startGame() {
  isWin = false;
  timerCount = 5;
  startButton.disabled = true;
  renderQuestions()
  startTimer()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timeEl.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // loseGame();
    }
  }, 1000);
}

function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

  
  // setTime();


  function renderQuestions() {
    // Randomly picks word from words array
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksLetters = []
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_");
    }
    // Converts blankLetters array into a string and renders it on the screen
    wordBlank.textContent = blanksLetters.join(" ")
  }

