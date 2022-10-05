// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    if(numRows === 0){
        numCols = 1;
    }
    let newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    newRow.setAttribute('id', `row ${numRows}`);
    for(let i = 0; i < numCols; i++){
        let newCell = document.createElement('td');
        // newCell.setAttribute('y', `${numRows}`);
        // newCell.setAttribute('x', `${i}`);
        newCell.setAttribute('cell', `${i}${numRows}`);
        newCell.setAttribute('colored', false);
        newRow.appendChild(newCell);
    }
    document.querySelector('table').appendChild(newRow); 
    numRows++;
    
    console.log(`numRows: ${numRows}`);
    console.log(`numCols ${numCols}`);
}

// Add a column
function addC() { 
    let rows = document.querySelectorAll('tr');
    for(let i = 0; i < numRows; i++){
        let newCell = document.createElement('td');
        // newCell.setAttribute('y', `${i}`);
        // newCell.setAttribute('x', `${numCols}`);
        newCell.setAttribute('cell', `${numCols}${i}`);
        newCell.setAttribute('colored', false);
        let row = rows[i];
        row.appendChild(newCell);
    }
    numCols++;

    console.log(`numRows: ${numRows}`);
    console.log(`numCols ${numCols}`);
}

// Remove a row
function removeR() {
    let table = document.querySelector('table');
    let bottomRow = table.lastElementChild;
    table.removeChild(bottomRow);
    numRows--;
    if(numRows === 0){
        numCols = 0;
    }
    console.log(`numRows: ${numRows}`);
    console.log(`numCols ${numCols}`);
}

// Remove a column
function removeC() {
    let rows = document.querySelectorAll('tr');
    for(let i = 0; i < numRows; i++){
        let row = rows[i];
        let lastCol = row.lastElementChild;
        row.removeChild(lastCol);
    }
    numCols--;
    if(numCols === 0){
        numRows = 0;
        let table = document.querySelector('table');
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
    }
    console.log(`numRows: ${numRows}`);
    console.log(`numCols ${numCols}`);
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
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            let cell = document.querySelector(`[cell = "${j}${i}"]`);
            cell.style.backgroundColor = colorSelected;
            cell.setAttribute('colored', true)
        }
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}