import { CANVAS_WIDTH, JUMP_HEIGHT, SPEED, CANVAS_HEIGHT, GRAVITY } from './../constants';
import {detectCollision} from '../util/collision';


export default class Player {
    constructor(game) {
        // this.image = 
        this.width = 15;
        this.height = 15;
        this.game = game;

        this.position = {
            x: this.game.gameWidth/2  - this.width/2,
            y: this.game.gameHeight/2 
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
        
        this.position.x += this.speedx;
        this.position.y -= this.speedy;

        //check collisions with wall
        
        if(this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth-this.width;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;


        // check collisions with platforms

        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (detectCollision(this, platform)){
                this.speedy = 0;
            }
        });


        
    }
}

