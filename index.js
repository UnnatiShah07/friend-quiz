var readlineSync = require("readline-sync");

var score = 0;
var large = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Welcome "+ userName+ "\nLet's see How much you know Unnati?\n");

var p1 = {name:"Unnati",score:6};
var p2 = {name:"Anita",score:5};
var p3 = {name:"jyoti",score:4};

var highScore = [p1,p2,p3];

var largest = {name:highScore[0].name,score:highScore[0].score};

var que = [{
  question:"\nWhat is my favorite movie? \na.Yeh jawani hai deewani \nb.Hera feri\n",
  answer:"a"},
  {
  question:"\nWhat is my favorite drink? \na.Coffee \nb.Tea\n",
  answer:"b"},
  {
  question:"\nWhat is my favorite ice cream flavor? \na.Chocolate \nb.Vanilla\n",
  answer:"b"},
  {
  question:"\nWhat is my favorite sweet? \na.Gulab jamun \nb.Kaju katli\n",
  answer:"a"},
  {
  question:"\nWho is my favorite hero? \na.Akshay kumar \nb.Kartik Aaryan\n",
  answer:"a"},
  {
  question:"\nWhen is my birthday? \na.4th December \nb.7th January\n",
  answer:"b"}
]

function play(question, answer){
  
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You are Right!");
    score++;
  }else{
    console.log("You are Wrong!");
  }
}

for(var i=0; i<que.length; i++){
  play(que[i].question,que[i].answer);
}
console.log('Final score is: '+score);

for(var i=0; i<highScore.length; i++){
  if(largest.score < highScore[i].score){
    largest = highScore[i];
  }
}
console.log('\n--------High Score--------');
console.log('Name:'+largest.name+'\nscore: '+largest.score);