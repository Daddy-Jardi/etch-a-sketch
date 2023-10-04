const grid = document.querySelector('.grid');

for(let i = 0; i < 32; i++){
    const div = document.createElement('div');
    div.classList.add('grid-squares');
    
    grid.appendChild(div);
}