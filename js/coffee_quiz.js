var questions = [];

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

  question1.text = "Is this a question?";
  question1.answers.push("Answer 1");
  question1.answers.push("Answer 2");
  question1.answers.push("Answer 3");
  question1.answers.push("Answer 4");
  question1.correctAnswer = 3;
  question1["pointValue"] = 10;

  questions.push(question1);

  document.getElementById('questionTop').innerHTML = question1.text;

}

/* number of questions is how many? */

var numQuestions = questions.length;
var currentQuestion = 0;

/* get the current answer */

var q = questions[currentQuestion];

/* Put the Answers and Questions on screen */

init();

/* get the value of the answer 

var ans = doSomethingToGetInput();

*/

/* check if the answer is correct

q.checkCorrect(ans);

*/