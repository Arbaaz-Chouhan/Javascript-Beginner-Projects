const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputE1 = document.getElementById("input");

const formE1 = document.getElementById("form");

const scoreE1 = docuemnt.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}
scoreE1.innerText =

    questionEl.innerText = `What is ${num1} multiplay by ${num2}?`

const correctAns = num1 * num2;

formE1.addEventListener("submit", () => {
    const userAns = +inputE1.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.etItem("score", JSON.stringify(score))
}
