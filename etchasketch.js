let gridSize = 16;
const gridContainer = document.querySelector('#grid-container');

initiateGrid();
const gridItems = document.querySelectorAll('#grid-container > div');
console.log(gridItems);
gridItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('filled');
  })
})

function initiateGrid(){
  gridContainer.style['grid-template'] = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
  for(i = 0; i < gridSize; i++){
    for(j = 0; j < gridSize; j++){
      gridContainer.appendChild(document.createElement('div'));
    }
  }
}