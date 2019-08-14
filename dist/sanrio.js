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


// const gordoImg = [];

// for (let i = 0; i < 19; i++) {
//     let image = new Image();
//     image.src = `./src/images/items/coin/coin_${i}.png`;
//     gordoImg.push(image);
// }

// export const gordo = gordoImg;

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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxX\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tt\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tt   T\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbb\t\t\t\t\txxxxxxxxxxxX\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxX\t\t\t\n\t\t\t\t\t \t\t  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t     b\t\tccc\t\tT   t\t\t\t\t\t\t\t\t\t\ttb\t\t\t\t\tT\tt\t\t\tccc\n\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\txxxxxxxX\n\t\t\t\t\t t\n\t\t\t\t\txxxxxxX\t\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tb\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\n\t\t\t\t\t\t\t\t\t\t\t\t    \t xxxxxxxX\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tT  tb\t\tG\t\t\t\tb \tb\t\t\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\n\t\t\t  \t\tm   m \t\tm \t m  \t   m   \t \tm \t\tm\t\tm m m\t\tm  \tm \t\t\tmm\t\t\t\t\n\n\n\t\t");

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



class Bush extends _staticObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x,y, number){
        super(x,y);
        this.number = number;
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["bushes"][this.number];


        this.create();

        this.position = {
            x: x,
            y: y - this.height
        };

        
    }

    create() {
        let multiplier = 2.5;
        switch (this.number) {
            case 0:
                this.height = 102 / multiplier;
                this.width = 359 / multiplier;
                break;
            case 1:
                this.height = 75 / multiplier;
                this.width = 238 / multiplier;
                break;
            case 2:
                this.height = 96 / multiplier;
                this.width = 385 / multiplier;
                break;
            case 3:
                this.height = 80 / multiplier;
                this.width = 297 / multiplier;
                break;
            case 4:
                this.height = 113 / multiplier;
                this.width = 290 / multiplier;
                break;
            case 5:
                this.height = 74 / multiplier;
                this.width = 208 / multiplier;
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
            y: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(-150, 200)
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

        ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"], 500);
        
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
                deco.push(new _scene_bush__WEBPACK_IMPORTED_MODULE_6__["default"](width, height + _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"], Object(_util__WEBPACK_IMPORTED_MODULE_7__["randomInt"])(0,5)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWxzL2xldmVsXzEudHh0Iiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvdHV0b3JpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9idXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9jbG91ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvY29pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbW91bnRhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtX3JpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9zdGF0aWNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2x2bExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC91dGlsLmpzIl0sIm5hbWVzIjpb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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ0E7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR087QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdQOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7O0FBRU87OztBQUdQOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0EsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQUE7QUFBQTtBQUFBO0FBQXFHO0FBQzNFO0FBQ2E7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBcUI7QUFDakQsMkJBQTJCLCtEQUFvQjtBQUMvQyxvQkFBb0Isd0RBQWE7QUFDakMsbUJBQW1CLHVEQUFZO0FBQy9CO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFJLENBQUMsd0RBQWEsRUFBRSx1REFBWTtBQUNuRCx1QkFBdUIsc0RBQVEsQ0FBQyxnRUFBcUIsQ0FBQywrREFBb0I7QUFDMUU7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLHVEQUFZLENBQUMsd0RBQWE7QUFDcEQsaUNBQWlDLCtEQUFvQixDQUFDLGdFQUFxQjs7QUFFM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDtBQUFlLDA2Qzs7Ozs7Ozs7Ozs7O0FDQWY7QUFBQTtBQUFBO0FBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDRDO0FBQ0EsMkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHVCQUF1QjtBQUNoRCxxREFBcUQsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGFBQWE7QUFDdEU7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlCQUFpQjtBQUMxRTtBQUNBLHVFQUF1RSxpQkFBaUI7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgQ09OVFJPTF9DQU5WQVNfSEVJR0hUID0gMTI1O1xuZXhwb3J0IGNvbnN0IENPTlRST0xfQ0FOVkFTX1dJRFRIID0gNjUwO1xuXG5leHBvcnQgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBDQU5WQVNfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9IRUlHSFQgPSA0MDA7XG5leHBvcnQgY29uc3QgTEVWRUxfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBIRUlHSFRTUEFOID0gMjA7XG5leHBvcnQgY29uc3QgV0lEVEhTUEFOID0gMjA7XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0ge1xuICAgIExFRlQ6ICgtMSwgMCksXG4gICAgUklHSFQ6ICgxLCAwKSxcbiAgICBVUDogKDAsIDEpLFxufTtcblxuZXhwb3J0IGNvbnN0IFRSRUVXSURUSCA9IDUwO1xuZXhwb3J0IGNvbnN0IFRSRUVIRUlHSFQgPSAxMTA7XG5cbmV4cG9ydCBjb25zdCBKVU1QID0gMTI7XG5leHBvcnQgY29uc3QgU1BFRUQgPSA1O1xuXG5leHBvcnQgY29uc3QgUExBWUVSID0gMTU7XG5cbmV4cG9ydCBjb25zdCBHUkFWSVRZID0gMC41O1xuZXhwb3J0IGNvbnN0IEJMT0NLU0laRSA9IDIwOyIsImltcG9ydCBJbnB1dEhhbmRsZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBHYW1lSW5wdXRIYW5kbGVyIGZyb20gJy4vZ2FtZVN0YXRlQ29udHJvbGxlcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVycy9wbGF5ZXInO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuL3NjZW5lL3BsYXRmb3JtQnVpbGRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUvbWVudSc7XG5pbXBvcnQgeyBjbG91ZHMgfSBmcm9tICcuL2ltZ0xvYWRlcic7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9zY2VuZS9jbG91ZCc7XG5pbXBvcnQgeyBsZXZlbHMsIHBhcnNlTGV2ZWwgfSBmcm9tICcuL3V0aWwvbHZsTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0LFxuICAgIE1BUDogNSxcbiAgICBXSU46IDYsXG4gICAgQ09OVElOVUU6IDdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRILCBjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy5jbG91ZENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jbG91ZHMgPSB7fTtcblxuICAgIH1cblxuICAgIGRlbGV0ZUVsZW1lbnQoaGFzaCwga2V5KXtcbiAgICAgICAgc3dpdGNoIChoYXNoKXtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3Vkcyc6XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2xvdWRzW2tleV07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KCdjbG91ZHMnLCB0aGlzLmNsb3VkQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFkZEVsZW1lbnQoaGFzaCwga2V5KXtcbiAgICAgICAgc3dpdGNoIChoYXNoKSB7XG4gICAgICAgICAgICBjYXNlICdjbG91ZHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRzW2tleV0gPSBuZXcgQ2xvdWQodGhpcywgdGhpcy5jbG91ZENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3VkQ291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSh0aGlzKTtcbiAgICAgICAgdGhpcy5tZW51LmdlbmVyYXRlQ29udHJvbHMoKTtcbiAgICAgICAgbmV3IEdhbWVJbnB1dEhhbmRsZXIodGhpcywgdGhpcy5tZW51KTtcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KCdjbG91ZHMnLCB0aGlzLmNsb3VkQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlID0gbmV3IElucHV0SGFuZGxlcih0aGlzLnBsYXllciwgdGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZS5sb29wKTtcblxuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHt9O1xuXG4gICAgXG4gICAgfVxuICAgIFxuICAgIHBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5ld0dhbWUoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29Db250YWluZXInKTtcbiAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMubGV2ZWxPYmplY3RzID0gcGFyc2VMZXZlbChsZXZlbHNbMV0pO1xuICAgICAgICB0aGlzLnJlc3RhcnQgPSB0aGlzLmxldmVsT2JqZWN0cztcbiAgICAgICAgdGhpcy5zY2VuZU9iamVjdHMgPSB0aGlzLmxldmVsT2JqZWN0c1sxXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMubGV2ZWxPYmplY3RzWzNdO1xuXG5cbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIHdoaWxlIChsaXZlcy5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlmZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLm1lbnUuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlLmxvb3ApO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB1cGRhdGUoZGVsdGFUaW1lKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQgfHwgdGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNsb3VkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sZXZlbE9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxPYmplY3RzW2tleV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZSh0aGlzLnBsYXllcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lLCAwLjAyNSk7XG5cbiAgICB9XG5cbiAgXG5cbiAgICBhZGRMaWZlKCl7XG4gICAgICAgIGxldCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBoZWFydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYXJ0SWNvbicpO1xuICAgICAgICBoZWFydC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbGlmZS5wbmcnO1xuXG4gICAgICAgIGxldCBoZWFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFydENvbnRhaW5lcicpO1xuICAgICAgICBoZWFydENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXtcbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIGxpdmVzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGl2ZXNbMF0pO1xuICAgICAgICBpZiAobGl2ZXMubGVuZ3RoID09PSAwKSB0aGlzLmdhbWVPdmVyKCk7XG5cbiAgICAgICAgdGhpcy5sZXZlbE9iamVjdHMgPSB0aGlzLnJlc3RhcnQ7XG4gICAgICAgIHRoaXMuc2NlbmVPYmplY3RzID0gdGhpcy5sZXZlbE9iamVjdHNbMV07XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cblxuICAgICAgICB0aGlzLmN0eC5yZXNldFRyYW5zZm9ybSgpOyBcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLSh0aGlzLnBsYXllci5wb3NpdGlvbi54IC0gdGhpcy5nYW1lV2lkdGgvMiksIC0odGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMuZ2FtZUhlaWdodC8yKSk7XG5cblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNsb3VkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sZXZlbE9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxPYmplY3RzW2tleV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LmRyYXcodGhpcy5jdHgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5TVEFSVCl7XG4gICAgICAgICAgICB0aGlzLm1lbnUuc3RhcnRNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkgeyBcbiAgICAgICAgICAgIHRoaXMubWVudS5zaG93TWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKXtcbiAgICAgICAgICAgIHRoaXMubWVudS5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwKSc7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy5jdHgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn1cblxuIiwiY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ2FtZSwgbWVudSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpe1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICBcbiAgICAgICAgICAgICAgICAvLyB1cCAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0VXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZGVjcmVhc2VWb2x1bWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBtZW51LmluY3JlYXNlVm9sdW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5lbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpe1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyB1cCAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0VXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5lbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvLyBtZW51XG5jb25zdCBtZW51QXJyb3dJbWcgPSBuZXcgSW1hZ2UoKTtcbm1lbnVBcnJvd0ltZy5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbGlmZS5wbmcnO1xuXG5jb25zdCBrZXlib2FyZExlZnQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGtleWJvYXJkUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGtleWJvYXJkVXAgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGtleWJvYXJkRG93biA9IG5ldyBJbWFnZSgpO1xua2V5Ym9hcmRMZWZ0LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd19sZWZ0LnBuZyc7XG5rZXlib2FyZExlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ0hvcml6b250YWxcIik7XG5rZXlib2FyZFJpZ2h0LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd19yaWdodC5wbmcnO1xua2V5Ym9hcmRSaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93SW1nSG9yaXpvbnRhbFwiKTtcbmtleWJvYXJkVXAuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X3VwLnBuZyc7XG5rZXlib2FyZFVwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdWZXJ0aWNhbFwiKTtcbmtleWJvYXJkRG93bi5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvYXJyb3dfZG93bi5wbmcnO1xua2V5Ym9hcmREb3duLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdWZXJ0aWNhbFwiKTtcblxuZXhwb3J0IGNvbnN0IGFycm93cyA9IFtrZXlib2FyZExlZnQsIGtleWJvYXJkUmlnaHQsIGtleWJvYXJkVXAsIGtleWJvYXJkRG93bl07XG5leHBvcnQgY29uc3QgbWVudUFycm93ID0gW21lbnVBcnJvd0ltZ107XG5cbi8vIHNjZW5lXG5jb25zdCBwbGF0Zm9ybUxlZnRfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF8xID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzIgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfMyA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF80ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzUgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgY2xvdWRfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY2xvdWRfNiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBidXNoXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF82ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGZsb3dlcl8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBmbG93ZXJfMiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCB0cmVlXzEgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgaGlsbF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF83ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzggPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfOSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xNyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xOCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8xOSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8yMCA9IG5ldyBJbWFnZSgpO1xuXG5cbnBsYXRmb3JtTGVmdF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzEucG5nJztcbnBsYXRmb3JtTWlkXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV8xLnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzEucG5nJztcblxucGxhdGZvcm1MZWZ0XzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMi5wbmcnO1xucGxhdGZvcm1NaWRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzIucG5nJztcbnBsYXRmb3JtUmlnaHRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMi5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8zLnBuZyc7XG5wbGF0Zm9ybU1pZF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMy5wbmcnO1xucGxhdGZvcm1SaWdodF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8zLnBuZyc7XG5cbnBsYXRmb3JtTGVmdF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzQucG5nJztcbnBsYXRmb3JtTWlkXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV80LnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzQucG5nJztcblxucGxhdGZvcm1MZWZ0XzUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfNS5wbmcnO1xucGxhdGZvcm1NaWRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzUucG5nJztcbnBsYXRmb3JtUmlnaHRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfNS5wbmcnO1xuXG5jbG91ZF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfMS5wbmcnO1xuY2xvdWRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzIucG5nJztcbmNsb3VkXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF8zLnBuZyc7XG5jbG91ZF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfNC5wbmcnO1xuY2xvdWRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzYucG5nJztcbmNsb3VkXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF82LnBuZyc7XG5cbmJ1c2hfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfMS5wbmcnO1xuYnVzaF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF8yLnBuZyc7XG5idXNoXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzMucG5nJztcbmJ1c2hfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfNC5wbmcnO1xuYnVzaF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF81LnBuZyc7XG5idXNoXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzYucG5nJztcblxuZmxvd2VyXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9mbG93ZXJfMS5wbmcnO1xuZmxvd2VyXzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9mbG93ZXJfMi5wbmcnO1xuXG50cmVlXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS90cmVlXzEucG5nJztcblxuXG5oaWxsXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEucG5nJztcbmhpbGxfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMi5wbmcnO1xuaGlsbF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8zLnBuZyc7XG5oaWxsXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzQucG5nJztcbmhpbGxfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNS5wbmcnO1xuaGlsbF82LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF82LnBuZyc7XG5oaWxsXzcuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzcucG5nJztcbmhpbGxfOC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfOC5wbmcnO1xuaGlsbF85LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF85LnBuZyc7XG5oaWxsXzEwLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMC5wbmcnO1xuaGlsbF8xMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTEucG5nJztcbmhpbGxfMTIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEyLnBuZyc7XG5oaWxsXzEzLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMy5wbmcnO1xuaGlsbF8xNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTQucG5nJztcbmhpbGxfMTUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE1LnBuZyc7XG5oaWxsXzE2LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNi5wbmcnO1xuaGlsbF8xNy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTcucG5nJztcbmhpbGxfMTguc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE4LnBuZyc7XG5oaWxsXzE5LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xOS5wbmcnO1xuaGlsbF8yMC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMjAucG5nJztcblxuLy8gaXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5leHBvcnQgY29uc3QgcGxhdGZvcm1fbWlkID0gWycnLCBwbGF0Zm9ybU1pZF8xLCBwbGF0Zm9ybU1pZF8yLCBwbGF0Zm9ybU1pZF8zLCBwbGF0Zm9ybU1pZF80LCBwbGF0Zm9ybU1pZF81XTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV9sZWZ0ID0gWycnLCBwbGF0Zm9ybUxlZnRfMSwgcGxhdGZvcm1MZWZ0XzIsIHBsYXRmb3JtTGVmdF8zLCBwbGF0Zm9ybUxlZnRfNCwgcGxhdGZvcm1MZWZ0XzVdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtX3JpZ2h0ID0gWycnLCBwbGF0Zm9ybVJpZ2h0XzEsIHBsYXRmb3JtUmlnaHRfMiwgcGxhdGZvcm1SaWdodF8zLCBwbGF0Zm9ybVJpZ2h0XzQsIHBsYXRmb3JtUmlnaHRfNV07XG5cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV8xID0gW3BsYXRmb3JtTGVmdF8xLCBwbGF0Zm9ybU1pZF8xLCBwbGF0Zm9ybVJpZ2h0XzFdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzIgPSBbcGxhdGZvcm1MZWZ0XzIsIHBsYXRmb3JtTWlkXzIsIHBsYXRmb3JtUmlnaHRfMl07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fMyA9IFtwbGF0Zm9ybUxlZnRfMywgcGxhdGZvcm1NaWRfMywgcGxhdGZvcm1SaWdodF8zXTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV80ID0gW3BsYXRmb3JtTGVmdF80LCBwbGF0Zm9ybU1pZF80LCBwbGF0Zm9ybVJpZ2h0XzRdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzUgPSBbcGxhdGZvcm1MZWZ0XzUsIHBsYXRmb3JtTWlkXzUsIHBsYXRmb3JtUmlnaHRfNV07XG5leHBvcnQgY29uc3QgYnVzaGVzID0gW2J1c2hfMSwgYnVzaF8yLCBidXNoXzMsIGJ1c2hfNCwgYnVzaF81LCBidXNoXzZdO1xuZXhwb3J0IGNvbnN0IGNsb3VkcyA9IFtjbG91ZF8xLCBjbG91ZF8yLCBjbG91ZF8zLCBjbG91ZF80LCBjbG91ZF81LCBjbG91ZF82XTtcbmV4cG9ydCBjb25zdCBmbG93ZXJzID0gW2Zsb3dlcl8xLnBuZywgZmxvd2VyXzIucG5nXTtcbmV4cG9ydCBjb25zdCB0cmVlcyA9IFt0cmVlXzFdO1xuLy9jbG9zZVxuZXhwb3J0IGNvbnN0IGhpbGxzXzEgPSBbaGlsbF8zLCBoaWxsXzQsIGhpbGxfMTMsIGhpbGxfMTQsIGhpbGxfMTUsIGhpbGxfMTYsIGhpbGxfMTddO1xuZXhwb3J0IGNvbnN0IGhpbGxzXzIgPSBbaGlsbF8xLCBoaWxsXzIsIGhpbGxfOCwgaGlsbF85LCBoaWxsXzEwLCBoaWxsXzExLCBoaWxsXzEyXTtcbmV4cG9ydCBjb25zdCBoaWxsc18zID0gW2hpbGxfNSwgaGlsbF8yMF07XG5leHBvcnQgY29uc3QgaGlsbHNfNCA9IFtoaWxsXzYsIGhpbGxfNywgaGlsbF8xOCwgaGlsbF8xOV07XG5cbmV4cG9ydCBjb25zdCBoaWxscyA9IFtoaWxsXzEsIGhpbGxfMiwgaGlsbF8zLCBoaWxsXzQsIGhpbGxfNSwgaGlsbF82LCBoaWxsXzcsIGhpbGxfOCwgaGlsbF85LCBoaWxsXzEwLCBoaWxsXzExLCBoaWxsXzEyLCBoaWxsXzEzLCBoaWxsXzE0LCBoaWxsXzE1LCBoaWxsXzE2LCBoaWxsXzE3LCBoaWxsXzE4LCBoaWxsXzE5LCBoaWxsXzIwXTtcblxuXG5jb25zdCBjb2lucyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDE5OyBpKyspIHtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBgLi9zcmMvaW1hZ2VzL2l0ZW1zL2NvaW4vY29pbl8ke2l9LnBuZ2A7XG4gICAgY29pbnMucHVzaChpbWFnZSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb2luID0gY29pbnM7XG5cblxuLy8gY29uc3QgZ29yZG9JbWcgPSBbXTtcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxOTsgaSsrKSB7XG4vLyAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4vLyAgICAgaW1hZ2Uuc3JjID0gYC4vc3JjL2ltYWdlcy9pdGVtcy9jb2luL2NvaW5fJHtpfS5wbmdgO1xuLy8gICAgIGdvcmRvSW1nLnB1c2goaW1hZ2UpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgZ29yZG8gPSBnb3Jkb0ltZzsiLCJpbXBvcnQge0NBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgQ09OVFJPTF9DQU5WQVNfSEVJR0hULCBDT05UUk9MX0NBTlZBU19XSURUSH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBUdXRvcmlhbCBmcm9tICcuL21lbnUvdHV0b3JpYWwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgbGV0IHR1dG9yaWFsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xDYW52YXMnKTtcbiAgICB0dXRvcmlhbENhbnZhcy5oZWlnaHQgPSBDT05UUk9MX0NBTlZBU19IRUlHSFQ7XG4gICAgdHV0b3JpYWxDYW52YXMud2lkdGggPSBDT05UUk9MX0NBTlZBU19XSURUSDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICBjYW52YXMud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjb250cm9sY3R4ID0gdHV0b3JpYWxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRILCBjdHgpO1xuICAgIGxldCB0dXRvcmlhbCA9IG5ldyBUdXRvcmlhbChDT05UUk9MX0NBTlZBU19IRUlHSFQsQ09OVFJPTF9DQU5WQVNfV0lEVEgsY29udHJvbGN0eCwgZ2FtZSk7XG4gICAgZ2FtZS5zdGFydCgpO1xuICAgIHR1dG9yaWFsLnN0YXJ0KCk7XG4gICAgXG4gICAgXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuLy8gaW1hZ2VzXG5cbiAgICBmdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgLy8gbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxDQU5WQVNfV0lEVEgsQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIGNvbnRyb2xjdHguY2xlYXJSZWN0KDAsMCxDT05UUk9MX0NBTlZBU19XSURUSCxDT05UUk9MX0NBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgIHR1dG9yaWFsLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICB0dXRvcmlhbC5kcmF3KGNvbnRyb2xjdHgpO1xuXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGdhbWUuZHJhdyhjdHgpO1xuICAgICAgICAvLyBnYW1lLmRyYXcoY29udHJvbGN0eCk7XG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5cbn0pO1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuXFxuXFxuXFx0ICAgICAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0ICAgVFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJiXFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHhYXFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdCBcXHRcXHQgIFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICAgYlxcdFxcdGNjY1xcdFxcdFQgICB0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGJcXHRcXHRcXHRcXHRcXHRUXFx0dFxcdFxcdFxcdGNjY1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcdFxcdHh4eHh4eHhYXFxuXFx0XFx0XFx0XFx0XFx0IHRcXG5cXHRcXHRcXHRcXHRcXHR4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQgICAgXFx0IHh4eHh4eHhYXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFQgIHRiXFx0XFx0R1xcdFxcdFxcdFxcdGIgXFx0YlxcdFxcdFxcbnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdFxcblxcdFxcdFxcdCAgXFx0XFx0bSAgIG0gXFx0XFx0bSBcXHQgbSAgXFx0ICAgbSAgIFxcdCBcXHRtIFxcdFxcdG1cXHRcXHRtIG0gbVxcdFxcdG0gIFxcdG0gXFx0XFx0XFx0bW1cXHRcXHRcXHRcXHRcXG5cXG5cXG5cXHRcXHRcIiIsImltcG9ydCB7IGFycm93cyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNCxcbiAgICBNQVA6IDUsXG4gICAgV0lOOiA2LFxuICAgIENPTlRJTlVFOiA3XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcbiAgICAgICAgdGhpcy5vcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVPcHRpb25zJyk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5vcHRpb25zTGlzdC5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25NZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25NZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMub3B0aW9uTGVuZ3RoID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ29Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ29NZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuZ29DdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ29NZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLmdvTGVuZ3RoID0gdGhpcy5nb09wdGlvbnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0TWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0T3B0aW9ucycpO1xuICAgICAgICB0aGlzLnN0YXJ0TGVuZ3RoID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm1lbnVIYXNoID0ge1xuICAgICAgICAgICAgMDogJ21haW4nLFxuICAgICAgICAgICAgMTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgMjogJ2NvbnRyb2wnLFxuICAgICAgICAgICAgMzogJ2dhbWVvdmVyJyxcbiAgICAgICAgICAgIDQ6ICdzdGFydCcsXG4gICAgICAgICAgICA1OiAnaW50cm8nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWVudVR5cGUgPSB0aGlzLm1lbnVIYXNoWzBdO1xuICAgIH1cblxuICAgIHNoaWZ0RG93bigpe1xuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2ludGVyQXJyb3cnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L21lbnVDdXJzb3IucG5nJztcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGhpcy5tZW51VHlwZSl7ICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ICU9IHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudCAlIHRoaXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMV06XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkN1cnJlbnQgPj0gdGhpcy5vcHRpb25MZW5ndGgpIHRoaXMub3B0aW9uQ3VycmVudCAlPSB0aGlzLm9wdGlvbkxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudCAlIHRoaXMub3B0aW9uTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyc1t0aGlzLm9wdGlvbkN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzNdOlxuICAgICAgICAgICAgICAgIGxldCBnb0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBnb0Fycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29BcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0N1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nb0N1cnJlbnQgPj0gdGhpcy5nb0xlbmd0aCkgdGhpcy5nb0N1cnJlbnQgJT0gdGhpcy5nb0xlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQgPSB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnQgJSB0aGlzLmdvTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Db250YWluZXJzW3RoaXMuZ29DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFs0XTpcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgc3RhcnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0YXJ0QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRDdXJyZW50ID49IHRoaXMuc3RhcnRMZW5ndGgpIHRoaXMuc3RhcnRDdXJyZW50ICU9IHRoaXMuc3RhcnRMZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50ICUgdGhpcy5zdGFydExlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyc1t0aGlzLnN0YXJ0Q3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hpZnRVcCgpe1xuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2ludGVyQXJyb3cnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L21lbnVDdXJzb3IucG5nJztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMubWVudVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50ICUgdGhpcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFsxXTpcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25DdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uQ3VycmVudCA8IDApIHRoaXMub3B0aW9uQ3VycmVudCA9IHRoaXMub3B0aW9uTGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnQgJSB0aGlzLm9wdGlvbkxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnNbdGhpcy5vcHRpb25DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFszXTpcbiAgICAgICAgICAgICAgICBsZXQgZ29BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgZ29BcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvQXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29DdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29DdXJyZW50IDwgMCkgdGhpcy5nb0N1cnJlbnQgPSB0aGlzLmdvTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQgPSB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnQgJSB0aGlzLmdvTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ29udGFpbmVyc1t0aGlzLmdvQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbNF06XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGFydEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0Q3VycmVudCA8IDApIHRoaXMuc3RhcnRDdXJyZW50ID0gdGhpcy5zdGFydExlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50ICUgdGhpcy5zdGFydExlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyc1t0aGlzLnN0YXJ0Q3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU1lbnVUeXBlKHgpe1xuICAgICAgICB0aGlzLm1lbnVUeXBlID0gdGhpcy5tZW51SGFzaFt4XTtcbiAgICB9XG5cbiAgICBlbnRlcigpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFswXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCl7XG4gICAgICAgICAgICAgICAgLy8gcmVzdW1lXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGdhbWVcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uQ3VycmVudCl7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMl0pe1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbM10pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdvQ3VycmVudCl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbNF0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXJ0Q3VycmVudCl7XG4gICAgICAgICAgICAgICAgLy8gb25lIHBsYXllciBnYW1lXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGV4aXRcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgbGV0IGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0NvbnRhaW5lcicpO1xuICAgICAgICBlbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMyk7XG4gICAgfVxuXG4gICAgc3RhcnRNZW51KCl7XG4gICAgICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydENvbnRhaW5lcicpO1xuICAgICAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSg0KTtcbiAgICB9XG5cbiAgICBzaG93TWVudSgpe1xuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgXG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICBcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29udHJvbHMoKXtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICB0b2dnbGVPcHRpb25zKCl7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgc3Bhd24oKXtcbiAgICB9XG5cbiAgICBkZWNyZWFzZVZvbHVtZSgpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSkge1xuICAgICAgICAgICAgbGV0IHZvbHVtZSA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbkN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZnhSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpY1JhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgaW5jcmVhc2VWb2x1bWUoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pIHtcbiAgICAgICAgICAgIGxldCB2b2x1bWUgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4UmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSArIDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpICsgMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMF0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNYXAoKXt9XG5cbiAgICBleGl0KCl7XG4gICAgICAgIHRoaXMuZ2FtZS5wYXVzZSgpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIGxldCBrZXlib2FyZCA9ICdRV0VSVFlVSU9QQVNERkdISktMWlhDVkJOTSc7XG4gICAgICAgIGxldCBudW1zID0gJzEyMzQ1Njc4OTAnO1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGxldHRlciA9IDA7XG4gICAgICAgIGxldCBrZXlBcnJheSA9IFtcbiAgICAgICAgICAgIFs0LCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCA0LCAxMl0sXG4gICAgICAgICAgICBbNSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNSwgNV0sXG4gICAgICAgICAgICBbMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgNSwgMF0sXG4gICAgICAgICAgICBbOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNSwgNSwgNV0sXG4gICAgICAgICAgICBbNiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgNl0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgNywgMCwgMCwgOSwgMTAsIDExXVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGtleUFycmF5Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJvdyR7cm93fWApO1xuICAgICAgICAgICAga2V5QXJyYXlbcm93XS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGtleSR7bnVtc1tudW1iZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7bnVtc1tudW1iZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlOdW1iZXJDb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vZGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0bm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBga2V5JHtrZXlib2FyZFtsZXR0ZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlcm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2tleWJvYXJkW2xldHRlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5TGV0dGVyQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcm5vZGUuYXBwZW5kQ2hpbGQobGV0dGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxldHRlcm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3cga2V5c1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG93bkFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVwQXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb3duQXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5hcHBlbmRDaGlsZChhcnJvd3NbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0QXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaWdodGJsYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmlnaHRibGFuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJsYW5rIGtleXNcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVhcnRlcktleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhhbGZLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2ZXJ0aWNhbEhhbGZLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaGlmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmFja3NwYWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXJzL3BsYXllcic7XG5pbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gJy4uL3BsYXllcnMvcGxheWVySW5wdXQnO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IHt0cmVlcywgYnVzaGVzfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDQsXG4gICAgTUFQOiA1LFxuICAgIFdJTjogNixcbiAgICBDT05USU5VRTogN1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHV0b3JpYWwge1xuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIGNvbnRyb2xjdHgsIGdhbWUpe1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHggPSBjb250cm9sY3R4O1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSB7XG4gICAgICAgICAgICAxOiBuZXcgUGxhdGZvcm1CdWlsZGVyKDI1LCA1MCwgOTUsIDAuNSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjZW5lT2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG4gICAgICAgIG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuXG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGRlbHRhVGltZSwgMC4wNTUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpe31cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmZpbGxTdHlsZT0gJ3JlZCc7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucGxhdGZvcm1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXRmb3Jtc1trZXldLmRyYXcodGhpcy50dXRvcmlhbGN0eCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZSh0cmVlc1swXSwgNDIwLCAtNSwgNDAsIDEwMCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKHRyZWVzWzBdLCA0NjIuNSwgMjAsIDMwLCA3NSk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKGJ1c2hlc1szXSwgMTY1LCA3NSwgNzAsIDIwKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UoYnVzaGVzWzFdLCAzODUsIDc1LCA2NSwgMjApO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZShidXNoZXNbMl0sIDQ3NSwgNzUsIDg1LCAyMCk7XG5cbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMCwwKSc7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy50dXRvcmlhbGN0eCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBQTEFZRVIsIEdSQVZJVFkgfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2RldGVjdENvbGxpc2lvbn0gZnJvbSAnLi4vdXRpbC9jb2xsaXNpb24nO1xuXG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBQTEFZRVI7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gUExBWUVSO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSBsZXZlbERhdGE7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5nYW1lV2lkdGggIC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLmdhbWVIZWlnaHQvMiBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2U7XG4gICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IEdSQVZJVFk7XG4gICAgICAgIHRoaXMueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZShkZWx0YVRpbWUsIHgpe1xuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgKj0gMC45ICogKGRlbHRhVGltZSAqIHgpO1xuICAgICAgICB0aGlzLnlfdmVsb2NpdHkgKz0gMC45O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIGdldE9mZnNldF94KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnhfdmVsb2NpdHk7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2V0X3koanVtcCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCArIGp1bXA7XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lLCB4KSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmUoZGVsdGFUaW1lLCB4KTtcblxuICAgICAgICAvL2NoZWNrIGNvbGxpc2lvbnMgd2l0aCB3YWxsXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZS5nYW1lV2lkdGgpIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuXG4gICAgICAgIC8vYWRqdXN0IGNhbWVyYSBvZmZzZXRcblxuXG4gICAgICAgIC8vY2hlY2sgY29sbGlzaW9ucyB3IGZsb29yIFxuICAgICAgICAvLyBpZih0aGlzLnBvc2l0aW9uLnkgPCAwKSB0aGlzLnBvc2l0aW9uLnkgPSAwO1xuICAgICAgICAvLyBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0KSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodC10aGlzLmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0KzEwMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lLmdhbWVXaWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb3NlTGlmZSgpO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIGNoZWNrIGNvbGxpc2lvbnMgd2l0aCBwbGF0Zm9ybXNcblxuICAgICAgICB0aGlzLmdhbWUuc2NlbmVPYmplY3RzLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0Q29sbGlzaW9uKHRoaXMsIGl0ZW0pKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb2luJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdhbWUuaXRlbXNbaXRlbS5rZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvaW5Db3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvaW5zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2luQ291bnRlci5pbm5lckhUTUwgPSBwYXJzZUludChjb2luQ291bnRlci5pbm5lckhUTUwpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2FtZS5wbGF0Zm9ybXMpLmZvckVhY2ggKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhdGZvcm0gPSB0aGlzLmdhbWUucGxhdGZvcm1zW2tleV07XG4gICAgICAgICAgICBpZiAoZGV0ZWN0Q29sbGlzaW9uKHRoaXMsIHBsYXRmb3JtKSl7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybS5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIC8vIH1cbiAgICB9XG59XG5cbiIsImltcG9ydCB7U1BFRUQsIEpVTVB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGdhbWUpe1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgLy8gfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bkFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY2FuSnVtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cEFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnlfdmVsb2NpdHkgPSAtSlVNUDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbkp1bXAgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5oaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldE9mZnNldF95KC1KVU1QKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdEFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IC1TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IFNQRUVEO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bkFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0QXJyb3dcIikuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgY29udHJvbGxlciAoZSl7XG4gICAgICAgIHZhciBrZXlfc3RhdGUgPSAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUlVOTklORyl7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsb29wICgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnVwICYmIHRoaXMucGxheWVyLmNhbkp1bXAgKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAtU1BFRUQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zaXRpb24ueSA+PSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAtIHRoaXMucGxheWVyLmhlaWdodCB8fCB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID09IDApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmNvbnRyb2xsZXIpO1xuICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgU3RhdGljT2JqZWN0IGZyb20gJy4vc3RhdGljT2JqZWN0JztcbmltcG9ydCB7IGJ1c2hlcyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1c2ggZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgseSwgbnVtYmVyKXtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBidXNoZXNbdGhpcy5udW1iZXJdO1xuXG5cbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAyLjU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5udW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwMiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM1OSAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA3NSAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIzOCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA5NiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM4NSAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA4MCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDI5NyAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTMgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyOTAgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNzQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMDggLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IHsgQ0FOVkFTX1dJRFRILCBKVU1QX0hFSUdIVCwgU1BFRUQsIENBTlZBU19IRUlHSFQsIEdSQVZJVFkgfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjbG91ZHMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwga2V5LCBwb3NpdGlvbl94KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm51bWJlciA9IHRoaXMucmFuZG9tSW50KDAsIDUpO1xuICAgICAgICB0aGlzLmltYWdlID0gY2xvdWRzW3RoaXMubnVtYmVyXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25feCB8fCAodGhpcy5nYW1lLmdhbWVXaWR0aCArIHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyKSAqIChNYXRoLnJhbmRvbSgwLCAxKSksXG4gICAgICAgICAgICB5OiAodGhpcy5nYW1lLmdhbWVIZWlnaHQgKyB0aGlzLmdhbWUuZ2FtZUhlaWdodC8yKSAvIHRoaXMucmFuZG9tSW50KDAuNSwxMClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgPSAtTWF0aC5yYW5kb20oMSwyKTtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICByZXNwYXduKCl7XG4gICAgICAgICh0aGlzLmdhbWUuZ2FtZVdpZHRoICsgdGhpcy5nYW1lLmdhbWVXaWR0aCAvIDIpICogTWF0aC5yYW5kb20oMCwgMSk7XG4gICAgfVxuXG4gICAgcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5nYW1lLmRlbGV0ZUVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMua2V5KTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLnJhbmRvbUludCgyLDQpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMubnVtYmVyKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDI1Mi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4MTYvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDYwL211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDQ2NS9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTYyL211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDcwMi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTg0L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDY5OC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTc2L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDg1OC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMjk0L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDg5MS9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlKCk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoICsgdGhpcy5nYW1lLmdhbWVXaWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZS5nYW1lV2lkdGgpIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFN0YXRpY09iamVjdCBmcm9tICcuL3N0YXRpY09iamVjdCc7XG5pbXBvcnQgeyBjb2luIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbiBleHRlbmRzIFN0YXRpY09iamVjdCB7XG4gICAgY29uc3RydWN0b3IgKHgsIHksIGtleSkge1xuICAgICAgICBzdXBlcih4LHkpO1xuICAgICAgICB0aGlzLndpZHRoID0gMjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBjb2luO1xuICAgICAgICB0aGlzLmN5Y2xlID0gMDtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvaW4nO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodC8yXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgZHJhdyhjdHgpe1xuICAgICAgICB0aGlzLmN5Y2xlICs9IDAuNTtcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPiB0aGlzLmltYWdlLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2VbTWF0aC5mbG9vcih0aGlzLmN5Y2xlKV0sIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBoaWxscyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5pbXBvcnQgU3RhdGljT2JqZWN0IGZyb20gJy4vc3RhdGljT2JqZWN0JztcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdW50YWluIGV4dGVuZHMgU3RhdGljT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LHkpe1xuICAgICAgICBzdXBlcih4LHkpO1xuICAgICAgICB0aGlzLm51bWJlciA9IHJhbmRvbUludCgwLDE5KTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGhpbGxzW3RoaXMubnVtYmVyXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiByYW5kb21JbnQoLTE1MCwgMjAwKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpe1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IDEuNTtcbiAgICAgICAgc3dpdGNoICh0aGlzLm51bWJlcil7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDcyIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDkzNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDQwNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDg2IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gNjA2IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDg3OSAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIwNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAzODUgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMDggLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwNCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDE0OCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA3NTIgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyNjYgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNzE2IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gNDA0IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDExMDQgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMDEgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA1MCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM2MyAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMjY2IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIwNyAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTUyIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDEzOCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTUyIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDYwMCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxNzcwIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDE5MiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxNDkxIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIwMCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA4MDYgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjA0IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDc1NiAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxOTAgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gOTA0IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDI2NCAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA2NjkgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMTUwIC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDc3NyAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyNjIgLyBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNjU0IC8gbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZShwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHBsYXllci5nZXRPZmZzZXRfeCgpLzI7XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCBQbGF0Zm9ybUxlZnQgZnJvbSAnLi9wbGF0Zm9ybV9sZWZ0JztcbmltcG9ydCBQbGF0Zm9ybVJpZ2h0IGZyb20gJy4vcGxhdGZvcm1fcmlnaHQnO1xuaW1wb3J0IHtCTE9DS1NJWkUsIENBTlZBU19IRUlHSFR9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IobnVtQmxvY2tzLCB4LCB5LCBjb2xvcikge1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFICogKG51bUJsb2NrcysyKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMucGllY2VzID0gW107XG4gICAgICAgIHRoaXMubnVtQmxvY2tzID0gbnVtQmxvY2tzO1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3ggPSB4O1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3kgPSB5O1xuICAgICAgICB0aGlzLnhfZmlsbGVyID0geDtcbiAgICAgICAgdGhpcy55X2ZpbGxlciA9IHkgKyBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuZmlsbGVyQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb2xvciA9IE1hdGguY2VpbCh0aGlzLmZpbGxlckNvbG9yKTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCl7XG4gICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtTGVmdCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3ggKz0gQkxPQ0tTSVpFO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5udW1CbG9ja3M7IGkgPiAwOyBpLS0pe1xuICAgICAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1QaWVjZSh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybVJpZ2h0KHRoaXMucGxhdGZvcm1feCwgdGhpcy5wbGF0Zm9ybV95LCB0aGlzLmNvbG9yKSk7XG5cbiAgICB9XG5cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHBsYXllci5nZXRPZmZzZXRfeSgpO1xuXG4gICAgICAgIHRoaXMueF9maWxsZXIgLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocGxheWVyKXtcbiAgICAgICAgdGhpcy5tb3ZlKHBsYXllcik7XG5cbiAgICAgICAgdGhpcy5waWVjZXMuZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgICAgICAgICBwaWVjZS51cGRhdGUocGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5waWVjZXMuZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgICAgICAgICBwaWVjZS5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcih0aGlzLmZpbGxlckNvbG9yKSl7XG4gICAgICAgICAgICBjYXNlIDA6IFxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwKSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg5MCw0OSwzMyknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMTUsNzIsNDUpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTIwLDgyLDUwKSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDEyMyw5Miw1NyknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMzgsMTIwLDY5KSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsNDksMjUpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5yZWN0KHRoaXMueF9maWxsZXIsIHRoaXMueV9maWxsZXIsIHRoaXMucGxhdGZvcm1feC10aGlzLnhfZmlsbGVyK0JMT0NLU0laRSwgNTAwKTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIFxuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge3BsYXRmb3JtX2xlZnR9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtTGVmdCBleHRlbmRzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHN1cGVyKHgseSwgY29sb3IpO1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcblxuICAgICAgICB0aGlzLmltYWdlID0gcGxhdGZvcm1fbGVmdFtjb2xvcl07XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwbGF0Zm9ybV9taWQgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybVBpZWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtX21pZFtjb2xvcl07XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBtb3ZlKHBsYXllcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSBwbGF5ZXIuZ2V0T2Zmc2V0X3koKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMueV92ZWxvY2l0eTtcblxuICAgIH1cblxuICAgIHVwZGF0ZShwbGF5ZXIpe1xuICAgICAgICB0aGlzLm1vdmUocGxheWVyKTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgeyBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgcGxhdGZvcm1fcmlnaHQgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUxlZnQgZXh0ZW5kcyBQbGF0Zm9ybVBpZWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xuICAgICAgICBzdXBlcih4LHksIGNvbG9yKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV9yaWdodFtjb2xvcl07XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLndpZHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDAwO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKHBsYXllcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUocGxheWVyKSB7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgdHJlZXMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuaW1wb3J0IFN0YXRpY09iamVjdCBmcm9tICcuL3N0YXRpY09iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUgZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHNpemUpIHtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwICogc2l6ZTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTAgKiBzaXplO1xuICAgICAgICB0aGlzLmltYWdlID0gdHJlZXNbMF07XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGVjdENvbGxpc2lvbihvYmosIHRhcmdldCkge1xuICAgIGxldCBvYmpMZWZ0ID0gb2JqLng7XG4gICAgbGV0IG9ialJpZ2h0ID0gb2JqLnggKyBvYmoud2lkdGg7XG4gICAgbGV0IG9ialRvcCA9IG9iai5wb3NpdGlvbi55O1xuICAgIGxldCBvYmpCb3R0b20gPSBvYmoucG9zaXRpb24ueSArIG9iai5oZWlnaHQ7XG5cbiAgICBsZXQgdGFyZ2V0TGVmdCA9IHRhcmdldC5wb3NpdGlvbi54O1xuICAgIGxldCB0YXJnZXRSaWdodCA9IHRhcmdldC5wb3NpdGlvbi54ICsgdGFyZ2V0LndpZHRoO1xuICAgIGxldCB0YXJnZXRUb3AgPSB0YXJnZXQucG9zaXRpb24ueTtcbiAgICBsZXQgdGFyZ2V0Qm90dG9tID0gdGFyZ2V0LnBvc2l0aW9uLnkgKyB0YXJnZXQuaGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgICBvYmpCb3R0b20gPj0gdGFyZ2V0VG9wICYmXG4gICAgICAgIG9ialRvcCA8PSB0YXJnZXRCb3R0b20gJiZcbiAgICAgICAgLy8gb2JqQm90dG9tIDw9IHRhcmdldFRvcCAmJlxuICAgICAgICAvLyBvYmpUb3AgPj0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ID49IHRhcmdldExlZnQgJiZcbiAgICAgICAgb2JqLnBvc2l0aW9uLnggKyBvYmoud2lkdGggPD0gdGFyZ2V0UmlnaHRcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgbGV2ZWwwMSBmcm9tICcuLi9sZXZlbHMvbGV2ZWxfMS50eHQnO1xuaW1wb3J0IHsgSEVJR0hUU1BBTiwgV0lEVEhTUEFOLCBUUkVFSEVJR0hULCBUUkVFV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vc2NlbmUvdHJlZSc7XG5pbXBvcnQgTW91bnRhaW4gZnJvbSAnLi4vc2NlbmUvbW91bnRhaW4nO1xuaW1wb3J0IENvaW4gZnJvbSAnLi4vc2NlbmUvY29pbic7XG5pbXBvcnQgQnVzaCBmcm9tICcuLi9zY2VuZS9idXNoJztcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBsZXZlbHMgPSB7XG4gICAgMTogbGV2ZWwwMVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlTGV2ZWwgPSBsZXZlbERhdGEgPT4ge1xuICAgIGxldCBsZXZlbCA9IGxldmVsRGF0YS5zcGxpdChcIlwiKTtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBibG9ja0NvdW50ID0gMDtcbiAgICBsZXQgaXRlbUNvdW50ID0gMDtcblxuICAgIGxldCBiYWNrZ3JvdW5kID0gW107XG4gICAgbGV0IHNjZW5lT2JqZWN0cyA9IFtdO1xuICAgIGxldCBkZWNvID0gW107XG4gICAgbGV0IGVuZW1pZXMgPSBbXTtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICBzd2l0Y2ggKGxldmVsW2ldKXtcbiAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IEhFSUdIVFNQQU47XG4gICAgICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnXFx0JzpcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU4qNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6IFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQucHVzaChuZXcgTW91bnRhaW4od2lkdGgsIDApKTtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU4gKiByYW5kb21JbnQoMiwgNyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICBpdGVtc1tpdGVtQ291bnRdID0gKG5ldyBDb2luKHdpZHRoLCBoZWlnaHQgLSBIRUlHSFRTUEFOLCBpdGVtQ291bnQpKTtcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICBkZWNvLnB1c2gobmV3IFRyZWUod2lkdGgsIGhlaWdodCArIEhFSUdIVFNQQU4sIDEuNSkpO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIGRlY28ucHVzaChuZXcgVHJlZSh3aWR0aCwgaGVpZ2h0ICsgSEVJR0hUU1BBTiwgMSkpO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgIGRlY28ucHVzaChuZXcgQnVzaCh3aWR0aCwgaGVpZ2h0ICsgSEVJR0hUU1BBTiwgcmFuZG9tSW50KDAsNSkpKTtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICBibG9ja0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgICAgICBibG9ja0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgbGV0IGRlcHRoID0gNTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoaGVpZ2h0ID49IDAgJiYgaGVpZ2h0IDwgMTAwKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMTAwICYmIGhlaWdodCA8IDIwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoaGVpZ2h0ID49IDIwMCAmJiBoZWlnaHQgPCAzMDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAzMDAgJiYgaGVpZ2h0IDwgNDAwKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGhlaWdodCA+PSA0MDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NlbmVPYmplY3RzLnB1c2gobmV3IFBsYXRmb3JtQnVpbGRlcihibG9ja0NvdW50LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCkpO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTipibG9ja0NvdW50O1xuICAgICAgICAgICAgICAgIGJsb2NrQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICAwOiBiYWNrZ3JvdW5kLFxuICAgICAgICAxOiBzY2VuZU9iamVjdHMsXG4gICAgICAgIDI6IGRlY28sXG4gICAgICAgIDM6IGl0ZW1zLFxuICAgIH07XG5cbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9