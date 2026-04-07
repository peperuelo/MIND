const boton = document.getElementById("move");
const square = document.querySelector(".square");
let running = false;

boton.addEventListener("click", () => {
    running = !running;
    square.style.animationPlayState = running?"running":"paused";
   
})