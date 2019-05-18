export default class PlatformPiece {
    constructor(x, y) {
        this.width = 15;
        this.height = 15;

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

    }
}

