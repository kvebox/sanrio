import { trees } from '../imgLoader';
import StaticObject from './staticObject';

export default class Tree extends StaticObject {
    constructor(x, y) {
        super(x,y);
        this.width = 50;
        this.height = 110;
        this.image = trees[0];

        this.position = {
            x: x,
            y: y - this.height/2
        };
    }

}

