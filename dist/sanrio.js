/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CONTROL_CANVAS_HEIGHT, CONTROL_CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH, LEVEL_HEIGHT, LEVEL_WIDTH, DIRECTIONS, JUMP, SPEED, GRAVITY, BLOCKSIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_CANVAS_HEIGHT", function() { return CONTROL_CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_CANVAS_WIDTH", function() { return CONTROL_CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_HEIGHT", function() { return CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_WIDTH", function() { return CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_HEIGHT", function() { return LEVEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_WIDTH", function() { return LEVEL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUMP", function() { return JUMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEED", function() { return SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY", function() { return GRAVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKSIZE", function() { return BLOCKSIZE; });
const CONTROL_CANVAS_HEIGHT = 125;
const CONTROL_CANVAS_WIDTH = 650;

const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 700;

const LEVEL_HEIGHT = 400;
const LEVEL_WIDTH = 700;

const DIRECTIONS = {
    LEFT: (-1, 0),
    RIGHT: (1, 0),
    UP: (0, 1),
};

const JUMP = 15;
const SPEED = 5;

const GRAVITY = 0.5;
const BLOCKSIZE = 20;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _players_playerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players/playerInput */ "./src/players/playerInput.js");
/* harmony import */ var _gameStateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameStateController */ "./src/gameStateController.js");
/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/player */ "./src/players/player.js");
/* harmony import */ var _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/platformBuilder */ "./src/scene/platformBuilder.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");
/* harmony import */ var _menu_tutorial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/tutorial */ "./src/menu/tutorial.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants.js");









const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};


class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH, ctx) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;
        this.ctx = ctx; 
        this.gameState = '';
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_2__["default"](this);

  
        this.platforms = {
            1: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](8, 250, 350),
            2: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](7, 150, 250),
            3: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](2, 375, 225),
            4: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](7, 20, 320),
        };

        this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.menu.generateControls();
        new _gameStateController__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.menu);
        this.handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
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
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
        requestAnimationFrame(this.handle.loop);
    }
    
    
    update(deltaTime){
        if (this.gameState == GAMESTATE.PAUSED || this.gameState == GAMESTATE.GAMEOVER) return;
        this.player.update(deltaTime);
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
        // this.ctx.translate(this.player.position.x, this.player.position.y);
        // this.ctx.scale(1,1);
        // this.ctx.translate(LEVEL_WIDTH/2 , LEVEL_HEIGHT/2 );

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



/***/ }),

/***/ "./src/gameStateController.js":
/*!************************************!*\
  !*** ./src/gameStateController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameInputHandler; });
const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

class GameInputHandler {
    constructor (game, menu) {
        document.addEventListener('keydown', (e) => {
        if (game.gameState == GAMESTATE.PAUSED){
            switch (e.keyCode) {
                // down
                case 40:
                    menu.shiftDown();
                    break;  
                // up    
                case 38:
                    menu.shiftUp();
                    break;
                // left
                case 37:
                    menu.decreaseVolume();
                    break;
                // right
                case 39:
                    menu.increaseVolume();
                    break;
                // enter
                case 13:
                    menu.enter();
                    break;
                case 80:
                    menu.exit();
                    menu.changeMenuType(0);
            }
        } else if (game.gameState == GAMESTATE.GAMEOVER){
            switch (e.keyCode) {
                // down
                case 40:
                    menu.shiftDown();
                    break;
                // up    
                case 38:
                    menu.shiftUp();
                    break;
                case 13:
                    menu.enter();
                    break;
            }
        } else if (game.gameState == GAMESTATE.START) {
            switch (e.keyCode) {
                // down
                case 40:
                    menu.shiftDown();
                    break;
                // up    
                case 38:
                    menu.shiftUp();
                    break;
                case 13:
                    menu.enter();
                    break;
            }
        } else {
            switch (e.keyCode){
                case 80:
                    game.pause();
                }
        }
        });
    }
}

/***/ }),

/***/ "./src/imgLoader.js":
/*!**************************!*\
  !*** ./src/imgLoader.js ***!
  \**************************/
/*! exports provided: menuArrow, platform_1, platform_2, platform_3, platform_4, platform_5, bushes, clouds, flowers, trees, hills_1, hills_2, hills_3, hills_4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuArrow", function() { return menuArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_1", function() { return platform_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_2", function() { return platform_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_3", function() { return platform_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_4", function() { return platform_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_5", function() { return platform_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bushes", function() { return bushes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clouds", function() { return clouds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flowers", function() { return flowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trees", function() { return trees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hills_1", function() { return hills_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hills_2", function() { return hills_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hills_3", function() { return hills_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hills_4", function() { return hills_4; });
// menu
const menuArrowImg = new Image();
menuArrowImg.src = './src/images/menu/life.png';

const menuArrow = [menuArrowImg];

// scene
const platformLeft_1 = new Image();
const platformMid_1 = new Image();
const platformRight_1 = new Image();

const platformLeft_2 = new Image();
const platformMid_2 = new Image();
const platformRight_2 = new Image();

const platformLeft_3 = new Image();
const platformMid_3 = new Image();
const platformRight_3 = new Image();

const platformLeft_4 = new Image();
const platformMid_4 = new Image();
const platformRight_4 = new Image();

const platformLeft_5 = new Image();
const platformMid_5 = new Image();
const platformRight_5 = new Image();

const cloud_1 = new Image();
const cloud_2 = new Image();
const cloud_3 = new Image();
const cloud_4 = new Image();
const cloud_5 = new Image();
const cloud_6 = new Image();

const bush_1 = new Image();
const bush_2 = new Image();
const bush_3 = new Image();
const bush_4 = new Image();
const bush_5 = new Image();
const bush_6 = new Image();

const flower_1 = new Image();
const flower_2 = new Image();

const tree_1 = new Image();

const hill_1 = new Image();
const hill_2 = new Image();
const hill_3 = new Image();
const hill_4 = new Image();
const hill_5 = new Image();
const hill_6 = new Image();
const hill_7 = new Image();
const hill_8 = new Image();
const hill_9 = new Image();
const hill_10 = new Image();
const hill_11 = new Image();
const hill_12 = new Image();
const hill_13 = new Image();
const hill_14 = new Image();
const hill_15 = new Image();
const hill_16 = new Image();
const hill_17 = new Image();
const hill_18 = new Image();
const hill_19 = new Image();
const hill_20 = new Image();

platformLeft_1.src = './src/images/scene/platformLeft_1.png';
platformMid_1.src = './src/images/scene/platformMiddle_1.png';
platformRight_1.src = './src/images/scene/platformRight_1.png';

platformLeft_2.src = './src/images/scene/platformLeft_3.png';
platformMid_2.src = './src/images/scene/platformMiddle_3.png';
platformRight_2.src = './src/images/scene/platformRight_3.png';

platformLeft_3.src = './src/images/scene/platformLeft_3.png';
platformMid_3.src = './src/images/scene/platformMiddle_3.png';
platformRight_3.src = './src/images/scene/platformRight_3.png';

platformLeft_4.src = './src/images/scene/platformLeft_3.png';
platformMid_4.src = './src/images/scene/platformMiddle_3.png';
platformRight_4.src = './src/images/scene/platformRight_3.png';

platformLeft_5.src = './src/images/scene/platformLeft_3.png';
platformMid_5.src = './src/images/scene/platformMiddle_3.png';
platformRight_5.src = './src/images/scene/platformRight_3.png';

cloud_1.src = './src/images/scene/cloud_1.png';
cloud_2.src = './src/images/scene/cloud_2.png';
cloud_3.src = './src/images/scene/cloud_3.png';
cloud_4.src = './src/images/scene/cloud_4.png';
cloud_5.src = './src/images/scene/cloud_6.png';
cloud_6.src = './src/images/scene/cloud_6.png';

bush_1.src = './src/images/scene/bush_1.png';
bush_2.src = './src/images/scene/bush_2.png';
bush_3.src = './src/images/scene/bush_3.png';
bush_4.src = './src/images/scene/bush_4.png';
bush_5.src = './src/images/scene/bush_5.png';
bush_6.src = './src/images/scene/bush_6.png';

flower_1.src = './src/images/scene/flower_1.png';
flower_2.src = './src/images/scene/flower_2.png';

tree_1.src = './src/images/scene/tree_1.png';


hill_1.src = './src/images/scene/hill_1.png';
hill_2.src = './src/images/scene/hill_2.png';
hill_3.src = './src/images/scene/hill_3.png';
hill_4.src = './src/images/scene/hill_4.png';
hill_5.src = './src/images/scene/hill_5.png';
hill_6.src = './src/images/scene/hill_6.png';
hill_7.src = './src/images/scene/hill_7.png';
hill_8.src = './src/images/scene/hill_8.png';
hill_9.src = './src/images/scene/hill_9.png';
hill_10.src = './src/images/scene/hill_10.png';
hill_11.src = './src/images/scene/hill_11.png';
hill_12.src = './src/images/scene/hill_12.png';
hill_13.src = './src/images/scene/hill_13.png';
hill_14.src = './src/images/scene/hill_14.png';
hill_15.src = './src/images/scene/hill_15.png';
hill_16.src = './src/images/scene/hill_16.png';
hill_17.src = './src/images/scene/hill_17.png';
hill_18.src = './src/images/scene/hill_18.png';
hill_19.src = './src/images/scene/hill_19.png';
hill_20.src = './src/images/scene/hill_20.png';

const platform_1 = [platformLeft_1, platformMid_1, platformRight_1];
const platform_2 = [platformLeft_2, platformMid_2, platformRight_2];
const platform_3 = [platformLeft_3, platformMid_3, platformRight_3];
const platform_4 = [platformLeft_4, platformMid_4, platformRight_4];
const platform_5 = [platformLeft_5, platformMid_5, platformRight_5];
const bushes = [bush_1, bush_2, bush_3, bush_4, bush_5, bush_6];
const clouds = [cloud_1, cloud_2, cloud_3, cloud_4, cloud_5, cloud_6];
const flowers = [flower_1.png, flower_2.png];
const trees = [tree_1];
//close
const hills_1 = [hill_3, hill_4, hill_13, hill_14, hill_15, hill_16, hill_17];
const hills_2 = [hill_1, hill_2, hill_8, hill_9, hill_10, hill_11, hill_12];
const hills_3 = [hill_5, hill_20];
const hills_4 = [hill_6, hill_7, hill_18, hill_19];


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _menu_tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/tutorial */ "./src/menu/tutorial.js");




