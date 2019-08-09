import StaticObject from './staticObject';
import { coin } from '../imgLoader';

export default class Coin extends StaticObject {
    constructor (x, y) {
        super(x,y);
        this.width = 20;
        this.height = 20;
        this.image = coin;
        this.cycle = 0;

        this.position = {
            x: x,
            y: y + this.height/2
        };
        
        
    }
    draw(ctx){
        this.cycle += 0.5;
        if (this.cycle > this.image.length-1) {
            this.cycle = 0;
        }
        ctx.drawImage(this.image[Math.floor(this.cycle)], this.position.x, this.position.y, this.width, this.height);
    }
}