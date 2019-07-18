import {CANVAS_HEIGHT, CANVAS_WIDTH} from './constants';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    canvas.height = CANVAS_HEIGHT;
    canvas.width = CANVAS_WIDTH;
    let ctx = canvas.getContext('2d');


    let game = new Game(CANVAS_HEIGHT, CANVAS_WIDTH, ctx);
    game.start();
    
    
    let lastTime = 0;

// images

    function gameLoop(timestamp) {
        // let canvas = document.getElementById('canvas');
        // let ctx = canvas.getContext('2d');
        
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

        game.update(deltaTime);
        game.draw(ctx);



        requestAnimationFrame(gameLoop);
    }
    
    requestAnimationFrame(gameLoop);


});


