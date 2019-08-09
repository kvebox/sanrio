import PlatformPiece from './platform_piece';
import PlatformLeft from './platform_left';
import PlatformRight from './platform_right';
import {BLOCKSIZE, CANVAS_HEIGHT} from '../constants';

export default class PlatformBuilder {
    constructor(numBlocks, x, y, color) {
        this.width = BLOCKSIZE * (numBlocks+2);
        this.height = BLOCKSIZE;
        this.pieces = [];
        this.numBlocks = numBlocks;
        this.platform_x = x;
        this.platform_y = y;
        this.x_filler = x;
        this.y_filler = y + BLOCKSIZE;
        this.color = color;
        // this.filler = filler;

        this.position = {
            x: x,
            y: y
        };
        this.build();
    }

    build(){
        this.pieces.push(new PlatformLeft(this.platform_x, this.platform_y, this.color));
        this.platform_x += BLOCKSIZE;
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push(new PlatformPiece(this.platform_x, this.platform_y, this.color));
            this.platform_x += BLOCKSIZE;
        }
        this.pieces.push(new PlatformRight(this.platform_x, this.platform_y, this.color));

    }


    move(player) {
        this.position.x -= player.getOffset_x();
        // this.position.y += player.getOffset_y();

        this.x_filler -= player.getOffset_x();
        this.platform_x -= player.getOffset_x();
    }

    update(player){
        this.move(player);

        this.pieces.forEach(piece => {
            piece.update(player);
        });
    }

    draw(ctx) {
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });

        switch (this.color){
            case 1: 
                ctx.fillStyle = 'rgba(90,49,33)';
                break;
            case 2:
                ctx.fillStyle = 'rgba(115,72,45)';
                break;
            case 3:
                ctx.fillStyle = 'rgba(120,82,50)';
                break;
            case 4:
                ctx.fillStyle = 'rgba(123,92,57)';
                break;
            case 5:
                ctx.fillStyle = 'rgba(138,120,69)';
                break;
            default: ctx.fillStyle = 'rgba(30,49,25)';
        }

        ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+BLOCKSIZE, CANVAS_HEIGHT);
        
        ctx.fill();
        
    }

}

