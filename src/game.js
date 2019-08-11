import InputHandler from './players/playerInput';
import GameInputHandler from './gameStateController';
import Player from './players/player';
import PlatformBuilder from './scene/platformBuilder';
import Menu from './menu/menu';
import { clouds } from './imgLoader';
import Cloud from './scene/cloud';
import { levels, parseLevel } from './util/lvlLoader';

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
        this.cloudCount = 0;
        this.clouds = {};

    }

    deleteElement(hash, key){
        switch (hash){
            case 'clouds':
                delete this.clouds[key];
                this.addElement('clouds', this.cloudCount);
        }
        
    }

    addElement(hash, key){
        switch (hash) {
            case 'clouds':
                this.clouds[key] = new Cloud(this, this.cloudCount);
                this.cloudCount += 1;
        }
    }

    start() {
        this.menu = new Menu(this);
        this.menu.generateControls();
        new GameInputHandler(this, this.menu);
        // this.levelObjects = parseLevel(levels[1]);
        // this.sceneObjects = this.levelObjects[1];
        // this.gameState = GAMESTATE.RUNNING;
        this.newGame();
        // this.player = new Player(this);

        for (let i = 0; i < 5; i++){
            this.addElement('clouds', this.cloudCount);
        }
        this.handle = new InputHandler(this.player, this);
        requestAnimationFrame(this.handle.loop);

        this.platforms = {
            // 1: new PlatformBuilder(33, 0, 350, 1),
        //     2: new PlatformBuilder(7, 150, 225, 2),
        //     3: new PlatformBuilder(10, 455, 225, 1),
        //     4: new PlatformBuilder(7, 20, 320, 1),
        };

    
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

        this.levelObjects = parseLevel(levels[1]);
        this.sceneObjects = this.levelObjects[0];
        this.items = this.levelObjects[2];
     


        let lives = document.getElementsByClassName('heartIcon');
        while (lives.length < 4){
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
        
        Object.keys(this.clouds).forEach(key => {
            this.clouds[key].update();
        });

        Object.keys(this.levelObjects).forEach(key => {
            this.levelObjects[key].forEach(object => object.update(this.player));
        });

        // this.sceneObjects.forEach(x => x.update(this.player));

        this.player.update(deltaTime, 0.025);

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

        this.levelObjects = parseLevel(levels[1]);
        this.sceneObjects = this.levelObjects[0];
        this.items = this.levelObjects[2];
    }

    gameOver(){
        this.gameState = GAMESTATE.GAMEOVER;
        return;
    }
    
    
    draw() {
        this.ctx.beginPath();


        this.ctx.resetTransform(); 
        this.ctx.save();
        this.ctx.translate(-(this.player.position.x - this.gameWidth/2), -(this.player.position.y - this.gameHeight/2));


        Object.keys(this.clouds).forEach(key => {
            this.clouds[key].draw(this.ctx);
        });

        Object.keys(this.levelObjects).forEach(key => {
            this.levelObjects[key].forEach(object => object.draw(this.ctx));
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
        this.ctx.fillStyle = 'rgba(0,0,0)';
        this.player.draw(this.ctx);

        this.ctx.restore();
        
        this.ctx.closePath();
    }
}

