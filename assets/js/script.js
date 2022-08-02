/** 
 * List of questions/answers and wrong answers 
 */
const QUESTIONS = [{
        question: "what do they call the invisible power that binds the galaxy together?",
        answer: "The Force",
        wrongAnswer1: "The Magic",
        wrongAnswer2: "The wills",
        wrongAnswer3: "The light side",
        wrongAnswer4: "The dark side",
    },
    {
        question: "C-3P0 is fluent in how many languages?",
        answer: "60 million languages",
        wrongAnswer1: "10 million languages",
        wrongAnswer2: "90 million languages",
        wrongAnswer3: "150 million languages",
        wrongAnswer4: "250 million languages",
    },
    {
        question: "Who killed the four Jedi Masters: Saesee Tinn, Mace Windu, Kit Fisto, and Agen Kolar?",
        answer: "Darth Sidious",
        wrongAnswer1: "Darth Vader",
        wrongAnswer2: "Darth Maul",
        wrongAnswer3: "Count Dooku",
        wrongAnswer4: "Asaj Ventress",
    },
    {
        question: "What is the name of Yodas home?",
        answer: "Dagobah",
        wrongAnswer1: "Hoth",
        wrongAnswer2: "Bespin",
        wrongAnswer3: "Yavin",
        wrongAnswer4: "Endor",
    },
    {
        question: "Who is the young Jedi Knight who becomes Darth Vader?",
        answer: "Anakin Skywalker",
        wrongAnswer1: "Luke Skywalker",
        wrongAnswer2: "Obi-Wan Kenobi",
        wrongAnswer3: "Mace Windu",
        wrongAnswer4: "Plo-Kun",
    }
];

/** 
 * this is to check if the quiz has finished or not, this allows the game to be stopped without creating errors in the code 
 */
let quizEnded = false;

document.addEventListener("DOMContentLoaded", setButtonsAndEvents);

/** 
 * get all buttons and add event liseners after the dom has loaded 
 */
function setButtonsAndEvents() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "submit") {
                checkAnswer(this);
            } else if (this.getAttribute("data-type") === "name-select") {
                startGame();
            } else if (this.getAttribute("data-type") === "reset-yes") {
                resetGame();
            } else if (this.getAttribute("data-type") === "reset-no") {
                resetCancel();
            } else {
                resetConfirm(this);
            }
        });
    }

    resetCancel();
    newPlayer();
}

/**
 * set the game up for new player / this will change all of the text and displays back to start
 */
function newPlayer() {

    document.getElementById("reset").style.display = "none";
    document.getElementById("question-heading-area").style.display = "none";
    document.getElementById("answer-button-area").style.display = "none";
    document.getElementById("player-input").style.display = "";

}

/** 
 * the start function checks if the question number is 0 and starts from question 1 
 */
function startGame() {

    let currentQuestion = document.getElementById("question-number").innerText;

    document.getElementById("player-input").style.display = "none";
    document.getElementById("question-heading-area").style.display = "";
    document.getElementById("answer-button-area").style.display = "";
    document.getElementById("reset").style.display = "";

    if (currentQuestion === "0") {
        populateQuestion();
    }
}

/** 
 * get the current question number and change it to the next question, then update all of the text with the correct question and answers 
 */
function populateQuestion() {

    let currentQuestion = document.getElementById("question-number").innerText;

    /** 
     * go through the current question number and then set it to the next question 
     */
    switch (currentQuestion) {
        case "0":
            document.getElementById("question-number").innerText = "1";
            break;
        case "1":
            document.getElementById("question-number").innerText = "2";
            break;
        case "2":
            document.getElementById("question-number").innerText = "3";
            break;
        case "3":
            document.getElementById("question-number").innerText = "4";
            break;
        case "4":
            document.getElementById("question-number").innerText = "5";
            break;
        case "5":
            document.getElementById("question-number").innerText = "";
            quizCompleted();
            break;
        default:
            break;
    }

    /** 
     * if game is not completed 
     */
    if (!quizEnded) {
        changeQuestionText();
    }
}

/** 
 * get all of the questions and answers and then assign them 
 */
function changeQuestionText() {

    let newQuestion;
    let newAnswer;

    let firstAnswer;
    let secondAnswer;
    let thirdAnswer;
    let fourthAnswer;

    newQuestion = listOfQuestions().question;
    newAnswer = listOfQuestions().answer;
    firstAnswer = listOfQuestions().wrongAnswer1;
    secondAnswer = listOfQuestions().wrongAnswer2;
    thirdAnswer = listOfQuestions().wrongAnswer3;
    fourthAnswer = listOfQuestions().wrongAnswer4;

    document.getElementById("question-text").innerText = newQuestion;

    let random = Math.floor(Math.random() * 4);

    document.getElementById("answer-box1").innerText = random == 0 ? newAnswer : firstAnswer;
    document.getElementById("answer-box2").innerText = random == 1 ? newAnswer : secondAnswer;
    document.getElementById("answer-box3").innerText = random == 2 ? newAnswer : thirdAnswer;
    document.getElementById("answer-box4").innerText = random == 3 ? newAnswer : fourthAnswer;
}

