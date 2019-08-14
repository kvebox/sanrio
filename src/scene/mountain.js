import { hills } from '../imgLoader';
import StaticObject from './staticObject';
import { randomInt } from '../util/util';

export default class Mountain extends StaticObject {
    constructor(x,y){
        super(x,y);
        this.number = randomInt(0,19);
        this.image = hills[this.number];
        this.position = {
            x: x,
            y: randomInt(-150, 200)
        };
        this.create();
    }

    create(){
        let multiplier = 1.5;
        switch (this.number){
            case 0:
                this.width = 72 / multiplier;
                this.height = 934 / multiplier;
                break;
            case 1:
                this.width = 404 / multiplier;
                this.height = 1086 / multiplier;
                break;
            case 2:
                this.width = 606 / multiplier;
                this.height = 879 / multiplier;
                break;
            case 3:
                this.width = 204 / multiplier;
                this.height = 385 / multiplier;
                break;
            case 4:
                this.width = 208 / multiplier;
                this.height = 1004 / multiplier;
                break;
            case 5:
                this.width = 148 / multiplier;
                this.height = 752 / multiplier;
                break;
            case 6:
                this.width = 266 / multiplier;
                this.height = 716 / multiplier;
                break;
            case 7:
                this.width = 404 / multiplier;
                this.height = 1104 / multiplier;
                break;
            case 8:
                this.width = 201 / multiplier;
                this.height = 1050 / multiplier;
                break;
            case 9:
                this.width = 363 / multiplier;
                this.height = 1266 / multiplier;
                break;
            case 10:
                this.width = 207 / multiplier;
                this.height = 1152 / multiplier;
                break;
            case 11:
                this.width = 138 / multiplier;
                this.height = 1152 / multiplier;
                break;
            case 12:
                this.width = 600 / multiplier;
                this.height = 1770 / multiplier;
                break;
            case 13:
                this.width = 192 / multiplier;
                this.height = 1491 / multiplier;
                break;
            case 14:
                this.width = 200 / multiplier;
                this.height = 806 / multiplier;
                break;
            case 15:
                this.width = 204 / multiplier;
                this.height = 756 / multiplier;
                break;
            case 16:
                this.width = 190 / multiplier;
                this.height = 904 / multiplier;
                break;
            case 17:
                this.width = 264 / multiplier;
                this.height = 669 / multiplier;
                break;
            case 18:
                this.width = 150 / multiplier;
                this.height = 777 / multiplier;
                break;
            case 19:
                this.width = 262 / multiplier;
                this.height = 654 / multiplier;
                break;

        }
    }

    move(player) {
        this.position.x -= player.getOffset_x()/2;

    }

}