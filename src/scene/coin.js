import StaticObject from './staticObject';
import { coin } from '../imgLoader';

export default class Coin extends StaticObject {
    constructor (x, y) {
        super(x,y);
        this.width = 25;
        this.height = 25;
        this.image = coin[0];

        this.position = {
            x: x,
            y: y - this.height/2
        };

    }
}