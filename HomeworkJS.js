const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerEl = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var wordBlank = document.getElementById("wordBlank");
var wrongAnswer = document.getElementById("wrongAnswer");
var highScore = document.querySelector(".high-score")
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


let shuffledQuestions, currentQuestionIndex

function init() {
  getWins();
  getlosses();
}

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
  startGame()
})

function startGame () {
  isWin = false;
  timerCount = 10;
console.log("started") 
startButton.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerEl.classList.remove("hide")
setNextQuestion()
startTimer()
}

function setNextQuestion () {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
  const button = document.createElement("btn")
  button.innerText = answer.text
  button.classList.add("btn")
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener("click", selectAnswer)
  answerButtonElement.appendChild(button)
})
}

function resetState () {
  nextButton.classList.add("hide")
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild)
  }
}

function selectAnswer (e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide")
  } else {
    isWin = true
      startButton.innerText = "Restart"
      startButton.classList.remove("hide")
  }
}

function setStatusClass (element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass (element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [
  {
    question: "Green River Killer",
    answers: [
      {text: "Gary Ridgeway", correct: true }, 
      {text: "Jeff Dahmer", correct: false},
      {text: "Ootis Toole", correct: false},
      {text: "David Berkowitz", correct: false}
    ]
  }, 
  {
    question: "Son of Sam",
    answers: [
      {text: "Robert Pickton", correct: false }, 
      {text: "David Berkowitz", correct: true},
      {text: "PeeWee Gaskins", correct: false },
      {text: "Richard Chase", correct: false }
    ]
  },
  {
    question: "Kansas City Butcher",
    answers: [
      {text: "Bob Bardella", correct: true }, 
      {text: "Ed Gein", correct: false},
      {text: "Aileen Wurnoos", correct: false},
      {text: "Ted Bundy", correct: false}
    ]
  }, 
  {
    question: "Milwaukee Cannibal",
    answers: [
      {text: "Edmund Kemper", correct: false }, 
      {text: "Jeff Dahmer", correct: true},
      {text: "Katherine Knight", correct: false },
      {text: "John Wayne Gacy", correct: false }
    ]
  },
  {
    question: "Grim Sleeper",
    answers: [
      {text: "Samuel Little", correct: true }, 
      {text: "Rodney Alcala", correct: false},
      {text: "H.H. Holmes", correct: false},
      {text: "Jack Unterweger", correct: false}
    ]
  }, 
  {
    question: "Co-Ed Killer",
    answers: [
      {text: "Andre Chikatilo", correct: false }, 
      {text: "Edmund Kemper", correct: true},
      {text: "Ted Kaczynski", correct: false }, 
      {text: "Richard Ramizrez", correct: false }
    ]
  }
]

function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
  clearInterval(timer);
  displayInput()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
  clearInterval(timer);
}

function startTimer() {
  // Sets timer
  console.log("start timer function")
  timer = setInterval(function() {
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
      timerCount = 0
      timerElement.textContent = timerCount;
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

function getHighScore () {
  var score = localStorage.getItem("highScore") || "none"
  highScore.textContent = score
}

function displayInput() {
  //display button and input
  //buttons should have "on click" that saves high score function
}

function saveHighScore (){
  //local storage: set item
  //grab input initals and time left in game 
  getHighScore()
}

getHighScore()

// These functions are used by init
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

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}
init()

function saveHighScore () {
  //take time and value property from input and make a string 
  //localStorage.setItem("score",varSomething)
  //append varSomething to place on the page w/ high scores (in HTML)
}

function showInput () {
  //const or var input & create element var something = create element.tag name (do for input and button)
  //button: onclick of "save high score" append both input and button to DOM
}

function showHighScore () {
  //var Score = localstorage.getitem("score")
  //append to high score item in HTML
}
showHighScore()