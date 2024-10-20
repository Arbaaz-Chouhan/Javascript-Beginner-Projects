const btnE1 =document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailer-container");

btnE1.addEventListener("click",()=>{
    trailerContainerE1.classList.remove("active");  
});

const videoE1 = document.querySelector("video");

closeIconE1.addEventListener("click",()=>{
trailerContainerE1.classList.add("active");
// videoE1.push();
// videoE1.currentTime = 0;
}
)