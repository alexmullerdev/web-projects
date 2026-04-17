import Entity from "./Entities.js";

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const direction = {}
const borda = 10
const player = new Entity((canvas.width/2), (canvas.height/2), 30, 30, 10, "red", context)
const mapWallUp = new Entity(0, 0, canvas.width, borda, null, "black", context)
const mapWallDown = new Entity(0, (canvas.height - borda), canvas.width, borda, null, "black", context)
const mapWallLeft = new Entity(0, 0, borda, canvas.height, null, "black", context)
const mapWallRight = new Entity((canvas.width - borda), 0, borda, canvas.height, null, "black", context)


document.addEventListener('keydown', (e) => {
    e.preventDefault()
    direction[e.key.toLowerCase()] = true
})
document.addEventListener('keyup', (e) => {
    direction[e.key.toLowerCase()] = false
})

function updatePosition() {
    if ((direction["w"] || direction["arrowup"]) && !player.isColliding(mapWallUp))
        { player.move("UP") }
    if ((direction["s"] || direction["arrowdown"]) && !player.isColliding(mapWallDown))
        { player.move("DOWN") }
    if ((direction["a"] || direction["arrowleft"]) && !player.isColliding(mapWallLeft))
        { player.move("LEFT") }
    if ((direction["d"] || direction["arrowright"]) && !player.isColliding(mapWallRight))
        { player.move("RIGHT") }
}

function clearScreen() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}
function render() {
    clearScreen()
    updatePosition()
    player.draw()
    mapWallUp.draw()
    mapWallDown.draw()
    mapWallLeft.draw()
    mapWallRight.draw()
    requestAnimationFrame(render)

}
render()

