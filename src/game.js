import InputHandler from './players/playerInput';
import GameInputHandler from './gameStateController';
import Player from './players/player';
import PlatformBuilder from './scene/platformBuilder';
import Menu from './menu/menu';
import Tutorial from './menu/tutorial';
import {LEVEL_HEIGHT, LEVEL_WIDTH} from './constants';
import Cloud from './scene/cloud';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

export default class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH, ctx) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;
        this.ctx = ctx; 
        this.gameState = '';
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        // this.gameState = GAMESTATE.RUNNING;
        this.player = new Player(this);

        this.clouds = {
            1: new Cloud(this, 0)
        };

        this.platforms = {
            1: new PlatformBuilder(20, 250, 350, 1),
            2: new PlatformBuilder(7, 150, 225, 2),
            3: new PlatformBuilder(10, 455, 225, 1),
            4: new PlatformBuilder(7, 20, 320, 1),
        };

        this.menu = new Menu(this);
        this.menu.generateControls();
        new GameInputHandler(this, this.menu);
        this.handle = new InputHandler(this.player, this);
        requestAnimationFrame(this.handle.loop);
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

    newGame(){
        this.gameState = GAMESTATE.RUNNING;
        let menu = document.getElementById('goContainer');
        menu.style.display = 'none';

        let lives = document.getElementsByClassName('heartIcon');
        while (lives.length < 3){
            this.addLife();
        }
        this.menu.changeMenuType(0);
        // this.player.position.x = this.gameWidth / 2 - this.width / 2;
        // this.player.position.y = this.gameHeight / 2;
        this.player = new Player(this);
        this.handle = new InputHandler(this.player, this);
        requestAnimationFrame(this.handle.loop);
    }
    
    
    update(deltaTime){
        if (this.gameState == GAMESTATE.PAUSED || this.gameState == GAMESTATE.GAMEOVER) return;

        this.player.update(deltaTime);
        // Object.keys(this.clouds).forEach(key => this.clouds[key].update());
    }

    addLife(){
        let heart = document.createElement('img');
        heart.setAttribute('class', 'heartIcon');
        heart.src = './src/images/menu/life.png';

        let heartContainer = document.getElementById('heartContainer');
        heartContainer.appendChild(heart);
    }

    loseLife(){
        let lives = document.getElementsByClassName('heartIcon');
        lives[0].parentNode.removeChild(lives[0]);
        if (lives.length === 0) this.gameOver();
    }

    gameOver(){
        this.gameState = GAMESTATE.GAMEOVER;
    }
    
    
    draw() {
        this.ctx.beginPath();


        this.ctx.resetTransform(); 
        this.ctx.translate(-this.player.position.x, -this.player.position.y);
        // this.ctx.scale(1,1);
        this.ctx.translate(LEVEL_WIDTH/2,LEVEL_HEIGHT/2);

        Object.keys(this.clouds).forEach(key => {
            this.clouds[key].draw(this.ctx);
        });

        this.player.draw(this.ctx);



        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(this.ctx);
        });

        if (this.gameState == GAMESTATE.START){
            this.menu.startMenu();
        }

        if (this.gameState == GAMESTATE.PAUSED) { 
            this.menu.showMenu();
        }
        
        if (this.gameState == GAMESTATE.GAMEOVER){
            this.menu.gameOver();
        }
        
        this.ctx.closePath();
    }
}

