import { BLOCKSIZE } from '../constants';
import { platformOlive } from '../imgLoader';

export default class PlatformPiece {
    constructor(x, y) {
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;
        this.image = platformOlive[1];
        // this.image = document.getElementById('platformPiece-middle');

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

