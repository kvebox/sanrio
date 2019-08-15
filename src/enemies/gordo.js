import Enemy from "./enemy";
import { gordo } from '../imgLoader';

export default class Gordo extends Enemy{
    constructor(x, y, key){
        super(x,y);
        this.width = 100;
        this.height = 100;
        this.cycle = 0;
        this.type = 'gordo';
        this.image = gordo;
        this.key = key;

        this.position = {
            x: x,
            y: y - this.height + 5
        };
    }


    draw(ctx){
        this.cycle += 0.33;
        if (this.cycle > this.image.length - 1) {
            this.cycle = 0;
        }
        ctx.drawImage(this.image[Math.ceil(this.cycle)], this.position.x, this.position.y, this.width, this.height);
    }
}