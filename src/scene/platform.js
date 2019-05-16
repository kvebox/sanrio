export default class Platform {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.position = {
            x: 100,
            y: 100
        };
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){

    }
}

