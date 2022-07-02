const container = document.querySelector('.container');
const clearButton = document.querySelector('#clear');
const rgbButton = document.querySelector('#rgb');
const colorButton = document.querySelector('#color');
const slider = document.querySelector('input');

let isRgbOn = false;
let isColorOn = true;

clearButton.addEventListener('click', () => {
    resetGrid();

    let gridSize = prompt("Enter grid size:"); //rows = gridSize, cols = gridSize

    createGrid(gridSize);
    
});

rgbButton.addEventListener('click', () => {
    isColorOn = false;
    isRgbOn = true;
});

colorButton.addEventListener('click', () => {
    isRgbOn = false;
    isColorOn = true;
});

container.addEventListener('mouseover', (e) => {
    if(e.target == container) e.target.style.backgroundColor = 'white';
    else {
        if(isRgbOn) e.target.style.backgroundColor = randomRGB();
        else if (isColorOn) e.target.style.backgroundColor = '#e8765c';
    }
});

const resetGrid = () => container.innerHTML = '';

function createGrid(gridSize)
{
    container.style.border = 'none';
    container.style.setProperty('--gridRows', gridSize);
    container.style.setProperty('--gridCols', gridSize);

   for(let i = 0; i < gridSize*gridSize; i++)
    {
        const grid = document.createElement('div');
        container.appendChild(grid).classList.add('new-block');
    }
}
//generate and return radnom rgb color
function randomRGB()
{
    let red = random();
    let green = random();
    let blue = random();

    return `rgb(${red}, ${green}, ${blue})`;
}

const random = () => Math.floor((Math.random() * 255)+1); //returns random number between 0 and 255

//dynamic slider

const gridSizeValue = document.querySelector('.gridSizeValue');

//updates div containing sizeValue class on website
function updateSizeValue(value) {
    gridSizeValue.textContent = `${value} x ${value}`
}

function setCurrentSize(newSize) {
    currentSize = newSize
}

slider.onmousemove = e => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    resetGrid();
}