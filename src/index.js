import Player from './players/player';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from './constants';
import InputHandler from './players/playerInput';



const GameView = require('./gameview');
const Game = require('./game');


document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    canvas.height = CANVAS_HEIGHT;
    canvas.width = CANVAS_WIDTH;
    let ctx = canvas.getContext('2d');
    // let game = new Game();
    // new GameView(game, ctx);
    ctx.fillStyle = '#EF5455';
    let player = new Player(CANVAS_HEIGHT, CANVAS_WIDTH);
    // let platform = new Platform(50, 100);
    // platform.draw(ctx);
    // player.draw(ctx);

    new InputHandler(player);
    let lastTime = 0;

    function gameLoop(timestamp){
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0,0,800,600);
        player.update(deltaTime);

        player.draw(ctx);

        requestAnimationFrame(gameLoop);
        
    }

    gameLoop();
});


