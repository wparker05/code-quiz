var scoreTable = document.querySelector('#table');
var table = document.createElement('table');
var back = document.querySelector('#back');
var arr = JSON.parse(localStorage.getItem("scoreObj")) || [];
console.log(arr)


// var len =  JSON.parse(localStorage.getItem("scoreObj"));
// console.log(len);






back.addEventListener('click', function(){
    location.replace('file:///C:/Users/wprog/Bootcamp/Homework/code-quiz/index.html');
})