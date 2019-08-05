import { CANVAS_WIDTH, JUMP_HEIGHT, SPEED, CANVAS_HEIGHT, GRAVITY } from './../constants';
import { clouds } from '../imgLoader';

export default class Cloud {
    constructor(game, number) {
        this.width = 100;
        this.height = 100;
        this.game = game;
        this.image = clouds[number];

        this.position = {
            x: this.game.gameWidth/2,
            y: this.game.gameHeight / 2
        };

        this.x_velocity = -0.5;

    }

    move() {
        this.position.x += this.x_velocity;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {

        this.move();

        //check collisions with wall

        // if (this.position.x < 0) this.position.x = 0;
        // if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;
    }
}

