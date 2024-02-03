const MAX_DIVS = 16; 

const container = document.querySelector('.main-container');

for (let i = 0; i < MAX_DIVS * MAX_DIVS; i++) {
    const div = document.createElement('div');
    div.style.flex = `1 1 calc(100% / ${MAX_DIVS})` 
    div.style.aspectRatio = '1 / 1'; // guarantees a square element

    div.style.backgroundColor = "rgb(0,0,0)";
    div.addEventListener('mouseover', () => {
        let previousRgb = div.style.backgroundColor;
        let previousRgbArray = previousRgb.split(',');
        let value = parseInt(previousRgbArray[0].split('(')[1]) + 25;
        div.style.backgroundColor = `rgb(${value},${value},${value})`;

    })

    container.appendChild(div);
}

function removePreviousGrid() {
    const divs = document.querySelectorAll('.main-container div');
    divs.forEach(div => container.removeChild(div));
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.flex = `1 1 calc(100% / ${size})` 
        div.style.aspectRatio = '1 / 1'; // guarantees a square element
        div.style.backgroundColor = "rgb(0,0,0)";
        div.addEventListener('mouseover', () => {
            let previousRgb = div.style.backgroundColor;
            let previousRgbArray = previousRgb.split(',');
            let value = parseInt(previousRgbArray[0].split('(')[1]) + 25;
            div.style.backgroundColor = `rgb(${value},${value},${value})`;
        })
        container.appendChild(div);
    }
}


const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    removePreviousGrid();
    let input = prompt('How many squares per side?');
    input = Math.min(input, 100);
    createGrid(input);
})