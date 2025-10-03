const container = document.getElementById("container");


// USE FLEXBOX WITH JS TO CREATE DYNAMIC DIVS
const row = document.createElement("div");
row.id = "row"
row.style.display = "flex";
row.style.background = "pink";
row.textContent = "parent div";

container.appendChild(row);







