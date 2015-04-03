var questions = [];
var currentQuestion = 0;

/* Question object */

function Question() {
  this.text = "";
  this.answers = [];
  this.correctAnswer = 0;
  this.pointValue = 0;
  this.checkCorrect = function(answer) {
    if (answer === this.correctAnswer) {
      return true;
    }
    return false;
  }
}

/* question 1 */

function init (){
  var question1 = new Question();

  var question2 = new Question();

  question1.text = "Is this a question?";
  question1.answers.push("Answer 1");
  question1.answers.push("Answer 2");
  question1.answers.push("Answer 3");
  question1.answers.push("Answer 4");
  question1.correctAnswer = 3;
  question1["pointValue"] = 10;

  question2.text = "Is this a question2?";
  question2.answers.push("Answer 1b");
  question2.answers.push("Answer 2b");
  question2.answers.push("Answer 3b");
  question2.answers.push("Answer 4b");
  question2.correctAnswer = 2;
  question2["pointValue"] = 10;

  questions.push(question1);
  questions.push(question2);

  document.getElementById('questionTop').innerHTML = questions[currentQuestion].text;
  
  var ans = "";
    
  for (var i = 0; i < questions[currentQuestion].answers.length; i++){
      ans += "<p>" + "<input type = 'radio' name = 'choose' value = '"+i+"'>" + questions[currentQuestion].answers[i] + "</p>";
    }

  document.getElementById('answers').innerHTML = ans;

}

/* number of questions is how many?

var numQuestions = questions.length;`
*/



/* get the current answer

var q = questions[currentQuestion];

Put the Answers and Questions on screen */

init();

$(document).ready(function (){

  $('#chooseGuess').click(function(){
    var choosen = $( "input[name='choose']:checked");
    if (choosen.val() == questions[currentQuestion].correctAnswer){
      $('#result').html("That's Correct!");
    } else {
      $('#result').html("Nope, that is not right!");
    }  
  });
  $('#chooseNext').click(function(){
    currentQuestion = currentQuestion + 1;

    if (currentQuestion < questions.length){

    document.getElementById('questionTop').innerHTML = questions[currentQuestion].text;
  
    var ans = "";
    
    for (var i = 0; i < questions[currentQuestion].answers.length; i++){
      ans += "<p>" + "<input type = 'radio' name = 'choose' value = '"+i+"'>" + questions[currentQuestion].answers[i] + "</p>";
    }
    document.getElementById('answers').innerHTML = ans;

    } else{

      $('#result').html('Thanks for playing!');

    }
  });

});

/* get the value of the answer 

var ans = doSomethingToGetInput();

*/

/* check if the answer is correct

q.checkCorrect(ans);

*/