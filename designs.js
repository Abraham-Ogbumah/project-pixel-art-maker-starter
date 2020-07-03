const formItem = document.getElementById("sizePicker");
formItem.addEventListener("submit", handleSubmit);
const table = document.getElementById("pixelCanvas").addEventListener('click', setCellColor);

// Select color input
function setCellColor(e) {
    e.target.style.backgroundColor = document.getElementById('colorPicker').value;
}

// Select size input
function handleSubmit(e) {
    e.preventDefault();
    var inputHeight = document.getElementById('inputHeight').value;
    var inputWidth = document.getElementById("inputWidth").value;
    makeGrid(inputHeight, inputWidth);
}


// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    // Your code goes here!
    const mainTable = document.getElementById('pixelCanvas');
    mainTable.innerHTML = '';

    for (i = 0; i < height; i++) {
        const newRow = document.createElement('tr');
        for (j = 0; j < width; j++) {
            const newCell = document.createElement('td');
            newCell.classList.add("clickAble");
            newRow.appendChild(newCell);
        }
        mainTable.appendChild(newRow);
    }
}