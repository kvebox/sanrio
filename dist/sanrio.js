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
/*! exports provided: CONTROL_CANVAS_HEIGHT, CONTROL_CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH, LEVEL_HEIGHT, LEVEL_WIDTH, HEIGHTSPAN, WIDTHSPAN, DIRECTIONS, TREEWIDTH, TREEHEIGHT, JUMP, SPEED, PLAYER, GRAVITY, BLOCKSIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_CANVAS_HEIGHT", function() { return CONTROL_CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_CANVAS_WIDTH", function() { return CONTROL_CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_HEIGHT", function() { return CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_WIDTH", function() { return CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_HEIGHT", function() { return LEVEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_WIDTH", function() { return LEVEL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHTSPAN", function() { return HEIGHTSPAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTHSPAN", function() { return WIDTHSPAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREEWIDTH", function() { return TREEWIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREEHEIGHT", function() { return TREEHEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUMP", function() { return JUMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEED", function() { return SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER", function() { return PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY", function() { return GRAVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKSIZE", function() { return BLOCKSIZE; });
const CONTROL_CANVAS_HEIGHT = 125;
const CONTROL_CANVAS_WIDTH = 650;

const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 700;

const LEVEL_HEIGHT = 400;
const LEVEL_WIDTH = 700;

const HEIGHTSPAN = 20;
const WIDTHSPAN = 20;

const DIRECTIONS = {
    LEFT: (-1, 0),
    RIGHT: (1, 0),
    UP: (0, 1),
};

const TREEWIDTH = 50;
const TREEHEIGHT = 110;

const JUMP = 12;
const SPEED = 5;

const PLAYER = 15;

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
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgLoader */ "./src/imgLoader.js");
/* harmony import */ var _scene_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scene/cloud */ "./src/scene/cloud.js");
/* harmony import */ var _util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/lvlLoader */ "./src/util/lvlLoader.js");









const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4,
    MAP: 5,
    WIN: 6,
    CONTINUE: 7
};


class Game {
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
                this.clouds[key] = new _scene_cloud__WEBPACK_IMPORTED_MODULE_6__["default"](this, this.cloudCount);
                this.cloudCount += 1;
        }
    }

    start() {
        this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.menu.generateControls();
        new _gameStateController__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.menu);
        this.newGame();

        for (let i = 0; i < 5; i++){
            this.addElement('clouds', this.cloudCount);
        }
        this.handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
        requestAnimationFrame(this.handle.loop);

        this.platforms = {};

    
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

        this.levelObjects = Object(_util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__["parseLevel"])(_util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__["levels"][1]);
        this.restart = this.levelObjects;
        this.sceneObjects = this.levelObjects[1];
        this.items = this.levelObjects[3];
     


        let lives = document.getElementsByClassName('heartIcon');
        while (lives.length < 4){
            this.addLife();
        }


        this.menu.changeMenuType(0);
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
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

        this.levelObjects = this.restart;
        this.sceneObjects = this.levelObjects[1];
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
/*! exports provided: arrows, menuArrow, platform_mid, platform_left, platform_right, platform_1, platform_2, platform_3, platform_4, platform_5, bushes, clouds, flowers, trees, hills_1, hills_2, hills_3, hills_4, hills, coin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrows", function() { return arrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuArrow", function() { return menuArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_mid", function() { return platform_mid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_left", function() { return platform_left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform_right", function() { return platform_right; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hills", function() { return hills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coin", function() { return coin; });
// menu
const menuArrowImg = new Image();
menuArrowImg.src = './src/images/menu/life.png';

const keyboardLeft = new Image();
const keyboardRight = new Image();
const keyboardUp = new Image();
const keyboardDown = new Image();
keyboardLeft.src = './src/images/menu/arrow_left.png';
keyboardLeft.setAttribute("class", "arrowImgHorizontal");
keyboardRight.src = './src/images/menu/arrow_right.png';
keyboardRight.setAttribute("class", "arrowImgHorizontal");
keyboardUp.src = './src/images/menu/arrow_up.png';
keyboardUp.setAttribute("class", "arrowImgVertical");
keyboardDown.src = './src/images/menu/arrow_down.png';
keyboardDown.setAttribute("class", "arrowImgVertical");

const arrows = [keyboardLeft, keyboardRight, keyboardUp, keyboardDown];
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

platformLeft_2.src = './src/images/scene/platformLeft_2.png';
platformMid_2.src = './src/images/scene/platformMiddle_2.png';
platformRight_2.src = './src/images/scene/platformRight_2.png';

platformLeft_3.src = './src/images/scene/platformLeft_3.png';
platformMid_3.src = './src/images/scene/platformMiddle_3.png';
platformRight_3.src = './src/images/scene/platformRight_3.png';

platformLeft_4.src = './src/images/scene/platformLeft_4.png';
platformMid_4.src = './src/images/scene/platformMiddle_4.png';
platformRight_4.src = './src/images/scene/platformRight_4.png';

platformLeft_5.src = './src/images/scene/platformLeft_5.png';
platformMid_5.src = './src/images/scene/platformMiddle_5.png';
platformRight_5.src = './src/images/scene/platformRight_5.png';

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

// items --------------------------------------------


const platform_mid = ['', platformMid_1, platformMid_2, platformMid_3, platformMid_4, platformMid_5];
const platform_left = ['', platformLeft_1, platformLeft_2, platformLeft_3, platformLeft_4, platformLeft_5];
const platform_right = ['', platformRight_1, platformRight_2, platformRight_3, platformRight_4, platformRight_5];

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

const hills = [hill_1, hill_2, hill_3, hill_4, hill_5, hill_6, hill_7, hill_8, hill_9, hill_10, hill_11, hill_12, hill_13, hill_14, hill_15, hill_16, hill_17, hill_18, hill_19, hill_20];


const coins = [];

for (let i = 0; i < 19; i++) {
    let image = new Image();
    image.src = `./src/images/items/coin/coin_${i}.png`;
    coins.push(image);
}

const coin = coins;

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

        tutorial.update(deltaTime);
        tutorial.draw(controlctx);

        game.update(deltaTime);
        game.draw(ctx);
        // game.draw(controlctx);


        requestAnimationFrame(gameLoop);
    }
    
    requestAnimationFrame(gameLoop);


});




/***/ }),

