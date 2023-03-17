let gridSize;
const gridContainer = document.querySelector('#grid-container');

do{
  gridSize = prompt('initialize grid')
} while(gridSize < 12 || gridSize > 100)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

initiateGrid();
const gridItems = document.querySelectorAll('#grid-container > div');
console.log(gridItems);
gridItems.forEach((item) => {
  item.addEventListener('mouseover', changeColor);
})

function initiateGrid(){
  gridContainer.style['grid-template'] = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
  for(i = 0; i < gridSize; i++){
    for(j = 0; j < gridSize; j++){
      gridContainer.appendChild(document.createElement('div'));
    }
  }
}

function changeColor(e) {
  if (!mouseDown) return
  e.target.classList.add('filled');
}