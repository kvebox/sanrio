import { BLOCKSIZE } from '../constants';
import { platform_1 } from '../imgLoader';

export default class PlatformPiece {
    constructor(x, y) {
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;
        this.image = platform_1[1];

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}

