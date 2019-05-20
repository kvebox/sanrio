import PlatformPiece from './platform_piece';
import PlatformLeft from './platform_left';
import PlatformRight from './platform_right';
import {BLOCKSIZE, CANVAS_HEIGHT} from '../constants';

export default class PlatformBuilder {
    constructor(numBlocks, x, y) {
        // this.width = width;
        // this.height = height;
        this.pieces = [];
        this.numBlocks = numBlocks;
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
        this.pieces.push(new PlatformLeft(this.position.x, this.position.y));
        this.position.x += BLOCKSIZE;
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push( new PlatformPiece(this.position.x, this.position.y));
            this.position.x += BLOCKSIZE;
        }
        this.pieces.push(new PlatformRight(this.position.x, this.position.y));

    }

    draw(ctx) {
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });
        ctx.rect(this.x_filler, this.y_filler, this.position.x-this.x_filler+BLOCKSIZE, CANVAS_HEIGHT);
        ctx.fillStyle = 'rgba(110,49,25)';
        ctx.fill();
        
    }

    update(deltaTime) {

    }
}

