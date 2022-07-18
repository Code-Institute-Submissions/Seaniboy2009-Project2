/** get the two buttons and add event lisiners, after the dom has loaded */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "submit") {
                populateQuestion();
            } else {
                resetGame();
            }
        })
    }

    startGame();
})

function startGame() {

    let currentQuestion = document.getElementById("question-number").innerText;

    if (currentQuestion === "0") {
        populateQuestion();
    }
}

function populateQuestion() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let newQuestion;

    switch (currentQuestion) {
        case "0":
            currentQuestion = "1";
            //listOfQuestions(newQuestion);
            break;
        case "1":
            currentQuestion = "2";
            //listOfQuestions(newQuestion);
            break;
        case "2":
            currentQuestion = "3";
            //listOfQuestions(newQuestion);
            break;
        case "3":
            currentQuestion = "4";
            //listOfQuestions(newQuestion);
            break;
        case "4":
            currentQuestion = "5";
            //listOfQuestions(newQuestion);
            break;
        default:
            break;
    }

    document.getElementById("question-number").innerText = currentQuestion;
    document.getElementById("question-text").innerText = newQuestion;
}

function checkAnswer() {

}

function updateScore() {
    let correct = document.getElementById("correct").innerText;
    let incorrect = document.getElementById("incorrect").innerText;
}

function listOfQuestions() {

    let questionToReturn;

    let question1 = "question1";

    return questionToReturn;
}

function resetGame() {
    document.getElementById("question-number").innerText = "0";
    document.getElementById("correct").innerText = "0";
    document.getElementById("incorrect").innerText = "0";
}