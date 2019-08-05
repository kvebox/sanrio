import { CANVAS_WIDTH, JUMP_HEIGHT, SPEED, CANVAS_HEIGHT, GRAVITY } from './../constants';
import { trees } from '../imgLoader';

export default class Tree {
    constructor(x, y) {
        this.width = 50;
        this.height = 110;
        this.image = trees[0];

        this.position = {
            x: x,
            y: y - this.height/2
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}

