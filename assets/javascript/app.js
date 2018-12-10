var number = 60;
var intervalId;

$(document).ready(function() {
    $("#quiz").hide();
    $("#results").hide();
    $("#time-remaining").hide();
});

function stop() {
    clearInterval(intervalId);
  }

function start() {
    $("#start-button").hide();
    $("#time-remaining").show();
    $("#quiz").show();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    function decrement() {
        number--;
        $("#time-remaining").text("Time remaining: " + number + " seconds");
  
        if (number === 0) {
          stop();
          done();
        }
    }
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
    } else if (question1 === "incorrect") {
        incorrect++;
    } else {
        unanswered++;
    }

    if (question2 === "No, I am your father") {
        correct++;
    } else if (question2 === "incorrect") {
        incorrect++;
    } else {
        unanswered++;
    }

    if (question3 === "The Empire Strikes Back") {
        correct++;
    } else if (question3 === "incorrect") {
        incorrect++;
    } else {
        unanswered++;
    }

    if (question4 === "R2D2") {
        correct++;
    } else if (question4 === "incorrect") {
        incorrect++;
    } else {
        unanswered++;
    }

    $("#quiz").hide();
    $("#results").show();
    $("#number-correct").text("Correct: " + correct);
    $("#number-incorrect").text("Incorrect: " + incorrect);
    $("#number-unanswered").text("Unanswered: " + unanswered);
    stop();
}