/***/ "./src/levels/level_1.txt":
/*!********************************!*\
  !*** ./src/levels/level_1.txt ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxX\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tt\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tt   T\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxX\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxX\t\t\t\n\t\t\t\t\t \t\t  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  \t\tccc\t\t\tT   t\t\t\t\t\t\t\t\t\t\tt\t\t\t\t\tT\tt\t\t\tccc\n\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\txxxxxxxX\n\t\t\t\t\t t\n\t\t\t\t\txxxxxxX\t\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\n\t\t\t\t\t\t\t\t\t\t\t\t    \t xxxxxxxX\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tT  t\t\tG\t\t\t\t\t\t\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\n\t\t\t  \t\tm   m \t\tm \t m  \t   m   \t \tm \t\tm\t\tm m m\t\tm  \tm \t\t\tmm\t\t\t\t\n\n\n\t\t");

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
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4,
    MAP: 5,
    WIN: 6,
    CONTINUE: 7
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
                        leftArrow.appendChild(_imgLoader__WEBPACK_IMPORTED_MODULE_0__["arrows"][0]);
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
                        upArrow.appendChild(_imgLoader__WEBPACK_IMPORTED_MODULE_0__["arrows"][2]);
                        upArrow.setAttribute("class", "arrow");
                        upArrow.setAttribute("id", "upArrow");

                        let downArrow = document.createElement('DIV');
                        downArrow.appendChild(_imgLoader__WEBPACK_IMPORTED_MODULE_0__["arrows"][3]);
                        downArrow.setAttribute("class", "arrow");
                        downArrow.setAttribute("id", "downArrow");

                        element.appendChild(upArrow);
                        element.appendChild(downArrow);
                        list.appendChild(element);
                        break;
                    case 11:
                        element.setAttribute("class", "arrowContainer");

                        let rightArrow = document.createElement('DIV');
                        rightArrow.appendChild(_imgLoader__WEBPACK_IMPORTED_MODULE_0__["arrows"][1]);
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
    INTRO: 4,
    MAP: 5,
    WIN: 6,
    CONTINUE: 7
};

class Tutorial {
    constructor(height, width, controlctx, game){
        this.gameWidth = width;
        this.gameHeight = height;
        this.game = game;
        this.tutorialctx = controlctx;
        this.items = [];

        this.platforms = {
            1: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](25, 50, 95, 0.5)
        };

        this.sceneObjects = [];
    }

    start() {
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        new _players_playerInput__WEBPACK_IMPORTED_MODULE_1__["default"](this.player, this);


    }

    update(deltaTime){
        if (this.game.gameState == GAMESTATE.PAUSED) {
            this.player.update(deltaTime, 0.055);
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

        this.tutorialctx.fillStyle = 'rgba(255,0,0)';
        this.player.draw(this.tutorialctx);
        this.tutorialctx.closePath();
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




const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

class Player {
    constructor(game) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER"];
        this.game = game;
        this.offset = 0;
        // this.level = levelData;

        this.position = {
            x: this.game.gameWidth  - this.width/2,
            y: this.game.gameHeight/2 
        };
        this.canJump = false;
        this.y_velocity = _constants__WEBPACK_IMPORTED_MODULE_0__["GRAVITY"];
        this.x_velocity = 0;
        this.hit = false;
    }

    move(deltaTime, x){
        this.x_velocity *= 0.9 * (deltaTime * x);
        this.y_velocity += 0.9;
        this.position.x += this.x_velocity;
        this.position.y += this.y_velocity;
    }

    getOffset_x(){
        return this.x_velocity;
    }

    getOffset_y(jump){
        return this.offset + jump;
    }

    shoot() {

    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime, x) {
        
        this.move(deltaTime, x);

        //check collisions with wall
        
        if (this.position.x < 0) this.position.x = 0;

        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;

        //adjust camera offset


        //check collisions w floor 
        // if(this.position.y < 0) this.position.y = 0;
        // if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;
        
        if (this.position.y + this.height > this.game.gameHeight+100) {
            this.position.x = this.game.gameWidth / 2 - this.width / 2;
            this.position.y = this.game.gameHeight / 2;
            this.game.loseLife();
        }



        // check collisions with platforms

        this.game.sceneObjects.forEach(platform => {
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, platform)) {
                this.y_velocity = 5;
                this.position.y = platform.position.y - this.height;
                this.hit = true;
                this.canJump = true;
            }
        });

        this.game.items.forEach(item => {
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, item)){
                switch (item.type) {
                    case 'coin':
                        delete this.game.items[item.key];
                        let coinCounter = document.getElementById('coins');
                        coinCounter.innerHTML = parseInt(coinCounter.innerHTML) + 1;
                        break;
                }
            }
        });
        
        // if (this.game.gameState == GAMESTATE.PAUSED) {
        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, platform)){
                this.y_velocity = 5;
                this.position.y = platform.position.y - this.height;
                this.hit = true;
                this.canJump = true;
            }
        });
    // }
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
        if (this.game.gameState == GAMESTATE.RUNNING) {
            return;
        }
            switch (e.keyCode) {
                // down
                case 40:
                    document.getElementById("downArrow").classList.add('pressed');
                    break;
                // up    
                case 38:
                    // console.log(this.player.position);
                    if (this.player.canJump) {
                        document.getElementById("upArrow").classList.add('pressed');
                        this.player.y_velocity = -_constants__WEBPACK_IMPORTED_MODULE_0__["JUMP"];
                        this.player.canJump = false; 
                        this.player.hit = false;
                        this.player.getOffset_y(-_constants__WEBPACK_IMPORTED_MODULE_0__["JUMP"]);
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
                    // console.log(this.player.position);

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

/***/ "./src/scene/bush.js":
/*!***************************!*\
  !*** ./src/scene/bush.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bush; });
/* harmony import */ var _staticObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticObject */ "./src/scene/staticObject.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");


 

class Bush extends _staticObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x,y, number){
        super(x,y);
        this.number = number;
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["bushes"][this.number];
        this.multiplier = 2.5;

        this.position = {
            x: x,
            y: y - this.height/2
        };

        this.create();
    }

    create() {
        switch (this.number) {
            case 0:
                this.height = 102 / this.multiplier;
                this.width = 359 / this.multiplier;
                break;
            case 1:
                this.height = 75 / this.multiplier;
                this.width = 238 / this.multiplier;
                break;
            case 2:
                this.height = 96 / this.multiplier;
                this.width = 385 / this.multiplier;
                break;
            case 3:
                this.height = 80 / this.multiplier;
                this.width = 297 / this.multiplier;
                break;
            case 4:
                this.height = 113 / this.multiplier;
                this.width = 290 / this.multiplier;
                break;
            case 5:
                this.height = 74 / this.multiplier;
                this.width = 208 / this.multiplier;
                break;

        }
    }
    
}

/***/ }),

/***/ "./src/scene/cloud.js":
/*!****************************!*\
  !*** ./src/scene/cloud.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cloud; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ "./src/constants.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");



class Cloud {
    constructor(game, key, position_x) {
        this.width = 0;
        this.height = 0;
        this.game = game;
        this.key = key;
        this.number = this.randomInt(0, 5);
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["clouds"][this.number];

        this.position = {
            x: position_x || (this.game.gameWidth + this.game.gameWidth / 2) * (Math.random(0, 1)),
            y: (this.game.gameHeight + this.game.gameHeight/2) / this.randomInt(0.5,10)
        };

        this.x_velocity = -Math.random(1,2);
        this.create();
    }

    respawn(){
        (this.game.gameWidth + this.game.gameWidth / 2) * Math.random(0, 1);
    }

    randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    destroy(){
        this.game.deleteElement('clouds', this.key);
    }

    create(){
        let multiplier = this.randomInt(2,4);
        switch (this.number){
            case 0:
                this.height = 252/multiplier;
                this.width = 816/multiplier;
                break;
            case 1:
                this.height = 60/multiplier;
                this.width = 465/multiplier;
                break;
            case 2:
                this.height = 162/multiplier;
                this.width = 702/multiplier;
                break;
            case 3:
                this.height = 184/multiplier;
                this.width = 698/multiplier;
                break;
            case 4:
                this.height = 176/multiplier;
                this.width = 858/multiplier;
                break;
            case 5:
                this.height = 294/multiplier;
                this.width = 891/multiplier;
                break;

        }
    }

    move() {
        this.position.x += this.x_velocity;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {

        this.move();

        //check collisions with wall

        if (this.position.x + this.width + this.game.gameWidth / 2 < 0) {
            this.destroy();
        }
        // if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;
    }
}



/***/ }),

/***/ "./src/scene/coin.js":
/*!***************************!*\
  !*** ./src/scene/coin.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coin; });
/* harmony import */ var _staticObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticObject */ "./src/scene/staticObject.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");



class Coin extends _staticObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (x, y, key) {
        super(x,y);
        this.width = 20;
        this.height = 20;
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["coin"];
        this.cycle = 0;
        this.type = 'coin';
        this.key = key;

        this.position = {
            x: x,
            y: y + this.height/2
        };
        
        
    }
    draw(ctx){
        this.cycle += 0.5;
        if (this.cycle > this.image.length-1) {
            this.cycle = 0;
        }
        ctx.drawImage(this.image[Math.floor(this.cycle)], this.position.x, this.position.y, this.width, this.height);
    }


}

/***/ }),

/***/ "./src/scene/mountain.js":
/*!*******************************!*\
  !*** ./src/scene/mountain.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mountain; });
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");
/* harmony import */ var _staticObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticObject */ "./src/scene/staticObject.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");




class Mountain extends _staticObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(x,y){
        super(x,y);
        this.number = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(0,19);
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_0__["hills"][this.number];
        this.position = {
            x: x,
            y: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(-100, 150)
        };
        this.create();
    }

    create(){
        let multiplier = 1.5;
        switch (this.number){
            case 0:
                this.width = 72 / multiplier;
                this.height = 934 / multiplier;
                break;
            case 1:
                this.width = 404 / multiplier;
                this.height = 1086 / multiplier;
                break;
            case 2:
                this.width = 606 / multiplier;
                this.height = 879 / multiplier;
                break;
            case 3:
                this.width = 204 / multiplier;
                this.height = 385 / multiplier;
                break;
            case 4:
                this.width = 208 / multiplier;
                this.height = 1004 / multiplier;
                break;
            case 5:
                this.width = 148 / multiplier;
                this.height = 752 / multiplier;
                break;
            case 6:
                this.width = 266 / multiplier;
                this.height = 716 / multiplier;
                break;
            case 7:
                this.width = 404 / multiplier;
                this.height = 1104 / multiplier;
                break;
            case 8:
                this.width = 201 / multiplier;
                this.height = 1050 / multiplier;
                break;
            case 9:
                this.width = 363 / multiplier;
                this.height = 1266 / multiplier;
                break;
            case 10:
                this.width = 207 / multiplier;
                this.height = 1152 / multiplier;
                break;
            case 11:
                this.width = 138 / multiplier;
                this.height = 1152 / multiplier;
                break;
            case 12:
                this.width = 600 / multiplier;
                this.height = 1770 / multiplier;
                break;
            case 13:
                this.width = 192 / multiplier;
                this.height = 1491 / multiplier;
                break;
            case 14:
                this.width = 200 / multiplier;
                this.height = 806 / multiplier;
                break;
            case 15:
                this.width = 204 / multiplier;
                this.height = 756 / multiplier;
                break;
            case 16:
                this.width = 190 / multiplier;
                this.height = 904 / multiplier;
                break;
            case 17:
                this.width = 264 / multiplier;
                this.height = 669 / multiplier;
                break;
            case 18:
                this.width = 150 / multiplier;
                this.height = 777 / multiplier;
                break;
            case 19:
                this.width = 262 / multiplier;
                this.height = 654 / multiplier;
                break;

        }
    }

    move(player) {
        this.position.x -= player.getOffset_x()/2;

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





class PlatformBuilder {
    constructor(numBlocks, x, y, color) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"] * (numBlocks+2);
        this.height = _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        this.pieces = [];
        this.numBlocks = numBlocks;
        this.platform_x = x;
        this.platform_y = y;
        this.x_filler = x;
        this.y_filler = y + _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        this.fillerColor = color;
        this.color = Math.ceil(this.fillerColor);

        this.position = {
            x: x,
            y: y
        };
        this.build();
    }

    build(){
        this.pieces.push(new _platform_left__WEBPACK_IMPORTED_MODULE_1__["default"](this.platform_x, this.platform_y, this.color));
        this.platform_x += _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push(new _platform_piece__WEBPACK_IMPORTED_MODULE_0__["default"](this.platform_x, this.platform_y, this.color));
            this.platform_x += _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        }
        this.pieces.push(new _platform_right__WEBPACK_IMPORTED_MODULE_2__["default"](this.platform_x, this.platform_y, this.color));

    }


    move(player) {
        this.position.x -= player.getOffset_x();
        // this.position.y += player.getOffset_y();

        this.x_filler -= player.getOffset_x();
        this.platform_x -= player.getOffset_x();
    }

    update(player){
        this.move(player);

        this.pieces.forEach(piece => {
            piece.update(player);
        });
    }

    draw(ctx) {
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });

        switch (Math.floor(this.fillerColor)){
            case 0: 
                ctx.fillStyle = 'rgba(0,0,0,0)';
                break;
            case 1: 
                ctx.fillStyle = 'rgba(90,49,33)';
                break;
            case 2:
                ctx.fillStyle = 'rgba(115,72,45)';
                break;
            case 3:
                ctx.fillStyle = 'rgba(120,82,50)';
                break;
            case 4:
                ctx.fillStyle = 'rgba(123,92,57)';
                break;
            case 5:
                ctx.fillStyle = 'rgba(138,120,69)';
                break;
            default: ctx.fillStyle = 'rgba(30,49,25)';
        }

        ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"], _constants__WEBPACK_IMPORTED_MODULE_3__["CANVAS_HEIGHT"]);
        
        ctx.fill();
        
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




