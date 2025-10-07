
const clickBtn = document.getElementById("clickBtn");


// USE FLEXBOX WITH JS TO CREATE DYNAMIC DIVS

function createGrid(size){
    const container = document.querySelector(".container"); 

    for (let i = 0; i < size * size; i++){
        const divs = document.createElement("div");
        divs.id = "childDivs"
        divs.style.width = `calc(100% / ${size})`;
        divs.style.height = `calc(100% / ${size})`;
        
        divs.addEventListener("mouseover", function(){
            divs.style.backgroundColor = "dodgerblue";
            divs.style.color = "white";

        });

        container.appendChild(divs);
    }
}

createGrid(16);


function promptFunction(){
    let userInput = Number(prompt("Enter dimensions for a new grid:"));
    // let newGrid = userInput * userInput;

    if (userInput >= 100){
        alert("Value exceeds limit. Try again.");
    } else if (userInput === 5){
        // container.removeChild(divs);
    }

    
}










