var quizQuestions = document.getElementById(".quiz-question");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var timerCount;


var quizQuestions = ["who was the green river killer?" , "who was the co-ed killer?" , "Where was Ted Bundy executed?"]
var quizAnswers = ["Gary Ridgeway","Edmund Kemper", "Florida"];

function init() {
  getWins();
  getlosses();
}

startButton.onclick = function startGame() {
  isWin = false;
  timerCount = 10;
  startButton.disabled = true;
  // renderQuestions()
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


// startButton.addEventListener("click", quizQuestions);

// startButton.onclick = function showQuestion() {
//   var quizQuestions = quizQuestions.textContent = "something"
// }

// startButton.onclick = function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds left in game!";
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         timeEl.textContent = "Time's out! 😢";

//       }
//     }, 1000);
//   }
  
  // setTime();

