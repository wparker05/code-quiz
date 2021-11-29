var questions = [
{
question: "Arrays in JavaScript can be used to store _______.",
choices: ["numbers and strings", "other arrays","booleans","all of the above"],
answer: "all of the above"
},
{question: "String values must be enclosed within _____ when being assigned to variables",
choices: ["commas","curley brackets","quotes", "parentheses"],
answer: "quotes"
},
{
question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
choices: ["JavaScript", "terminal/bash","for loops", "console log"],
answer: "JavaScript"
}
];

var timer = 60;
var x = 0;
var timeEl = document.querySelector('#timer');
var btnEl = document.querySelector('#start-btn');
var firstSlide = document.querySelector('#start-quiz');
var questionSlide = document.querySelector('#questions');
var score = document.querySelector("#score");

timeEl.textContent = "Time: " + timer;




var startQuiz = function(){

    var quizTimer = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;

        if(x === questions.length - 1){
             clearInterval(quizTimer);
            
        }

        if(timer === 0){
            clearInterval(quizTimer);
        } 

       },1000);


    firstSlide.classList.add('start-quiz');
    questionSlide.style.display = "flex";
}



var takeQuiz = function() { 

        var qtn = document.createElement('p');
        qtn.textContent = questions[x].question;
        questionSlide.appendChild(qtn);
        var num = document.createElement('ol');
        qtn.appendChild(num);

            for (var choice of questions[x].choices){
                var opt = document.createElement('li');
                opt.textContent = choice;
                num.appendChild(opt);
            }
      
}

takeQuiz();

var selectChoice = function(event) {
    
    if(event.target.matches('li')){
        var selected = event.target.innerHTML;
        if(selected === questions[x].answer){
            console.log("correct")
        } else {
            console.log('incorrect');
            timer -= 10;
        }
        
        if( x === questions.length -1){
            questionSlide.style.display = "none";
            score.style.display = "flex";
            
            
        }
            
        x++;
        takeQuiz();
        
    }
    
}

var scoreSlide = function(){
    var scoreTitle = document.createElement('h2');
    scoreTitle.textContent = 'Score';
    score.appendChild(scoreTitle);
    var getScore = document.createElement('p');
    getScore.textContent = "Your score is " ;
    score.appendChild(getScore);
    var form1 = document.createElement('form');
    var textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('id', 'scorebox');
    var textbtn = document.createElement('button');
    textbtn.className = 'scorePage';
    textbtn.textContent = 'Submit';
    score.appendChild(form1);
    form1.appendChild(textBox);
    form1.appendChild(textbtn);

    var scoreP = document.querySelector('.scorePage');
    scoreP.addEventListener('click', function(event){
        event.preventDefault();
        location.replace('file:///C:/Users/wprog/Bootcamp/Homework/code-quiz/highscore.html');
    });
}

scoreSlide();




btnEl.addEventListener('click', startQuiz);
questionSlide.addEventListener('click', selectChoice);