document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    let tutorialCanvas = document.getElementById('controlCanvas');
    tutorialCanvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__["CONTROL_CANVAS_HEIGHT"];
    tutorialCanvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__["CONTROL_CANVAS_WIDTH"];
    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"];
    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"];
    let ctx = canvas.getContext('2d');
    let controlctx = tutorialCanvas.getContext('2d');

    let game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"], _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"], ctx);
    let tutorial = new _menu_tutorial__WEBPACK_IMPORTED_MODULE_2__["default"](_constants__WEBPACK_IMPORTED_MODULE_0__["CONTROL_CANVAS_HEIGHT"],_constants__WEBPACK_IMPORTED_MODULE_0__["CONTROL_CANVAS_WIDTH"],controlctx, game);
    game.start();
    tutorial.start();
    
    
    let lastTime = 0;

// images

    function gameLoop(timestamp) {
        // let canvas = document.getElementById('canvas');
        // let ctx = canvas.getContext('2d');
        
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0,0,_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"],_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"]);
        controlctx.clearRect(0,0,_constants__WEBPACK_IMPORTED_MODULE_0__["CONTROL_CANVAS_WIDTH"],_constants__WEBPACK_IMPORTED_MODULE_0__["CONTROL_CANVAS_HEIGHT"]);

        tutorial.update();
        tutorial.draw(controlctx);

        game.update(deltaTime);
        game.draw(ctx);
        // game.draw(controlctx);


        requestAnimationFrame(gameLoop);
    }
    
    requestAnimationFrame(gameLoop);


});




/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

class Menu {
    constructor(game){
        this.optionsList = document.getElementsByClassName('menuOptions');
        this.mainContainers = document.getElementsByClassName('menuOptionContainer');
        this.current = 0;
        this.length = this.optionsList.length;
        
        this.audioOptionsList = document.getElementsByClassName('optionMenuOptions');
        this.optionContainers = document.getElementsByClassName('optionMenuOptionContainer');
        this.optionCurrent = 0;
        this.optionLength = this.audioOptionsList.length;
        
        this.goContainers = document.getElementsByClassName('goMenuOptionContainer');
        this.goCurrent = 0;
        this.goOptionsList = document.getElementsByClassName('goMenuOptions');
        this.goLength = this.goOptionsList.length;

        this.startContainers = document.getElementsByClassName('startMenuOptionContainer');
        this.startCurrent = 0;
        this.startOptionsList = document.getElementsByClassName('startOptions');
        this.startLength = this.startOptionsList.length;

        this.game = game;
        this.menuHash = {
            0: 'main',
            1: 'options',
            2: 'control',
            3: 'gameover',
            4: 'start',
            5: 'intro'
        };
        this.menuType = this.menuHash[0];
    }

    shiftDown(){
        let arrow = document.createElement('img');
        arrow.setAttribute('class', 'pointerArrow');
        arrow.src = './src/images/menu/menuCursor.png';
        
        switch (this.menuType){     
            case this.menuHash[0]:
                this.mainContainers[this.current].removeChild(this.mainContainers[this.current].childNodes[1]);
                this.optionsList[this.current].removeAttribute('id', 'selected');
                this.current += 1;
                if (this.current >= this.length) this.current %= this.length;
                this.selected = this.optionsList[this.current % this.length];
                this.selected.setAttribute("id", "selected");
                arrow.setAttribute('id', 'mainArrow');
                this.mainContainers[this.current].appendChild(arrow);
                break;

            case this.menuHash[1]:
                let currentArrow = document.getElementById('optionArrow');
                currentArrow.parentNode.removeChild(currentArrow);
                this.audioOptionsList[this.optionCurrent].removeAttribute('id', 'selected');
                this.optionCurrent += 1;
                if (this.optionCurrent >= this.optionLength) this.optionCurrent %= this.optionLength;
                this.optionSelected = this.audioOptionsList[this.optionCurrent % this.optionLength];
                this.optionSelected.setAttribute("id", "selected");
                arrow.setAttribute('id', 'optionArrow');
                this.optionContainers[this.optionCurrent].appendChild(arrow);
                break;
            
            case this.menuHash[3]:
                let goArrow = document.getElementById('goArrow');
                goArrow.parentNode.removeChild(goArrow);
                this.goOptionsList[this.goCurrent].removeAttribute('id', 'selected');
                this.goCurrent += 1;
                if (this.goCurrent >= this.goLength) this.goCurrent %= this.goLength;
                this.goSelected = this.goOptionsList[this.goCurrent % this.goLength];
                this.goSelected.setAttribute('id', 'selected');
                arrow.setAttribute('id', 'goArrow');
                this.goContainers[this.goCurrent].appendChild(arrow);
                break;
            
            case this.menuHash[4]:
                let startArrow = document.getElementById('startArrow');
                startArrow.parentNode.removeChild(startArrow);
                this.startOptionsList[this.startCurrent].removeAttribute('id', 'selected');
                this.startCurrent += 1;
                if (this.startCurrent >= this.startLength) this.startCurrent %= this.startLength;
                this.startSelected = this.startOptionsList[this.startCurrent % this.startLength];
                this.startSelected.setAttribute('id', 'selected');
                arrow.setAttribute('id', 'startArrow');
                this.startContainers[this.startCurrent].appendChild(arrow);
                break;
        }
    }

    shiftUp(){
        let arrow = document.createElement('img');
        arrow.setAttribute('class', 'pointerArrow');
        arrow.src = './src/images/menu/menuCursor.png';

        switch (this.menuType) {
            case this.menuHash[0]:
                this.mainContainers[this.current].removeChild(this.mainContainers[this.current].childNodes[1]);
                this.optionsList[this.current].removeAttribute('id', 'selected');
                this.current -= 1;
                if (this.current < 0) this.current = this.length-1;
                this.selected = this.optionsList[this.current % this.length];
                this.selected.setAttribute("id", "selected");
                arrow.setAttribute('id', 'mainArrow');
                this.mainContainers[this.current].appendChild(arrow);
                break;

            case this.menuHash[1]:
                let currentArrow = document.getElementById('optionArrow');
                currentArrow.parentNode.removeChild(currentArrow);
                this.audioOptionsList[this.optionCurrent].removeAttribute('id', 'selected');
                this.optionCurrent -= 1;
                if (this.optionCurrent < 0) this.optionCurrent = this.optionLength-1;
                this.optionSelected = this.audioOptionsList[this.optionCurrent % this.optionLength];
                this.optionSelected.setAttribute("id", "selected");
                arrow.setAttribute('id', 'optionArrow');
                this.optionContainers[this.optionCurrent].appendChild(arrow);
                break;
            
            case this.menuHash[3]:
                let goArrow = document.getElementById('goArrow');
                goArrow.parentNode.removeChild(goArrow);
                this.goOptionsList[this.goCurrent].removeAttribute('id', 'selected');
                this.goCurrent -= 1;
                if (this.goCurrent < 0) this.goCurrent = this.goLength - 1;
                this.goSelected = this.goOptionsList[this.goCurrent % this.goLength];
                this.goSelected.setAttribute("id", "selected");
                arrow.setAttribute('id', 'goArrow');
                this.goContainers[this.goCurrent].appendChild(arrow);
                break;

            case this.menuHash[4]:
                let startArrow = document.getElementById('startArrow');
                startArrow.parentNode.removeChild(startArrow);
                this.startOptionsList[this.startCurrent].removeAttribute('id', 'selected');
                this.startCurrent -= 1;
                if (this.startCurrent < 0) this.startCurrent = this.startLength - 1;
                this.startSelected = this.startOptionsList[this.startCurrent % this.startLength];
                this.startSelected.setAttribute('id', 'selected');
                arrow.setAttribute('id', 'startArrow');
                this.startContainers[this.startCurrent].appendChild(arrow);
                break;
            default:
                break;
        }
    }

