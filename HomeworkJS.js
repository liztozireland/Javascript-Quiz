const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerEl = document.getElementById("question-container")
var choicesEl = document.getElementById("choices");
const questionElement = document.getElementById("questions")
const answerButtonElement = document.getElementById("answer-buttons")
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var winLoseMessage = document.getElementById("winLoseMessage");
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
})

function startGame () {
  isWin = false;
  timerCount = 10;
startButton.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerEl.classList.remove("hide")
showQuestion(shuffledQuestions[currentQuestionIndex])
startTimer()
}

function showQuestion () {
  var currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerHTML = currentQuestion.title;
  // currentQuestion = questions.title;
  
  // questions[currentQuestionIndex].question;
  currentQuestion.choices.forEach(function(choice, i) {
    var choicesEl = document.createElement("button");;
    document.getElementById("answer-buttons").innerHTML = currentQuestion.choices;

    choicesEl.textContent = i + ". " + choice;
    choicesEl.onclick = questionClick;

    console.log("questionIII")  

  });


  function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
      timerEl.textContent = time;
  

  
      feedbackEl.textContent = "Wrong!";
    } else {
  
      feedbackEl.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }


//   questionElement.innerText = question.question
// question.answers.forEach(answer => {
//   const button = document.createElement("btn")
//   button.innerText = answer.text
//   button.classList.add("btn")
//   if (answer.correct) {
//     button.dataset.correct = answer.correct
//   }
//   button.addEventListener("click", selectAnswer)
//   answerButtonElement.appendChild(button)
// })
}

// function resetState () {
//   nextButton.classList.add("hide")
//   while (answerButtonElement.firstChild) {
//     answerButtonElement.removeChild(answerButtonElement.firstChild)
//   }
// }

// function selectAnswer (e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   const wrong = selectedButton.dataset.wrong
//   setStatusClass(document.body, correct, wrong)
//   Array.from(answerButtonElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1){
//     nextButton.classList.remove("hide")
//   } else {
//     isWin = true
//       startButton.innerText = "Restart"
//       startButton.classList.remove("hide")
//   }
// }


// function setStatusClass (element, correct, wrong){
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add("correct")
//   } else {
//     element.classList.add("wrong")
//   }
// }


// function clearStatusClass (element) {
//   element.classList.remove("correct")
//   element.classList.remove("wrong")
// }

const questions = [
  {
    title: "Green River Killer",
    choices: [
      "Gary Ridgeway", 
      "Jeff Dahmer",
      "Ootis Toole",
      "David Berkowitz"
    ],
    answer: "Gary Ridgeway"
  }, 
  {
    title: "Son of Sam",
    choices: [
      "Robert Pickton", 
      "David Berkowitz",
      "PeeWee Gaskins",
      "Richard Chase"
    ],
    answer: "David Berkowitz"
  },
  {
    title: "Kansas City Butcher",
    choices: [
      "Bob Bardella", 
      "Ed Gein",
      "Aileen Wurnoos",
      "Ted Bundy"
    ],
    answer: "Bob Bardella"
  }, 
  {
    title: "Milwaukee Cannibal",
    choices: [
      "Edmund Kemper", 
      "Jeff Dahmer",
      "Katherine Knight",
      "John Wayne Gacy"
    ],
    answer: "Jeff Dahmer"
  },
  {
    title: "Grim Sleeper",
    choices: [
      "Samuel Little", 
      "Rodney Alcala",
      "H.H. Holmes",
      "Jack Unterweger"
    ],
    answer: "Samuel Little"
  }, 
  {
    title: "Co-Ed Killer",
    choices: [
      "Andre Chikatilo", 
      "Edmund Kemper",
      "Ted Kaczynski", 
      "Richard Ramizrez"
    ],
    answer: "Edmund Kemper"
  }
]

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
      endGame();
    }
  }, 1000);
}

function isWin() {
  winLoseMessage.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
  clearInterval(timer);
  displayInput()
}

function loseGame() {
  winLoseMessage.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
  clearInterval(timer)
}

function endGame () {
  if (timerCount <= 0) {
    // Clears interval
    timerCount = 0
    timerElement.textContent = timerCount;
    clearInterval(timer);
//     questionElement.setAttribute("class", "hide");
// questionContainerEl.classList.add("hide")
startButton.innerText = "Restart"
startButton.classList.remove("hide")
    
  }
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


function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}

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