
const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
};

const grid = document.querySelector('button');

// const newGrid = () => {
//     if 
// }
// grid.addEventListener('click', (e) => {
//     alert('What size grid would you like?')
// })


const color = (e) => {
    const scroll = e.target;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    scroll.style.backgroundColor = '#' + randomColor;
}

container.addEventListener('mouseover', color);
