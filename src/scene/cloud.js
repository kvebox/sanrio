import { CANVAS_WIDTH, JUMP_HEIGHT, SPEED, CANVAS_HEIGHT, GRAVITY } from './../constants';
import { clouds } from '../imgLoader';

export default class Cloud {
    constructor(game, key) {
        this.width = 0;
        this.height = 0;
        this.game = game;
        this.key = key;
        this.number = this.randomInt(0, 5);
        this.image = clouds[this.number];

        this.position = {
            x: this.game.gameWidth,
            y: this.game.gameHeight/ this.randomInt(2,4)
        };

        this.x_velocity = -Math.random(0.5,1);
        this.create();
    }

    randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    destroy(){
        this.game.deleteElement('clouds', this.key);
    }

    create(){
        switch (this.number){
            case 0:
                this.height = 252/4;
                this.width = 816/4;
                break;
            case 1:
                this.height = 60/4;
                this.width = 465/4;
                break;
            case 2:
                this.height = 162/4;
                this.width = 702/4;
                break;
            case 3:
                this.height = 184/4;
                this.width = 698/4;
                break;
            case 4:
                this.height = 176/4;
                this.width = 858/4;
                break;
            case 5:
                this.height = 294/4;
                this.width = 891/4;
                break;

        }
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

        if (this.position.x < 0) {
            this.destroy();
        }
        // if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;
    }
}

