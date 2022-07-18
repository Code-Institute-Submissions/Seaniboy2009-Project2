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

/** get the current question number and change it to the next and get the new question */
function populateQuestion() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let newQuestion;

    switch (currentQuestion) {
        case "0":
            document.getElementById("question-number").innerText = "1";
            newQuestion = listOfQuestions();
            break;
        case "1":
            document.getElementById("question-number").innerText = "2";
            newQuestion = listOfQuestions();
            break;
        case "2":
            document.getElementById("question-number").innerText = "3";
            newQuestion = listOfQuestions();
            break;
        case "3":
            document.getElementById("question-number").innerText = "4";
            newQuestion = listOfQuestions();
            break;
        case "4":
            document.getElementById("question-number").innerText = "5";
            newQuestion = listOfQuestions();
            break;
        case "5":
            document.getElementById("question-number").innerText = "5";
            newQuestion = listOfQuestions();
            break;
        default:
            break;
    }

    document.getElementById("question-text").innerText = newQuestion;
}

function checkAnswer() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let newQuestion;

    switch (currentQuestion) {
        case "1":


            break;
        case "2":
            document.getElementById("question-number").innerText = "3";
            newQuestion = listOfQuestions();
            break;
        case "3":
            document.getElementById("question-number").innerText = "4";
            newQuestion = listOfQuestions();
            break;
        case "4":
            document.getElementById("question-number").innerText = "5";
            newQuestion = listOfQuestions();
            break;
        case "5":
            document.getElementById("question-number").innerText = "5";
            newQuestion = listOfQuestions();
            break;
        default:
            break;
    }

}

function updateScore() {
    let correct = document.getElementById("correct").innerText;
    let incorrect = document.getElementById("incorrect").innerText;
}

/** check the current question number and return the question */
function listOfQuestions() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let questionToReturn;

    switch (currentQuestion) {
        case "1":
            questionToReturn = questions[0].question;
            break;
        case "2":
            questionToReturn = questions[1].question;
            break;
        case "3":
            questionToReturn = questions[2].question;;
            break;
        case "4":
            questionToReturn = questions[3].question;
            break;
        case "5":
            questionToReturn = questions[4].question;
            break;
        default:
            break;
    }

    return questionToReturn;
}

function resetGame() {
    document.getElementById("question-number").innerText = "0";
    document.getElementById("correct").innerText = "0";
    document.getElementById("incorrect").innerText = "0";
    populateQuestion();
}

let questions = [
    {
        question: "what do they call the invisible power that binds the galaxy together?",
        answer: "The Force"
    },
    {
        question: "C-3P0 is fluent in how many languages?",
        answer: "The Force"
    },
    {
        question: "Who killed the four Jedi Masters: Saesee Tinn, Mace Windu, Kit Fisto, and Agen Kolar?",
        answer: "The Force"
    },
    {
        question: "What is the name of Yoda’s home?",
        answer: "The Force"
    },
    {
        question: "Who is the young Jedi Knight who becomes Darth Vader?",
        answer: "The Force"
    }
]