const container = document.querySelector('.container');
const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {
    let gridSize = prompt("Enter grid size:");

    if(gridSize > 64) alert('Please enter values less than or equal to 64');
    else
    {
        for(let i = 0; i < (gridSize*gridSize); i++)
        {
        const grid = document.createElement('div');
        grid.classList.add('new-block');
        container.appendChild(grid);
        }
    }
});

container.addEventListener('mouseover', (e) => {
    if(e.target == container) e.target.style.backgroundColor = 'white';
    else e.target.style.backgroundColor = 'black';
});