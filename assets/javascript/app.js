$(document).ready(function() {
    $("#quiz").hide();
});

function start() {
    $("#start-button").hide();
    $("#quiz").show();
}

function done() {
    alert("Done!");
}