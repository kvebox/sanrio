import { BLOCKSIZE } from '../constants';
import { platform_mid } from '../imgLoader';

export default class PlatformPiece {
    constructor(x, y, color, numBlocks) {
        this.width = BLOCKSIZE*numBlocks;
        this.height = BLOCKSIZE;
        this.image = platform_mid[color];


        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
    }

    move(player) {
        this.position.x -= player.getOffset_x();
        // this.position.y += player.getOffset_y();
        // this.position.y += this.y_velocity;

    }

    update(player){
        this.move(player);
    }

}

