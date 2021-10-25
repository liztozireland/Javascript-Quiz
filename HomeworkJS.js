const startButton = document.getElementById("start-btn")
const questionContainerEl = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", startGame)

function startGame () {
console.log("started")
startButton.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerEl.classList.remove("hide")
setNextQuestion()
}

function setNextQuestion () {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
  const button = document.createElement("button")
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
  
}

function selectAnswer (e) {

}

const questions = [
  {
    question: "What is 2+2",
    answers: [
      {text: "4", correct: true }, 
      {text: "22", correct: false}
    ]
  }
]
