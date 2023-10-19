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
}

generateGrid(32, 44)




/*
function generateGrid(density) {
    // Identify Container
    const container = document.querySelector('.generated-grid');

    // Clear the Container
    container.innerHTML = '';

    // Loop to Create Containers
    for (let x = 0; x < density; x++) {
        var row = document.createElement('div');
        row.classList.add('row');

        // Loop to Create Columned Rows
        for (let i = 0; i < density; i++) {
        var cell = document.createElement('div')
        cell.classList.add('cell')
        row.appendChild(cell)
        }
        container.appendChild(row);
    }   
}

generateGrid(8) */
