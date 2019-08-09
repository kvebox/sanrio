import PlatformPiece from './platform_piece';
import { BLOCKSIZE } from '../constants';
import { platform_mid } from '../imgLoader';

export default class Platform extends PlatformPiece {
    constructor(x, y, color, numblocks) {
        super (x,y,color);
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;
        this.image = platform_mid[color];
        this.numblocks = numblocks;

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width * this.numblocks, this.height);
    }

}

