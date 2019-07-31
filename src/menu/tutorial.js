import Player from '../players/player';
import InputHandler from '../players/playerInput';

export default class Tutorial {
    constructor(controlctx){
        this.gameWidth = 650;
        this.gameHeight = 125;

        // this.tutorialCanvas = document.getElementById('controlCanvas');
        // this.tutorialCanvas.height = 125;
        // this.tutorialCanvas.width = 650;
        this.tutorialctx = controlctx;
        this.player = new Player(this);
        // this.tutorialctx = canvas.getContext('2d');

    }
    
    start() {
        // const handle = new InputHandler(this.player, this);
        // requestAnimationFrame(handle.loop);
        
        
    }
    
    draw() {
        // console.log(this.tutorialctx);
        this.tutorialctx.beginPath();
        this.tutorialctx.fillStyle= 'red';
        this.player.draw(this.tutorialctx);
        this.tutorialctx.rect(20, 20, 150, 100);
        this.tutorialctx.stroke();
        this.tutorialctx.closePath();
    }

    playerPosition(){
        console.log(this.player.position);
    }

}