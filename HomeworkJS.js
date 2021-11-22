const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");
const saveButton = document.getElementById("save-btn");
const questionContainerEl = document.getElementById("question-container");
var choicesEl = document.getElementById("choices");
const questionElement = document.getElementById("questions");
const answerButtonElement = document.getElementById("answer-buttons");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var winLoseMessage = document.getElementById("winLoseMessage");
var wrongAnswer = document.getElementById("wrongAnswer");
var finalScore = document.getElementById("final-score");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

let shuffledQuestions, currentQuestionIndex;

function init() {
  getWins();
  getlosses();
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
  resetButton.addEventListener("click", resetGame);
});

function startGame() {
  isWin = false;
  timerCount = 15;
  startButton.classList.add("hide");
  resetButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  startTimer();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  nextButton.classList.add("hide");
  
  }

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerHTML = currentQuestion.title;
  answerButtonElement.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choicesEl = document.createElement("button");
    choicesEl.setAttribute("class", "value");
    choicesEl.setAttribute("value", choice);

    choicesEl.textContent = i + 1 + ". " + choice;
    choicesEl.onclick = questionClick;
    answerButtonElement.appendChild(choicesEl);
  });

  function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
      console.log("wrong");
      loseCounter++;
      setLosses();
    } else if (this.value === questions[currentQuestionIndex].answer) {
      console.log("right");
      winCounter++;
      nextButton.classList.remove("hide");
      setWins();
    }
  }
}

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}
const questions = [
  {
    title: "What Year Was JavaScript Introduced?",
    choices: ["1995", "1997", "1993", "1990"],
    answer: "1995",
  },
  {
    title: "When Was JavaScript made an ECMA standard?",
    choices: [
      "1995",
      "1997",
      "2000",
      "1998",
    ],
    answer: "1997",
  },
  {
    title: "Who Invented JavaScript?",
    choices: ["Brendan Eich", "Steve Jobs", "Mark Zuckerberg", "Ted Bundy"],
    answer: "Brendan Eich",
  },
  {
    title: "Is JavaScript a front-end, back-end, or full-stack programming language?",
    choices: [
      "Front-end",
      "Full-stack",
      "Back-end",
      "None of These",
    ],
    answer: "Full-stack",
  },
  {
    title: "How long did it take the creator to write the JavaScript programming language?",
    choices: [
      "10 Days",
      "2 Weeks",
      "6 Months",
      "1 Year",
    ],
    answer: "10 Days",
  },
  {
    title: "What was JavaScript Originally Named?",
    choices: [
      "Latte",
      "Mocha",
      "Americano",
      "Cappuccino",
    ],
    answer: "Mocha",
  },
];

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

function startTimer() {
  // Sets timer
  console.log("start timer function");
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      timerCount = 0;
      timerElement.textContent = timerCount;
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  if (timerCount <= 0) {
    // Clears interval
    timerCount = 0;
    timerElement.textContent = timerCount;
    clearInterval(timer);
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    nextButton.classList.add("hide");
    resetButton.classList.remove("hide");
    saveButton.classList.remove("hide");
    saveButton.addEventListener("click", saveHighscore);
  }
}

function saveHighscore () {
console.log("here's your final score")
var storedWins = localStorage.getItem("winCount");
document.getElementById("final-score").innerHTML = storedWins;
}

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins();
  setLosses();
}

function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}