    changeMenuType(x){
        this.menuType = this.menuHash[x];
    }

    enter(){
        if (this.menuType === this.menuHash[0]){
            switch (this.current){
                // resume
                case 0:
                    this.exit();
                    break;
                // new game
                case 1:
                    this.game.newGame();
                    let menu = document.getElementById('allMenus');
                    menu.style.display = 'none';
                    break;
                // controls
                case 2:
                    this.toggleControls();
                    this.changeMenuType(2);
                    return;
                // options
                case 3:
                    this.toggleOptions();
                    this.changeMenuType(1);
                    return;
                default:
                    this.exit();
            }
        }

        if (this.menuType === this.menuHash[1]){
            switch (this.optionCurrent){
                case 2:
                    this.changeMenuType(0);
                    this.toggleMenu();
                    return;
                default:
                    this.exit();
            }
        }

        if (this.menuType === this.menuHash[2]){
            this.changeMenuType(0);
            this.toggleMenu();
        }

        if (this.menuType === this.menuHash[3]){
            switch (this.goCurrent){
                case 0:
                    this.game.newGame();
                    break;
                case 1:
                    break;
            }
        }

        if (this.menuType === this.menuHash[4]){
            switch (this.startCurrent){
                // one player game
                case 0:
                    this.game.newGame();
                    this.game.gameState = GAMESTATE.RUNNING;
                    break;
                // controls
                case 1:
                    this.toggleControls();
                    this.changeMenuType(2);
                    return;
                // options
                case 2:
                    this.toggleOptions();
                    this.changeMenuType(1);
                    return;
                // exit
                case 3:
                    break;
            }
        }
    }

    gameOver(){
        let end = document.getElementById('goContainer');
        end.style.display = 'block';
        this.changeMenuType(3);
    }

    startMenu(){
        let start = document.getElementById('startContainer');
        start.style.display = 'block';
        this.changeMenuType(4);
    }

    showMenu(){
        let menu = document.getElementById('allMenus');
        menu.style.display = 'block';
    }

    toggleMenu() {
        let mainMenu = document.getElementById('mainMenuContainer');
        let controlsMenu = document.getElementById('controlsMenuContainer');
        let optionsMenu = document.getElementById('optionsMenuContainer');


        controlsMenu.style.display = 'none';        
        optionsMenu.style.display = 'none';        
        mainMenu.style.display = 'block';
    }

    toggleControls(){
        let mainMenu = document.getElementById('mainMenuContainer');
        let controlsMenu = document.getElementById('controlsMenuContainer');
        let optionsMenu = document.getElementById('optionsMenuContainer');

        controlsMenu.style.display = 'block';
        optionsMenu.style.display = 'none';
        mainMenu.style.display = 'none';
    }

    toggleOptions(){
        let mainMenu = document.getElementById('mainMenuContainer');
        let controlsMenu = document.getElementById('controlsMenuContainer');
        let optionsMenu = document.getElementById('optionsMenuContainer');

        controlsMenu.style.display = 'none';
        mainMenu.style.display = 'none';
        optionsMenu.style.display = 'block';
    }

    spawn(){
    }

    decreaseVolume(){
        if (this.menuType === this.menuHash[1]) {
            let volume = '';
            switch (this.optionCurrent) {
                case 0:
                    volume = document.getElementById('sfxRange');
                    volume.value = parseInt(volume.value) - 10;
                    return;
                case 1:
                    volume = document.getElementById('musicRange');
                    volume.value = parseInt(volume.value) - 10;
                    return;
                case 2:
                    this.changeMenuType(0);
                    this.toggleMenu();
            }
        }
    }
    
    
    increaseVolume(){
        if (this.menuType === this.menuHash[1]) {
            let volume = '';
            switch (this.optionCurrent) {
                case 0:
                    volume = document.getElementById('sfxRange');
                    volume.value = parseInt(volume.value) + 10;
                    return;
                case 1:
                    volume = document.getElementById('musicRange');
                    volume.value = parseInt(volume.value) + 10;
                return;
            }
        }

        if (this.menuType === this.menuHash[0]) {
            switch (this.current) {
                // controls
                case 2:
                    this.toggleControls();
                    this.changeMenuType(2);
                    return;
                // options
                case 3:
                    this.toggleOptions();
                    this.changeMenuType(1);
                    return;
            }
        }
    }

    toggleMap(){}

    exit(){
        this.game.pause();
    }

    generateControls() {
        let keyboard = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        let nums = '1234567890';
        let number = 0;
        let letter = 0;
        let keyArray = [
            [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 12],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 0],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 5, 5, 5],
            [6, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 6],
            [0, 0, 0, 0, 7, 0, 0, 9, 10, 11]
        ];

        for (let row = 0; row < keyArray.length; row++) {
            let list = document.getElementById(`row${row}`);
            keyArray[row].forEach(key => {
                let element = document.createElement('LI');
                switch (key) {
                    case 1:
                        element.setAttribute("class", "keyboardKey");
                        element.setAttribute("id", `key${nums[number]}`);
                        let textnode = document.createElement('P');
                        let textContent = document.createTextNode(`${nums[number]}`);
                        textnode.setAttribute("class", "keyNumberContent");
                        textnode.appendChild(textContent);
                        element.appendChild(textnode);
                        list.appendChild(element);
                        number += 1;
                        break;
                    case 2:
                        element.setAttribute("class", "keyboardKey");
                        element.setAttribute("id", `key${keyboard[letter]}`);
                        let letternode = document.createElement('P');
                        let letterContent = document.createTextNode(`${keyboard[letter]}`);
                        letternode.setAttribute("class", "keyLetterContent");
                        letternode.appendChild(letterContent);
                        element.appendChild(letternode);
                        list.appendChild(element);
                        letter += 1;
                        break;
                    case 7:
                        element.setAttribute("id", "space");
                        list.appendChild(element);
                        break;
                    // arrow keys
                    case 9:
                        element.setAttribute("class", "arrowContainer");
                        let leftArrow = document.createElement('DIV');
                        leftArrow.setAttribute("class", "arrow");
                        leftArrow.setAttribute("id", "leftArrow");

                        let blank = document.createElement('DIV');
                        blank.setAttribute("class", "arrow");

                        element.appendChild(blank);
                        element.appendChild(leftArrow);
                        list.appendChild(element);
                        break;
                    case 10:
                        element.setAttribute("class", "arrowContainer");
                        let upArrow = document.createElement('DIV');
                        upArrow.setAttribute("class", "arrow");
                        upArrow.setAttribute("id", "upArrow");

                        let downArrow = document.createElement('DIV');
                        downArrow.setAttribute("class", "arrow");
                        downArrow.setAttribute("id", "downArrow");

                        element.appendChild(upArrow);
                        element.appendChild(downArrow);
                        list.appendChild(element);
                        break;
                    case 11:
                        element.setAttribute("class", "arrowContainer");

                        let rightArrow = document.createElement('DIV');
                        rightArrow.setAttribute("class", "arrow");
                        rightArrow.setAttribute("id", "rightArrow");

                        let rightblank = document.createElement('DIV');
                        rightblank.setAttribute("class", "arrow");

                        element.appendChild(rightblank);
                        element.appendChild(rightArrow);
                        list.appendChild(element);
                        break;

                    // blank keys
                    case 0:
                        element.setAttribute("class", "keyboardKey");
                        list.appendChild(element);
                        break;
                    case 3:
                        element.setAttribute("class", "quarterKey");
                        list.appendChild(element);
                        break;
                    case 4:
                        element.setAttribute("class", "halfKey");
                        list.appendChild(element);
                        break;
                    case 5:
                        element.setAttribute("class", "verticalHalfKey");
                        list.appendChild(element);
                        break;
                    case 6:
                        element.setAttribute("class", "shift");
                        list.appendChild(element);
                        break;
                    case 8:
                        element.setAttribute("class", "caps");
                        list.appendChild(element);
                        break;
                    case 12:
                        element.setAttribute("class", "backspace");
                        list.appendChild(element);
                        break;
                    default:
                        break;
                }
            });
        }
    }
}

/***/ }),

/***/ "./src/menu/tutorial.js":
/*!******************************!*\
  !*** ./src/menu/tutorial.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tutorial; });
/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../players/player */ "./src/players/player.js");
/* harmony import */ var _players_playerInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../players/playerInput */ "./src/players/playerInput.js");
/* harmony import */ var _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene/platformBuilder */ "./src/scene/platformBuilder.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");





