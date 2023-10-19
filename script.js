var color = "#C0C0C0"
const selectMode = document.querySelectorAll(".mode")

/* Adds Listener to Buttons */ 
function changeGrid () {
    var selectDensitySmall = document.querySelector(".small")
    var selectDensityMedium = document.querySelector(".medium")
    var selectDensityLarge = document.querySelector(".large")
    selectDensitySmall.addEventListener("click", function () {
        generateGrid(16,22);
    });
    selectDensityMedium.addEventListener("click", function () {
        generateGrid(32,44);
    });
    selectDensityLarge.addEventListener("click", function () {
        generateGrid(64,88);
    });
}

changeGrid()

/* Changes Grid Size of Buttons */ 
function generateGrid(density, rows) {
    console.log('hi');
    // Set Size of Grid
    var size = density * rows;

    // Identify Container
    const container = document.querySelector('.generated-grid');

    // Clear the Container
    container.innerHTML = '';

    // Set Columns for Grid
    container.style.gridTemplateColumns = `repeat(${density},auto)`;

    // Loop to Create Containers
    for (let x = 0; x < size; x++) {
        var div = document.createElement('div');
        div.classList.add('row');
        container.appendChild(div);
    }
    changeColor(color);   
}

generateGrid(32, 44)

/* Add a Permanent Change to Div */
function changeColor (color) {
    var row = document.querySelectorAll(".row")

    row.forEach(function(hoverEvent) {
        hoverEvent.addEventListener("mouseover", function () {
            hoverEvent.style.backgroundColor = color;
        });
    });
}

changeColor(color);

/* Adds Listener to Buttons */ 
function changeColorBackground () {
    var selectClassic = document.querySelector(".classic")
    var selectModern = document.querySelector(".modern")
    var selectRetro = document.querySelector(".retro")

    selectClassic.addEventListener("click", function () {
        color = "#C0C0C0";
        changeColor(color);
    });
    selectModern.addEventListener("click", function () {
        color = "#D19A94";
        changeColor(color);
    });
    selectRetro.addEventListener("click", function () {
        color = "#008080";
        changeColor(color);
    });
}

changeColorBackground ();


function resetBackground() {
    var selectErase = document.querySelector(".erase-button")
    selectErase.addEventListener("click", function () {
        var color = "#FFFFFF"
        changeColor(color);
    });
}

resetBackground();
