const selectDensity = document.querySelectorAll(".density")
const selectMode = document.querySelectorAll(".mode")

/* Adds Listener to Buttons */ 
function changeGrid () {
    selectDensity.forEach((button) =>  {
        button.addEventListener('click', gridSize());
    });
}

/* Changes Grid Size of Buttons */ 
function gridSize() {
    
}


function generateGrid(density) {
    density = 64 * 64;

    // Identify Container
    const container = document.querySelector('.generated-grid');

    // Clear the Container
    container.innerHTML = '';

    // Loop to Create Containers
    for (let x = 0; x < density; x++) {
        var div = document.createElement('div');
        div.classList.add('row');
        container.appendChild(div);
    }   
}

generateGrid(8)




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
