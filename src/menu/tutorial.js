import Player from '../players/player';
import InputHandler from '../players/playerInput';
import PlatformBuilder from '../scene/platformBuilder';
import {trees, bushes} from '../imgLoader';
import { BLOCKSIZE } from '../constants';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4,
    MAP: 5,
    WIN: 6,
    CONTINUE: 7
};

export default class Tutorial {
    constructor(height, width, controlctx, game){
        this.gameWidth = width;
        this.gameHeight = height;
        this.game = game;
        this.tutorialctx = controlctx;
        this.items = [];
        this.enemies = [];

        (BLOCKSIZE == 20) ? this.blockCount = 25 : this.blockCount = 34;

        this.platforms = {
            1: new PlatformBuilder(this.blockCount, 50, 95, 0.5)
        };

        this.sceneObjects = [];
    }

    start() {
        this.player = new Player(this);
        new InputHandler(this.player, this);


    }

    update(deltaTime){
        if (this.game.gameState == GAMESTATE.PAUSED) {
            this.player.update(deltaTime, 0.055);
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

        this.tutorialctx.fillStyle = 'rgba(255,0,0)';
        this.player.draw(this.tutorialctx);
        this.tutorialctx.closePath();
    }


}