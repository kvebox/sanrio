import InputHandler from './players/playerInput';
import GameInputHandler from './gameStateController';
import Platform from './scene/platform';
import Player from './players/player';
import PlatformBuilder from './scene/platformBuilder';

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
        this.gameState = GAMESTATE.RUNNING;
        this.player = new Player(this);

  
        this.platforms = {
            1: new PlatformBuilder(7, 20, 320),
            2: new PlatformBuilder(2, 375, 225),
            3: new PlatformBuilder(3, 150, 250),
            4: new PlatformBuilder(5, 250, 350)
        };

        // this.platform = new PlatformBuilder(3, 150,150);
        // this.platform2 = new PlatformBuilder(5, 250,350);
        new GameInputHandler(this);
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
        
        if (this.gameState == GAMESTATE.PAUSED) return;
        
        this.player.update(deltaTime);
        // Object.keys(this.platforms).forEach (key => {
        //     this.platforms[key].update(deltaTime);
        // });
    }
    
    
    draw() {
        ctx.beginPath();

        this.player.draw(ctx);
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(ctx);
        });


        // this.platform.draw(ctx);
        // this.platform2.draw(ctx);
        
        if (this.gameState == GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fill();
        }
        ctx.closePath();
    }
}

