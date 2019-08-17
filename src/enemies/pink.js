import Enemy from "./enemy";
import { pink, pinkFlipped, pinkJump, pinkJumpFlipped } from '../imgLoader';
import { CANVAS_HEIGHT, CANVAS_WIDTH, GRAVITY } from '../constants';

const ENEMYSTATE = {
    IDLELEFT: 0,
    IDLERIGHT: 1,
    LEFTJUMP: 2,
    RIGHTJUMP: 3
};

export default class Pink extends Enemy {
    constructor(x, y, key) {
        super(x, y);
        this.state = ENEMYSTATE.RIGHTJUMP;
        this.width = 35;
        this.height = 35;
        this.cycle = 0;
        this.x_velocity = 0;
        this.y_velocity = GRAVITY;
        this.type = 'pink';
        this.image = pink;
        this.key = key;
        this.jump = false;

        this.position = {
            x: x,
            y: y - this.height
        };
    }


    move(player) {
        this.position.x -= player.getOffset_x();
        if (player.position.x > this.position.x && !this.jump){
            this.state = ENEMYSTATE.IDLERIGHT;
            this.image = pinkFlipped;
        }
        if (player.position.x < this.position.x && !this.jump){
            this.state = ENEMYSTATE.IDLELEFT;
            this.image = pink;
        }

        this.x_velocity *= 0.9;
        this.y_velocity += 0.9;

        if (this.state == ENEMYSTATE.LEFTJUMP){
            this.position.x += this.x_velocity;
        }

        if (this.state == ENEMYSTATE.RIGHTJUMP) {
            this.position.x += this.y_velocity;
        }
    }


    draw(ctx) {
            this.cycle += 0.25;
            if (this.cycle > this.image.length - 1) {
                this.cycle = 0;
            }

        ctx.drawImage(this.image[Math.ceil(this.cycle)], this.position.x, this.position.y, this.width, this.height);
    }
}