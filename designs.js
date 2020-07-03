const formItem = document.getElementById("sizePicker");
formItem.addEventListener("submit", handleSubmit);
const table = document.getElementById("pixelCanvas").addEventListener('mousedown', setCellColor);

// Function to set the value of the color to the color on the picker
function setCellColor(e) {
    e.target.style.backgroundColor = document.getElementById('colorPicker').value;
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


// The makeGrid function accepts the form inputs and creates the grid 
function makeGrid(height, width) {
    const mainTable = document.getElementById('pixelCanvas');
    mainTable.innerHTML = '';

    for (i = 0; i < height; i++) {
        const newRow = document.createElement('tr');
        for (j = 0; j < width; j++) {
            const newCell = document.createElement('td');
            // newCell.classList.add("clickAble");
            newRow.appendChild(newCell);
        }
        mainTable.appendChild(newRow);
    }
}