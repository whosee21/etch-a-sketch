const div = document.getElementById("container");
const GRIDSIZE = 550;

let size = 16;

function gridCreate(){
    div.style.width = `${GRIDSIZE}px`;
    div.style.height = `${GRIDSIZE}px`;
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.style.flex = `0 0 ${100/size}%`;
        box.style.backgroundColor = "white";
        box.classList.add("box");

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = "black";
        });

        div.appendChild(box);
    }
}

gridCreate();