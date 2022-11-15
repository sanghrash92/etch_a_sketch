const slider = document.querySelector('#myRange');
const rainbowColor = document.querySelector('#rainbow');
const value = document.querySelector('#demo');
const grid = document.querySelector("#grid");
const btn = document.querySelector('.button');
const blackBtn= document.querySelector('#button');
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
    rainbowColor.addEventListener('click', rainbow);
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

function reset() {
    let grids = grid.querySelectorAll('div');
    grids.forEach(grid => grid.style.backgroundColor = 'white');
};

function blackColor(e) {
    const gridBoxes = grid.querySelectorAll('div');
    gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    }));
};

const rainbow = (e) => {
    const gridBoxes = grid.querySelectorAll('div');
    gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', function(e) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
    }));
}

createGrid(10)

slider.addEventListener('mouseup', pixelSize);
btn.addEventListener('click', reset);
blackBtn.addEventListener('click', blackColor);

