const a = document.querySelector(".container");
for(let i = 0; i <30; i++){
    const b = document.createElement("div");
    b.classList.add("color");
    a.appendChild(b);
}
console.log(a);
const b = document.querySelector(".color")
