const slider = document.querySelector('#myRange');
const value = document.querySelector('#demo');
const grid = document.querySelector("#grid");

value.innerHTML= slider.value;
slider.oninput = function() {
    value.innerHTML = this.value;
  };


const createGrid = gridNumber => {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridItem);
        gridItem.style.border = '1px solid grey'
    };
    const gridBoxes = grid.querySelectorAll('div');
    gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', colorGrid));
};

const colorGrid = (e) => {
    const scroll = e.target;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    scroll.style.backgroundColor = '#' + randomColor;
};

function pixelSize() {
    let gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
};

createGrid(10)

slider.addEventListener('mouseup', pixelSize);
