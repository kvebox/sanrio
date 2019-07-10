import PlatformPiece from './platform_piece';
import { BLOCKSIZE } from '../constants';

export default class PlatformLeft {
    constructor(x, y) {
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;

        this.image = document.getElementById('platformPiece-right');

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