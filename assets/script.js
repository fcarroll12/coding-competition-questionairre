var timerEl = document.querySelector('.countdown');
var startButton = document.querySelector('.start-button');
var showquestions = document.querySelector('#questions');
var questionOne = document.querySelector('#first-question');
var questionTwo = document.querySelector('.second');
var questionThree = document.querySelector('.third');
var questionFour = document.querySelector('.fourth');
var highscores = document.querySelector('#c-highscores');

var goback = document.querySelector('#goback-btn');
var header = document.querySelector('#container');
var answerButtons = document.querySelectorAll('#answer-buttons');

var timer;
var timerCount;
var questionCount = 0;
var selectAnswer = true;
var score = 0
var getNewQuestion;
var secondsLeft = '';


startButton.addEventListener('click',startGame)

//when start button is clicked go to next page
function startGame() {
    startButton.classList.add('hide');
    header.classList.add('hide');
    timerCount = 75;
    questionCount = 0;
    score = 0;
    getNewQuestion;
}
//start time as soon as start button is clicked
var timeInterval = setInterval(function (startGame) {
    secondsLeft--;
    timerEl.textContent = secondsLeft + 'Time left: ';

    // As long as the `timeLeft` is greater than 1
    if (secondsLeft < 75) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = secondsLeft + ' Time left: ';
      // Decrement `timeLeft` by 1
      secondsLeft--;
    } else (secondsLeft === 0) {
        clearInterval(timeInterval);
    }
  }, 1000);


    
//show the first question when the start button is clicked


//when user clicks an answer, disply correct or incorrect
questionOne.addEventListener('click', function(event){
    var btn = event.target;
    if (btn.matches('.wrong-btn')) {
        var data = btn.textContent;
        var answer = btn.parentElement.getAttribute("3.alerts");
        if (data === answer){
            alert("Correct!"); //change alert so that correct or wrong only pops up on bottom of screen
        } else {
            alert("Nope!");
        }
    }
});
questionTwo.addEventListener('click', function(event){
    var btn = event.target;
    if (btn.matches('.wrong-btn')) {
        var data = btn.textContent;
        var answer = btn.parentElement.getAttribute("4.square brackets");
        if (data === answer){
            alert("Correct!");
        } else {
            alert("Nope!");
        }
    }
});
questionThree.addEventListener('click', function(event){
    var btn = event.target;
    if (btn.matches('.wrong-btn')) {
        var data = btn.textContent;
        var answer = btn.parentElement.getAttribute("4. all of the above");
        if (data === answer){
            alert("Correct!");
        } else {
            alert("Nope!");
        }
    }
});
questionFour.addEventListener('click', function(event){
    var btn = event.target;
    if (btn.matches('.wrong-btn')) {
        var data = btn.textContent;
        var answer = btn.parentElement.getAttribute("4. console.log");
        if (data === answer){
            alert("Correct!");
        } else {
            alert("Nope!");
        }
    }
});


function firstQuestion () {
    questionOne = document

}

function selectAnswer () {

}

function viewHighscores () {

}

//store highscores in local storage


 //MUST HAVE:
// -----------
// setInterval to do a countdown
// dom manipulation
// localStorage
// JSON.parse and JSON.stringify


// MAY WANT TO USE:
// ----------------
// data-* attributes
// creating elements
// using objects in an array
// event bubbling and event delegation  

