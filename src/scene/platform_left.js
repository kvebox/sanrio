import PlatformPiece from './platform_piece';
import { BLOCKSIZE } from '../constants';
import {platform_3} from '../imgLoader';

export default class PlatformLeft  {
    constructor(x, y) {
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;

        this.image = platform_3[0];
        // this.image = document.getElementById('platformPiece-left');

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

    }
}

// export function PlatformLeft(x,y){
//     PlatformPiece.call(this, x, y);
//     this.image = document.getElementById('platformPiece-left');
// }
