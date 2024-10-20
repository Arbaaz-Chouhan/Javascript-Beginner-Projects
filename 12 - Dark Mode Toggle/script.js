const inputE1 = document.querySelector(".input");

const bodyE1 = document.querySelector("body");

inputE1.checked = true;
updateBody()

function updateBody() {
    if (inputE1.checked) {
        bodyE1.style.backgroundColor = "black";
    } else {
        bodyE1.style.backgroundColor = "white";
    }

}
inputE1.addEventListener("input", () => {
    updateBody();
})