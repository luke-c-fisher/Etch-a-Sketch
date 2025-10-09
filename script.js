
const clickBtn = document.getElementById("clickBtn");


// USE FLEXBOX WITH JS TO CREATE DYNAMIC DIVS

function createGrid(size){
    const container = document.querySelector(".container"); 
  
    for (let i = 0; i < size * size; i++){
        const divs = document.createElement("div");
        divs.style.flex = `0 0 calc(100% / ${size})`;
        
        divs.addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = "dodgerblue"
        });
        
        container.appendChild(divs);
    }
   
}


// Next steps: Address 'click me' button by looking through the rock, paper, scissors project
// to identify potential functions that could help create the prompt function.

function promptFunction(){
    document.querySelector(".container").innerHTML = ""
    let userInput = Number(prompt("Enter dimensions for a new grid:"));

    if (userInput >= 100){
        alert("Value exceeds container. Please try again");
    }

    createGrid(userInput);

}

// Potential function to eliminate contents of container to allow for divs to be added and removed
// dynamically












