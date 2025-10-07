const container = document.querySelector(".container");
const clickBtn = document.getElementById("clickBtn");


// USE FLEXBOX WITH JS TO CREATE DYNAMIC DIVS
const grid = 256

for (let i = 0; i < grid; i++){
    const divs = document.createElement("div");
    divs.id = "childDivs"

    divs.addEventListener("mouseover", function(){
    divs.style.backgroundColor = "blue";
    divs.style.color = "white";
    });

    container.appendChild(divs);
}

clickBtn.addEventListener('click', function(){
    const userPrompt =  prompt("Enter number of squares per side:");

    // if (userPrompt )

});










