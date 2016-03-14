var questions = [];
var currentQuestion = 0;
var points = 0;

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

/* questions and answers */

function init (){

  var question1 = new Question();

  var question2 = new Question();

  var question3 = new Question();

  var question4 = new Question();

  question1.text = "What is an Americano?";
  question1.answers.push("1. Hot Water and espresso");
  question1.answers.push("2. Warm milk and coffee");
  question1.answers.push("3. Milk, water and espresso");
  question1.answers.push("4. Hot water, cream and espresso");
  question1.correctAnswer = 0;
  question1["pointValue"] = 10;

  question2.text = "What is an Ristretto?";
  question2.answers.push("1. Warm milk and coffee");
  question2.answers.push("2. Espresso with whip cream");
  question2.answers.push("3. Normal espresso, but with half the amount of water.");
  question2.answers.push("4. Coffee with a shot of espresso");
  question2.correctAnswer = 2;
  question2["pointValue"] = 10;

  question3.text = "What is a Flat white?";
  question3.answers.push("1. Espresso with a similar proportion of coffee to milk as a latte and a cappuccino");
  question3.answers.push("2. Latte with whip cream and coffee");
  question3.answers.push("3. Coffee and warm milk");
  question3.answers.push("4. Espresso with cream");
  question3.correctAnswer = 0;
  question3["pointValue"] = 10;

  question4.text = "What is a Eiskaffee?";
  question4.answers.push("1. Coffee and ice");
  question4.answers.push("2. Espresso with steamed milk");
  question4.answers.push("3. Espresso with half milk and half cream");
  question4.answers.push("4. Chilled coffee, milk, vanilla ice cream");
  question4.correctAnswer = 3;
  question4["pointValue"] = 10;

  questions.push(question1);
  questions.push(question2);
  questions.push(question3);
  questions.push(question4);

  /* push the question to the DOM */

  document.getElementById('questionTop').innerHTML = questions[currentQuestion].text;
  
  var ans = "";
  
  /* set up the questions in order and displays them*/

  for (var i = 0; i < questions[currentQuestion].answers.length; i++){
      ans += "<p>" + "<input type = 'radio' name = 'choose' value = '"+i+"'>" + questions[currentQuestion].answers[i] + "</p>";
    }

  document.getElementById('answers').innerHTML = ans;

}

init();

$(document).ready(function (){
  pointValue = 0;

  $('#chooseGuess').click(function(){
    var choosen = $( "input[name='choose']:checked");
    if (choosen.val() == questions[currentQuestion].correctAnswer){
      $('#result').html("That's Correct!");
      pointValue = pointValue + 10;
      $('.coffeeCup h6').html(pointValue);

      /* document.getElementById('coffeeCup').innerHTML = "Your score is now " + pointValue; */

      console.log(pointValue);

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

      $('#result').html('Thanks for playing! Your final score was ' + pointValue + " out of a possible 40!");


    }
  });

});

/* get the value of the answer 

var ans = doSomethingToGetInput();

*/

/* check if the answer is correct

q.checkCorrect(ans);

*/