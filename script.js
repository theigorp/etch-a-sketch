const container = document.querySelector('.container');
let gridSize = 16; //16x16

for(let i = 0; i < gridSize*gridSize; i++)
{
    const grid = document.createElement('div');
    grid.classList.add('new-block');
    container.appendChild(grid);
}

grid.style.height = '92px';
grid.style.width = '92px';