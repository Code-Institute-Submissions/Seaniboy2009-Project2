/** get the two buttons and add event lisiners, after the dom has loaded */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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
    let newAnswer;
    let wrongAnswer;

    switch (currentQuestion) {
        case "0":
            document.getElementById("question-number").innerText = "1";
            newQuestion = listOfQuestions().question;
            newAnswer = listOfQuestions().answer;
            wrongAnswer = listOfQuestions().wrongAnswer;
            break;
        case "1":
            document.getElementById("question-number").innerText = "2";
            newQuestion = listOfQuestions().question;
            newAnswer = listOfQuestions().answer;
            wrongAnswer = listOfQuestions().wrongAnswer;
            break;
        case "2":
            document.getElementById("question-number").innerText = "3";
            newQuestion = listOfQuestions().question;
            newAnswer = listOfQuestions().answer;
            wrongAnswer = listOfQuestions().wrongAnswer;
            break;
        case "3":
            document.getElementById("question-number").innerText = "4";
            newQuestion = listOfQuestions().question;
            newAnswer = listOfQuestions().answer;
            wrongAnswer = listOfQuestions().wrongAnswer;
            break;
        case "4":
            document.getElementById("question-number").innerText = "5";
            newQuestion = listOfQuestions().question;
            newAnswer = listOfQuestions().answer;
            wrongAnswer = listOfQuestions().wrongAnswer;
            break;
        case "5":
            document.getElementById("question-number").innerText = "5";
            newQuestion = listOfQuestions().question;
            newAnswer = listOfQuestions().answer;
            wrongAnswer = listOfQuestions().wrongAnswer;
            break;
        default:
            break;
    }

    document.getElementById("question-text").innerText = newQuestion;
    document.getElementById("answer1-text").innerText = newAnswer;
    document.getElementById("answer1").value = newAnswer;

    document.getElementById("answer2-text").innerText = wrongAnswer;
    document.getElementById("answer2").value = wrongAnswer;

}

function checkAnswer() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let check1 = document.getElementById("answer1");
    let check2 = document.getElementById("answer2");

    let userAnswer;

    if (check1.checked) {
        userAnswer = check1.value;

    } else if (check2.checked) {
        userAnswer = check2.value;
    } else {
        console.log("User answer not defined");
    }

    switch (currentQuestion) {
        case "1":
            if (userAnswer === questions[0].answer) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
            break;
        case "2":
            if (userAnswer === questions[1].answer) {
                correctAnswer();

            } else {
                incorrectAnswer();
            }
            break;
        case "3":
            if (userAnswer === questions[2].answer) {
                correctAnswer();

            } else {
                incorrectAnswer();
            }
            break;
        case "4":
            if (userAnswer === questions[3].answer) {
                correctAnswer();

            } else {
                incorrectAnswer();
            }
            break;
        case "5":
            if (userAnswer === questions[4].answer) {
                correctAnswer();

            } else {
                incorrectAnswer();
            }
            break;
        default:
            break;
    }

    populateQuestion();
}

function correctAnswer() {
    let correct = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++correct;

}

function incorrectAnswer() {
    let incorrect = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++incorrect;

}

/** check the current question number and return the question */
function listOfQuestions() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let questionToReturn;

    switch (currentQuestion) {
        case "1":
            questionToReturn = questions[0];
            break;
        case "2":
            questionToReturn = questions[1];
            break;
        case "3":
            questionToReturn = questions[2];
            break;
        case "4":
            questionToReturn = questions[3];
            break;
        case "5":
            questionToReturn = questions[4];
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

let questions = [{
        question: "what do they call the invisible power that binds the galaxy together?",
        answer: "The Force",
        wrongAnswer: "Wrong"
    },
    {
        question: "C-3P0 is fluent in how many languages?",
        answer: "Over 60 million languages",
        wrongAnswer: "Wrong"
    },
    {
        question: "Who killed the four Jedi Masters: Saesee Tinn, Mace Windu, Kit Fisto, and Agen Kolar?",
        answer: "Darth Sidious",
        wrongAnswer: "Wrong"
    },
    {
        question: "What is the name of Yoda’s home?",
        answer: "Dagobah",
        wrongAnswer: "Wrong"
    },
    {
        question: "Who is the young Jedi Knight who becomes Darth Vader?",
        answer: "Anakin Skywalker",
        wrongAnswer: "Wrong"
    }
]