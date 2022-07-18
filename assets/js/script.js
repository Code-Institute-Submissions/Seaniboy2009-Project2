document.addEventListener("DOMContentLoaded", function () {
   let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "submit") {
                alert("clicked submit");
            } else {
                alert("Clicked reset");
            }
        })
    }
})


function startGame() {

}

function populateQuestion() {

}

function checkAnswer() {

}

function updateScore() {

}