import InputHandler from './players/playerInput';
import GameInputHandler from './gameStateController';
import Platform from './scene/platform';
import Player from './players/player';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};


export default class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;

        
    }

    start() {
        debugger
        // debugger
        this.gameState = GAMESTATE.RUNNING;
        this.player = new Player(this);

        // constructor(width, height, x, y, filler)
        this.platforms = {
            1: new Platform(50, 15, 100, 50),
            2: new Platform(100, 15, 275, 300)

        };
        // new GameInputHandler(this);
        const handle = new InputHandler(this.player, this);
        requestAnimationFrame(handle.loop);
    }
    
    pause() {
        if (this.gameState == GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        } else {
            this.gameState = GAMESTATE.PAUSED;
        }
    }
    
    
    update(deltaTime){
        debugger
        if (this.gameState == GAMESTATE.PAUSED) return;
        
        this.player.update(deltaTime);
        Object.keys(this.platforms).forEach (key => {
            this.platforms[key].update(deltaTime);
        });
    }
    
    
    draw() {
        debugger
        // ctx.resetTransform();
        // ctx.translate(this.player.x, this.player.y);
        // ctx.translate(-this.gameWidth/2, -this.gameHeight/2);
        
        this.player.draw(ctx);
        Object.keys(this.platforms).forEach(key => {
            // this.platforms[key].draw(ctx);
        });
        
        if (this.gameState == GAMESTATE.PAUSED) {
            // ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            // ctx.fillStyle = 'rgba(0,0,0,0.5)';
            // ctx.fill();
        }
    }
}