class PlatformLeft extends _platform_piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, color) {
        super(x,y, color);
        this.width = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];

        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_2__["platform_left"][color];

        this.position = {
            x: x,
            y: y
        };
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
    constructor(x, y, color) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["BLOCKSIZE"];
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["platform_mid"][color];

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
    }

    move(player) {
        this.position.x -= player.getOffset_x();
        // this.position.y += player.getOffset_y();
        // this.position.y += this.y_velocity;

    }

    update(player){
        this.move(player);
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
    constructor(x, y, color) {
        super(x,y, color);
        this.width = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_2__["platform_right"][color];
        this.position = {
            x: x,
            y: y
        };
    }
}


/***/ }),

/***/ "./src/scene/staticObject.js":
/*!***********************************!*\
  !*** ./src/scene/staticObject.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticObject; });
class StaticObject {
    constructor(x, y) {
        this.width = 1000;
        this.height = 1000;

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    move(player) {
        this.position.x -= player.getOffset_x();

    }

    update(player) {
        this.move(player);
    }
}



/***/ }),

/***/ "./src/scene/tree.js":
/*!***************************!*\
  !*** ./src/scene/tree.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tree; });
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");
/* harmony import */ var _staticObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticObject */ "./src/scene/staticObject.js");



class Tree extends _staticObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(x, y, size) {
        super(x,y);
        this.width = 50 * size;
        this.height = 110 * size;
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_0__["trees"][0];

        this.position = {
            x: x,
            y: y - this.height
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

/***/ }),

/***/ "./src/util/lvlLoader.js":
/*!*******************************!*\
  !*** ./src/util/lvlLoader.js ***!
  \*******************************/
/*! exports provided: levels, parseLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levels", function() { return levels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseLevel", function() { return parseLevel; });
/* harmony import */ var _levels_level_1_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../levels/level_1.txt */ "./src/levels/level_1.txt");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene/platformBuilder */ "./src/scene/platformBuilder.js");
/* harmony import */ var _scene_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene/tree */ "./src/scene/tree.js");
/* harmony import */ var _scene_mountain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene/mountain */ "./src/scene/mountain.js");
/* harmony import */ var _scene_coin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scene/coin */ "./src/scene/coin.js");
/* harmony import */ var _scene_bush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scene/bush */ "./src/scene/bush.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./src/util/util.js");









const levels = {
    1: _levels_level_1_txt__WEBPACK_IMPORTED_MODULE_0__["default"]
};

