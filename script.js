const MAX_DIVS = 16; 

const container = document.querySelector('.main-container');



for (let i = 0; i < MAX_DIVS; i++) {
    const div = document.createElement('div');
    const space = 100/4;
    div.style.flex = `1 1 ${space}%`;
    div.style.backgroundColor = 'black';
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'white';
    })
    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = 'black';
    })

    container.appendChild(div);
}
