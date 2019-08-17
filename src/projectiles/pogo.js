import StaticObject from '../scene/staticObject';
import { pogo } from '../imgLoader';

export default class Pogo extends StaticObject {
    constructor(x,y, key){
        super(x,y);

        this.width = 25;
        this.height = 25;
        this.image = pogo;
        this.float = 0;
        this.state = 'up';
        this.key = key;
        this.type = 'pogo';

        this.position = {
            x: x,
            y: y -= this.height/1.5
        };
    }

    move(player){
        this.position.x -= player.getOffset_x();
        (this.state == 'up') ? this.float += -0.1 : this.float += 0.1;
        if (this.float < -1.5){
            this.float = 0;
            this.state = 'down';
        }
        if (this.float > 1.5){
            this.float = 0;
            this.state = 'up';
        } 
        // this.position.y += this.float;
    }
}