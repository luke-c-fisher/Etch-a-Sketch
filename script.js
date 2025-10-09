
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

        // clickBtn.addEventListener("click", function {
        //     let userInput = Number(prompt("Enter dimensions for a new grid:"));
        //     let gridValue = createGrid(userInput);
        //     container.appendChild(gridValue);
        // });
        
        container.appendChild(divs);
    }
}

// createGrid(16);

// Next steps: Address 'click me' button by looking through the rock, paper, scissors project
// to identify potential functions that could help create the prompt function.

function promptFunction(){
    let userInput = Number(prompt("Enter dimensions for a new grid:"));

    let newGrid = createGrid(userInput);

}










