const div = document.getElementById("container");
const clear = document.getElementById("clear");
const newgrid = document.getElementById("newgrid");
const random = document.getElementById("random");
const greyscale = document.getElementById("greyscale");
const gridInfo = document.getElementById("gridInfo");

const GRIDSIZE = 550;

let size = 16;
let isRandom = false;
let isGrey = false;

function gridCreate(size, isRandom, isGrey) {
    div.innerHTML = '';
    div.style.width = `${GRIDSIZE}px`;
    div.style.height = `${GRIDSIZE}px`;

    gridInfo.textContent = `Current Grid: ${size} x ${size}`;

    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.style.flex = `0 0 ${100/size}%`;
        box.style.backgroundColor = "white";
        box.classList.add("box");

        if (isRandom === true && isGrey === false) {
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            });
        } else if (isRandom === false && isGrey === true) {
            box.addEventListener('mouseenter', () => {
                let opacity = Number(box.style.opacity);
                if (opacity <= 0.9) {
                    box.style.backgroundColor = "black";
                    box.style.opacity = `${opacity + 0.1 }`;
                } else if (box.style.opacity === 1) {
                    box.style.backgroundColor = "black";
                }
            });
        } else if (isRandom === false && isGrey === false) {
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = "black";
            });
        }
        div.appendChild(box);
    }
}

greyscale.addEventListener('click', () => {
    if (isGrey === false) {
        isGrey = true;
        isRandom = false;
        greyscale.style.backgroundColor = "#6b6bbe";
        random.style.backgroundColor = "#cfcfe4";
    } else if (isGrey === true) {
        isGrey = false;
        isRandom = false;
        greyscale.style.backgroundColor = "#cfcfe4";
        random.style.backgroundColor = "#cfcfe4";
    }
    gridCreate(size, isRandom, isGrey);
});

random.addEventListener('click', () => {
    if (isRandom === false) {
        isRandom = true;
        isGrey = false;
        random.style.backgroundColor = "#6b6bbe";
        greyscale.style.backgroundColor = "#cfcfe4";
        
    } else if (isRandom === true) {
        isRandom = false;
        isGrey = false;
        greyscale.style.backgroundColor = "#cfcfe4";
        random.style.backgroundColor = "#cfcfe4";
    }
    gridCreate(size, isRandom, isGrey);
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
        gridCreate(size, isRandom, isGrey);
    }
    size = parseInt(size);
    gridCreate(size, isRandom, isGrey);
});

clear.addEventListener('click', () => {
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }
});

gridCreate(size, isRandom, isGrey);