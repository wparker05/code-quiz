var questions = [
{
question: "Arrays in JavaScript can be used to store _______.",
choice1: "numbers and strings",
choice2: "other arrays",
choice3: "booleans",
choice4: "all of the above",
answer: "all of the above"
},
{question: "String values must be enclosed within _____ when being assigned to variables",
choice1: "commas",
choice2: "curley brackets",
choice3: "quotes",
choice4: "parentheses",
answer: "quotes"
},
{
question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
choice1: "JavaScript",
choice2: "terminal/bash",
choice3: "for loops",
choice4: "console log",
answer: "JavaScript"
}
];

var timer = 60;

var timeEl = document.querySelector('#timer');
var btnEl = document.querySelector('#start-btn');
var firstSlide = document.querySelector('#start-quiz');
var questionSlide = document.querySelector('#questions');
timeEl.textContent = "Time: " + timer;


var startQuiz = () => {

    var quizTimer = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;
        if(timer === 0){
            clearInterval(quizTimer);
        }

       },1000);


    firstSlide.classList.add('start-quiz');
    questionSlide.style.display = "block";
}


var x = 0;
var takeQuiz = () => { 
        var qtn = document.querySelector('#qtn');
        qtn.textContent = questions[x].question;
        var choice1 = document.querySelector('#choice1');
        choice1.textContent = questions[x].choice1;
        var choice2 = document.querySelector('#choice2');
        choice2.textContent = questions[x].choice2;
        var choice3 = document.querySelector('#choice3');
        choice3.textContent = questions[x].choice3;
        var choice4 = document.querySelector('#choice4');
        choice4.textContent = questions[x].choice4;      
        
}


var selectChoice = document.querySelectorAll('.choices');
        var selectArray = Array.from(selectChoice);
        selectArray.forEach(function(arr)
        {
            arr.addEventListener('click', function(){
                    if(x < questions.length) {
                    
                        if(this.innerHTML === questions[x].answer){
                            console.log("correct");
                            x++;
                            takeQuiz();
                        } else {
                            console.log("wrong");
                            x++;
                            takeQuiz();
                        }
                    } else {
                            questionSlide.style.display = "none";
                    }
            });
        });

takeQuiz();

btnEl.addEventListener('click', startQuiz);

