/** get the two buttons and add event lisiners, after the dom has loaded */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "submit") {
                startGame();
            } else {
                alert("Clicked reset");
            }
        })
    }

    startGame();
})


function startGame() {

    let currentQuestion = document.getElementById("question-number").innerText;

    if (currentQuestion === "0") {
        currentQuestion.innerText = "1";
        populateQuestion(1);

    } else if (currentQuestion === "1") {
        currentQuestion.innerText = "2";
        populateQuestion(2);

    } else if (currentQuestion === "2") {
        currentQuestion.innerText = "3";
        populateQuestion(3);

    } else if (currentQuestion === "3") {
        currentQuestion.innerText = "4";
        populateQuestion(4);

    } else if (currentQuestion === "4") {
        currentQuestion.innerText = "5";
        populateQuestion(5);
    }

}

function populateQuestion(question) {

    let currentQuestion;
    let newQuestion;

    switch (question) {
        case 1:
            alert("question1")
            currentQuestion = "1";
            listOfQuestions(newQuestion);
            break;
        case 2:
            alert("question2")
            currentQuestion = "2";
            listOfQuestions(newQuestion);
            break;
        case 3:
            alert("question3")
            currentQuestion = "3";
            listOfQuestions(newQuestion);
            break;
        case 4:
            alert("question4")
            currentQuestion = "4";
            listOfQuestions(newQuestion);
            break;
        case 5:
            alert("question5")
            currentQuestion = "5";
            listOfQuestions(newQuestion);
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

    

}