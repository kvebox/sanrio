import { hills } from '../imgLoader';
import StaticObject from './staticObject';

export default class Mountain extends StaticObject {
    constructor(x,y){
        super(x,y);
        this.number = 1;
        this.image = hills[this.number];
        this.width = 200;
        this.height = 2000;

        this.position = {
            x: x,
            y: y
        };
    }


}