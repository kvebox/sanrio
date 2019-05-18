import PlatformPiece from './platform_piece';

export default class PlatformBuilder {
    constructor(numBlocks, x, y) {
        // this.width = width;
        // this.height = height;
        this.pieces = [];
        this.numBlocks = numBlocks;
        // this.filler = filler;

        this.position = {
            x: x,
            y: y
        };
        this.build();
    }

    build(){
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push( new PlatformPiece(this.position.x, this.position.y));
            this.position.x += 15;
        }

    }

    draw(ctx) {
        // debugger
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });
        
    }

    update(deltaTime) {

    }
}

