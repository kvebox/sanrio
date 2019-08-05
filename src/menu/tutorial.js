import Player from '../players/player';
import InputHandler from '../players/playerInput';
import PlatformBuilder from '../scene/platformBuilder';
import {trees, bushes} from '../imgLoader';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

export default class Tutorial {
    constructor(height, width, controlctx, game){
        this.gameWidth = width;
        this.gameHeight = height;
        this.game = game;
        this.tutorialctx = controlctx;

        this.platforms = {
            1: new PlatformBuilder(25, 50, 95, 1)
        };

        this.sceneObjects = [];
    }

    start() {
        this.player = new Player(this);
        const controlHandle = new InputHandler(this.player, this);
        // requestAnimationFrame(controlHandle.loop);

    }

    update(){
        if (this.game.gameState == GAMESTATE.PAUSED) {
            this.player.update();
        }

    }

    loseLife(){}
    
    draw() {
        this.tutorialctx.beginPath();
        this.tutorialctx.fillStyle= 'red';
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(this.tutorialctx);
        });
        this.tutorialctx.drawImage(trees[0], 420, -5, 40, 100);
        this.tutorialctx.drawImage(trees[0], 462.5, 20, 30, 75);
        this.tutorialctx.drawImage(bushes[3], 165, 75, 70, 20);
        this.tutorialctx.drawImage(bushes[1], 385, 75, 65, 20);
        this.tutorialctx.drawImage(bushes[2], 475, 75, 85, 20);

        this.player.draw(this.tutorialctx);
        this.tutorialctx.closePath();
    }


}