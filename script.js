// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    newRow.setAttribute('id', `row ${numRows}`);
    for(let i = 0; i < numCols + 1; i++){
        let newCell = document.createElement('td');
        newCell.setAttribute('y', `${numRows}`);
        newCell.setAttribute('x', `${i}`);
        newRow.appendChild(newCell);
    }
    document.querySelector('table').appendChild(newRow); 
    numRows++;
}

// Add a column
function addC() { 
    let row = document.querySelectorAll('tr');
    for(let i = 0; i < numRows; i++){
        let newCell = document.createElement('td');
        newCell.setAttribute('y', `${i}`);
        newCell.setAttribute('x', `${numCols + 1}`);
        let row = document.getElementById(`row ${i}`);
        row.appendChild(newCell);
    }
    numCols++;
}

// Remove a row
function removeR() {

}

// Remove a column
function removeC() {

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}