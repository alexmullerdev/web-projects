import Entity from "./entities.js";
import Player from "./player.js";

const img = new Image();
img.src = "./imagem.jpeg";
const boi = new Image()
boi.src = "./boi.png";
let camera = 0

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const direction = {};
const borderSize = 15;
const player = new Player(canvas.width / 2 - 25, canvas.height - 250, 20, 20, "blue", 5, ctx);
const wallUp = new Entity(0, 0, canvas.width, borderSize, "black", 0, ctx);
const wallDown = new Entity(0, canvas.height - borderSize, canvas.width, borderSize, "black", 0, ctx);
const wallLeft = new Entity(0, 0, borderSize, canvas.height, "black", 0, ctx);
const wallRight = new Entity(canvas.width - borderSize, 0, borderSize, canvas.height, "black", 0, ctx);

function renderMap(img,camera){
    ctx.drawImage(img, 0-camera, 0, canvas.width*2, canvas.height);
    

}
function renderBoi(img, camera){
    ctx.drawImage(img, 0-camera, canvas.height-270, 50, 50);
    ctx.drawImage(img, canvas.width*2 - 50 - camera, canvas.height-270, 50, 50);
}

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    direction[e.key.toLowerCase()] = true;
});
document.addEventListener("keyup", (e) => {
    e.preventDefault();
    direction[e.key.toLowerCase()] = false;
});

function updatePosition() {
    if ((direction["w"] || direction["arrowup"]) && !player.isColliding(wallUp)) {
        player.move("up");
    }
    if ((direction["s"] || direction["arrowdown"]) && !player.isColliding(wallDown)) {
        player.move("down");
    }
    if ((direction["a"] || direction["arrowleft"]) && !player.isColliding(wallLeft)) {
        camera -= player.speed;
    }
    if ((direction["d"] || direction["arrowright"]) && !player.isColliding(wallRight)) {
        camera += player.speed;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    renderMap(img, camera)
    renderBoi(boi, camera)
    wallUp.draw();
    wallDown.draw();
    wallLeft.draw();
    wallRight.draw();
    player.draw();
    updatePosition();
    requestAnimationFrame(gameLoop);
}
gameLoop();