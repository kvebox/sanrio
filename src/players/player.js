class Player {
    constructor(gameheight, gamewidth) {
        this.width = 15;
        this.height = 15;

        this.position = {
            x: 50,
            y: 1
        };
    }

    jump() {

    }

    move() {

    }

    shoot() {

    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

module.exports = Player;