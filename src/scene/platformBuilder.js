import PlatformPiece from './platform_piece';
import PlatformLeft from './platform_left';
import PlatformRight from './platform_right';
import {BLOCKSIZE, CANVAS_HEIGHT} from '../constants';

export default class PlatformBuilder {
    constructor(numBlocks, x, y) {
        this.width = BLOCKSIZE * (numBlocks+2);
        this.height = BLOCKSIZE;
        this.pieces = [];
        this.numBlocks = numBlocks;
        this.platform_x = x;
        this.platform_y = y;
        this.x_filler = x;
        this.y_filler = y + BLOCKSIZE;
        // this.filler = filler;

        this.position = {
            x: x,
            y: y
        };
        this.build();
    }

    build(){
        this.pieces.push(new PlatformLeft(this.platform_x, this.platform_y));
        this.platform_x += BLOCKSIZE;
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push(new PlatformPiece(this.platform_x, this.platform_y));
            this.platform_x += BLOCKSIZE;
        }
        this.pieces.push(new PlatformRight(this.platform_x, this.platform_y));

    }

    draw(ctx) {
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });
        ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+BLOCKSIZE, CANVAS_HEIGHT);
        ctx.fillStyle = 'rgba(110,49,25)';
        ctx.fill();
        
    }

    update(deltaTime) {

    }
}

