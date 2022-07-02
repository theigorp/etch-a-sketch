const container = document.querySelector('.container');
const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {
    resetGrid();

    let gridSize = prompt("Enter grid size:");
    //rows = gridSize, cols = gridSize

    //createGrid(rows, cols);

    if(gridSize > 64) alert('Please enter values less than or equal to 64');
    else
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
});

container.addEventListener('mouseover', (e) => {
    if(e.target == container) e.target.style.backgroundColor = 'white';
    else e.target.style.backgroundColor = '#C17767';
});

const resetGrid = () => container.innerHTML = '';

function createGrid(gridSize)
{
    container.style.setProperty('--gridRows', gridSize);
    container.style.setProperty('--gridCols', gridSize);

    for(let i = 0; i < gridSize*gridSize; i++)
    {
        const grid = document.createElement('div');
        container.appendChild(grid).classList.add('new-block');
    }
}

function randomRGB()
{
    let red = random();
    let green = random();
    let blue = random();

    let string = `rgb(${red}, ${green}, ${blue})`;
    return string;
}

const random = () => Math.floor((Math.random() * 255)+1); //returns random number between 0 and 255