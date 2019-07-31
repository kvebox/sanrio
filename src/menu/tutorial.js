import Player from '../players/player';
import InputHandler from '../players/playerInput';
import PlatformBuilder from '../scene/platformBuilder';

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

        this.platforms = {
            1: new PlatformBuilder(41, 0, 100)
        };

        // this.tutorialCanvas = document.getElementById('controlCanvas');
        // this.tutorialCanvas.height = 125;
        // this.tutorialCanvas.width = 650;
        this.tutorialctx = controlctx;
        // this.tutorialctx = canvas.getContext('2d');

    }

    start() {
        this.player = new Player(this);
        const controlHandle = new InputHandler(this.player, this);
        requestAnimationFrame(controlHandle.loop);

    }

    update(){
        if (this.game.gameState == GAMESTATE.PAUSED) {
            // debugger
            // console.log(this.player);
            this.player.update();
        }

    }

    loseLife(){}
    
    draw() {
        this.tutorialctx.beginPath();
        this.tutorialctx.fillStyle= 'red';
        this.player.draw(this.tutorialctx);
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(this.tutorialctx);
        });
        this.tutorialctx.closePath();
    }

    playerPosition(){
        console.log(this.player.position);
    }

}