const parseLevel = levelData => {
    let level = levelData.split("");
    let height = 0;
    let width = 0;
    let blockCount = 0;
    let itemCount = 0;

    let background = [];
    let sceneObjects = [];
    let deco = [];
    let enemies = [];
    let items = [];

    for (let i = 0; i < level.length; i++){
        switch (level[i]){
            case '\n':
                height += _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"];
                width = 0;
                break;
            case '\t':
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"]*4;
                break;
            case 'G':
                break;
            case 'm': 
                background.push(new _scene_mountain__WEBPACK_IMPORTED_MODULE_4__["default"](width, 0));
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"] * Object(_util__WEBPACK_IMPORTED_MODULE_7__["randomInt"])(2, 7);
                break;
            case 'c':
                items[itemCount] = (new _scene_coin__WEBPACK_IMPORTED_MODULE_5__["default"](width, height - _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"], itemCount));
                itemCount += 1;
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                break;
            case 'T':
                deco.push(new _scene_tree__WEBPACK_IMPORTED_MODULE_3__["default"](width, height + _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"], 1.5));
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                break;
            case 't':
                deco.push(new _scene_tree__WEBPACK_IMPORTED_MODULE_3__["default"](width, height + _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"], 1));
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                break;
            case 'b':
                deco.push(new _scene_bush__WEBPACK_IMPORTED_MODULE_6__["default"](width, height, Object(_util__WEBPACK_IMPORTED_MODULE_7__["randomInt"])(0,5)));
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                break;
            case ' ':
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                break;
            case 'x':
                blockCount += 1;
                break;
            case 'X':
                blockCount += 1;
                let depth = 5;
                switch (height > 0) {
                    case (height >= 0 && height < 100):
                        depth = 5;
                        break;
                    case (height >= 100 && height < 200):
                        depth = 4;
                        break;
                    case (height >= 200 && height < 300):
                        depth = 3;
                        break;
                    case (height >= 300 && height < 400):
                        depth = 2;
                        break;
                    case height >= 400:
                        depth = 1;
                        break;
                }
                sceneObjects.push(new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](blockCount, width, height, depth));
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"]*blockCount;
                blockCount = 0;
                break;
            default:
        }
    }
    
    return {
        0: background,
        1: sceneObjects,
        2: deco,
        3: items,
    };

};

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWxzL2xldmVsXzEudHh0Iiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvdHV0b3JpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9idXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9jbG91ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvY29pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbW91bnRhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtX3JpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9zdGF0aWNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2x2bExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC91dGlsLmpzIl0sIm5hbWVzIjpb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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHUDs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBOztBQUVPLG1COzs7Ozs7Ozs7Ozs7QUNoTFA7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDM0U7QUFDYTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFxQjtBQUNqRCwyQkFBMkIsK0RBQW9CO0FBQy9DLG9CQUFvQix3REFBYTtBQUNqQyxtQkFBbUIsdURBQVk7QUFDL0I7QUFDQTs7QUFFQSxtQkFBbUIsNkNBQUksQ0FBQyx3REFBYSxFQUFFLHVEQUFZO0FBQ25ELHVCQUF1QixzREFBUSxDQUFDLGdFQUFxQixDQUFDLCtEQUFvQjtBQUMxRTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsdURBQVksQ0FBQyx3REFBYTtBQUNwRCxpQ0FBaUMsK0RBQW9CLENBQUMsZ0VBQXFCOztBQUUzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQWUsazVDOzs7Ozs7Ozs7Ozs7QUNBZjtBQUFBO0FBQUE7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU8sMkRBQU87QUFDZDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIscURBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVEQUFRO0FBQzVDLHlCQUF5QixvREFBUyxHQUFHLHVEQUFTO0FBQzlDO0FBQ0E7QUFDQSx3Q0FBd0MsbURBQUksaUJBQWlCLHFEQUFVO0FBQ3ZFO0FBQ0EseUJBQXlCLG9EQUFTO0FBQ2xDO0FBQ0E7QUFDQSw4QkFBOEIsbURBQUksaUJBQWlCLHFEQUFVO0FBQzdELHlCQUF5QixvREFBUztBQUNsQztBQUNBO0FBQ0EsOEJBQThCLG1EQUFJLGlCQUFpQixxREFBVTtBQUM3RCx5QkFBeUIsb0RBQVM7QUFDbEM7QUFDQTtBQUNBLDhCQUE4QixtREFBSSxnQkFBZ0IsdURBQVM7QUFDM0QseUJBQXlCLG9EQUFTO0FBQ2xDO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhEQUFlO0FBQ3JELHlCQUF5QixvREFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzYW5yaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBDT05UUk9MX0NBTlZBU19IRUlHSFQgPSAxMjU7XG5leHBvcnQgY29uc3QgQ09OVFJPTF9DQU5WQVNfV0lEVEggPSA2NTA7XG5cbmV4cG9ydCBjb25zdCBDQU5WQVNfSEVJR0hUID0gNDAwO1xuZXhwb3J0IGNvbnN0IENBTlZBU19XSURUSCA9IDcwMDtcblxuZXhwb3J0IGNvbnN0IExFVkVMX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBMRVZFTF9XSURUSCA9IDcwMDtcblxuZXhwb3J0IGNvbnN0IEhFSUdIVFNQQU4gPSAyMDtcbmV4cG9ydCBjb25zdCBXSURUSFNQQU4gPSAyMDtcblxuZXhwb3J0IGNvbnN0IERJUkVDVElPTlMgPSB7XG4gICAgTEVGVDogKC0xLCAwKSxcbiAgICBSSUdIVDogKDEsIDApLFxuICAgIFVQOiAoMCwgMSksXG59O1xuXG5leHBvcnQgY29uc3QgVFJFRVdJRFRIID0gNTA7XG5leHBvcnQgY29uc3QgVFJFRUhFSUdIVCA9IDExMDtcblxuZXhwb3J0IGNvbnN0IEpVTVAgPSAxMjtcbmV4cG9ydCBjb25zdCBTUEVFRCA9IDU7XG5cbmV4cG9ydCBjb25zdCBQTEFZRVIgPSAxNTtcblxuZXhwb3J0IGNvbnN0IEdSQVZJVFkgPSAwLjU7XG5leHBvcnQgY29uc3QgQkxPQ0tTSVpFID0gMjA7IiwiaW1wb3J0IElucHV0SGFuZGxlciBmcm9tICcuL3BsYXllcnMvcGxheWVySW5wdXQnO1xuaW1wb3J0IEdhbWVJbnB1dEhhbmRsZXIgZnJvbSAnLi9nYW1lU3RhdGVDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcic7XG5pbXBvcnQgUGxhdGZvcm1CdWlsZGVyIGZyb20gJy4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51JztcbmltcG9ydCB7IGNsb3VkcyB9IGZyb20gJy4vaW1nTG9hZGVyJztcbmltcG9ydCBDbG91ZCBmcm9tICcuL3NjZW5lL2Nsb3VkJztcbmltcG9ydCB7IGxldmVscywgcGFyc2VMZXZlbCB9IGZyb20gJy4vdXRpbC9sdmxMb2FkZXInO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDQsXG4gICAgTUFQOiA1LFxuICAgIFdJTjogNixcbiAgICBDT05USU5VRTogN1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEgsIGN0eCkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmNsb3VkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNsb3VkcyA9IHt9O1xuXG4gICAgfVxuXG4gICAgZGVsZXRlRWxlbWVudChoYXNoLCBrZXkpe1xuICAgICAgICBzd2l0Y2ggKGhhc2gpe1xuICAgICAgICAgICAgY2FzZSAnY2xvdWRzJzpcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jbG91ZHNba2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMuY2xvdWRDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkRWxlbWVudChoYXNoLCBrZXkpe1xuICAgICAgICBzd2l0Y2ggKGhhc2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3Vkcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XSA9IG5ldyBDbG91ZCh0aGlzLCB0aGlzLmNsb3VkQ291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRDb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KHRoaXMpO1xuICAgICAgICB0aGlzLm1lbnUuZ2VuZXJhdGVDb250cm9scygpO1xuICAgICAgICBuZXcgR2FtZUlucHV0SGFuZGxlcih0aGlzLCB0aGlzLm1lbnUpO1xuICAgICAgICB0aGlzLm5ld0dhbWUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMuY2xvdWRDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGUgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlLmxvb3ApO1xuXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0ge307XG5cbiAgICBcbiAgICB9XG4gICAgXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV3R2FtZSgpe1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0NvbnRhaW5lcicpO1xuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGhpcy5sZXZlbE9iamVjdHMgPSBwYXJzZUxldmVsKGxldmVsc1sxXSk7XG4gICAgICAgIHRoaXMucmVzdGFydCA9IHRoaXMubGV2ZWxPYmplY3RzO1xuICAgICAgICB0aGlzLnNjZW5lT2JqZWN0cyA9IHRoaXMubGV2ZWxPYmplY3RzWzFdO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5sZXZlbE9iamVjdHNbM107XG4gICAgIFxuXG5cbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIHdoaWxlIChsaXZlcy5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlmZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLm1lbnUuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlLmxvb3ApO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB1cGRhdGUoZGVsdGFUaW1lKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQgfHwgdGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNsb3VkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sZXZlbE9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxPYmplY3RzW2tleV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZSh0aGlzLnBsYXllcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lLCAwLjAyNSk7XG5cbiAgICB9XG5cbiAgXG5cbiAgICBhZGRMaWZlKCl7XG4gICAgICAgIGxldCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBoZWFydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYXJ0SWNvbicpO1xuICAgICAgICBoZWFydC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbGlmZS5wbmcnO1xuXG4gICAgICAgIGxldCBoZWFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFydENvbnRhaW5lcicpO1xuICAgICAgICBoZWFydENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXtcbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIGxpdmVzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGl2ZXNbMF0pO1xuICAgICAgICBpZiAobGl2ZXMubGVuZ3RoID09PSAwKSB0aGlzLmdhbWVPdmVyKCk7XG5cbiAgICAgICAgdGhpcy5sZXZlbE9iamVjdHMgPSB0aGlzLnJlc3RhcnQ7XG4gICAgICAgIHRoaXMuc2NlbmVPYmplY3RzID0gdGhpcy5sZXZlbE9iamVjdHNbMV07XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cblxuICAgICAgICB0aGlzLmN0eC5yZXNldFRyYW5zZm9ybSgpOyBcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLSh0aGlzLnBsYXllci5wb3NpdGlvbi54IC0gdGhpcy5nYW1lV2lkdGgvMiksIC0odGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMuZ2FtZUhlaWdodC8yKSk7XG5cblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNsb3VkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sZXZlbE9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxPYmplY3RzW2tleV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LmRyYXcodGhpcy5jdHgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5TVEFSVCl7XG4gICAgICAgICAgICB0aGlzLm1lbnUuc3RhcnRNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkgeyBcbiAgICAgICAgICAgIHRoaXMubWVudS5zaG93TWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKXtcbiAgICAgICAgICAgIHRoaXMubWVudS5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwKSc7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy5jdHgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn1cblxuIiwiY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ2FtZSwgbWVudSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpe1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICBcbiAgICAgICAgICAgICAgICAvLyB1cCAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0VXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZGVjcmVhc2VWb2x1bWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBtZW51LmluY3JlYXNlVm9sdW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5lbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpe1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyB1cCAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0VXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5lbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvLyBtZW51XG5jb25zdCBtZW51QXJyb3dJbWcgPSBuZXcgSW1hZ2UoKTtcbm1lbnVBcnJvd0ltZy5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbGlmZS5wbmcnO1xuXG5jb25zdCBrZXlib2FyZExlZnQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGtleWJvYXJkUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGtleWJvYXJkVXAgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGtleWJvYXJkRG93biA9IG5ldyBJbWFnZSgpO1xua2V5Ym9hcmRMZWZ0LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd19sZWZ0LnBuZyc7XG5rZXlib2FyZExlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ0hvcml6b250YWxcIik7XG5rZXlib2FyZFJpZ2h0LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd19yaWdodC5wbmcnO1xua2V5Ym9hcmRSaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93SW1nSG9yaXpvbnRhbFwiKTtcbmtleWJvYXJkVXAuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X3VwLnBuZyc7XG5rZXlib2FyZFVwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdWZXJ0aWNhbFwiKTtcbmtleWJvYXJkRG93bi5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvYXJyb3dfZG93bi5wbmcnO1xua2V5Ym9hcmREb3duLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdWZXJ0aWNhbFwiKTtcblxuZXhwb3J0IGNvbnN0IGFycm93cyA9IFtrZXlib2FyZExlZnQsIGtleWJvYXJkUmlnaHQsIGtleWJvYXJkVXAsIGtleWJvYXJkRG93bl07XG5leHBvcnQgY29uc3QgbWVudUFycm93ID0gW21lbnVBcnJvd0ltZ107XG5cbi8vIHNjZW5lXG5jb25zdCBwbGF0Zm9ybUxlZnRfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF8xID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzIgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfMyA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF80ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzUgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgY2xvdWRfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfNiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBidXNoXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF82ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGZsb3dlcl8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBmbG93ZXJfMiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCB0cmVlXzEgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgaGlsbF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF83ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzggPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfOSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xOCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xOSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8yMCA9IG5ldyBJbWFnZSgpO1xuXG5cbnBsYXRmb3JtTGVmdF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzEucG5nJztcbnBsYXRmb3JtTWlkXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV8xLnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzEucG5nJztcblxucGxhdGZvcm1MZWZ0XzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMi5wbmcnO1xucGxhdGZvcm1NaWRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzIucG5nJztcbnBsYXRmb3JtUmlnaHRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMi5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8zLnBuZyc7XG5wbGF0Zm9ybU1pZF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMy5wbmcnO1xucGxhdGZvcm1SaWdodF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8zLnBuZyc7XG5cbnBsYXRmb3JtTGVmdF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzQucG5nJztcbnBsYXRmb3JtTWlkXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV80LnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzQucG5nJztcblxucGxhdGZvcm1MZWZ0XzUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfNS5wbmcnO1xucGxhdGZvcm1NaWRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzUucG5nJztcbnBsYXRmb3JtUmlnaHRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfNS5wbmcnO1xuXG5jbG91ZF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfMS5wbmcnO1xuY2xvdWRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzIucG5nJztcbmNsb3VkXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF8zLnBuZyc7XG5jbG91ZF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfNC5wbmcnO1xuY2xvdWRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzYucG5nJztcbmNsb3VkXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF82LnBuZyc7XG5cbmJ1c2hfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfMS5wbmcnO1xuYnVzaF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF8yLnBuZyc7XG5idXNoXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzMucG5nJztcbmJ1c2hfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfNC5wbmcnO1xuYnVzaF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF81LnBuZyc7XG5idXNoXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzYucG5nJztcblxuZmxvd2VyXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9mbG93ZXJfMS5wbmcnO1xuZmxvd2VyXzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9mbG93ZXJfMi5wbmcnO1xuXG50cmVlXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS90cmVlXzEucG5nJztcblxuXG5oaWxsXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEucG5nJztcbmhpbGxfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMi5wbmcnO1xuaGlsbF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8zLnBuZyc7XG5oaWxsXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzQucG5nJztcbmhpbGxfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNS5wbmcnO1xuaGlsbF82LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF82LnBuZyc7XG5oaWxsXzcuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzcucG5nJztcbmhpbGxfOC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfOC5wbmcnO1xuaGlsbF85LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF85LnBuZyc7XG5oaWxsXzEwLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMC5wbmcnO1xuaGlsbF8xMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTEucG5nJztcbmhpbGxfMTIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEyLnBuZyc7XG5oaWxsXzEzLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMy5wbmcnO1xuaGlsbF8xNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTQucG5nJztcbmhpbGxfMTUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE1LnBuZyc7XG5oaWxsXzE2LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNi5wbmcnO1xuaGlsbF8xNy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTcucG5nJztcbmhpbGxfMTguc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE4LnBuZyc7XG5oaWxsXzE5LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xOS5wbmcnO1xuaGlsbF8yMC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMjAucG5nJztcblxuLy8gaXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5leHBvcnQgY29uc3QgcGxhdGZvcm1fbWlkID0gWycnLCBwbGF0Zm9ybU1pZF8xLCBwbGF0Zm9ybU1pZF8yLCBwbGF0Zm9ybU1pZF8zLCBwbGF0Zm9ybU1pZF80LCBwbGF0Zm9ybU1pZF81XTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV9sZWZ0ID0gWycnLCBwbGF0Zm9ybUxlZnRfMSwgcGxhdGZvcm1MZWZ0XzIsIHBsYXRmb3JtTGVmdF8zLCBwbGF0Zm9ybUxlZnRfNCwgcGxhdGZvcm1MZWZ0XzVdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtX3JpZ2h0ID0gWycnLCBwbGF0Zm9ybVJpZ2h0XzEsIHBsYXRmb3JtUmlnaHRfMiwgcGxhdGZvcm1SaWdodF8zLCBwbGF0Zm9ybVJpZ2h0XzQsIHBsYXRmb3JtUmlnaHRfNV07XG5cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV8xID0gW3BsYXRmb3JtTGVmdF8xLCBwbGF0Zm9ybU1pZF8xLCBwbGF0Zm9ybVJpZ2h0XzFdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzIgPSBbcGxhdGZvcm1MZWZ0XzIsIHBsYXRmb3JtTWlkXzIsIHBsYXRmb3JtUmlnaHRfMl07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fMyA9IFtwbGF0Zm9ybUxlZnRfMywgcGxhdGZvcm1NaWRfMywgcGxhdGZvcm1SaWdodF8zXTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV80ID0gW3BsYXRmb3JtTGVmdF80LCBwbGF0Zm9ybU1pZF80LCBwbGF0Zm9ybVJpZ2h0XzRdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzUgPSBbcGxhdGZvcm1MZWZ0XzUsIHBsYXRmb3JtTWlkXzUsIHBsYXRmb3JtUmlnaHRfNV07XG5leHBvcnQgY29uc3QgYnVzaGVzID0gW2J1c2hfMSwgYnVzaF8yLCBidXNoXzMsIGJ1c2hfNCwgYnVzaF81LCBidXNoXzZdO1xuZXhwb3J0IGNvbnN0IGNsb3VkcyA9IFtjbG91ZF8xLCBjbG91ZF8yLCBjbG91ZF8zLCBjbG91ZF80LCBjbG91ZF81LCBjbG91ZF82XTtcbmV4cG9ydCBjb25zdCBmbG93ZXJzID0gW2Zsb3dlcl8xLnBuZywgZmxvd2VyXzIucG5nXTtcbmV4cG9ydCBjb25zdCB0cmVlcyA9IFt0cmVlXzFdO1xuLy9jbG9zZVxuZXhwb3J0IGNvbnN0IGhpbGxzXzEgPSBbaGlsbF8zLCBoaWxsXzQsIGhpbGxfMTMsIGhpbGxfMTQsIGhpbGxfMTUsIGhpbGxfMTYsIGhpbGxfMTddO1xuZXhwb3J0IGNvbnN0IGhpbGxzXzIgPSBbaGlsbF8xLCBoaWxsXzIsIGhpbGxfOCwgaGlsbF85LCBoaWxsXzEwLCBoaWxsXzExLCBoaWxsXzEyXTtcbmV4cG9ydCBjb25zdCBoaWxsc18zID0gW2hpbGxfNSwgaGlsbF8yMF07XG5leHBvcnQgY29uc3QgaGlsbHNfNCA9IFtoaWxsXzYsIGhpbGxfNywgaGlsbF8xOCwgaGlsbF8xOV07XG5cbmV4cG9ydCBjb25zdCBoaWxscyA9IFtoaWxsXzEsIGhpbGxfMiwgaGlsbF8zLCBoaWxsXzQsIGhpbGxfNSwgaGlsbF82LCBoaWxsXzcsIGhpbGxfOCwgaGlsbF85LCBoaWxsXzEwLCBoaWxsXzExLCBoaWxsXzEyLCBoaWxsXzEzLCBoaWxsXzE0LCBoaWxsXzE1LCBoaWxsXzE2LCBoaWxsXzE3LCBoaWxsXzE4LCBoaWxsXzE5LCBoaWxsXzIwXTtcblxuXG5jb25zdCBjb2lucyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDE5OyBpKyspIHtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBgLi9zcmMvaW1hZ2VzL2l0ZW1zL2NvaW4vY29pbl8ke2l9LnBuZ2A7XG4gICAgY29pbnMucHVzaChpbWFnZSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb2luID0gY29pbnM7IiwiaW1wb3J0IHtDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEgsIENPTlRST0xfQ0FOVkFTX0hFSUdIVCwgQ09OVFJPTF9DQU5WQVNfV0lEVEh9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgVHV0b3JpYWwgZnJvbSAnLi9tZW51L3R1dG9yaWFsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGxldCB0dXRvcmlhbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sQ2FudmFzJyk7XG4gICAgdHV0b3JpYWxDYW52YXMuaGVpZ2h0ID0gQ09OVFJPTF9DQU5WQVNfSEVJR0hUO1xuICAgIHR1dG9yaWFsQ2FudmFzLndpZHRoID0gQ09OVFJPTF9DQU5WQVNfV0lEVEg7XG4gICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgY2FudmFzLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgY29udHJvbGN0eCA9IHR1dG9yaWFsQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgY3R4KTtcbiAgICBsZXQgdHV0b3JpYWwgPSBuZXcgVHV0b3JpYWwoQ09OVFJPTF9DQU5WQVNfSEVJR0hULENPTlRST0xfQ0FOVkFTX1dJRFRILGNvbnRyb2xjdHgsIGdhbWUpO1xuICAgIGdhbWUuc3RhcnQoKTtcbiAgICB0dXRvcmlhbC5zdGFydCgpO1xuICAgIFxuICAgIFxuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbi8vIGltYWdlc1xuXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gICAgICAgIC8vIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSBsYXN0VGltZTtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsQ0FOVkFTX1dJRFRILENBTlZBU19IRUlHSFQpO1xuICAgICAgICBjb250cm9sY3R4LmNsZWFyUmVjdCgwLDAsQ09OVFJPTF9DQU5WQVNfV0lEVEgsQ09OVFJPTF9DQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICB0dXRvcmlhbC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgdHV0b3JpYWwuZHJhdyhjb250cm9sY3R4KTtcblxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICBnYW1lLmRyYXcoY3R4KTtcbiAgICAgICAgLy8gZ2FtZS5kcmF3KGNvbnRyb2xjdHgpO1xuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxuXG59KTtcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBcIlxcblxcblxcblxcdCAgICAgIFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dFxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dCAgIFRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eFhcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHhYXFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0IFxcdFxcdCAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBcXHRcXHRjY2NcXHRcXHRcXHRUICAgdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRcXHRcXHRcXHRcXHRcXHRUXFx0dFxcdFxcdFxcdGNjY1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcdFxcdHh4eHh4eHhYXFxuXFx0XFx0XFx0XFx0XFx0IHRcXG5cXHRcXHRcXHRcXHRcXHR4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcblxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICBcXHQgeHh4eHh4eFhcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0VCAgdFxcdFxcdEdcXHRcXHRcXHRcXHRcXHRcXHRcXG54eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXG5cXHRcXHRcXHQgIFxcdFxcdG0gICBtIFxcdFxcdG0gXFx0IG0gIFxcdCAgIG0gICBcXHQgXFx0bSBcXHRcXHRtXFx0XFx0bSBtIG1cXHRcXHRtICBcXHRtIFxcdFxcdFxcdG1tXFx0XFx0XFx0XFx0XFxuXFxuXFxuXFx0XFx0XCIiLCJpbXBvcnQgeyBhcnJvd3MgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDQsXG4gICAgTUFQOiA1LFxuICAgIFdJTjogNixcbiAgICBDT05USU5VRTogN1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XG4gICAgICAgIHRoaXMub3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLm1haW5Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMub3B0aW9uc0xpc3QubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uTWVudU9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uTWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLm9wdGlvbkN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLm9wdGlvbkxlbmd0aCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdC5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdvQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dvTWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmdvQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dvTWVudU9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5nb0xlbmd0aCA9IHRoaXMuZ29PcHRpb25zTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydE1lbnVPcHRpb25Db250YWluZXInKTtcbiAgICAgICAgdGhpcy5zdGFydEN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydE9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5zdGFydExlbmd0aCA9IHRoaXMuc3RhcnRPcHRpb25zTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5tZW51SGFzaCA9IHtcbiAgICAgICAgICAgIDA6ICdtYWluJyxcbiAgICAgICAgICAgIDE6ICdvcHRpb25zJyxcbiAgICAgICAgICAgIDI6ICdjb250cm9sJyxcbiAgICAgICAgICAgIDM6ICdnYW1lb3ZlcicsXG4gICAgICAgICAgICA0OiAnc3RhcnQnLFxuICAgICAgICAgICAgNTogJ2ludHJvJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1lbnVUeXBlID0gdGhpcy5tZW51SGFzaFswXTtcbiAgICB9XG5cbiAgICBzaGlmdERvd24oKXtcbiAgICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9pbnRlckFycm93Jyk7XG4gICAgICAgIGFycm93LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9tZW51Q3Vyc29yLnBuZyc7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHRoaXMubWVudVR5cGUpeyAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMF06XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLnJlbW92ZUNoaWxkKHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCAlPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zTGlzdFt0aGlzLmN1cnJlbnQgJSB0aGlzLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzFdOlxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkN1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25DdXJyZW50ID49IHRoaXMub3B0aW9uTGVuZ3RoKSB0aGlzLm9wdGlvbkN1cnJlbnQgJT0gdGhpcy5vcHRpb25MZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnQgJSB0aGlzLm9wdGlvbkxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnNbdGhpcy5vcHRpb25DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFszXTpcbiAgICAgICAgICAgICAgICBsZXQgZ29BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgZ29BcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvQXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29DdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29DdXJyZW50ID49IHRoaXMuZ29MZW5ndGgpIHRoaXMuZ29DdXJyZW50ICU9IHRoaXMuZ29MZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkID0gdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50ICUgdGhpcy5nb0xlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ29udGFpbmVyc1t0aGlzLmdvQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbNF06XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGFydEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0Q3VycmVudCA+PSB0aGlzLnN0YXJ0TGVuZ3RoKSB0aGlzLnN0YXJ0Q3VycmVudCAlPSB0aGlzLnN0YXJ0TGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZCA9IHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudCAlIHRoaXMuc3RhcnRMZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lcnNbdGhpcy5zdGFydEN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNoaWZ0VXAoKXtcbiAgICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9pbnRlckFycm93Jyk7XG4gICAgICAgIGFycm93LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9tZW51Q3Vyc29yLnBuZyc7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLm1lbnVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMF06XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLnJlbW92ZUNoaWxkKHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudCAlIHRoaXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMV06XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkN1cnJlbnQgPCAwKSB0aGlzLm9wdGlvbkN1cnJlbnQgPSB0aGlzLm9wdGlvbkxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQgPSB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50ICUgdGhpcy5vcHRpb25MZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXJzW3RoaXMub3B0aW9uQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbM106XG4gICAgICAgICAgICAgICAgbGV0IGdvQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIGdvQXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb0Fycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvQ3VycmVudCA8IDApIHRoaXMuZ29DdXJyZW50ID0gdGhpcy5nb0xlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkID0gdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50ICUgdGhpcy5nb0xlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0NvbnRhaW5lcnNbdGhpcy5nb0N1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzRdOlxuICAgICAgICAgICAgICAgIGxldCBzdGFydEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICBzdGFydEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3RhcnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEN1cnJlbnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFydEN1cnJlbnQgPCAwKSB0aGlzLnN0YXJ0Q3VycmVudCA9IHRoaXMuc3RhcnRMZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZCA9IHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudCAlIHRoaXMuc3RhcnRMZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lcnNbdGhpcy5zdGFydEN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VNZW51VHlwZSh4KXtcbiAgICAgICAgdGhpcy5tZW51VHlwZSA9IHRoaXMubWVudUhhc2hbeF07XG4gICAgfVxuXG4gICAgZW50ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMF0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIC8vIHJlc3VtZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIG5ldyBnYW1lXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbkN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzJdKXtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzNdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nb0N1cnJlbnQpe1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzRdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zdGFydEN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIC8vIG9uZSBwbGF5ZXIgZ2FtZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sc1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBleGl0XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGxldCBlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29Db250YWluZXInKTtcbiAgICAgICAgZW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDMpO1xuICAgIH1cblxuICAgIHN0YXJ0TWVudSgpe1xuICAgICAgICBsZXQgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRDb250YWluZXInKTtcbiAgICAgICAgc3RhcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoNCk7XG4gICAgfVxuXG4gICAgc2hvd01lbnUoKXtcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgICAgIFxuICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgXG4gICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbnRyb2xzKCl7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdG9nZ2xlT3B0aW9ucygpe1xuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHNwYXduKCl7XG4gICAgfVxuXG4gICAgZGVjcmVhc2VWb2x1bWUoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pIHtcbiAgICAgICAgICAgIGxldCB2b2x1bWUgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4UmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSAtIDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGluY3JlYXNlVm9sdW1lKCl7XG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzFdKSB7XG4gICAgICAgICAgICBsZXQgdm9sdW1lID0gJyc7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uQ3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeFJhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgKyAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljUmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSArIDEwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzBdKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWFwKCl7fVxuXG4gICAgZXhpdCgpe1xuICAgICAgICB0aGlzLmdhbWUucGF1c2UoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvbnRyb2xzKCkge1xuICAgICAgICBsZXQga2V5Ym9hcmQgPSAnUVdFUlRZVUlPUEFTREZHSEpLTFpYQ1ZCTk0nO1xuICAgICAgICBsZXQgbnVtcyA9ICcxMjM0NTY3ODkwJztcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBsZXR0ZXIgPSAwO1xuICAgICAgICBsZXQga2V5QXJyYXkgPSBbXG4gICAgICAgICAgICBbNCwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgNCwgMTJdLFxuICAgICAgICAgICAgWzUsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDUsIDVdLFxuICAgICAgICAgICAgWzAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDUsIDUsIDBdLFxuICAgICAgICAgICAgWzgsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDUsIDUsIDVdLFxuICAgICAgICAgICAgWzYsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDAsIDAsIDZdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDcsIDAsIDAsIDksIDEwLCAxMV1cbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBrZXlBcnJheS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3cke3Jvd31gKTtcbiAgICAgICAgICAgIGtleUFycmF5W3Jvd10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5Ym9hcmRLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGBrZXkke251bXNbbnVtYmVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke251bXNbbnVtYmVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5TnVtYmVyQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRub2RlLmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGtleSR7a2V5Ym9hcmRbbGV0dGVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXJub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtrZXlib2FyZFtsZXR0ZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVybm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleUxldHRlckNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJub2RlLmFwcGVuZENoaWxkKGxldHRlckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZXR0ZXJub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3BhY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFycm93IGtleXNcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LmFwcGVuZENoaWxkKGFycm93c1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0QXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnRBcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFuay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJsYW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cEFycm93LmFwcGVuZENoaWxkKGFycm93c1syXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cEFycm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXBBcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LmFwcGVuZENoaWxkKGFycm93c1szXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvd25BcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1cEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRibGFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRibGFuay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0YmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBibGFuayBrZXlzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1YXJ0ZXJLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmVydGljYWxIYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hpZnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXBzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhY2tzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVycy9wbGF5ZXInO1xuaW1wb3J0IElucHV0SGFuZGxlciBmcm9tICcuLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCB7dHJlZXMsIGJ1c2hlc30gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0LFxuICAgIE1BUDogNSxcbiAgICBXSU46IDYsXG4gICAgQ09OVElOVUU6IDdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsIHtcbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBjb250cm9sY3R4LCBnYW1lKXtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4ID0gY29udHJvbGN0eDtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0ge1xuICAgICAgICAgICAgMTogbmV3IFBsYXRmb3JtQnVpbGRlcigyNSwgNTAsIDk1LCAwLjUpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY2VuZU9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuICAgICAgICBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcblxuXG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSl7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZShkZWx0YVRpbWUsIDAuMDU1KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXt9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5maWxsU3R5bGU9ICdyZWQnO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBsYXRmb3JtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS5kcmF3KHRoaXMudHV0b3JpYWxjdHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UodHJlZXNbMF0sIDQyMCwgLTUsIDQwLCAxMDApO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZSh0cmVlc1swXSwgNDYyLjUsIDIwLCAzMCwgNzUpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZShidXNoZXNbM10sIDE2NSwgNzUsIDcwLCAyMCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKGJ1c2hlc1sxXSwgMzg1LCA3NSwgNjUsIDIwKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UoYnVzaGVzWzJdLCA0NzUsIDc1LCA4NSwgMjApO1xuXG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDAsMCknO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMudHV0b3JpYWxjdHgpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgUExBWUVSLCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZXRlY3RDb2xsaXNpb259IGZyb20gJy4uL3V0aWwvY29sbGlzaW9uJztcblxuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gUExBWUVSO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBMQVlFUjtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICAvLyB0aGlzLmxldmVsID0gbGV2ZWxEYXRhO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUuZ2FtZVdpZHRoICAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LzIgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSBHUkFWSVRZO1xuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgPSAwO1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoZGVsdGFUaW1lLCB4KXtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ICo9IDAuOSAqIChkZWx0YVRpbWUgKiB4KTtcbiAgICAgICAgdGhpcy55X3ZlbG9jaXR5ICs9IDAuOTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueF92ZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMueV92ZWxvY2l0eTtcbiAgICB9XG5cbiAgICBnZXRPZmZzZXRfeCgpe1xuICAgICAgICByZXR1cm4gdGhpcy54X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIGdldE9mZnNldF95KGp1bXApe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyBqdW1wO1xuICAgIH1cblxuICAgIHNob290KCkge1xuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSwgeCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZlKGRlbHRhVGltZSwgeCk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcblxuICAgICAgICAvL2FkanVzdCBjYW1lcmEgb2Zmc2V0XG5cblxuICAgICAgICAvL2NoZWNrIGNvbGxpc2lvbnMgdyBmbG9vciBcbiAgICAgICAgLy8gaWYodGhpcy5wb3NpdGlvbi55IDwgMCkgdGhpcy5wb3NpdGlvbi55ID0gMDtcbiAgICAgICAgLy8gaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiB0aGlzLmdhbWUuZ2FtZUhlaWdodCkgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiB0aGlzLmdhbWUuZ2FtZUhlaWdodCsxMDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAvIDI7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9zZUxpZmUoKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBjaGVjayBjb2xsaXNpb25zIHdpdGggcGxhdGZvcm1zXG5cbiAgICAgICAgdGhpcy5nYW1lLnNjZW5lT2JqZWN0cy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgICAgICAgIGlmIChkZXRlY3RDb2xsaXNpb24odGhpcywgcGxhdGZvcm0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybS5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBpdGVtKSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29pbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nYW1lLml0ZW1zW2l0ZW0ua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2luQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2lucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29pbkNvdW50ZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQoY29pbkNvdW50ZXIuaW5uZXJIVE1MKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWUucGxhdGZvcm1zKS5mb3JFYWNoIChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gdGhpcy5nYW1lLnBsYXRmb3Jtc1trZXldO1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBwbGF0Zm9ybSkpe1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm0ucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAvLyB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge1NQRUVELCBKVU1QfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBnYW1lKXtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIC8vIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNhbkp1bXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRPZmZzZXRfeSgtSlVNUCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAtU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuICAgIFxuICAgIGNvbnRyb2xsZXIgKGUpe1xuICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlJVTk5JTkcpe1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbG9vcCAoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy51cCAmJiB0aGlzLnBsYXllci5jYW5KdW1wICkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9IC1KVU1QO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IGZhbHNlOyBcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oaXQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gU1BFRUQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gLVNQRUVEOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnBsYXllci5oZWlnaHQgfHwgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29udHJvbGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgICAgICB9XG59XG5cblxuIiwiaW1wb3J0IFN0YXRpY09iamVjdCBmcm9tICcuL3N0YXRpY09iamVjdCc7XG5pbXBvcnQgeyBidXNoZXMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbC91dGlsJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1c2ggZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgseSwgbnVtYmVyKXtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBidXNoZXNbdGhpcy5udW1iZXJdO1xuICAgICAgICB0aGlzLm11bHRpcGxpZXIgPSAyLjU7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5IC0gdGhpcy5oZWlnaHQvMlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDIgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM1OSAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDc1IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMzggLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA5NiAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzg1IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gODAgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDI5NyAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDExMyAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjkwIC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNzQgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIwOCAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsImltcG9ydCB7IENBTlZBU19XSURUSCwgSlVNUF9IRUlHSFQsIFNQRUVELCBDQU5WQVNfSEVJR0hULCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2xvdWRzIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGtleSwgcG9zaXRpb25feCkge1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLnJhbmRvbUludCgwLCA1KTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGNsb3Vkc1t0aGlzLm51bWJlcl07XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uX3ggfHwgKHRoaXMuZ2FtZS5nYW1lV2lkdGggKyB0aGlzLmdhbWUuZ2FtZVdpZHRoIC8gMikgKiAoTWF0aC5yYW5kb20oMCwgMSkpLFxuICAgICAgICAgICAgeTogKHRoaXMuZ2FtZS5nYW1lSGVpZ2h0ICsgdGhpcy5nYW1lLmdhbWVIZWlnaHQvMikgLyB0aGlzLnJhbmRvbUludCgwLjUsMTApXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ID0gLU1hdGgucmFuZG9tKDEsMik7XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzcGF3bigpe1xuICAgICAgICAodGhpcy5nYW1lLmdhbWVXaWR0aCArIHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyKSAqIE1hdGgucmFuZG9tKDAsIDEpO1xuICAgIH1cblxuICAgIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZ2FtZS5kZWxldGVFbGVtZW50KCdjbG91ZHMnLCB0aGlzLmtleSk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gdGhpcy5yYW5kb21JbnQoMiw0KTtcbiAgICAgICAgc3dpdGNoICh0aGlzLm51bWJlcil7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAyNTIvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gODE2L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA2MC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA0NjUvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE2Mi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA3MDIvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE4NC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA2OTgvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE3Ni9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4NTgvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDI5NC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4OTEvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueF92ZWxvY2l0eTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMubW92ZSgpO1xuXG4gICAgICAgIC8vY2hlY2sgY29sbGlzaW9ucyB3aXRoIHdhbGxcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCArIHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG59XG5cbiIsImltcG9ydCBTdGF0aWNPYmplY3QgZnJvbSAnLi9zdGF0aWNPYmplY3QnO1xuaW1wb3J0IHsgY29pbiB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW4gZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBrZXkpIHtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgICAgICB0aGlzLmltYWdlID0gY29pbjtcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb2luJztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQvMlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgdGhpcy5jeWNsZSArPSAwLjU7XG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID4gdGhpcy5pbWFnZS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlW01hdGguZmxvb3IodGhpcy5jeWNsZSldLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgaGlsbHMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuaW1wb3J0IFN0YXRpY09iamVjdCBmcm9tICcuL3N0YXRpY09iamVjdCc7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VudGFpbiBleHRlbmRzIFN0YXRpY09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeCx5KXtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSByYW5kb21JbnQoMCwxOSk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBoaWxsc1t0aGlzLm51bWJlcl07XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogcmFuZG9tSW50KC0xMDAsIDE1MClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAxLjU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5udW1iZXIpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA3MiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA5MzQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA0MDQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA4NiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDYwNiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA4NzkgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMDQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMzg1IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjA4IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxNDggLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNzUyIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjY2IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDcxNiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDQwNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTA0IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjAxIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwNTAgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAzNjMgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTI2NiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMDcgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTE1MiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxMzggLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTE1MiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA2MDAgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTc3MCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxOTIgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTQ5MSAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMDAgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gODA2IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIwNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA3NTYgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMTkwIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDkwNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyNjQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNjY5IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDE1MCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA3NzcgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjYyIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDY1NCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKS8yO1xuXG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgUGxhdGZvcm1MZWZ0IGZyb20gJy4vcGxhdGZvcm1fbGVmdCc7XG5pbXBvcnQgUGxhdGZvcm1SaWdodCBmcm9tICcuL3BsYXRmb3JtX3JpZ2h0JztcbmltcG9ydCB7QkxPQ0tTSVpFLCBDQU5WQVNfSEVJR0hUfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKG51bUJsb2NrcywgeCwgeSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRSAqIChudW1CbG9ja3MrMik7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLnBpZWNlcyA9IFtdO1xuICAgICAgICB0aGlzLm51bUJsb2NrcyA9IG51bUJsb2NrcztcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ID0geDtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV95ID0geTtcbiAgICAgICAgdGhpcy54X2ZpbGxlciA9IHg7XG4gICAgICAgIHRoaXMueV9maWxsZXIgPSB5ICsgQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmZpbGxlckNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29sb3IgPSBNYXRoLmNlaWwodGhpcy5maWxsZXJDb2xvcik7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpe1xuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybUxlZnQodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3ksIHRoaXMuY29sb3IpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubnVtQmxvY2tzOyBpID4gMDsgaS0tKXtcbiAgICAgICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtUGllY2UodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3ksIHRoaXMuY29sb3IpKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1feCArPSBCTE9DS1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1SaWdodCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuXG4gICAgfVxuXG5cbiAgICBtb3ZlKHBsYXllcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSBwbGF5ZXIuZ2V0T2Zmc2V0X3koKTtcblxuICAgICAgICB0aGlzLnhfZmlsbGVyIC09IHBsYXllci5nZXRPZmZzZXRfeCgpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3ggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuXG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UudXBkYXRlKHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKE1hdGguZmxvb3IodGhpcy5maWxsZXJDb2xvcikpe1xuICAgICAgICAgICAgY2FzZSAwOiBcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoOTAsNDksMzMpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTE1LDcyLDQ1KSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDEyMCw4Miw1MCknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMjMsOTIsNTcpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTM4LDEyMCw2OSknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDQ5LDI1KSc7XG4gICAgICAgIH1cblxuICAgICAgICBjdHgucmVjdCh0aGlzLnhfZmlsbGVyLCB0aGlzLnlfZmlsbGVyLCB0aGlzLnBsYXRmb3JtX3gtdGhpcy54X2ZpbGxlcitCTE9DS1NJWkUsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBQbGF0Zm9ybVBpZWNlIGZyb20gJy4vcGxhdGZvcm1fcGllY2UnO1xuaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7cGxhdGZvcm1fbGVmdH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1MZWZ0IGV4dGVuZHMgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY29sb3IpIHtcbiAgICAgICAgc3VwZXIoeCx5LCBjb2xvcik7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV9sZWZ0W2NvbG9yXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHBsYXRmb3JtX21pZCB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmltYWdlID0gcGxhdGZvcm1fbWlkW2NvbG9yXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHBsYXllci5nZXRPZmZzZXRfeSgpO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5O1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwbGF0Zm9ybV9yaWdodCB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtTGVmdCBleHRlbmRzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHN1cGVyKHgseSwgY29sb3IpO1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtX3JpZ2h0W2NvbG9yXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDA7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZShwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5tb3ZlKHBsYXllcik7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyB0cmVlcyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5pbXBvcnQgU3RhdGljT2JqZWN0IGZyb20gJy4vc3RhdGljT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSBleHRlbmRzIFN0YXRpY09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSkge1xuICAgICAgICBzdXBlcih4LHkpO1xuICAgICAgICB0aGlzLndpZHRoID0gNTAgKiBzaXplO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDExMCAqIHNpemU7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0cmVlc1swXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0Q29sbGlzaW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgbGV0IG9iakxlZnQgPSBvYmoueDtcbiAgICBsZXQgb2JqUmlnaHQgPSBvYmoueCArIG9iai53aWR0aDtcbiAgICBsZXQgb2JqVG9wID0gb2JqLnBvc2l0aW9uLnk7XG4gICAgbGV0IG9iakJvdHRvbSA9IG9iai5wb3NpdGlvbi55ICsgb2JqLmhlaWdodDtcblxuICAgIGxldCB0YXJnZXRMZWZ0ID0gdGFyZ2V0LnBvc2l0aW9uLng7XG4gICAgbGV0IHRhcmdldFJpZ2h0ID0gdGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQud2lkdGg7XG4gICAgbGV0IHRhcmdldFRvcCA9IHRhcmdldC5wb3NpdGlvbi55O1xuICAgIGxldCB0YXJnZXRCb3R0b20gPSB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICAgIG9iakJvdHRvbSA+PSB0YXJnZXRUb3AgJiZcbiAgICAgICAgb2JqVG9wIDw9IHRhcmdldEJvdHRvbSAmJlxuICAgICAgICAvLyBvYmpCb3R0b20gPD0gdGFyZ2V0VG9wICYmXG4gICAgICAgIC8vIG9ialRvcCA+PSB0YXJnZXRCb3R0b20gJiZcbiAgICAgICAgb2JqLnBvc2l0aW9uLnggPj0gdGFyZ2V0TGVmdCAmJlxuICAgICAgICBvYmoucG9zaXRpb24ueCArIG9iai53aWR0aCA8PSB0YXJnZXRSaWdodFxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCBsZXZlbDAxIGZyb20gJy4uL2xldmVscy9sZXZlbF8xLnR4dCc7XG5pbXBvcnQgeyBIRUlHSFRTUEFOLCBXSURUSFNQQU4sIFRSRUVIRUlHSFQsIFRSRUVXSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgUGxhdGZvcm1CdWlsZGVyIGZyb20gJy4uL3NjZW5lL3BsYXRmb3JtQnVpbGRlcic7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9zY2VuZS90cmVlJztcbmltcG9ydCBNb3VudGFpbiBmcm9tICcuLi9zY2VuZS9tb3VudGFpbic7XG5pbXBvcnQgQ29pbiBmcm9tICcuLi9zY2VuZS9jb2luJztcbmltcG9ydCBCdXNoIGZyb20gJy4uL3NjZW5lL2J1c2gnO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IGxldmVscyA9IHtcbiAgICAxOiBsZXZlbDAxXG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VMZXZlbCA9IGxldmVsRGF0YSA9PiB7XG4gICAgbGV0IGxldmVsID0gbGV2ZWxEYXRhLnNwbGl0KFwiXCIpO1xuICAgIGxldCBoZWlnaHQgPSAwO1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgbGV0IGJsb2NrQ291bnQgPSAwO1xuICAgIGxldCBpdGVtQ291bnQgPSAwO1xuXG4gICAgbGV0IGJhY2tncm91bmQgPSBbXTtcbiAgICBsZXQgc2NlbmVPYmplY3RzID0gW107XG4gICAgbGV0IGRlY28gPSBbXTtcbiAgICBsZXQgZW5lbWllcyA9IFtdO1xuICAgIGxldCBpdGVtcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHN3aXRjaCAobGV2ZWxbaV0pe1xuICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gSEVJR0hUU1BBTjtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTio0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzogXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC5wdXNoKG5ldyBNb3VudGFpbih3aWR0aCwgMCkpO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTiAqIHJhbmRvbUludCgyLCA3KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1Db3VudF0gPSAobmV3IENvaW4od2lkdGgsIGhlaWdodCAtIEhFSUdIVFNQQU4sIGl0ZW1Db3VudCkpO1xuICAgICAgICAgICAgICAgIGl0ZW1Db3VudCArPSAxO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIGRlY28ucHVzaChuZXcgVHJlZSh3aWR0aCwgaGVpZ2h0ICsgSEVJR0hUU1BBTiwgMS41KSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBUcmVlKHdpZHRoLCBoZWlnaHQgKyBIRUlHSFRTUEFOLCAxKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBCdXNoKHdpZHRoLCBoZWlnaHQsIHJhbmRvbUludCgwLDUpKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIGxldCBkZXB0aCA9IDU7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChoZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAwICYmIGhlaWdodCA8IDEwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoaGVpZ2h0ID49IDEwMCAmJiBoZWlnaHQgPCAyMDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAyMDAgJiYgaGVpZ2h0IDwgMzAwKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMzAwICYmIGhlaWdodCA8IDQwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBoZWlnaHQgPj0gNDAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjZW5lT2JqZWN0cy5wdXNoKG5ldyBQbGF0Zm9ybUJ1aWxkZXIoYmxvY2tDb3VudCwgd2lkdGgsIGhlaWdodCwgZGVwdGgpKTtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU4qYmxvY2tDb3VudDtcbiAgICAgICAgICAgICAgICBibG9ja0NvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgMDogYmFja2dyb3VuZCxcbiAgICAgICAgMTogc2NlbmVPYmplY3RzLFxuICAgICAgICAyOiBkZWNvLFxuICAgICAgICAzOiBpdGVtcyxcbiAgICB9O1xuXG59OyIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ==