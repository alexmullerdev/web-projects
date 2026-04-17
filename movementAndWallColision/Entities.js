
export default class Entity{
    constructor(x, y, width, height, speed, color, context){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.color = color
        this.context = context
    }
    move(direction){ 
        if(direction == "UP"){this.y -= this.speed}
        if(direction == "DOWN"){this.y += this.speed}
        if(direction == "LEFT"){this.x -= this.speed}
        if(direction == "RIGHT"){this.x += this.speed}
    }
    draw(){
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
    isColiding(entity){
        //Horizontal test
        if((this.x + this.width) >= entity.x && (entity.x + entity.width) >= this.x 
        //Vertical test
        && (this.y + this.height) >= entity.y && (entity.y + entity.height) >= this.y){
            return true
        }
        return false
    }
}