const div = document.getElementById("container");
// div.style.width = `600px`;
const GRIDSIZE = 550;

let size = 16;

div.style.width = `${GRIDSIZE}px`;
div.style.height = `${GRIDSIZE}px`;
for (let i = 0; i < (size * size); i++) {
    const box = document.createElement("div");
    box.style.height = `${GRIDSIZE/size}px`;
    box.style.width = `${GRIDSIZE/size}px`;
    box.style.flex = `0 0 ${100/size}%`;
    box.classList.add("box");
    div.appendChild(box);
}