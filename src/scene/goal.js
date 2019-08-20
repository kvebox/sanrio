import StaticObject from "./staticObject";
import { flag } from '../imgLoader';

export default class Goal extends StaticObject{
    constructor(x,y){
        super(x,y);
        this.height= 125;
        this.width = 35;
        this.image = flag;

        this.position = {
            x: x,
            y: y - this.height
        };
    }
}