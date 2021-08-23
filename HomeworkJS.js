// var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var questions = ["who was the green river killer?" , "who was the co-ed killer?" , "Where was Ted Bundy executed?"]

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < -1) {
            timer = -1;
        return "Time out!! :("
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}


window.onload = function () {
    var time = 60 / 2, 
        display = document.querySelector('#GameTimer');
    startTimer(time, display);
    
};