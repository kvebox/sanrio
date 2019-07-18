import InputHandler from './players/playerInput';
import GameInputHandler from './gameStateController';
import Platform from './scene/platform';
import Player from './players/player';
import PlatformBuilder from './scene/platformBuilder';
import Menu from './menu/menu';

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

        //13, 
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        this.player = new Player(this);

  
        this.platforms = {
            1: new PlatformBuilder(8, 250, 350),
            2: new PlatformBuilder(7, 150, 250),
            3: new PlatformBuilder(2, 375, 225),
            4: new PlatformBuilder(7, 20, 320),
        };
        this.menu = new Menu(this);
        this.menu.generateControls();
        new GameInputHandler(this, this.menu);
        const handle = new InputHandler(this.player, this);
        requestAnimationFrame(handle.loop);
    }
    
    pause() {
        if (this.gameState == GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
            let menu = document.getElementById('allMenus');
            menu.style.display = 'none';

            let mainMenu = document.getElementById('mainMenuContainer');
            let controlsMenu = document.getElementById('controlsMenuContainer');
            let optionsMenu = document.getElementById('optionsMenuContainer');

            controlsMenu.style.display = 'none';
            optionsMenu.style.display = 'none';
            mainMenu.style.display = 'block';


        } else {
            this.gameState = GAMESTATE.PAUSED;
            let menu = document.getElementById('allMenus');
            menu.style.display = 'block';
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

        if (this.gameState == GAMESTATE.PAUSED) {
            this.menu.showMenu();
        }

        if (this.gameState == GAMESTATE.GAMEOVER){
            
        }
        
        ctx.closePath();
    }
}

