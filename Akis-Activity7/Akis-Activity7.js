var students = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("student_name").focus();
};

function addScore() {
    var nameInput = $("student_name");
    var scoreInput = $("student_score");
    var name = nameInput.value.trim();
    var score = parseInt(scoreInput.value);

    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score.");
        nameInput.value = "";
        scoreInput.value = "";
        nameInput.focus();
        return;
    }

    students.push(name);
    scores.push(score);
    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
}

function displayScores() {
    var table = document.getElementById("scores_table");
    table.innerHTML = "<h2>Scores</h2><br />" +
        "<tr><th align='left'>Student Name</th><th align='left'>Score</th></tr>";

    for (var i = 0; i < students.length; i++) {
        var row = table.insertRow();
        var nameCell = row.insertCell();
        var scoreCell = row.insertCell();

        nameCell.textContent = students[i];
        scoreCell.textContent = scores[i];
    }
}

function displayResults() {
    var average = 0;
    var highestScore = 0;
    var highestScorer = "";

    for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestScorer = students[i];
        }
    }

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2><br />" +
        "<p>Average score: " + average+ "</p>" +
        "<p>High score: " + highestScorer +" with a score of " + highestScore + "</p>";
}
