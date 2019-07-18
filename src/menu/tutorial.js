import Player from '../players/player';
import InputHandler from '../players/playerInput';

export default class Tutorial {
    constructor(){
        this.gameWidth = 650;
        this.gameHeight = 125;

        this.canvas = document.getElementById('controlCanvas');
        this.ctx = canvas.getContext('2d');
    }
    
    start() {
        this.player = new Player(this);
        const handle = new InputHandler(this.player, this);
        requestAnimationFrame(handle.loop);
        
        this.fillStyle= 'red';
    }

    draw() {
        this.ctx.beginPath();
        this.player.draw(this.ctx);
        this.ctx.closePath();
    }

    playerPosition(){
        console.log(this.player.position);
    }

}