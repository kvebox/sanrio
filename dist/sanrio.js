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
    INTRO: 4
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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxX\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tt\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxX\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxX\t\t\t\n\t\t\t\t\t \t\t  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  \t\tccc\t\t\tT   t\t\t\t\t\t\t\t\t\t\tt\t\t\t\t\t\tt\n\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\txxxxxxxX\n\t\t\t\t\t t\n\t\t\t\t\txxxxxxX\t\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t    \t xxxxxxxX\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tT  t\t\tG\t\t\t\t\t\t\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\nmmmm  \t\tmmmm \t\tm \t m  \t   m   \t \t\t\tm \t\tmmm mm  \tm \t\t\tmm\t\t\tmmmmm\t\n\n\n\t\t");

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
    INTRO: 4
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



class Mountain extends _staticObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(x,y){
        super(x,y);
        this.number = 1;
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_0__["hills"][this.number];
        this.width = 200;
        this.height = 2000;

        this.position = {
            x: x,
            y: y
        };
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneObject; });
class SceneObject {
    constructor(x, y) {
        this.width = 0;
        this.height = 0;

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
                background.push(new _scene_mountain__WEBPACK_IMPORTED_MODULE_4__["default"](width, height));
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
                // width += BLOCKSIZE;
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
        4: enemies
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWxzL2xldmVsXzEudHh0Iiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvdHV0b3JpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9idXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9jbG91ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvY29pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbW91bnRhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtX3JpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9zdGF0aWNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2x2bExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC91dGlsLmpzIl0sIm5hbWVzIjpb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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHUDs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBOztBQUVPLG1COzs7Ozs7Ozs7Ozs7QUNoTFA7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDM0U7QUFDYTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFxQjtBQUNqRCwyQkFBMkIsK0RBQW9CO0FBQy9DLG9CQUFvQix3REFBYTtBQUNqQyxtQkFBbUIsdURBQVk7QUFDL0I7QUFDQTs7QUFFQSxtQkFBbUIsNkNBQUksQ0FBQyx3REFBYSxFQUFFLHVEQUFZO0FBQ25ELHVCQUF1QixzREFBUSxDQUFDLGdFQUFxQixDQUFDLCtEQUFvQjtBQUMxRTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsdURBQVksQ0FBQyx3REFBYTtBQUNwRCxpQ0FBaUMsK0RBQW9CLENBQUMsZ0VBQXFCOztBQUUzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQWUsc3dDOzs7Ozs7Ozs7Ozs7QUNBZjtBQUFBO0FBQUE7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsOERBQWU7QUFDckQseUJBQXlCLG9EQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRTs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic2FucmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgQ09OVFJPTF9DQU5WQVNfSEVJR0hUID0gMTI1O1xuZXhwb3J0IGNvbnN0IENPTlRST0xfQ0FOVkFTX1dJRFRIID0gNjUwO1xuXG5leHBvcnQgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBDQU5WQVNfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9IRUlHSFQgPSA0MDA7XG5leHBvcnQgY29uc3QgTEVWRUxfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBIRUlHSFRTUEFOID0gMjA7XG5leHBvcnQgY29uc3QgV0lEVEhTUEFOID0gMjA7XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0ge1xuICAgIExFRlQ6ICgtMSwgMCksXG4gICAgUklHSFQ6ICgxLCAwKSxcbiAgICBVUDogKDAsIDEpLFxufTtcblxuZXhwb3J0IGNvbnN0IFRSRUVXSURUSCA9IDUwO1xuZXhwb3J0IGNvbnN0IFRSRUVIRUlHSFQgPSAxMTA7XG5cbmV4cG9ydCBjb25zdCBKVU1QID0gMTI7XG5leHBvcnQgY29uc3QgU1BFRUQgPSA1O1xuXG5leHBvcnQgY29uc3QgUExBWUVSID0gMTU7XG5cbmV4cG9ydCBjb25zdCBHUkFWSVRZID0gMC41O1xuZXhwb3J0IGNvbnN0IEJMT0NLU0laRSA9IDIwOyIsImltcG9ydCBJbnB1dEhhbmRsZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBHYW1lSW5wdXRIYW5kbGVyIGZyb20gJy4vZ2FtZVN0YXRlQ29udHJvbGxlcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVycy9wbGF5ZXInO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuL3NjZW5lL3BsYXRmb3JtQnVpbGRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUvbWVudSc7XG5pbXBvcnQgeyBjbG91ZHMgfSBmcm9tICcuL2ltZ0xvYWRlcic7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9zY2VuZS9jbG91ZCc7XG5pbXBvcnQgeyBsZXZlbHMsIHBhcnNlTGV2ZWwgfSBmcm9tICcuL3V0aWwvbHZsTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMuY2xvdWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2xvdWRzID0ge307XG5cbiAgICB9XG5cbiAgICBkZWxldGVFbGVtZW50KGhhc2gsIGtleSl7XG4gICAgICAgIHN3aXRjaCAoaGFzaCl7XG4gICAgICAgICAgICBjYXNlICdjbG91ZHMnOlxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsb3Vkc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCgnY2xvdWRzJywgdGhpcy5jbG91ZENvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50KGhhc2gsIGtleSl7XG4gICAgICAgIHN3aXRjaCAoaGFzaCkge1xuICAgICAgICAgICAgY2FzZSAnY2xvdWRzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Vkc1trZXldID0gbmV3IENsb3VkKHRoaXMsIHRoaXMuY2xvdWRDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZENvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcyk7XG4gICAgICAgIHRoaXMubWVudS5nZW5lcmF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIG5ldyBHYW1lSW5wdXRIYW5kbGVyKHRoaXMsIHRoaXMubWVudSk7XG4gICAgICAgIHRoaXMubmV3R2FtZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCgnY2xvdWRzJywgdGhpcy5jbG91ZENvdW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUubG9vcCk7XG5cbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSB7fTtcblxuICAgIFxuICAgIH1cbiAgICBcbiAgICBwYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdHYW1lKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQ29udGFpbmVyJyk7XG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmxldmVsT2JqZWN0cyA9IHBhcnNlTGV2ZWwobGV2ZWxzWzFdKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0ID0gdGhpcy5sZXZlbE9iamVjdHM7XG4gICAgICAgIHRoaXMuc2NlbmVPYmplY3RzID0gdGhpcy5sZXZlbE9iamVjdHNbMV07XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmxldmVsT2JqZWN0c1szXTtcbiAgICAgXG5cblxuICAgICAgICBsZXQgbGl2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFydEljb24nKTtcbiAgICAgICAgd2hpbGUgKGxpdmVzLmxlbmd0aCA8IDQpe1xuICAgICAgICAgICAgdGhpcy5hZGRMaWZlKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMubWVudS5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUubG9vcCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHVwZGF0ZShkZWx0YVRpbWUpe1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCB8fCB0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xvdWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3Vkc1trZXldLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxldmVsT2JqZWN0cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZXZlbE9iamVjdHNba2V5XS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlKHRoaXMucGxheWVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZShkZWx0YVRpbWUsIDAuMDI1KTtcblxuICAgIH1cblxuICBcblxuICAgIGFkZExpZmUoKXtcbiAgICAgICAgbGV0IGhlYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGhlYXJ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhcnRJY29uJyk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9saWZlLnBuZyc7XG5cbiAgICAgICAgbGV0IGhlYXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYXJ0Q29udGFpbmVyJyk7XG4gICAgICAgIGhlYXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpe1xuICAgICAgICBsZXQgbGl2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFydEljb24nKTtcbiAgICAgICAgbGl2ZXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaXZlc1swXSk7XG4gICAgICAgIGlmIChsaXZlcy5sZW5ndGggPT09IDApIHRoaXMuZ2FtZU92ZXIoKTtcblxuICAgICAgICB0aGlzLmxldmVsT2JqZWN0cyA9IHRoaXMucmVzdGFydDtcbiAgICAgICAgdGhpcy5zY2VuZU9iamVjdHMgPSB0aGlzLmxldmVsT2JqZWN0c1sxXTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuXG4gICAgICAgIHRoaXMuY3R4LnJlc2V0VHJhbnNmb3JtKCk7IFxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtKHRoaXMucGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLmdhbWVXaWR0aC8yKSwgLSh0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gdGhpcy5nYW1lSGVpZ2h0LzIpKTtcblxuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xvdWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3Vkc1trZXldLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxldmVsT2JqZWN0cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZXZlbE9iamVjdHNba2V5XS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QuZHJhdyh0aGlzLmN0eCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlNUQVJUKXtcbiAgICAgICAgICAgIHRoaXMubWVudS5zdGFydE1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7IFxuICAgICAgICAgICAgdGhpcy5tZW51LnNob3dNZW51KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpe1xuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDApJztcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyh0aGlzLmN0eCk7XG5cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxufVxuXG4iLCJjb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBtZW51KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCl7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnRVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5kZWNyZWFzZVZvbHVtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuaW5jcmVhc2VWb2x1bWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZXhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5HQU1FT1ZFUil7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyB1cCAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0VXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5lbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuU1RBUlQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnRVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vIG1lbnVcbmNvbnN0IG1lbnVBcnJvd0ltZyA9IG5ldyBJbWFnZSgpO1xubWVudUFycm93SW1nLnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9saWZlLnBuZyc7XG5cbmNvbnN0IGtleWJvYXJkTGVmdCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qga2V5Ym9hcmRSaWdodCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qga2V5Ym9hcmRVcCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qga2V5Ym9hcmREb3duID0gbmV3IEltYWdlKCk7XG5rZXlib2FyZExlZnQuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X2xlZnQucG5nJztcbmtleWJvYXJkTGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93SW1nSG9yaXpvbnRhbFwiKTtcbmtleWJvYXJkUmlnaHQuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X3JpZ2h0LnBuZyc7XG5rZXlib2FyZFJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdIb3Jpem9udGFsXCIpO1xua2V5Ym9hcmRVcC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvYXJyb3dfdXAucG5nJztcbmtleWJvYXJkVXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ1ZlcnRpY2FsXCIpO1xua2V5Ym9hcmREb3duLnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd19kb3duLnBuZyc7XG5rZXlib2FyZERvd24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ1ZlcnRpY2FsXCIpO1xuXG5leHBvcnQgY29uc3QgYXJyb3dzID0gW2tleWJvYXJkTGVmdCwga2V5Ym9hcmRSaWdodCwga2V5Ym9hcmRVcCwga2V5Ym9hcmREb3duXTtcbmV4cG9ydCBjb25zdCBtZW51QXJyb3cgPSBbbWVudUFycm93SW1nXTtcblxuLy8gc2NlbmVcbmNvbnN0IHBsYXRmb3JtTGVmdF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzEgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfMiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF8zID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzQgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfNSA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBjbG91ZF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF82ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGJ1c2hfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzYgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgZmxvd2VyXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGZsb3dlcl8yID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHRyZWVfMSA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBoaWxsXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF82ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzcgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfOCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF85ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzEwID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzExID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzEyID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzEzID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE0ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE1ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE2ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE3ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE4ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE5ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzIwID0gbmV3IEltYWdlKCk7XG5cblxucGxhdGZvcm1MZWZ0XzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMS5wbmcnO1xucGxhdGZvcm1NaWRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzEucG5nJztcbnBsYXRmb3JtUmlnaHRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMS5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8yLnBuZyc7XG5wbGF0Zm9ybU1pZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMi5wbmcnO1xucGxhdGZvcm1SaWdodF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8yLnBuZyc7XG5cbnBsYXRmb3JtTGVmdF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzMucG5nJztcbnBsYXRmb3JtTWlkXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV8zLnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzMucG5nJztcblxucGxhdGZvcm1MZWZ0XzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfNC5wbmcnO1xucGxhdGZvcm1NaWRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzQucG5nJztcbnBsYXRmb3JtUmlnaHRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfNC5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF81LnBuZyc7XG5wbGF0Zm9ybU1pZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfNS5wbmcnO1xucGxhdGZvcm1SaWdodF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF81LnBuZyc7XG5cbmNsb3VkXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF8xLnBuZyc7XG5jbG91ZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfMi5wbmcnO1xuY2xvdWRfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzMucG5nJztcbmNsb3VkXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF80LnBuZyc7XG5jbG91ZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfNi5wbmcnO1xuY2xvdWRfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzYucG5nJztcblxuYnVzaF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF8xLnBuZyc7XG5idXNoXzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzIucG5nJztcbmJ1c2hfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfMy5wbmcnO1xuYnVzaF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF80LnBuZyc7XG5idXNoXzUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzUucG5nJztcbmJ1c2hfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfNi5wbmcnO1xuXG5mbG93ZXJfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8xLnBuZyc7XG5mbG93ZXJfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8yLnBuZyc7XG5cbnRyZWVfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3RyZWVfMS5wbmcnO1xuXG5cbmhpbGxfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMS5wbmcnO1xuaGlsbF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yLnBuZyc7XG5oaWxsXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzMucG5nJztcbmhpbGxfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNC5wbmcnO1xuaGlsbF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF81LnBuZyc7XG5oaWxsXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzYucG5nJztcbmhpbGxfNy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNy5wbmcnO1xuaGlsbF84LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF84LnBuZyc7XG5oaWxsXzkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzkucG5nJztcbmhpbGxfMTAuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEwLnBuZyc7XG5oaWxsXzExLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMS5wbmcnO1xuaGlsbF8xMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTIucG5nJztcbmhpbGxfMTMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEzLnBuZyc7XG5oaWxsXzE0LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNC5wbmcnO1xuaGlsbF8xNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTUucG5nJztcbmhpbGxfMTYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE2LnBuZyc7XG5oaWxsXzE3LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNy5wbmcnO1xuaGlsbF8xOC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTgucG5nJztcbmhpbGxfMTkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE5LnBuZyc7XG5oaWxsXzIwLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yMC5wbmcnO1xuXG4vLyBpdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV9taWQgPSBbJycsIHBsYXRmb3JtTWlkXzEsIHBsYXRmb3JtTWlkXzIsIHBsYXRmb3JtTWlkXzMsIHBsYXRmb3JtTWlkXzQsIHBsYXRmb3JtTWlkXzVdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtX2xlZnQgPSBbJycsIHBsYXRmb3JtTGVmdF8xLCBwbGF0Zm9ybUxlZnRfMiwgcGxhdGZvcm1MZWZ0XzMsIHBsYXRmb3JtTGVmdF80LCBwbGF0Zm9ybUxlZnRfNV07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fcmlnaHQgPSBbJycsIHBsYXRmb3JtUmlnaHRfMSwgcGxhdGZvcm1SaWdodF8yLCBwbGF0Zm9ybVJpZ2h0XzMsIHBsYXRmb3JtUmlnaHRfNCwgcGxhdGZvcm1SaWdodF81XTtcblxuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzEgPSBbcGxhdGZvcm1MZWZ0XzEsIHBsYXRmb3JtTWlkXzEsIHBsYXRmb3JtUmlnaHRfMV07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fMiA9IFtwbGF0Zm9ybUxlZnRfMiwgcGxhdGZvcm1NaWRfMiwgcGxhdGZvcm1SaWdodF8yXTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV8zID0gW3BsYXRmb3JtTGVmdF8zLCBwbGF0Zm9ybU1pZF8zLCBwbGF0Zm9ybVJpZ2h0XzNdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzQgPSBbcGxhdGZvcm1MZWZ0XzQsIHBsYXRmb3JtTWlkXzQsIHBsYXRmb3JtUmlnaHRfNF07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fNSA9IFtwbGF0Zm9ybUxlZnRfNSwgcGxhdGZvcm1NaWRfNSwgcGxhdGZvcm1SaWdodF81XTtcbmV4cG9ydCBjb25zdCBidXNoZXMgPSBbYnVzaF8xLCBidXNoXzIsIGJ1c2hfMywgYnVzaF80LCBidXNoXzUsIGJ1c2hfNl07XG5leHBvcnQgY29uc3QgY2xvdWRzID0gW2Nsb3VkXzEsIGNsb3VkXzIsIGNsb3VkXzMsIGNsb3VkXzQsIGNsb3VkXzUsIGNsb3VkXzZdO1xuZXhwb3J0IGNvbnN0IGZsb3dlcnMgPSBbZmxvd2VyXzEucG5nLCBmbG93ZXJfMi5wbmddO1xuZXhwb3J0IGNvbnN0IHRyZWVzID0gW3RyZWVfMV07XG4vL2Nsb3NlXG5leHBvcnQgY29uc3QgaGlsbHNfMSA9IFtoaWxsXzMsIGhpbGxfNCwgaGlsbF8xMywgaGlsbF8xNCwgaGlsbF8xNSwgaGlsbF8xNiwgaGlsbF8xN107XG5leHBvcnQgY29uc3QgaGlsbHNfMiA9IFtoaWxsXzEsIGhpbGxfMiwgaGlsbF84LCBoaWxsXzksIGhpbGxfMTAsIGhpbGxfMTEsIGhpbGxfMTJdO1xuZXhwb3J0IGNvbnN0IGhpbGxzXzMgPSBbaGlsbF81LCBoaWxsXzIwXTtcbmV4cG9ydCBjb25zdCBoaWxsc180ID0gW2hpbGxfNiwgaGlsbF83LCBoaWxsXzE4LCBoaWxsXzE5XTtcblxuZXhwb3J0IGNvbnN0IGhpbGxzID0gW2hpbGxfMSwgaGlsbF8yLCBoaWxsXzMsIGhpbGxfNCwgaGlsbF81LCBoaWxsXzYsIGhpbGxfNywgaGlsbF84LCBoaWxsXzksIGhpbGxfMTAsIGhpbGxfMTEsIGhpbGxfMTIsIGhpbGxfMTMsIGhpbGxfMTQsIGhpbGxfMTUsIGhpbGxfMTYsIGhpbGxfMTcsIGhpbGxfMTgsIGhpbGxfMTksIGhpbGxfMjBdO1xuXG5cbmNvbnN0IGNvaW5zID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTk7IGkrKykge1xuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGAuL3NyYy9pbWFnZXMvaXRlbXMvY29pbi9jb2luXyR7aX0ucG5nYDtcbiAgICBjb2lucy5wdXNoKGltYWdlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvaW4gPSBjb2luczsiLCJpbXBvcnQge0NBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgQ09OVFJPTF9DQU5WQVNfSEVJR0hULCBDT05UUk9MX0NBTlZBU19XSURUSH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBUdXRvcmlhbCBmcm9tICcuL21lbnUvdHV0b3JpYWwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgbGV0IHR1dG9yaWFsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xDYW52YXMnKTtcbiAgICB0dXRvcmlhbENhbnZhcy5oZWlnaHQgPSBDT05UUk9MX0NBTlZBU19IRUlHSFQ7XG4gICAgdHV0b3JpYWxDYW52YXMud2lkdGggPSBDT05UUk9MX0NBTlZBU19XSURUSDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICBjYW52YXMud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjb250cm9sY3R4ID0gdHV0b3JpYWxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRILCBjdHgpO1xuICAgIGxldCB0dXRvcmlhbCA9IG5ldyBUdXRvcmlhbChDT05UUk9MX0NBTlZBU19IRUlHSFQsQ09OVFJPTF9DQU5WQVNfV0lEVEgsY29udHJvbGN0eCwgZ2FtZSk7XG4gICAgZ2FtZS5zdGFydCgpO1xuICAgIHR1dG9yaWFsLnN0YXJ0KCk7XG4gICAgXG4gICAgXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuLy8gaW1hZ2VzXG5cbiAgICBmdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgLy8gbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxDQU5WQVNfV0lEVEgsQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIGNvbnRyb2xjdHguY2xlYXJSZWN0KDAsMCxDT05UUk9MX0NBTlZBU19XSURUSCxDT05UUk9MX0NBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgIHR1dG9yaWFsLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICB0dXRvcmlhbC5kcmF3KGNvbnRyb2xjdHgpO1xuXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGdhbWUuZHJhdyhjdHgpO1xuICAgICAgICAvLyBnYW1lLmRyYXcoY29udHJvbGN0eCk7XG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5cbn0pO1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuXFxuXFxuXFx0ICAgICAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eFhcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHhYXFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0IFxcdFxcdCAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBcXHRcXHRjY2NcXHRcXHRcXHRUICAgdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRcXHRcXHRcXHRcXHRcXHRcXHR0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFx0XFx0eHh4eHh4eFhcXG5cXHRcXHRcXHRcXHRcXHQgdFxcblxcdFxcdFxcdFxcdFxcdHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQgICAgICBcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFxuXFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgIFxcdCB4eHh4eHh4WFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRUICB0XFx0XFx0R1xcdFxcdFxcdFxcdFxcdFxcdFxcbnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXHRcXG5tbW1tICBcXHRcXHRtbW1tIFxcdFxcdG0gXFx0IG0gIFxcdCAgIG0gICBcXHQgXFx0XFx0XFx0bSBcXHRcXHRtbW0gbW0gIFxcdG0gXFx0XFx0XFx0bW1cXHRcXHRcXHRtbW1tbVxcdFxcblxcblxcblxcdFxcdFwiIiwiaW1wb3J0IHsgYXJyb3dzIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcbiAgICAgICAgdGhpcy5vcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVPcHRpb25zJyk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5vcHRpb25zTGlzdC5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25NZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25NZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMub3B0aW9uTGVuZ3RoID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ29Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ29NZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuZ29DdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ29NZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLmdvTGVuZ3RoID0gdGhpcy5nb09wdGlvbnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0TWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0T3B0aW9ucycpO1xuICAgICAgICB0aGlzLnN0YXJ0TGVuZ3RoID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm1lbnVIYXNoID0ge1xuICAgICAgICAgICAgMDogJ21haW4nLFxuICAgICAgICAgICAgMTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgMjogJ2NvbnRyb2wnLFxuICAgICAgICAgICAgMzogJ2dhbWVvdmVyJyxcbiAgICAgICAgICAgIDQ6ICdzdGFydCcsXG4gICAgICAgICAgICA1OiAnaW50cm8nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWVudVR5cGUgPSB0aGlzLm1lbnVIYXNoWzBdO1xuICAgIH1cblxuICAgIHNoaWZ0RG93bigpe1xuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2ludGVyQXJyb3cnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L21lbnVDdXJzb3IucG5nJztcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGhpcy5tZW51VHlwZSl7ICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ICU9IHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudCAlIHRoaXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMV06XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkN1cnJlbnQgPj0gdGhpcy5vcHRpb25MZW5ndGgpIHRoaXMub3B0aW9uQ3VycmVudCAlPSB0aGlzLm9wdGlvbkxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudCAlIHRoaXMub3B0aW9uTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyc1t0aGlzLm9wdGlvbkN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzNdOlxuICAgICAgICAgICAgICAgIGxldCBnb0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBnb0Fycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29BcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0N1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nb0N1cnJlbnQgPj0gdGhpcy5nb0xlbmd0aCkgdGhpcy5nb0N1cnJlbnQgJT0gdGhpcy5nb0xlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQgPSB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnQgJSB0aGlzLmdvTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Db250YWluZXJzW3RoaXMuZ29DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFs0XTpcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgc3RhcnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0YXJ0QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRDdXJyZW50ID49IHRoaXMuc3RhcnRMZW5ndGgpIHRoaXMuc3RhcnRDdXJyZW50ICU9IHRoaXMuc3RhcnRMZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50ICUgdGhpcy5zdGFydExlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyc1t0aGlzLnN0YXJ0Q3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hpZnRVcCgpe1xuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2ludGVyQXJyb3cnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L21lbnVDdXJzb3IucG5nJztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMubWVudVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50ICUgdGhpcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFsxXTpcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25DdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uQ3VycmVudCA8IDApIHRoaXMub3B0aW9uQ3VycmVudCA9IHRoaXMub3B0aW9uTGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnQgJSB0aGlzLm9wdGlvbkxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnNbdGhpcy5vcHRpb25DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFszXTpcbiAgICAgICAgICAgICAgICBsZXQgZ29BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgZ29BcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvQXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29DdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29DdXJyZW50IDwgMCkgdGhpcy5nb0N1cnJlbnQgPSB0aGlzLmdvTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQgPSB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnQgJSB0aGlzLmdvTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ29udGFpbmVyc1t0aGlzLmdvQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbNF06XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGFydEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0Q3VycmVudCA8IDApIHRoaXMuc3RhcnRDdXJyZW50ID0gdGhpcy5zdGFydExlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50ICUgdGhpcy5zdGFydExlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyc1t0aGlzLnN0YXJ0Q3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU1lbnVUeXBlKHgpe1xuICAgICAgICB0aGlzLm1lbnVUeXBlID0gdGhpcy5tZW51SGFzaFt4XTtcbiAgICB9XG5cbiAgICBlbnRlcigpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFswXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCl7XG4gICAgICAgICAgICAgICAgLy8gcmVzdW1lXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGdhbWVcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uQ3VycmVudCl7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMl0pe1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbM10pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdvQ3VycmVudCl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbNF0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXJ0Q3VycmVudCl7XG4gICAgICAgICAgICAgICAgLy8gb25lIHBsYXllciBnYW1lXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGV4aXRcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgbGV0IGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0NvbnRhaW5lcicpO1xuICAgICAgICBlbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMyk7XG4gICAgfVxuXG4gICAgc3RhcnRNZW51KCl7XG4gICAgICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydENvbnRhaW5lcicpO1xuICAgICAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSg0KTtcbiAgICB9XG5cbiAgICBzaG93TWVudSgpe1xuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgXG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICBcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29udHJvbHMoKXtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICB0b2dnbGVPcHRpb25zKCl7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgc3Bhd24oKXtcbiAgICB9XG5cbiAgICBkZWNyZWFzZVZvbHVtZSgpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSkge1xuICAgICAgICAgICAgbGV0IHZvbHVtZSA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbkN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZnhSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpY1JhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgaW5jcmVhc2VWb2x1bWUoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pIHtcbiAgICAgICAgICAgIGxldCB2b2x1bWUgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4UmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSArIDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpICsgMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMF0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNYXAoKXt9XG5cbiAgICBleGl0KCl7XG4gICAgICAgIHRoaXMuZ2FtZS5wYXVzZSgpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIGxldCBrZXlib2FyZCA9ICdRV0VSVFlVSU9QQVNERkdISktMWlhDVkJOTSc7XG4gICAgICAgIGxldCBudW1zID0gJzEyMzQ1Njc4OTAnO1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGxldHRlciA9IDA7XG4gICAgICAgIGxldCBrZXlBcnJheSA9IFtcbiAgICAgICAgICAgIFs0LCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCA0LCAxMl0sXG4gICAgICAgICAgICBbNSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNSwgNV0sXG4gICAgICAgICAgICBbMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgNSwgMF0sXG4gICAgICAgICAgICBbOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNSwgNSwgNV0sXG4gICAgICAgICAgICBbNiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgNl0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgNywgMCwgMCwgOSwgMTAsIDExXVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGtleUFycmF5Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJvdyR7cm93fWApO1xuICAgICAgICAgICAga2V5QXJyYXlbcm93XS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGtleSR7bnVtc1tudW1iZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7bnVtc1tudW1iZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlOdW1iZXJDb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vZGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0bm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBga2V5JHtrZXlib2FyZFtsZXR0ZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlcm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2tleWJvYXJkW2xldHRlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5TGV0dGVyQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcm5vZGUuYXBwZW5kQ2hpbGQobGV0dGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxldHRlcm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3cga2V5c1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG93bkFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVwQXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb3duQXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5hcHBlbmRDaGlsZChhcnJvd3NbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0QXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaWdodGJsYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmlnaHRibGFuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJsYW5rIGtleXNcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVhcnRlcktleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhhbGZLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2ZXJ0aWNhbEhhbGZLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaGlmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmFja3NwYWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXJzL3BsYXllcic7XG5pbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gJy4uL3BsYXllcnMvcGxheWVySW5wdXQnO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IHt0cmVlcywgYnVzaGVzfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsIHtcbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBjb250cm9sY3R4LCBnYW1lKXtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4ID0gY29udHJvbGN0eDtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0ge1xuICAgICAgICAgICAgMTogbmV3IFBsYXRmb3JtQnVpbGRlcigyNSwgNTAsIDk1LCAwLjUpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY2VuZU9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuICAgICAgICBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcblxuXG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSl7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZShkZWx0YVRpbWUsIDAuMDU1KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXt9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5maWxsU3R5bGU9ICdyZWQnO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBsYXRmb3JtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS5kcmF3KHRoaXMudHV0b3JpYWxjdHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UodHJlZXNbMF0sIDQyMCwgLTUsIDQwLCAxMDApO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZSh0cmVlc1swXSwgNDYyLjUsIDIwLCAzMCwgNzUpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZShidXNoZXNbM10sIDE2NSwgNzUsIDcwLCAyMCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKGJ1c2hlc1sxXSwgMzg1LCA3NSwgNjUsIDIwKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UoYnVzaGVzWzJdLCA0NzUsIDc1LCA4NSwgMjApO1xuXG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDAsMCknO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMudHV0b3JpYWxjdHgpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgUExBWUVSLCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZXRlY3RDb2xsaXNpb259IGZyb20gJy4uL3V0aWwvY29sbGlzaW9uJztcblxuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gUExBWUVSO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBMQVlFUjtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICAvLyB0aGlzLmxldmVsID0gbGV2ZWxEYXRhO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUuZ2FtZVdpZHRoICAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LzIgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSBHUkFWSVRZO1xuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgPSAwO1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoZGVsdGFUaW1lLCB4KXtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ICo9IDAuOSAqIChkZWx0YVRpbWUgKiB4KTtcbiAgICAgICAgdGhpcy55X3ZlbG9jaXR5ICs9IDAuOTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueF92ZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMueV92ZWxvY2l0eTtcbiAgICB9XG5cbiAgICBnZXRPZmZzZXRfeCgpe1xuICAgICAgICByZXR1cm4gdGhpcy54X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIGdldE9mZnNldF95KGp1bXApe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyBqdW1wO1xuICAgIH1cblxuICAgIHNob290KCkge1xuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSwgeCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZlKGRlbHRhVGltZSwgeCk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcblxuICAgICAgICAvL2FkanVzdCBjYW1lcmEgb2Zmc2V0XG5cblxuICAgICAgICAvL2NoZWNrIGNvbGxpc2lvbnMgdyBmbG9vciBcbiAgICAgICAgLy8gaWYodGhpcy5wb3NpdGlvbi55IDwgMCkgdGhpcy5wb3NpdGlvbi55ID0gMDtcbiAgICAgICAgLy8gaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiB0aGlzLmdhbWUuZ2FtZUhlaWdodCkgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiB0aGlzLmdhbWUuZ2FtZUhlaWdodCsxMDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAvIDI7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9zZUxpZmUoKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBjaGVjayBjb2xsaXNpb25zIHdpdGggcGxhdGZvcm1zXG5cbiAgICAgICAgdGhpcy5nYW1lLnNjZW5lT2JqZWN0cy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgICAgICAgIGlmIChkZXRlY3RDb2xsaXNpb24odGhpcywgcGxhdGZvcm0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybS5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBpdGVtKSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29pbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nYW1lLml0ZW1zW2l0ZW0ua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2FtZS5wbGF0Zm9ybXMpLmZvckVhY2ggKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhdGZvcm0gPSB0aGlzLmdhbWUucGxhdGZvcm1zW2tleV07XG4gICAgICAgICAgICBpZiAoZGV0ZWN0Q29sbGlzaW9uKHRoaXMsIHBsYXRmb3JtKSl7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybS5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIC8vIH1cbiAgICB9XG59XG5cbiIsImltcG9ydCB7U1BFRUQsIEpVTVB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGdhbWUpe1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgLy8gfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bkFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY2FuSnVtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cEFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnlfdmVsb2NpdHkgPSAtSlVNUDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbkp1bXAgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5oaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldE9mZnNldF95KC1KVU1QKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdEFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IC1TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEFycm93XCIpLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IFNQRUVEO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bkFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0QXJyb3dcIikuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgY29udHJvbGxlciAoZSl7XG4gICAgICAgIHZhciBrZXlfc3RhdGUgPSAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUlVOTklORyl7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsb29wICgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnVwICYmIHRoaXMucGxheWVyLmNhbkp1bXAgKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAtU1BFRUQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zaXRpb24ueSA+PSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAtIHRoaXMucGxheWVyLmhlaWdodCB8fCB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID09IDApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmNvbnRyb2xsZXIpO1xuICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgU3RhdGljT2JqZWN0IGZyb20gJy4vc3RhdGljT2JqZWN0JztcbmltcG9ydCB7IGJ1c2hlcyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICcuLi91dGlsL3V0aWwnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVzaCBleHRlbmRzIFN0YXRpY09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeCx5LCBudW1iZXIpe1xuICAgICAgICBzdXBlcih4LHkpO1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGJ1c2hlc1t0aGlzLm51bWJlcl07XG4gICAgICAgIHRoaXMubXVsdGlwbGllciA9IDIuNTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHkgLSB0aGlzLmhlaWdodC8yXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5udW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwMiAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzU5IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNzUgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIzOCAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDk2IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAzODUgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA4MCAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjk3IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTEzIC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyOTAgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA3NCAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjA4IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IHsgQ0FOVkFTX1dJRFRILCBKVU1QX0hFSUdIVCwgU1BFRUQsIENBTlZBU19IRUlHSFQsIEdSQVZJVFkgfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjbG91ZHMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwga2V5LCBwb3NpdGlvbl94KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm51bWJlciA9IHRoaXMucmFuZG9tSW50KDAsIDUpO1xuICAgICAgICB0aGlzLmltYWdlID0gY2xvdWRzW3RoaXMubnVtYmVyXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25feCB8fCAodGhpcy5nYW1lLmdhbWVXaWR0aCArIHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyKSAqIChNYXRoLnJhbmRvbSgwLCAxKSksXG4gICAgICAgICAgICB5OiAodGhpcy5nYW1lLmdhbWVIZWlnaHQgKyB0aGlzLmdhbWUuZ2FtZUhlaWdodC8yKSAvIHRoaXMucmFuZG9tSW50KDAuNSwxMClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgPSAtTWF0aC5yYW5kb20oMSwyKTtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICByZXNwYXduKCl7XG4gICAgICAgICh0aGlzLmdhbWUuZ2FtZVdpZHRoICsgdGhpcy5nYW1lLmdhbWVXaWR0aCAvIDIpICogTWF0aC5yYW5kb20oMCwgMSk7XG4gICAgfVxuXG4gICAgcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5nYW1lLmRlbGV0ZUVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMua2V5KTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLnJhbmRvbUludCgyLDQpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMubnVtYmVyKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDI1Mi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4MTYvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDYwL211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDQ2NS9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTYyL211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDcwMi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTg0L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDY5OC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTc2L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDg1OC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMjk0L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDg5MS9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlKCk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoICsgdGhpcy5nYW1lLmdhbWVXaWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZS5nYW1lV2lkdGgpIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFN0YXRpY09iamVjdCBmcm9tICcuL3N0YXRpY09iamVjdCc7XG5pbXBvcnQgeyBjb2luIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbiBleHRlbmRzIFN0YXRpY09iamVjdCB7XG4gICAgY29uc3RydWN0b3IgKHgsIHksIGtleSkge1xuICAgICAgICBzdXBlcih4LHkpO1xuICAgICAgICB0aGlzLndpZHRoID0gMjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBjb2luO1xuICAgICAgICB0aGlzLmN5Y2xlID0gMDtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvaW4nO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodC8yXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgZHJhdyhjdHgpe1xuICAgICAgICB0aGlzLmN5Y2xlICs9IDAuNTtcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPiB0aGlzLmltYWdlLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2VbTWF0aC5mbG9vcih0aGlzLmN5Y2xlKV0sIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBoaWxscyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5pbXBvcnQgU3RhdGljT2JqZWN0IGZyb20gJy4vc3RhdGljT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91bnRhaW4gZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgseSl7XG4gICAgICAgIHN1cGVyKHgseSk7XG4gICAgICAgIHRoaXMubnVtYmVyID0gMTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGhpbGxzW3RoaXMubnVtYmVyXTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDAwO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuXG59IiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgUGxhdGZvcm1MZWZ0IGZyb20gJy4vcGxhdGZvcm1fbGVmdCc7XG5pbXBvcnQgUGxhdGZvcm1SaWdodCBmcm9tICcuL3BsYXRmb3JtX3JpZ2h0JztcbmltcG9ydCB7QkxPQ0tTSVpFLCBDQU5WQVNfSEVJR0hUfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKG51bUJsb2NrcywgeCwgeSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRSAqIChudW1CbG9ja3MrMik7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLnBpZWNlcyA9IFtdO1xuICAgICAgICB0aGlzLm51bUJsb2NrcyA9IG51bUJsb2NrcztcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ID0geDtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV95ID0geTtcbiAgICAgICAgdGhpcy54X2ZpbGxlciA9IHg7XG4gICAgICAgIHRoaXMueV9maWxsZXIgPSB5ICsgQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmZpbGxlckNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29sb3IgPSBNYXRoLmNlaWwodGhpcy5maWxsZXJDb2xvcik7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpe1xuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybUxlZnQodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3ksIHRoaXMuY29sb3IpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubnVtQmxvY2tzOyBpID4gMDsgaS0tKXtcbiAgICAgICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtUGllY2UodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3ksIHRoaXMuY29sb3IpKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1feCArPSBCTE9DS1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1SaWdodCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuXG4gICAgfVxuXG5cbiAgICBtb3ZlKHBsYXllcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSBwbGF5ZXIuZ2V0T2Zmc2V0X3koKTtcblxuICAgICAgICB0aGlzLnhfZmlsbGVyIC09IHBsYXllci5nZXRPZmZzZXRfeCgpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3ggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuXG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UudXBkYXRlKHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKE1hdGguZmxvb3IodGhpcy5maWxsZXJDb2xvcikpe1xuICAgICAgICAgICAgY2FzZSAwOiBcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoOTAsNDksMzMpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTE1LDcyLDQ1KSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDEyMCw4Miw1MCknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMjMsOTIsNTcpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTM4LDEyMCw2OSknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDQ5LDI1KSc7XG4gICAgICAgIH1cblxuICAgICAgICBjdHgucmVjdCh0aGlzLnhfZmlsbGVyLCB0aGlzLnlfZmlsbGVyLCB0aGlzLnBsYXRmb3JtX3gtdGhpcy54X2ZpbGxlcitCTE9DS1NJWkUsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBQbGF0Zm9ybVBpZWNlIGZyb20gJy4vcGxhdGZvcm1fcGllY2UnO1xuaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7cGxhdGZvcm1fbGVmdH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1MZWZ0IGV4dGVuZHMgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY29sb3IpIHtcbiAgICAgICAgc3VwZXIoeCx5LCBjb2xvcik7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV9sZWZ0W2NvbG9yXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHBsYXRmb3JtX21pZCB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmltYWdlID0gcGxhdGZvcm1fbWlkW2NvbG9yXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHBsYXllci5nZXRPZmZzZXRfeSgpO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5O1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwbGF0Zm9ybV9yaWdodCB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtTGVmdCBleHRlbmRzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHN1cGVyKHgseSwgY29sb3IpO1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtX3JpZ2h0W2NvbG9yXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgbW92ZShwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHBsYXllci5nZXRPZmZzZXRfeCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcikge1xuICAgICAgICB0aGlzLm1vdmUocGxheWVyKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IHRyZWVzIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcbmltcG9ydCBTdGF0aWNPYmplY3QgZnJvbSAnLi9zdGF0aWNPYmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIGV4dGVuZHMgU3RhdGljT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplKSB7XG4gICAgICAgIHN1cGVyKHgseSk7XG4gICAgICAgIHRoaXMud2lkdGggPSA1MCAqIHNpemU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTEwICogc2l6ZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRyZWVzWzBdO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRlY3RDb2xsaXNpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBsZXQgb2JqTGVmdCA9IG9iai54O1xuICAgIGxldCBvYmpSaWdodCA9IG9iai54ICsgb2JqLndpZHRoO1xuICAgIGxldCBvYmpUb3AgPSBvYmoucG9zaXRpb24ueTtcbiAgICBsZXQgb2JqQm90dG9tID0gb2JqLnBvc2l0aW9uLnkgKyBvYmouaGVpZ2h0O1xuXG4gICAgbGV0IHRhcmdldExlZnQgPSB0YXJnZXQucG9zaXRpb24ueDtcbiAgICBsZXQgdGFyZ2V0UmlnaHQgPSB0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aDtcbiAgICBsZXQgdGFyZ2V0VG9wID0gdGFyZ2V0LnBvc2l0aW9uLnk7XG4gICAgbGV0IHRhcmdldEJvdHRvbSA9IHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodDtcblxuICAgIGlmIChcbiAgICAgICAgb2JqQm90dG9tID49IHRhcmdldFRvcCAmJlxuICAgICAgICBvYmpUb3AgPD0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIC8vIG9iakJvdHRvbSA8PSB0YXJnZXRUb3AgJiZcbiAgICAgICAgLy8gb2JqVG9wID49IHRhcmdldEJvdHRvbSAmJlxuICAgICAgICBvYmoucG9zaXRpb24ueCA+PSB0YXJnZXRMZWZ0ICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ICsgb2JqLndpZHRoIDw9IHRhcmdldFJpZ2h0XG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IGxldmVsMDEgZnJvbSAnLi4vbGV2ZWxzL2xldmVsXzEudHh0JztcbmltcG9ydCB7IEhFSUdIVFNQQU4sIFdJRFRIU1BBTiwgVFJFRUhFSUdIVCwgVFJFRVdJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL3NjZW5lL3RyZWUnO1xuaW1wb3J0IE1vdW50YWluIGZyb20gJy4uL3NjZW5lL21vdW50YWluJztcbmltcG9ydCBDb2luIGZyb20gJy4uL3NjZW5lL2NvaW4nO1xuaW1wb3J0IEJ1c2ggZnJvbSAnLi4vc2NlbmUvYnVzaCc7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgbGV2ZWxzID0ge1xuICAgIDE6IGxldmVsMDFcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZUxldmVsID0gbGV2ZWxEYXRhID0+IHtcbiAgICBsZXQgbGV2ZWwgPSBsZXZlbERhdGEuc3BsaXQoXCJcIik7XG4gICAgbGV0IGhlaWdodCA9IDA7XG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgYmxvY2tDb3VudCA9IDA7XG4gICAgbGV0IGl0ZW1Db3VudCA9IDA7XG5cbiAgICBsZXQgYmFja2dyb3VuZCA9IFtdO1xuICAgIGxldCBzY2VuZU9iamVjdHMgPSBbXTtcbiAgICBsZXQgZGVjbyA9IFtdO1xuICAgIGxldCBlbmVtaWVzID0gW107XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc3dpdGNoIChsZXZlbFtpXSl7XG4gICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgIGhlaWdodCArPSBIRUlHSFRTUEFOO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOKjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOiBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLnB1c2gobmV3IE1vdW50YWluKHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1Db3VudF0gPSAobmV3IENvaW4od2lkdGgsIGhlaWdodCAtIEhFSUdIVFNQQU4sIGl0ZW1Db3VudCkpO1xuICAgICAgICAgICAgICAgIGl0ZW1Db3VudCArPSAxO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIGRlY28ucHVzaChuZXcgVHJlZSh3aWR0aCwgaGVpZ2h0ICsgSEVJR0hUU1BBTiwgMS41KSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBUcmVlKHdpZHRoLCBoZWlnaHQgKyBIRUlHSFRTUEFOLCAxKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBCdXNoKHdpZHRoLCBoZWlnaHQsIHJhbmRvbUludCgwLDUpKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoICs9IEJMT0NLU0laRTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgICAgIGJsb2NrQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgZGVwdGggPSA1O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMCAmJiBoZWlnaHQgPCAxMDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAxMDAgJiYgaGVpZ2h0IDwgMjAwKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMjAwICYmIGhlaWdodCA8IDMwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoaGVpZ2h0ID49IDMwMCAmJiBoZWlnaHQgPCA0MDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgaGVpZ2h0ID49IDQwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY2VuZU9iamVjdHMucHVzaChuZXcgUGxhdGZvcm1CdWlsZGVyKGJsb2NrQ291bnQsIHdpZHRoLCBoZWlnaHQsIGRlcHRoKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOKmJsb2NrQ291bnQ7XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIDA6IGJhY2tncm91bmQsXG4gICAgICAgIDE6IHNjZW5lT2JqZWN0cyxcbiAgICAgICAgMjogZGVjbyxcbiAgICAgICAgMzogaXRlbXMsXG4gICAgICAgIDQ6IGVuZW1pZXNcbiAgICB9O1xuXG59OyIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ==