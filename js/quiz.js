$(document).ready(function (){
    $(".1").click(function() {
        $( this ).toggleClass( "highlight" );
    });
    $(".2").click(function() {
        $( this ).toggleClass( "highlight" );
    });
    $(".3").click(function() {
        $( this ).toggleClass( "highlight" );
    });
    $(".4").click(function() {
        $( this ).toggleClass( "highlight" );
    });

    questions(q1,q2,q3,q4);
});

function questions(question1, question2, question3, question4) {
    this.question1 = q1;
    this.question2 = q2;
    this.question3 = q3;
    this.question4 = q4;
}

var myQuestions1 = new questions('1. Hot Water and espresso.', '2. Warm Milk and coffee.', '3. Milk, water and espresso.', '4. Hot water, cream and espresso.');