const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

class Tutorial {
    constructor(height, width, controlctx, game){
        this.gameWidth = width;
        this.gameHeight = height;
        this.game = game;
        this.tutorialctx = controlctx;

        this.platforms = {
            1: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](25, 50, 95)
        };
    }

    start() {
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        const controlHandle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_1__["default"](this.player, this);
        // requestAnimationFrame(controlHandle.loop);

    }

    update(){
        if (this.game.gameState == GAMESTATE.PAUSED) {
            this.player.update();
        }

    }

    loseLife(){}
    
    draw() {
        this.tutorialctx.beginPath();
        this.tutorialctx.fillStyle= 'red';
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(this.tutorialctx);
        });
        this.tutorialctx.drawImage(_imgLoader__WEBPACK_IMPORTED_MODULE_3__["trees"][0], 420, -5, 40, 100);
        this.tutorialctx.drawImage(_imgLoader__WEBPACK_IMPORTED_MODULE_3__["trees"][0], 462.5, 20, 30, 75);
        this.tutorialctx.drawImage(_imgLoader__WEBPACK_IMPORTED_MODULE_3__["bushes"][3], 165, 75, 70, 20);
        this.tutorialctx.drawImage(_imgLoader__WEBPACK_IMPORTED_MODULE_3__["bushes"][1], 385, 75, 65, 20);
        this.tutorialctx.drawImage(_imgLoader__WEBPACK_IMPORTED_MODULE_3__["bushes"][2], 475, 75, 85, 20);

        this.player.draw(this.tutorialctx);
        this.tutorialctx.closePath();
    }

    playerPosition(){
        console.log(this.player.position);
    }

}

/***/ }),

/***/ "./src/players/player.js":
/*!*******************************!*\
  !*** ./src/players/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ "./src/constants.js");
/* harmony import */ var _util_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/collision */ "./src/util/collision.js");





class Player {
    constructor(game) {
        this.width = 15;
        this.height = 15;
        this.game = game;

        this.position = {
            x: this.game.gameWidth/2  - this.width/2,
            y: this.game.gameHeight/2 
        };
        this.canJump = false;
        this.y_velocity = _constants__WEBPACK_IMPORTED_MODULE_0__["GRAVITY"];
        this.x_velocity = 0;
        this.hit = false;
    }

    move(){
        this.x_velocity *= 0.9;
        // if (this.y_velocity < 0) {this.y_velocity += 15 }
        // console.log(this.y_velocity);
        // if (this.y_velocity != 0){
        this.y_velocity += 0.9;
        // }
        this.position.x += this.x_velocity;
        this.position.y += this.y_velocity ;
        
    }

    shoot() {

    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        
        this.move();

        //check collisions with wall
        
        if(this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;

        // this.position.x =  this.game.gameWidth-this.width;

        //check collisions w floor 
        if(this.position.y < 0) this.position.y = 0;
        // if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;
        
        if (this.position.y + this.height > this.game.gameHeight) {
            this.position.x = this.game.gameWidth / 2 - this.width / 2;
            this.position.y = this.game.gameHeight / 2;
            this.game.loseLife();
        }



        // check collisions with platforms

        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, platform)){
                this.y_velocity = 5;
                this.position.y = platform.position.y - this.height;
                this.hit = true;
                this.canJump = true;
            }
        });
    }
}



/***/ }),

/***/ "./src/players/playerInput.js":
/*!************************************!*\
  !*** ./src/players/playerInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputHandler; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

class InputHandler {
    constructor(player, game){
        this.left = false;
        this.right = false;
        this.up = false;
        this.controller = this.controller.bind(this);
        this.loop = this.loop.bind(this);
        this.player = player;
        this.game = game;
    // }

    document.addEventListener('keydown', (e) => {
        // if (this.game.gameState == GAMESTATE.PAUSED) {
            switch (e.keyCode) {
                // down
                case 40:
                    document.getElementById("downArrow").classList.add('pressed');
                    break;
                // up    
                case 38:
                    if (this.player.canJump) {
                        document.getElementById("upArrow").classList.add('pressed');
                        this.player.y_velocity = -_constants__WEBPACK_IMPORTED_MODULE_0__["JUMP"];
                        this.player.canJump = false; 
                        this.player.hit = false;
                    } else if (this.player.hit == true) {
                        this.player.hit = false;
                    }
                    break;
                // left
                case 37:
                    document.getElementById("leftArrow").classList.add('pressed');
                    this.player.x_velocity = -_constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
                    break;
                // right
                case 39:
                    document.getElementById("rightArrow").classList.add('pressed');
                    this.player.x_velocity = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
                    break;
            }
            
        // }
        });

        document.addEventListener('keyup', (e) => {
            // if (this.game.gameState == GAMESTATE.PAUSED) {
            switch (e.keyCode) {
                // down
                case 40:
                    document.getElementById("downArrow").classList.remove('pressed');
                    break;
                // up    
                case 38:
                    document.getElementById("upArrow").classList.remove('pressed');
                    break;
                // left
                case 37:
                    document.getElementById("leftArrow").classList.remove('pressed');
                    break;
                // right
                case 39:
                    document.getElementById("rightArrow").classList.remove('pressed');
                    break;
            }
            // }
        });
    }

    
    
    controller (e){
        var key_state = (event.type == 'keydown') ? true : false;
        if (this.game.gameState == GAMESTATE.RUNNING){
        switch (e.keyCode) {
            case 37:
                this.left = key_state;
                break;
            case 38:
                this.up = key_state;
                break;
            case 39:
                this.right = key_state;
                break;
            }
        }
    }
    
    loop () {
        if (this.up && this.player.canJump ) {
            this.player.y_velocity = -_constants__WEBPACK_IMPORTED_MODULE_0__["JUMP"];
            this.player.canJump = false; 
            this.player.hit = false;
        } else if (this.player.hit == true) {
            this.player.hit = false;
        } 
        
        if (this.right) {
            this.player.x_velocity = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
        } else if (this.left) {
            this.player.x_velocity = -_constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"]; 
        } else {
            this.player.x_velocity = 0;
        }

        if (this.player.position.y >= this.game.gameHeight - this.player.height || this.player.y_velocity == 0){
            this.player.canJump = true;
        }

        document.addEventListener('keydown', this.controller);
        document.addEventListener('keyup', this.controller);
        
        requestAnimationFrame(this.loop);
        }
}




/***/ }),

/***/ "./src/scene/platformBuilder.js":
/*!**************************************!*\
  !*** ./src/scene/platformBuilder.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformBuilder; });
/* harmony import */ var _platform_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform_piece */ "./src/scene/platform_piece.js");
/* harmony import */ var _platform_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform_left */ "./src/scene/platform_left.js");
/* harmony import */ var _platform_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform_right */ "./src/scene/platform_right.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");






class PlatformBuilder {
    constructor(numBlocks, x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_4__["BLOCKSIZE"] * (numBlocks+2);
        this.height = _constants__WEBPACK_IMPORTED_MODULE_4__["BLOCKSIZE"];
        this.pieces = [];
        this.numBlocks = numBlocks;
        this.platform_x = x;
        this.platform_y = y;
        this.x_filler = x;
        this.y_filler = y + _constants__WEBPACK_IMPORTED_MODULE_4__["BLOCKSIZE"];
        // this.filler = filler;

        this.position = {
            x: x,
            y: y
        };
        this.build();
    }

    build(){
        this.pieces.push(new _platform_left__WEBPACK_IMPORTED_MODULE_1__["default"](this.platform_x, this.platform_y));
        this.platform_x += _constants__WEBPACK_IMPORTED_MODULE_4__["BLOCKSIZE"];
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push(new _platform_piece__WEBPACK_IMPORTED_MODULE_0__["default"](this.platform_x, this.platform_y));
            this.platform_x += _constants__WEBPACK_IMPORTED_MODULE_4__["BLOCKSIZE"];
        }
        this.pieces.push(new _platform_right__WEBPACK_IMPORTED_MODULE_2__["default"](this.platform_x, this.platform_y));

    }

    draw(ctx) {
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });
        // ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+BLOCKSIZE, CANVAS_HEIGHT);
        // ctx.fillStyle = 'rgba(110,49,25)';
        // ctx.fill();
        
    }

    update(deltaTime) {

    }
}



/***/ }),

/***/ "./src/scene/platform_left.js":
/*!************************************!*\
  !*** ./src/scene/platform_left.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformLeft; });
/* harmony import */ var _platform_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform_piece */ "./src/scene/platform_piece.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");




class PlatformLeft  {
    constructor(x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];

        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_2__["platform_1"][0];
        // this.image = document.getElementById('platformPiece-left');

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}


/***/ }),

