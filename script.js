
const clickBtn = document.getElementById("clickBtn");


// USE FLEXBOX WITH JS TO CREATE DYNAMIC DIVS

const grid = 256

function createGrid(size){
    const container = document.querySelector(".container"); 

    for (let i = 0; i < size * size; i++){
        const divs = document.createElement("div");
        divs.id = "childDivs"
        
        divs.addEventListener("mouseover", function(){
            divs.style.backgroundColor = "dodgerblue";
            divs.style.color = "white";
        });

        container.appendChild(divs);
    }
}


function promptFunction(){
    let userInput = Number(prompt("Enter dimensions for a new grid:"));
    // let newGrid = userInput * userInput;

    if (userInput >= 100){
        alert("Value exceeds limit. Try again.");
    } else if (userInput === 5){
        // container.removeChild(divs);
    }

    
}










