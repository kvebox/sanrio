import StaticObject from './staticObject';
import { bushes } from '../imgLoader';
import { randomInt } from '../util/util'; 

export default class Bush extends StaticObject {
    constructor(x,y, number){
        super(x,y);
        this.number = number;
        this.image = bushes[this.number];
        this.multiplier = 2.5;

        this.position = {
            x: x,
            y: y + this.height/this.multiplier
        };

        this.create();
    }

    create() {
        switch (this.number) {
            case 0:
                this.height = 102 / this.multiplier;
                this.width = 359 / this.multiplier;
                break;
            case 1:
                this.height = 75 / this.multiplier;
                this.width = 238 / this.multiplier;
                break;
            case 2:
                this.height = 96 / this.multiplier;
                this.width = 385 / this.multiplier;
                break;
            case 3:
                this.height = 80 / this.multiplier;
                this.width = 297 / this.multiplier;
                break;
            case 4:
                this.height = 113 / this.multiplier;
                this.width = 290 / this.multiplier;
                break;
            case 5:
                this.height = 74 / this.multiplier;
                this.width = 208 / this.multiplier;
                break;

        }
    }
    
}