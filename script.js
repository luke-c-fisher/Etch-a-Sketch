const container = document.getElementById("container");


// USE FLEXBOX WITH JS TO CREATE DYNAMIC DIVS
const grid = 256

for (let i = 0; i < grid; i++){
    const divs = document.createElement("div");
    divs.id = "divs";
    divs.style.background = "pink";
    divs.textContent = "child divs";

    container.appendChild(divs);
}









