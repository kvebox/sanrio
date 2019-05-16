import { CANVAS_WIDTH, JUMP_HEIGHT, SPEED, CANVAS_HEIGHT, GRAVITY } from './../constants';

export default class Player {
    constructor(gameheight, gamewidth) {
        // this.image = 
        this.width = 15;
        this.height = 15;

        this.position = {
            x: gamewidth/2  - this.width/2,
            y: gameheight/2 
        };

        this.speedx = 0;
        this.speedy = -GRAVITY;

    }

    jump() {
        this.speedy = JUMP_HEIGHT;
    }

    stop() {
        this.speedx = 0;
    }

    drop(){
        this.speedy = -GRAVITY;
    }

    move() {

    }

    moveLeft(){
        this.speedx = -SPEED;
    }

    moveRight(){
        this.speedx = SPEED;
    }

    shoot() {

    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;

        
        this.position.x += this.speedx;
        this.position.y -= this.speedy;
        
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > CANVAS_WIDTH) this.position.x = CANVAS_WIDTH-this.width;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > CANVAS_HEIGHT) this.position.y = CANVAS_HEIGHT-this.height;
    }
}

