const chalk = require("chalk")
// var color = require("chalk")
var readlineSync=require("readline-sync");
var score = 0;
var userName=readlineSync.question("what is your name? ");
console.log(chalk.blue("welcome " + userName + " to DO YOU KNOW Pinky?"))

function play(question,answer){
  var userName=readlineSync.question(chalk.green(question));
  if(userName===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong!")
  }
console.log("current score",score);
console.log("----------")
}


var questions=[{
  question:"where do i live? ",
  answer:"Bangalore"
},{
  question:"My favorite superhero would be? ",
  answer:"My father"
},{
  question:"My favorite food would be? ",
  answer:"Pizza"
},{
  question:"What's My favorite thing to do to relax? ",
  answer:"listening songs"
},{
  question:"Who is My favorite singer? ",
  answer:"Arijit singh"
},{
  question:"Which Type of movies I like? ",
  answer:"Horror movies"
}];
for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("yeah!! your total score is: ",score)
