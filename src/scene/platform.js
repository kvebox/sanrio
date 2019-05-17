export default class Platform {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){

    }
}

