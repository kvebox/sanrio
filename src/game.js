import InputHandler from './players/playerInput';
import GameInputHandler from './gameStateController';
import Platform from './scene/platform';
import Player from './players/player';
import PlatformBuilder from './scene/platformBuilder';
import Menu from './menu/menu';
import Tutorial from './menu/tutorial';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3
};


export default class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH, ctx) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;
        this.ctx = ctx;

        //13, 
    }

    start() {
        this.gameState = GAMESTATE.GAMEOVER;
        // this.gameState = GAMESTATE.RUNNING;
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

        this.tutorial = new Tutorial();
        this.tutorial.start();
        // this.tutorialPlayer = new Player(this.tutorial);
        // console.log(this.tutorialPlayer);
        // const tutorialHandle = new InputHandler(this.tutorialPlayer, this);
        // requestAnimationFrame(tutorialHandle.loop);
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
        this.ctx.beginPath();

        this.player.draw(this.ctx);
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(this.ctx);
        });

        if (this.gameState == GAMESTATE.START)

        if (this.gameState == GAMESTATE.PAUSED) {
            this.menu.showMenu();
        }
        
        this.tutorial.draw();
        if (this.gameState == GAMESTATE.GAMEOVER){
            this.menu.gameOver();
        }
        
        this.ctx.closePath();
    }
}

