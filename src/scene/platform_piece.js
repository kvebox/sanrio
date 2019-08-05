import { BLOCKSIZE } from '../constants';
import { platform_mid } from '../imgLoader';
import { platform } from 'os';

export default class PlatformPiece {
    constructor(x, y, color) {
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;
        this.image = platform_mid[color];

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}