/***/ "./src/scene/platform_piece.js":
/*!*************************************!*\
  !*** ./src/scene/platform_piece.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformPiece; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");



class PlatformPiece {
    constructor(x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["BLOCKSIZE"];
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["platform_1"][1];

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}



/***/ }),

/***/ "./src/scene/platform_right.js":
/*!*************************************!*\
  !*** ./src/scene/platform_right.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlatformLeft; });
/* harmony import */ var _platform_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform_piece */ "./src/scene/platform_piece.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");




class PlatformLeft extends _platform_piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y) {
        super(x,y);
        this.width = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_2__["platform_1"][2];
        this.position = {
            x: x,
            y: y
        };
    }
}


/***/ }),

/***/ "./src/util/collision.js":
/*!*******************************!*\
  !*** ./src/util/collision.js ***!
  \*******************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCollision", function() { return detectCollision; });
function detectCollision(obj, target) {
    let objLeft = obj.x;
    let objRight = obj.x + obj.width;
    let objTop = obj.position.y;
    let objBottom = obj.position.y + obj.height;

    let targetLeft = target.position.x;
    let targetRight = target.position.x + target.width;
    let targetTop = target.position.y;
    let targetBottom = target.position.y + target.height;

    if (
        objBottom >= targetTop &&
        objTop <= targetBottom &&
        // objBottom <= targetTop &&
        // objTop >= targetBottom &&
        obj.position.x >= targetLeft &&
        obj.position.x + obj.width <= targetRight
    ) {
        return true;
    } else {
        return false;
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L3R1dG9yaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9wbGF5ZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1CdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9sZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9waWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fcmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29sbGlzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBOztBQUVBO0FBQ0EscUI7Ozs7Ozs7Ozs7OztBQ25CUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDSTtBQUNmO0FBQ2dCO0FBQ3ZCO0FBQ1E7QUFDZTs7O0FBR3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFNOzs7QUFHaEM7QUFDQSxtQkFBbUIsOERBQWU7QUFDbEMsbUJBQW1CLDhEQUFlO0FBQ2xDLG1CQUFtQiw4REFBZTtBQUNsQyxtQkFBbUIsOERBQWU7QUFDbEM7O0FBRUEsd0JBQXdCLGtEQUFJO0FBQzVCO0FBQ0EsWUFBWSw0REFBZ0I7QUFDNUIsMEJBQTBCLDREQUFZO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBTTtBQUNoQywwQkFBMEIsNERBQVk7QUFDdEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQSxrQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsaUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0lQO0FBQUE7QUFBQTtBQUFBO0FBQXFHO0FBQzNFO0FBQ2E7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBcUI7QUFDakQsMkJBQTJCLCtEQUFvQjtBQUMvQyxvQkFBb0Isd0RBQWE7QUFDakMsbUJBQW1CLHVEQUFZO0FBQy9CO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFJLENBQUMsd0RBQWEsRUFBRSx1REFBWTtBQUNuRCx1QkFBdUIsc0RBQVEsQ0FBQyxnRUFBcUIsQ0FBQywrREFBb0I7QUFDMUU7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLHVEQUFZLENBQUMsd0RBQWE7QUFDcEQsaUNBQWlDLCtEQUFvQixDQUFDLGdFQUFxQjs7QUFFM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw0QztBQUNBLDJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix1QkFBdUI7QUFDaEQscURBQXFELElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxhQUFhO0FBQ3RFO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxpQkFBaUI7QUFDMUU7QUFDQSx1RUFBdUUsaUJBQWlCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbmRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNXO0FBQ0s7QUFDWjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDhEQUFlO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsdURBQU07QUFDaEMsa0NBQWtDLDREQUFZO0FBQzlDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUNBQW1DLGdEQUFLO0FBQ3hDLG1DQUFtQyxnREFBSztBQUN4QyxtQ0FBbUMsaURBQU07QUFDekMsbUNBQW1DLGlEQUFNO0FBQ3pDLG1DQUFtQyxpREFBTTs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDeEM7Ozs7QUFJbkM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsK0NBQUk7QUFDdEQsb0Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0RBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0RBQUs7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQywrQ0FBSTtBQUMxQyx3QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUzs7QUFFQTtBQUNBLHFDQUFxQyxnREFBSztBQUMxQyxTQUFTO0FBQ1Qsc0NBQXNDLGdEQUFLLEM7QUFDM0MsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDRjtBQUNFO0FBQ0Y7QUFDVzs7QUFFdkM7QUFDZjtBQUNBLHFCQUFxQixvREFBUztBQUM5QixzQkFBc0Isb0RBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBUztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsc0RBQVk7QUFDekMsMkJBQTJCLG9EQUFTO0FBQ3BDLG9DQUFvQyxPQUFPO0FBQzNDLGlDQUFpQyx1REFBYTtBQUM5QywrQkFBK0Isb0RBQVM7QUFDeEM7QUFDQSw2QkFBNkIsdURBQWE7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNKO0FBQ0Q7O0FBRXpCO0FBQ2Y7QUFDQSxxQkFBcUIsb0RBQVM7QUFDOUIsc0JBQXNCLG9EQUFTOztBQUUvQixxQkFBcUIscURBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDQzs7QUFFM0I7QUFDZjtBQUNBLHFCQUFxQixvREFBUztBQUM5QixzQkFBc0Isb0RBQVM7QUFDL0IscUJBQXFCLHFEQUFVOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNKO0FBQ0M7O0FBRTNCLDJCQUEyQix1REFBYTtBQUN2RDtBQUNBO0FBQ0EscUJBQXFCLG9EQUFTO0FBQzlCLHNCQUFzQixvREFBUztBQUMvQixxQkFBcUIscURBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InNhbnJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRST0xfQ0FOVkFTX0hFSUdIVCA9IDEyNTtcbmV4cG9ydCBjb25zdCBDT05UUk9MX0NBTlZBU19XSURUSCA9IDY1MDtcblxuZXhwb3J0IGNvbnN0IENBTlZBU19IRUlHSFQgPSA0MDA7XG5leHBvcnQgY29uc3QgQ0FOVkFTX1dJRFRIID0gNzAwO1xuXG5leHBvcnQgY29uc3QgTEVWRUxfSEVJR0hUID0gNDAwO1xuZXhwb3J0IGNvbnN0IExFVkVMX1dJRFRIID0gNzAwO1xuXG5leHBvcnQgY29uc3QgRElSRUNUSU9OUyA9IHtcbiAgICBMRUZUOiAoLTEsIDApLFxuICAgIFJJR0hUOiAoMSwgMCksXG4gICAgVVA6ICgwLCAxKSxcbn07XG5cbmV4cG9ydCBjb25zdCBKVU1QID0gMTU7XG5leHBvcnQgY29uc3QgU1BFRUQgPSA1O1xuXG5leHBvcnQgY29uc3QgR1JBVklUWSA9IDAuNTtcbmV4cG9ydCBjb25zdCBCTE9DS1NJWkUgPSAyMDsiLCJpbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gJy4vcGxheWVycy9wbGF5ZXJJbnB1dCc7XG5pbXBvcnQgR2FtZUlucHV0SGFuZGxlciBmcm9tICcuL2dhbWVTdGF0ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcnMvcGxheWVyJztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L21lbnUnO1xuaW1wb3J0IFR1dG9yaWFsIGZyb20gJy4vbWVudS90dXRvcmlhbCc7XG5pbXBvcnQge0xFVkVMX0hFSUdIVCwgTEVWRUxfV0lEVEh9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRILCBjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAnJztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuXG4gIFxuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHtcbiAgICAgICAgICAgIDE6IG5ldyBQbGF0Zm9ybUJ1aWxkZXIoOCwgMjUwLCAzNTApLFxuICAgICAgICAgICAgMjogbmV3IFBsYXRmb3JtQnVpbGRlcig3LCAxNTAsIDI1MCksXG4gICAgICAgICAgICAzOiBuZXcgUGxhdGZvcm1CdWlsZGVyKDIsIDM3NSwgMjI1KSxcbiAgICAgICAgICAgIDQ6IG5ldyBQbGF0Zm9ybUJ1aWxkZXIoNywgMjAsIDMyMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcyk7XG4gICAgICAgIHRoaXMubWVudS5nZW5lcmF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIG5ldyBHYW1lSW5wdXRIYW5kbGVyKHRoaXMsIHRoaXMubWVudSk7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gbmV3IElucHV0SGFuZGxlcih0aGlzLnBsYXllciwgdGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZS5sb29wKTtcbiAgICB9XG4gICAgXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV3R2FtZSgpe1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0NvbnRhaW5lcicpO1xuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIHdoaWxlIChsaXZlcy5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlmZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVudS5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyO1xuICAgICAgICAvLyB0aGlzLnBsYXllci5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUubG9vcCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHVwZGF0ZShkZWx0YVRpbWUpe1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCB8fCB0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHJldHVybjtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgfVxuXG4gICAgYWRkTGlmZSgpe1xuICAgICAgICBsZXQgaGVhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaGVhcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFydEljb24nKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2xpZmUucG5nJztcblxuICAgICAgICBsZXQgaGVhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhcnRDb250YWluZXInKTtcbiAgICAgICAgaGVhcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhcnQpO1xuICAgIH1cblxuICAgIGxvc2VMaWZlKCl7XG4gICAgICAgIGxldCBsaXZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYXJ0SWNvbicpO1xuICAgICAgICBsaXZlc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpdmVzWzBdKTtcbiAgICAgICAgaWYgKGxpdmVzLmxlbmd0aCA9PT0gMCkgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuXG4gICAgICAgIHRoaXMuY3R4LnJlc2V0VHJhbnNmb3JtKCk7IFxuICAgICAgICAvLyB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5wbGF5ZXIucG9zaXRpb24ueCwgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNjYWxlKDEsMSk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnRyYW5zbGF0ZShMRVZFTF9XSURUSC8yICwgTEVWRUxfSEVJR0hULzIgKTtcblxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMuY3R4KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBsYXRmb3JtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5TVEFSVCl7XG4gICAgICAgICAgICB0aGlzLm1lbnUuc3RhcnRNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkgeyBcbiAgICAgICAgICAgIHRoaXMubWVudS5zaG93TWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKXtcbiAgICAgICAgICAgIHRoaXMubWVudS5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59XG5cbiIsImNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUlucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdhbWUsIG1lbnUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKXtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBtZW51LmRlY3JlYXNlVm9sdW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5pbmNyZWFzZVZvbHVtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKXtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnRVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5TVEFSVCkge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSl7XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gbWVudVxuY29uc3QgbWVudUFycm93SW1nID0gbmV3IEltYWdlKCk7XG5tZW51QXJyb3dJbWcuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2xpZmUucG5nJztcblxuZXhwb3J0IGNvbnN0IG1lbnVBcnJvdyA9IFttZW51QXJyb3dJbWddO1xuXG4vLyBzY2VuZVxuY29uc3QgcGxhdGZvcm1MZWZ0XzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfMSA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF8yID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzMgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfNCA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF81ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGNsb3VkXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzYgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgYnVzaF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfNiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBmbG93ZXJfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgZmxvd2VyXzIgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgdHJlZV8xID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGhpbGxfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzYgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF84ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzkgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTAgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTYgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTcgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTggPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTkgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMjAgPSBuZXcgSW1hZ2UoKTtcblxucGxhdGZvcm1MZWZ0XzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMS5wbmcnO1xucGxhdGZvcm1NaWRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzEucG5nJztcbnBsYXRmb3JtUmlnaHRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMS5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8zLnBuZyc7XG5wbGF0Zm9ybU1pZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMy5wbmcnO1xucGxhdGZvcm1SaWdodF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8zLnBuZyc7XG5cbnBsYXRmb3JtTGVmdF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzMucG5nJztcbnBsYXRmb3JtTWlkXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV8zLnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzMucG5nJztcblxucGxhdGZvcm1MZWZ0XzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMy5wbmcnO1xucGxhdGZvcm1NaWRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzMucG5nJztcbnBsYXRmb3JtUmlnaHRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMy5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8zLnBuZyc7XG5wbGF0Zm9ybU1pZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMy5wbmcnO1xucGxhdGZvcm1SaWdodF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8zLnBuZyc7XG5cbmNsb3VkXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF8xLnBuZyc7XG5jbG91ZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfMi5wbmcnO1xuY2xvdWRfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzMucG5nJztcbmNsb3VkXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF80LnBuZyc7XG5jbG91ZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfNi5wbmcnO1xuY2xvdWRfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzYucG5nJztcblxuYnVzaF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF8xLnBuZyc7XG5idXNoXzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzIucG5nJztcbmJ1c2hfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfMy5wbmcnO1xuYnVzaF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF80LnBuZyc7XG5idXNoXzUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzUucG5nJztcbmJ1c2hfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfNi5wbmcnO1xuXG5mbG93ZXJfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8xLnBuZyc7XG5mbG93ZXJfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8yLnBuZyc7XG5cbnRyZWVfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3RyZWVfMS5wbmcnO1xuXG5cbmhpbGxfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMS5wbmcnO1xuaGlsbF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yLnBuZyc7XG5oaWxsXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzMucG5nJztcbmhpbGxfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNC5wbmcnO1xuaGlsbF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF81LnBuZyc7XG5oaWxsXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzYucG5nJztcbmhpbGxfNy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNy5wbmcnO1xuaGlsbF84LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF84LnBuZyc7XG5oaWxsXzkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzkucG5nJztcbmhpbGxfMTAuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEwLnBuZyc7XG5oaWxsXzExLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMS5wbmcnO1xuaGlsbF8xMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTIucG5nJztcbmhpbGxfMTMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEzLnBuZyc7XG5oaWxsXzE0LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNC5wbmcnO1xuaGlsbF8xNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTUucG5nJztcbmhpbGxfMTYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE2LnBuZyc7XG5oaWxsXzE3LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNy5wbmcnO1xuaGlsbF8xOC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTgucG5nJztcbmhpbGxfMTkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE5LnBuZyc7XG5oaWxsXzIwLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yMC5wbmcnO1xuXG5leHBvcnQgY29uc3QgcGxhdGZvcm1fMSA9IFtwbGF0Zm9ybUxlZnRfMSwgcGxhdGZvcm1NaWRfMSwgcGxhdGZvcm1SaWdodF8xXTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV8yID0gW3BsYXRmb3JtTGVmdF8yLCBwbGF0Zm9ybU1pZF8yLCBwbGF0Zm9ybVJpZ2h0XzJdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzMgPSBbcGxhdGZvcm1MZWZ0XzMsIHBsYXRmb3JtTWlkXzMsIHBsYXRmb3JtUmlnaHRfM107XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fNCA9IFtwbGF0Zm9ybUxlZnRfNCwgcGxhdGZvcm1NaWRfNCwgcGxhdGZvcm1SaWdodF80XTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV81ID0gW3BsYXRmb3JtTGVmdF81LCBwbGF0Zm9ybU1pZF81LCBwbGF0Zm9ybVJpZ2h0XzVdO1xuZXhwb3J0IGNvbnN0IGJ1c2hlcyA9IFtidXNoXzEsIGJ1c2hfMiwgYnVzaF8zLCBidXNoXzQsIGJ1c2hfNSwgYnVzaF82XTtcbmV4cG9ydCBjb25zdCBjbG91ZHMgPSBbY2xvdWRfMSwgY2xvdWRfMiwgY2xvdWRfMywgY2xvdWRfNCwgY2xvdWRfNSwgY2xvdWRfNl07XG5leHBvcnQgY29uc3QgZmxvd2VycyA9IFtmbG93ZXJfMS5wbmcsIGZsb3dlcl8yLnBuZ107XG5leHBvcnQgY29uc3QgdHJlZXMgPSBbdHJlZV8xXTtcbi8vY2xvc2VcbmV4cG9ydCBjb25zdCBoaWxsc18xID0gW2hpbGxfMywgaGlsbF80LCBoaWxsXzEzLCBoaWxsXzE0LCBoaWxsXzE1LCBoaWxsXzE2LCBoaWxsXzE3XTtcbmV4cG9ydCBjb25zdCBoaWxsc18yID0gW2hpbGxfMSwgaGlsbF8yLCBoaWxsXzgsIGhpbGxfOSwgaGlsbF8xMCwgaGlsbF8xMSwgaGlsbF8xMl07XG5leHBvcnQgY29uc3QgaGlsbHNfMyA9IFtoaWxsXzUsIGhpbGxfMjBdO1xuZXhwb3J0IGNvbnN0IGhpbGxzXzQgPSBbaGlsbF82LCBoaWxsXzcsIGhpbGxfMTgsIGhpbGxfMTldO1xuIiwiaW1wb3J0IHtDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEgsIENPTlRST0xfQ0FOVkFTX0hFSUdIVCwgQ09OVFJPTF9DQU5WQVNfV0lEVEh9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgVHV0b3JpYWwgZnJvbSAnLi9tZW51L3R1dG9yaWFsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGxldCB0dXRvcmlhbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sQ2FudmFzJyk7XG4gICAgdHV0b3JpYWxDYW52YXMuaGVpZ2h0ID0gQ09OVFJPTF9DQU5WQVNfSEVJR0hUO1xuICAgIHR1dG9yaWFsQ2FudmFzLndpZHRoID0gQ09OVFJPTF9DQU5WQVNfV0lEVEg7XG4gICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgY2FudmFzLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgY29udHJvbGN0eCA9IHR1dG9yaWFsQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgY3R4KTtcbiAgICBsZXQgdHV0b3JpYWwgPSBuZXcgVHV0b3JpYWwoQ09OVFJPTF9DQU5WQVNfSEVJR0hULENPTlRST0xfQ0FOVkFTX1dJRFRILGNvbnRyb2xjdHgsIGdhbWUpO1xuICAgIGdhbWUuc3RhcnQoKTtcbiAgICB0dXRvcmlhbC5zdGFydCgpO1xuICAgIFxuICAgIFxuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbi8vIGltYWdlc1xuXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gICAgICAgIC8vIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSBsYXN0VGltZTtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsQ0FOVkFTX1dJRFRILENBTlZBU19IRUlHSFQpO1xuICAgICAgICBjb250cm9sY3R4LmNsZWFyUmVjdCgwLDAsQ09OVFJPTF9DQU5WQVNfV0lEVEgsQ09OVFJPTF9DQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICB0dXRvcmlhbC51cGRhdGUoKTtcbiAgICAgICAgdHV0b3JpYWwuZHJhdyhjb250cm9sY3R4KTtcblxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICBnYW1lLmRyYXcoY3R4KTtcbiAgICAgICAgLy8gZ2FtZS5kcmF3KGNvbnRyb2xjdHgpO1xuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxuXG59KTtcblxuXG4iLCJjb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xuICAgICAgICB0aGlzLm9wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudU9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVPcHRpb25Db250YWluZXInKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLm9wdGlvbnNMaXN0Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYXVkaW9PcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbk1lbnVPcHRpb25zJyk7XG4gICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbk1lbnVPcHRpb25Db250YWluZXInKTtcbiAgICAgICAgdGhpcy5vcHRpb25DdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5vcHRpb25MZW5ndGggPSB0aGlzLmF1ZGlvT3B0aW9uc0xpc3QubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nb0NvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnb01lbnVPcHRpb25Db250YWluZXInKTtcbiAgICAgICAgdGhpcy5nb0N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLmdvT3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnb01lbnVPcHRpb25zJyk7XG4gICAgICAgIHRoaXMuZ29MZW5ndGggPSB0aGlzLmdvT3B0aW9uc0xpc3QubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuc3RhcnRDb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRNZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuc3RhcnRDdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zdGFydE9wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRPcHRpb25zJyk7XG4gICAgICAgIHRoaXMuc3RhcnRMZW5ndGggPSB0aGlzLnN0YXJ0T3B0aW9uc0xpc3QubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMubWVudUhhc2ggPSB7XG4gICAgICAgICAgICAwOiAnbWFpbicsXG4gICAgICAgICAgICAxOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAyOiAnY29udHJvbCcsXG4gICAgICAgICAgICAzOiAnZ2FtZW92ZXInLFxuICAgICAgICAgICAgNDogJ3N0YXJ0JyxcbiAgICAgICAgICAgIDU6ICdpbnRybydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tZW51VHlwZSA9IHRoaXMubWVudUhhc2hbMF07XG4gICAgfVxuXG4gICAgc2hpZnREb3duKCl7XG4gICAgICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BvaW50ZXJBcnJvdycpO1xuICAgICAgICBhcnJvdy5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbWVudUN1cnNvci5wbmcnO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLm1lbnVUeXBlKXsgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzBdOlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5yZW1vdmVDaGlsZCh0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uY2hpbGROb2Rlc1sxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTGlzdFt0aGlzLmN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID49IHRoaXMubGVuZ3RoKSB0aGlzLmN1cnJlbnQgJT0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50ICUgdGhpcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFsxXTpcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25DdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uQ3VycmVudCA+PSB0aGlzLm9wdGlvbkxlbmd0aCkgdGhpcy5vcHRpb25DdXJyZW50ICU9IHRoaXMub3B0aW9uTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQgPSB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50ICUgdGhpcy5vcHRpb25MZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXJzW3RoaXMub3B0aW9uQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbM106XG4gICAgICAgICAgICAgICAgbGV0IGdvQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIGdvQXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb0Fycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvQ3VycmVudCA+PSB0aGlzLmdvTGVuZ3RoKSB0aGlzLmdvQ3VycmVudCAlPSB0aGlzLmdvTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29TZWxlY3RlZCA9IHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudCAlIHRoaXMuZ29MZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0NvbnRhaW5lcnNbdGhpcy5nb0N1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzRdOlxuICAgICAgICAgICAgICAgIGxldCBzdGFydEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICBzdGFydEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3RhcnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEN1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFydEN1cnJlbnQgPj0gdGhpcy5zdGFydExlbmd0aCkgdGhpcy5zdGFydEN1cnJlbnQgJT0gdGhpcy5zdGFydExlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0ZWQgPSB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnQgJSB0aGlzLnN0YXJ0TGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb250YWluZXJzW3RoaXMuc3RhcnRDdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaGlmdFVwKCl7XG4gICAgICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BvaW50ZXJBcnJvdycpO1xuICAgICAgICBhcnJvdy5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbWVudUN1cnNvci5wbmcnO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5tZW51VHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzBdOlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5yZW1vdmVDaGlsZCh0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uY2hpbGROb2Rlc1sxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTGlzdFt0aGlzLmN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgMCkgdGhpcy5jdXJyZW50ID0gdGhpcy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zTGlzdFt0aGlzLmN1cnJlbnQgJSB0aGlzLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzFdOlxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkN1cnJlbnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25DdXJyZW50IDwgMCkgdGhpcy5vcHRpb25DdXJyZW50ID0gdGhpcy5vcHRpb25MZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudCAlIHRoaXMub3B0aW9uTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyc1t0aGlzLm9wdGlvbkN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzNdOlxuICAgICAgICAgICAgICAgIGxldCBnb0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBnb0Fycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29BcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0N1cnJlbnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nb0N1cnJlbnQgPCAwKSB0aGlzLmdvQ3VycmVudCA9IHRoaXMuZ29MZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29TZWxlY3RlZCA9IHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudCAlIHRoaXMuZ29MZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Db250YWluZXJzW3RoaXMuZ29DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFs0XTpcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgc3RhcnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0YXJ0QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRDdXJyZW50IDwgMCkgdGhpcy5zdGFydEN1cnJlbnQgPSB0aGlzLnN0YXJ0TGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0ZWQgPSB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnQgJSB0aGlzLnN0YXJ0TGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb250YWluZXJzW3RoaXMuc3RhcnRDdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlTWVudVR5cGUoeCl7XG4gICAgICAgIHRoaXMubWVudVR5cGUgPSB0aGlzLm1lbnVIYXNoW3hdO1xuICAgIH1cblxuICAgIGVudGVyKCl7XG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzBdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50KXtcbiAgICAgICAgICAgICAgICAvLyByZXN1bWVcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBuZXcgZ2FtZVxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sc1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzFdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KXtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsyXSl7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFszXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29DdXJyZW50KXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFs0XSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhcnRDdXJyZW50KXtcbiAgICAgICAgICAgICAgICAvLyBvbmUgcGxheWVyIGdhbWVcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gZXhpdFxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBsZXQgZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQ29udGFpbmVyJyk7XG4gICAgICAgIGVuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgzKTtcbiAgICB9XG5cbiAgICBzdGFydE1lbnUoKXtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Q29udGFpbmVyJyk7XG4gICAgICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDQpO1xuICAgIH1cblxuICAgIHNob3dNZW51KCl7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICBcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgICAgIFxuICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0b2dnbGVDb250cm9scygpe1xuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRvZ2dsZU9wdGlvbnMoKXtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBzcGF3bigpe1xuICAgIH1cblxuICAgIGRlY3JlYXNlVm9sdW1lKCl7XG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzFdKSB7XG4gICAgICAgICAgICBsZXQgdm9sdW1lID0gJyc7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uQ3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeFJhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljUmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSAtIDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBpbmNyZWFzZVZvbHVtZSgpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSkge1xuICAgICAgICAgICAgbGV0IHZvbHVtZSA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbkN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZnhSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpICsgMTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpY1JhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgKyAxMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFswXSkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sc1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1hcCgpe31cblxuICAgIGV4aXQoKXtcbiAgICAgICAgdGhpcy5nYW1lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb250cm9scygpIHtcbiAgICAgICAgbGV0IGtleWJvYXJkID0gJ1FXRVJUWVVJT1BBU0RGR0hKS0xaWENWQk5NJztcbiAgICAgICAgbGV0IG51bXMgPSAnMTIzNDU2Nzg5MCc7XG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgbGV0dGVyID0gMDtcbiAgICAgICAgbGV0IGtleUFycmF5ID0gW1xuICAgICAgICAgICAgWzQsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDQsIDEyXSxcbiAgICAgICAgICAgIFs1LCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCA1LCA1XSxcbiAgICAgICAgICAgIFswLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA1LCA1LCAwXSxcbiAgICAgICAgICAgIFs4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA1LCA1LCA1XSxcbiAgICAgICAgICAgIFs2LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCA2XSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCA3LCAwLCAwLCA5LCAxMCwgMTFdXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwga2V5QXJyYXkubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93JHtyb3d9YCk7XG4gICAgICAgICAgICBrZXlBcnJheVtyb3ddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBga2V5JHtudW1zW251bWJlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtudW1zW251bWJlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0bm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleU51bWJlckNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0bm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHRub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5Ym9hcmRLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGBrZXkke2tleWJvYXJkW2xldHRlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVybm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7a2V5Ym9hcmRbbGV0dGVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcm5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlMZXR0ZXJDb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVybm9kZS5hcHBlbmRDaGlsZChsZXR0ZXJDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGV0dGVybm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNwYWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyBhcnJvdyBrZXlzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvd25BcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1cEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRibGFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRibGFuay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0YmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBibGFuayBrZXlzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1YXJ0ZXJLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmVydGljYWxIYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hpZnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXBzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhY2tzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVycy9wbGF5ZXInO1xuaW1wb3J0IElucHV0SGFuZGxlciBmcm9tICcuLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCB7dHJlZXMsIGJ1c2hlc30gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbCB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udHJvbGN0eCwgZ2FtZSl7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eCA9IGNvbnRyb2xjdHg7XG5cbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSB7XG4gICAgICAgICAgICAxOiBuZXcgUGxhdGZvcm1CdWlsZGVyKDI1LCA1MCwgOTUpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICAgICAgY29uc3QgY29udHJvbEhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY29udHJvbEhhbmRsZS5sb29wKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXt9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5maWxsU3R5bGU9ICdyZWQnO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBsYXRmb3JtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS5kcmF3KHRoaXMudHV0b3JpYWxjdHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UodHJlZXNbMF0sIDQyMCwgLTUsIDQwLCAxMDApO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZSh0cmVlc1swXSwgNDYyLjUsIDIwLCAzMCwgNzUpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZShidXNoZXNbM10sIDE2NSwgNzUsIDcwLCAyMCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKGJ1c2hlc1sxXSwgMzg1LCA3NSwgNjUsIDIwKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UoYnVzaGVzWzJdLCA0NzUsIDc1LCA4NSwgMjApO1xuXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy50dXRvcmlhbGN0eCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcGxheWVyUG9zaXRpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgIH1cblxufSIsImltcG9ydCB7IENBTlZBU19XSURUSCwgSlVNUF9IRUlHSFQsIFNQRUVELCBDQU5WQVNfSEVJR0hULCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZXRlY3RDb2xsaXNpb259IGZyb20gJy4uL3V0aWwvY29sbGlzaW9uJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gMTU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTU7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5nYW1lV2lkdGgvMiAgLSB0aGlzLndpZHRoLzIsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUuZ2FtZUhlaWdodC8yIFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gR1JBVklUWTtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueF92ZWxvY2l0eSAqPSAwLjk7XG4gICAgICAgIC8vIGlmICh0aGlzLnlfdmVsb2NpdHkgPCAwKSB7dGhpcy55X3ZlbG9jaXR5ICs9IDE1IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy55X3ZlbG9jaXR5KTtcbiAgICAgICAgLy8gaWYgKHRoaXMueV92ZWxvY2l0eSAhPSAwKXtcbiAgICAgICAgdGhpcy55X3ZlbG9jaXR5ICs9IDAuOTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5IDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmUoKTtcblxuICAgICAgICAvL2NoZWNrIGNvbGxpc2lvbnMgd2l0aCB3YWxsXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZS5nYW1lV2lkdGgpIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9ICB0aGlzLmdhbWUuZ2FtZVdpZHRoLXRoaXMud2lkdGg7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHcgZmxvb3IgXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSA8IDApIHRoaXMucG9zaXRpb24ueSA9IDA7XG4gICAgICAgIC8vIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5nYW1lLmdhbWVIZWlnaHQpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LXRoaXMuaGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5nYW1lLmdhbWVIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAvIDI7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9zZUxpZmUoKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBjaGVjayBjb2xsaXNpb25zIHdpdGggcGxhdGZvcm1zXG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5nYW1lLnBsYXRmb3JtcykuZm9yRWFjaCAoa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBwbGF0Zm9ybSA9IHRoaXMuZ2FtZS5wbGF0Zm9ybXNba2V5XTtcbiAgICAgICAgICAgIGlmIChkZXRlY3RDb2xsaXNpb24odGhpcywgcGxhdGZvcm0pKXtcbiAgICAgICAgICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge1NQRUVELCBKVU1QfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBnYW1lKXtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIC8vIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jYW5KdW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwQXJyb3dcIikuY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9IC1KVU1QO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5oaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0QXJyb3dcIikuY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gLVNQRUVEO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuICAgIFxuICAgIGNvbnRyb2xsZXIgKGUpe1xuICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlJVTk5JTkcpe1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbG9vcCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwICYmIHRoaXMucGxheWVyLmNhbkp1bXAgKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAtU1BFRUQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zaXRpb24ueSA+PSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAtIHRoaXMucGxheWVyLmhlaWdodCB8fCB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID09IDApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmNvbnRyb2xsZXIpO1xuICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCBQbGF0Zm9ybUxlZnQgZnJvbSAnLi9wbGF0Zm9ybV9sZWZ0JztcbmltcG9ydCBQbGF0Zm9ybVJpZ2h0IGZyb20gJy4vcGxhdGZvcm1fcmlnaHQnO1xuaW1wb3J0IHtwbGF0Zm9ybU9saXZlfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuaW1wb3J0IHtCTE9DS1NJWkUsIENBTlZBU19IRUlHSFR9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IobnVtQmxvY2tzLCB4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkUgKiAobnVtQmxvY2tzKzIpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5waWVjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5udW1CbG9ja3MgPSBudW1CbG9ja3M7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feCA9IHg7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feSA9IHk7XG4gICAgICAgIHRoaXMueF9maWxsZXIgPSB4O1xuICAgICAgICB0aGlzLnlfZmlsbGVyID0geSArIEJMT0NLU0laRTtcbiAgICAgICAgLy8gdGhpcy5maWxsZXIgPSBmaWxsZXI7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpe1xuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybUxlZnQodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3kpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubnVtQmxvY2tzOyBpID4gMDsgaS0tKXtcbiAgICAgICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtUGllY2UodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3kpKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1feCArPSBCTE9DS1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1SaWdodCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSkpO1xuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5waWVjZXMuZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgICAgICAgICBwaWVjZS5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjdHgucmVjdCh0aGlzLnhfZmlsbGVyLCB0aGlzLnlfZmlsbGVyLCB0aGlzLnBsYXRmb3JtX3gtdGhpcy54X2ZpbGxlcitCTE9DS1NJWkUsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTEwLDQ5LDI1KSc7XG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcblxuICAgIH1cbn1cblxuIiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgeyBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtwbGF0Zm9ybV8xfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUxlZnQgIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV8xWzBdO1xuICAgICAgICAvLyB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXRmb3JtUGllY2UtbGVmdCcpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwbGF0Zm9ybV8xIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtXzFbMV07XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwbGF0Zm9ybV8xIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1MZWZ0IGV4dGVuZHMgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcih4LHkpO1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtXzFbMl07XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRlY3RDb2xsaXNpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBsZXQgb2JqTGVmdCA9IG9iai54O1xuICAgIGxldCBvYmpSaWdodCA9IG9iai54ICsgb2JqLndpZHRoO1xuICAgIGxldCBvYmpUb3AgPSBvYmoucG9zaXRpb24ueTtcbiAgICBsZXQgb2JqQm90dG9tID0gb2JqLnBvc2l0aW9uLnkgKyBvYmouaGVpZ2h0O1xuXG4gICAgbGV0IHRhcmdldExlZnQgPSB0YXJnZXQucG9zaXRpb24ueDtcbiAgICBsZXQgdGFyZ2V0UmlnaHQgPSB0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aDtcbiAgICBsZXQgdGFyZ2V0VG9wID0gdGFyZ2V0LnBvc2l0aW9uLnk7XG4gICAgbGV0IHRhcmdldEJvdHRvbSA9IHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodDtcblxuICAgIGlmIChcbiAgICAgICAgb2JqQm90dG9tID49IHRhcmdldFRvcCAmJlxuICAgICAgICBvYmpUb3AgPD0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIC8vIG9iakJvdHRvbSA8PSB0YXJnZXRUb3AgJiZcbiAgICAgICAgLy8gb2JqVG9wID49IHRhcmdldEJvdHRvbSAmJlxuICAgICAgICBvYmoucG9zaXRpb24ueCA+PSB0YXJnZXRMZWZ0ICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ICsgb2JqLndpZHRoIDw9IHRhcmdldFJpZ2h0XG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==