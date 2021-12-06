var scoreTable = document.querySelector('#table');
var table = document.createElement('table');
var tr = document.createElement('tr');
var th = document.createElement('th');
th.textContent = "Initials";
var th2 = document.createElement('th');
th2.textContent = "Score";
scoreTable.appendChild(table);
table.appendChild(th);
table.appendChild(th2)

var back = document.querySelector('#back');
var clear = document.querySelector('#clear');
var arr = JSON.parse(localStorage.getItem("scoreObj")|| {scores: []});

// console.log(arr.scores.length);

for(var x = 0; x < arr.scores.length; x++){
    var tr = document.createElement('tr');
    tr.textContent= arr.scores[x].initials;
    var tr2 = document.createElement('tr');
    tr2.textContent = arr.scores[x].timer;
    th.appendChild(tr);
    th2.appendChild(tr2);
}



back.addEventListener('click', function(){
    location.replace('./index.html');
})

clear.addEventListener('click', function(){
   
     localStorage.setItem('scoreObj', JSON.stringify({scores: []}));
    location.reload();
     
})