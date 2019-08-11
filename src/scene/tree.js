import { trees } from '../imgLoader';
import StaticObject from './staticObject';

export default class Tree extends StaticObject {
    constructor(x, y, size) {
        super(x,y);
        this.width = 50 * size;
        this.height = 110 * size;
        this.image = trees[0];

        this.position = {
            x: x,
            y: y - this.height
        };
    }

}

