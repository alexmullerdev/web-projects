
export default class Player {
    constructor(x, y, width, height, color, speed, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.ctx = ctx;
    }
    move(direction) {
    
        if (direction === "left"){
            this.x -= this.speed;
        }
        if (direction === "right"){
            this.x += this.speed;
        }
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    isColliding(entity) {
        if (this.x < entity.x + entity.width &&
            this.x + this.width > entity.x &&
            this.y < entity.y + entity.height &&
            this.y + this.height > entity.y) {
            return true;
        }
        return false;
    }
}