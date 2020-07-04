const formItem = document.getElementById("sizePicker");
formItem.addEventListener("submit", handleSubmit);
const table = document.getElementById("pixelCanvas").addEventListener('mousedown', setCellColor);

// Function to set the value of the color to the color on the picker
function setCellColor(e) {
    if (e.target.tagName.toLowerCase() === 'td') {
        e.target.style.backgroundColor = document.getElementById('colorPicker').value;
    }
}

// This function does the following
// Clears the Default behaviour for the submit submit button
// The function passes the width and height arguments as parameters to the makeGrid function
function handleSubmit(e) {
    e.preventDefault();
    const inputHeight = document.getElementById('inputHeight').value;
    const inputWidth = document.getElementById("inputWidth").value;
    makeGrid(inputHeight, inputWidth);
}


/**
 * @function makeGrid 
 * @param   {number} height the number of rows in the table
 * @param   {number} width the number of columns in the table
 * @description Takes 2 integers and creates an HTML table
 */

function makeGrid(height, width) {
    const mainTable = document.getElementById('pixelCanvas');
    mainTable.innerHTML = '';

    for (i = 0; i < height; i++) {
        const newRow = document.createElement('tr');
        for (j = 0; j < width; j++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        mainTable.appendChild(newRow);
    }
}