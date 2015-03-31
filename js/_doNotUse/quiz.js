var questionsAsk = [];
var currentQuestionAsk = 0;

function questions(question1,question2) {
    this.question1 = question1;
    this.question2 = question2;
    this.answers = [];

        this.add = function(answer1){
        this.answers.push(answer1);
    }
}

function init(){
    var q1 = new question1("What is an Americano?","What is an Ristretto?");
    var q2 = new question1("What is Blue?", "What is Red?");
    questionsAsk.push(q1);
    questionsAsk.push(q2);

    var a1 = new answer1('1. Hot Water and espresso');

    q1.add(a1);

    document.getElementById('questionTop').innerHTML = questionsAsk[currentQuestionAsk].question1;
    document.getElementById('answers').innerHTML = questionsAsk[currentQuestionAsk].answer1;  
    for(a of questionsAsk[currentQuestionAsk].answers){
        var question1 = document.createElement("li");
        var answer1 = document.createTextNode(a1.answer1);
        questions.appendChild(question1);
        document.getElementById('question1').appendChild(question1);
    }
}

function next(){
    currentQuestionAsk++;
    document.getElementById('questionTop').innerHTML = questionsAsk[currentQuestionAsk].questionsQuestion1;
    document.getElementById('answer1').innerHTML = questionsAsk[currentQuestionAsk].questionsAnswer1;  
}
