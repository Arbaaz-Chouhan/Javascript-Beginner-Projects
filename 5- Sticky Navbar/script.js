const navbarE1 = document.querySelector(".navbar");
const topContainerE1 = document.querySelector(".top-container");

console.log(navbarE1.offsetHeight);
console.log(topContainerE1.offsetTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > topContainerE1.offsetTop - navbarE1.offsetHeight - 50) {
        navbarE1.classList.add("active");
    } else {
        navbarE1.classList.remove("active");
    }
});

