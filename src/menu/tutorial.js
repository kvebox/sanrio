import Player from '../players/player';
import InputHandler from '../players/playerInput';

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
        // console.log(this.tutorialctx);
        this.tutorialctx.beginPath();
        this.tutorialctx.fillStyle= 'red';
        this.player.draw(this.tutorialctx);
        // console.log(this.player)
        this.tutorialctx.rect(20, 20, 150, 100);
        // this.tutorialctx.stroke();
        this.tutorialctx.closePath();
    }

    playerPosition(){
        console.log(this.player.position);
    }

}