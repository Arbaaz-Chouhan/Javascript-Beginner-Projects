const textareaE1 = document.getElementById("textarea1")

const totalcounterE1 = document.getElementById("total")

const RemainingcounterE1 = document.getElementById("Remaining")
textareaE1.addEventListener("keyup", () => {
    updateCounter();
})


function updateCounter() {
    totalcounterE1.innerText = textareaE1.value.length;

    RemainingcounterE1.innerText = textareaE1.getAttribute("maxlength") -
        textareaE1.value.length;
}
