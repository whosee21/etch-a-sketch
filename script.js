const div = document.getElementById("container");
const clear = document.getElementById("clear");
const newgrid = document.getElementById("newgrid");
const random = document.getElementById("random");

const GRIDSIZE = 550;

let size = 16;
let isRandom = false;

function gridCreate(size, isRandom){
    div.innerHTML = '';
    div.style.width = `${GRIDSIZE}px`;
    div.style.height = `${GRIDSIZE}px`;
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.style.flex = `0 0 ${100/size}%`;
        box.style.backgroundColor = "white";
        box.classList.add("box");

        if (isRandom === true) {
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            });
        } else if (isRandom === false) {
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = "black";
            });
        }

        div.appendChild(box);
    }
}

random.addEventListener('click', () => {
    if (isRandom === false) {
        isRandom = true;
    } else if (isRandom === true) {
        isRandom = false;
    }
    gridCreate(size, isRandom)
});

newgrid.addEventListener('click', () => {
    size = prompt("Enter new grid size between 1 - 100", 16);
    if (size !== null && size !== ''){
        if (size == '') {
            size = 16;
        } else if (size > 100) {
            size = 100;
        } else if (size < 1) {
            size = 1;
        } 
    } else {
        size = 16;
        alert("Cancelled! Grid returned to default size of 16x16.");
        gridCreate(size, isRandom);
    }
    size = parseInt(size);
    gridCreate(size, isRandom);
});

clear.addEventListener('click', () => {
    // gridClear();
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }
});

// function gridClear(){
//     const boxes = document.getElementsByClassName("box");
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].style.backgroundColor = "white";
//     }
// }

gridCreate(size, isRandom);