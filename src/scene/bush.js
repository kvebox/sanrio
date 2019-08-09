import StaticObject from './staticObject';
import { bushes } from '../imgLoader';

export default class Bush extends StaticObject {
    constructor(x,y){
        super(x,y);
        this.image = '';

        this.position = {
            x: x,
            y: y
        };

    }
}