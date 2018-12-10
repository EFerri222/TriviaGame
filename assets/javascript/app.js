$(document).ready(function() {
    $("#quiz").hide();
    $("#results").hide();
});

function start() {
    $("#start-button").hide();
    $("#quiz").show();
}

function done() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    if (question1 === "Made the Kessel Run in 12 Parsecs") {
        correct++;
    } else if (question1 === "Luke" || question1 === "C3PO" || question1 === "Blah") {
        incorrect++;
    } else {
        unanswered++;
    }

    if (question2 === "Vader") {
        correct++;
    } else if (question2 === "Luke" || question2 === "C3PO" || question2 === "Blah") {
        incorrect++;
    } else {
        unanswered++;
    }

    if (question1 === "Vader") {
        correct++;
    } else if (question1 === "Luke" || question1 === "C3PO" || question1 === "Blah") {
        incorrect++;
    } else {
        unanswered++;
    }

    if (question1 === "Vader") {
        correct++;
    } else if (question1 === "Luke" || question1 === "C3PO" || question1 === "Blah") {
        incorrect++;
    } else {
        unanswered++;
    }

    $("#quiz").hide();
    $("#results").show();
    $("#number-correct").text("Correct: " + correct);
    $("#number-incorrect").text("Incorrect: " + incorrect);
    $("#number-unanswered").text("Unanswered: " + unanswered);
}