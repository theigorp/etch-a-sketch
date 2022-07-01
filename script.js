const container = document.querySelector('.container');
const startButton = document.querySelector('button');

let gridSize;

startButton.addEventListener('click', () => {
    gridSize = prompt("Enter grid size:");
});


for(let i = 0; i < gridSize*gridSize; i++)
{
    const grid = document.createElement('div');
    grid.classList.add('new-block');
    container.appendChild(grid);
}

container.addEventListener('mouseover', (e) => {
    if(e.target == container) e.target.style.backgroundColor = 'white';
    else e.target.style.backgroundColor = 'black';
});