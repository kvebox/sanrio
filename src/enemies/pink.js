import Enemy from "./enemy";
import { pink, pinkFlipped, pinkJump, pinkJumpFlipped } from '../imgLoader';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';

const ENEMYSTATE = {
    IDLE: 0,
    LEFTJUMP: 1,
    RIGHTJUMP: 2
};

export default class Pink extends Enemy {
    constructor(x, y, key) {
        super(x, y);
        this.state = ENEMYSTATE.IDLE;
        this.width = 35;
        this.height = 35;
        this.cycle = 0;
        this.type = 'pink';
        this.image = pink;
        this.image_flipped = pinkFlipped;
        this.key = key;

        this.position = {
            x: x,
            y: y - this.height
        };
    }


    move(player) {
        this.position.x -= player.getOffset_x();
        if (player.position.x > this.position.x){
            this.image = this.image_flipped;
        }
        if (player.position.x < this.position.x){
            this.image = pink;
        }
    }


    draw(ctx) {
        if (this.state == ENEMYSTATE.IDLE){
            this.cycle += 0.25;
            if (this.cycle > this.image.length - 1) {
                this.cycle = 0;
            }
        }
        ctx.drawImage(this.image[Math.ceil(this.cycle)], this.position.x, this.position.y, this.width, this.height);
    }
}