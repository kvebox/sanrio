import {CANVAS_HEIGHT, CANVAS_WIDTH, CONTROL_CANVAS_HEIGHT, CONTROL_CANVAS_WIDTH} from './constants';
import Game from './game';
import Tutorial from './menu/tutorial';

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    let tutorialCanvas = document.getElementById('controlCanvas');
    tutorialCanvas.height = CONTROL_CANVAS_HEIGHT;
    tutorialCanvas.width = CONTROL_CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    canvas.width = CANVAS_WIDTH;
    let ctx = canvas.getContext('2d');
    let controlctx = tutorialCanvas.getContext('2d');

    let game = new Game(CANVAS_HEIGHT, CANVAS_WIDTH, ctx);
    let tutorial = new Tutorial(CONTROL_CANVAS_HEIGHT,CONTROL_CANVAS_WIDTH,controlctx, game);
    game.start();
    tutorial.start();
    
    
    let lastTime = 0;

// images

    function gameLoop(timestamp) {
        // let canvas = document.getElementById('canvas');
        // let ctx = canvas.getContext('2d');
        
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        controlctx.clearRect(0,0,CONTROL_CANVAS_WIDTH,CONTROL_CANVAS_HEIGHT);

        tutorial.update(deltaTime);
        tutorial.draw(controlctx);

        game.update(deltaTime);
        game.draw(ctx);
        // game.draw(controlctx);


        requestAnimationFrame(gameLoop);
    }
    
    requestAnimationFrame(gameLoop);


});