/** 
 * checks the answer is correct for the current question
 */
function checkAnswer(button) {

    let currentQuestion = document.getElementById("question-number").innerText;
    let userAnswer = button.innerText;
    let questionAnswer;

    switch (currentQuestion) {
        case "1":
            questionAnswer = QUESTIONS[0].answer;
            break;
        case "2":
            questionAnswer = QUESTIONS[1].answer;
            break;
        case "3":
            questionAnswer = QUESTIONS[2].answer;
            break;
        case "4":
            questionAnswer = QUESTIONS[3].answer;
            break;
        case "5":
            questionAnswer = QUESTIONS[4].answer;
            break;
        default:
            break;
    }

    if (userAnswer === questionAnswer) {
        correctAnswer();
    } else {
        incorrectAnswer();
    }
    populateQuestion();
}

/** 
 * if the answer was correct update score and show user they got the answer correct 
 */
function correctAnswer() {

    let correct = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++correct;

    document.getElementById("correct-incorrect").style = "color:green";
    document.getElementById("correct-incorrect").innerText = "Correct!";
}

/** 
 * if the answer was wrong update incorrect score and show the user they got the answer wrong 
 */
function incorrectAnswer() {

    let incorrect = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++incorrect;

    document.getElementById("correct-incorrect").style = "color:red";
    document.getElementById("correct-incorrect").innerText = "InCorrect!";
}

/** 
 * get the name of the user that was entered into the input field if no name, set to Player
 */
function getName() {

    let name;

    if (document.getElementById("name").value == "") {
        name = "Player";
    } else {
        name = document.getElementById("name").value;
    }

    return name;
}

/** 
 * once all questions have been answered, hide all of the elements that are not needed and change the question-heading text 
 */
function quizCompleted() {

    quizEnded = true;

    let name = getName();
    const CORRECT = document.getElementById("correct").innerText;

    document.getElementById("correct-incorrect").style.display = "none";
    document.getElementById("question-text").style.display = "none";
    document.getElementById("question-number").style.display = "none";
    document.getElementById("question-heading").innerText = `Congratulations ${name}, you have completed the quiz and got ${CORRECT} out of ${QUESTIONS.length} questions correct`;
    document.getElementById("answer-box1").style.display = "none";
    document.getElementById("answer-box2").style.display = "none";
    document.getElementById("answer-box3").style.display = "none";
    document.getElementById("answer-box4").style.display = "none";
    document.getElementById("reset").innerText = "Quiz completed";
}

/** 
 * confirming the reset of the game / if completed then reset without prompt
 */
function resetConfirm() {

    if (quizEnded) {

        resetGame();
    } else {

        document.getElementById("reset").style.display = "none";

        document.getElementById("reset-yes").style.display = "";
        document.getElementById("reset-no").style.display = "";
    }
}

/** 
 * cancel the reset of the game
 */
function resetCancel() {

    document.getElementById("reset-yes").style.display = "none";
    document.getElementById("reset-no").style.display = "none";

    document.getElementById("reset").style.display = "";
}

/** 
 * set all of the elements that where hiden back to being displayed, reset the score and go back to the start 
 */
function resetGame() {

    quizEnded = false;
    document.getElementById("correct-incorrect").style.display = "";
    document.getElementById("correct-incorrect").innerText = "";
    document.getElementById("question-text").style.display = "";
    document.getElementById("question-number").style.display = "";
    document.getElementById("question-number").innerText = "0";
    document.getElementById("question-heading").innerText = "Question";
    document.getElementById("answer-box1").style.display = "";
    document.getElementById("answer-box2").style.display = "";
    document.getElementById("answer-box3").style.display = "";
    document.getElementById("answer-box4").style.display = "";
    document.getElementById("correct").innerText = "0";
    document.getElementById("incorrect").innerText = "0";
    document.getElementById("reset").innerText = "Reset quiz";

    resetCancel();
    newPlayer();
}

/** 
 * check the current question number and return the new question 
 */
function listOfQuestions() {

    let currentQuestion = document.getElementById("question-number").innerText;
    let questionToReturn;

    switch (currentQuestion) {
        case "1":
            questionToReturn = QUESTIONS[0];
            break;
        case "2":
            questionToReturn = QUESTIONS[1];
            break;
        case "3":
            questionToReturn = QUESTIONS[2];
            break;
        case "4":
            questionToReturn = QUESTIONS[3];
            break;
        case "5":
            questionToReturn = QUESTIONS[4];
            break;
        default:
            break;
    }

    return questionToReturn;
}