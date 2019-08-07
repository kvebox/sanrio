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
/*! exports provided: CONTROL_CANVAS_HEIGHT, CONTROL_CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH, LEVEL_HEIGHT, LEVEL_WIDTH, HEIGHTSPAN, WIDTHSPAN, DIRECTIONS, JUMP, SPEED, PLAYER, GRAVITY, BLOCKSIZE */
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
const WIDTHSPAN = 40;

const DIRECTIONS = {
    LEFT: (-1, 0),
    RIGHT: (1, 0),
    UP: (0, 1),
};

const JUMP = 12;
const SPEED = 5;

const PLAYER = 15;

const GRAVITY = 0.5;
const BLOCKSIZE = 15;

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
        // this.levelObjects = parseLevel(levels[1]);
        // this.sceneObjects = this.levelObjects[1];
        // this.gameState = GAMESTATE.RUNNING;
        this.newGame();
        // this.player = new Player(this);

        for (let i = 0; i < 5; i++){
            this.addElement('clouds', this.cloudCount);
        }
        this.handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
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

        this.levelObjects = Object(_util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__["parseLevel"])(_util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__["levels"][1]);
        this.sceneObjects = this.levelObjects[1];

        let lives = document.getElementsByClassName('heartIcon');
        while (lives.length < 4){
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
        
        Object.keys(this.clouds).forEach(key => {
            this.clouds[key].update();
        });

        this.sceneObjects.forEach(x => x.update(this.player));

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
        this.ctx.save();
        this.ctx.translate(-(this.player.position.x - this.gameWidth/2), -(this.player.position.y - this.gameHeight/2));
        // this.ctx.translate(this.player.position.x - this.gameWidth/2, -this.player.position.y - this.gameHeight/2);
        // this.ctx.scale(2,2);
        // this.ctx.translate(this.gameWidth, this.gameHeight);
        // this.ctx.restore();
        // this.ctx.scale(.5,.5);

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
/*! exports provided: arrows, menuArrow, platform_mid, platform_left, platform_right, platform_1, platform_2, platform_3, platform_4, platform_5, bushes, clouds, flowers, trees, hills_1, hills_2, hills_3, hills_4 */
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

/***/ "./src/levels/level_1.txt":
/*!********************************!*\
  !*** ./src/levels/level_1.txt ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\t\t\t\t\t\t\t\t      \t\t\tG\n\t\t\t\t\t\t\t\t\t\t\txxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxx\n\n\n\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxX\t\n\t\t\t\t\t\t\txxxxxxxxX\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxX\n\t\t\t\t\t \t\t  \t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxX\t   \t\t\t\t\t\t\t\t\t\t\t\t    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\t\t\t\t\t\t\t\t\t\t    \t \t\t\t\t\t p\n\t\t\t\txxxxxxX\t\t\t\t\t\t\t\t\t      xxxxxxxxxX\txxxxxX\t\n\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t     xxxxxxxX\n xxxxxxxxxxxxxxxxxX\t\n\n\t\t\t\t\t\t\t\tp\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\n\n\n\n\n\t\t");

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

        this.platforms = {
            1: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](25, 50, 95, 1)
        };

        this.sceneObjects = [];
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

        this.position = {
            x: this.game.gameWidth/4  - this.width/2,
            y: this.game.gameHeight  
        };
        this.canJump = false;
        this.y_velocity = _constants__WEBPACK_IMPORTED_MODULE_0__["GRAVITY"];
        this.x_velocity = 0;
        this.hit = false;
    }

    move(){
        // console.log(this.position);
        // console.log(this.position)
        this.x_velocity *= 0.9;
        // if (this.y_velocity < 0) {this.y_velocity += 15 }
        // console.log(this.y_velocity);
        // if (this.y_velocity != 0){
        this.y_velocity += 0.9;
        // }
        this.position.x += this.x_velocity;
        this.position.y += this.y_velocity ;
        
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

    update() {
        
        this.move();

        //check collisions with wall
        
        if (this.position.x < 0) this.position.x = 0;

        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;

        //adjust camera offset


        //check collisions w floor 
        if(this.position.y < 0) this.position.y = 0;
        // if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;
        
        if (this.position.y + this.height > this.game.gameHeight) {
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
    constructor(game, key) {
        this.width = 0;
        this.height = 0;
        this.game = game;
        this.key = key;
        this.number = this.randomInt(0, 5);
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["clouds"][this.number];

        this.position = {
            x: this.game.gameWidth,
            y: this.game.gameHeight/ this.randomInt(0.5,10)
        };

        this.x_velocity = -Math.random(1,2);
        this.create();
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

        if (this.position.x + this.width < 0) {
            this.destroy();
        }
        // if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;
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
        this.color = color;
        // this.filler = filler;

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
        // ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+BLOCKSIZE, CANVAS_HEIGHT);
        // ctx.fillStyle = 'rgba(110,49,25)';
        // ctx.fill();
        
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
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
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

/***/ "./src/scene/tree.js":
/*!***************************!*\
  !*** ./src/scene/tree.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tree; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ "./src/constants.js");
/* harmony import */ var _imgLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgLoader */ "./src/imgLoader.js");



class Tree {
    constructor(x, y) {
        this.width = 50;
        this.height = 110;
        this.image = _imgLoader__WEBPACK_IMPORTED_MODULE_1__["trees"][0];

        this.position = {
            x: x,
            y: y - this.height/2
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
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





const levels = {
    1: _levels_level_1_txt__WEBPACK_IMPORTED_MODULE_0__["default"]
};

const parseLevel = levelData => {
    let level = levelData.split("");
    let height = 0;
    let width = 0;
    let blockCount = 0;

    let sceneObjects = [];
    let deco = [];
    let enemies = [];

    for (let i = 0; i < level.length; i++){
        switch (level[i]){
            case '\n':
                height += _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"];
                width = 0;
                break;
            case '\t':
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                break;
            case 'G':
                deco.push(new _scene_tree__WEBPACK_IMPORTED_MODULE_3__["default"](width, height-_constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"]*2));
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
                        depth = 1;
                        break;
                    case (height >= 100 && height < 200):
                        depth = 2;
                        break;
                    case (height >= 200 && height < 300):
                        depth = 3;
                        break;
                    case (height >= 300 && height < 400):
                        depth = 4;
                        break;
                    case height >= 400:
                        depth = 5;
                        break;
                }
                sceneObjects.push(new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](blockCount, width, height, depth));
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                blockCount = 0;
                break;
            default:
        }
    }
    
    return {
        1: sceneObjects,
        // 2: deco
    };

};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWxzL2xldmVsXzEudHh0Iiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvdHV0b3JpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9jbG91ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1CdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9sZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9waWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fcmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2x2bExvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBOztBQUVBOztBQUVBO0FBQ0EscUI7Ozs7Ozs7Ozs7OztBQ3hCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNJO0FBQ2Y7QUFDZ0I7QUFDdkI7QUFDTTtBQUNIO0FBQ29COztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSx1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG9EQUFLO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrREFBSTtBQUM1QjtBQUNBLFlBQVksNERBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBLDBCQUEwQiw0REFBWTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGtFQUFVLENBQUMsc0RBQU07QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBTTtBQUNoQywwQkFBMEIsNERBQVk7QUFDdEM7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0Esa0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsaUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSlA7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDM0U7QUFDYTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFxQjtBQUNqRCwyQkFBMkIsK0RBQW9CO0FBQy9DLG9CQUFvQix3REFBYTtBQUNqQyxtQkFBbUIsdURBQVk7QUFDL0I7QUFDQTs7QUFFQSxtQkFBbUIsNkNBQUksQ0FBQyx3REFBYSxFQUFFLHVEQUFZO0FBQ25ELHVCQUF1QixzREFBUSxDQUFDLGdFQUFxQixDQUFDLCtEQUFvQjtBQUMxRTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsdURBQVksQ0FBQyx3REFBYTtBQUNwRCxpQ0FBaUMsK0RBQW9CLENBQUMsZ0VBQXFCOztBQUUzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQWUsa3pCOzs7Ozs7Ozs7Ozs7QUNBZjtBQUFBO0FBQUE7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsNEM7QUFDQSwyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsdUJBQXVCO0FBQ2hELHFEQUFxRCxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsYUFBYTtBQUN0RTtBQUNBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFO0FBQ0EsdUVBQXVFLGlCQUFpQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGlEQUFNO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpREFBTTtBQUNsRDtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGlEQUFNO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGlEQUFNO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6ZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1c7QUFDSztBQUNaOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsOERBQWU7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix1REFBTTtBQUNoQyxrQ0FBa0MsNERBQVk7QUFDOUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQ0FBbUMsZ0RBQUs7QUFDeEMsbUNBQW1DLGdEQUFLO0FBQ3hDLG1DQUFtQyxpREFBTTtBQUN6QyxtQ0FBbUMsaURBQU07QUFDekMsbUNBQW1DLGlEQUFNOztBQUV6QztBQUNBO0FBQ0E7OztBQUdBLEM7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNDOzs7QUFHbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLHFCQUFxQixpREFBTTtBQUMzQixzQkFBc0IsaURBQU07QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQSxnQkFBZ0IsdUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUFBO0FBQUE7QUFBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsK0NBQUk7QUFDdEQsb0Q7QUFDQTtBQUNBLGlEQUFpRCwrQ0FBSTtBQUNyRCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw4Q0FBOEMsZ0RBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsZ0RBQUs7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0MsK0NBQUk7QUFDMUMsd0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFM7O0FBRUE7QUFDQSxxQ0FBcUMsZ0RBQUs7QUFDMUMsU0FBUztBQUNULHNDQUFzQyxnREFBSyxDO0FBQzNDLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQ3BEOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDRjtBQUNFO0FBQ1M7O0FBRXZDO0FBQ2Y7QUFDQSxxQkFBcUIsb0RBQVM7QUFDOUIsc0JBQXNCLG9EQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQVM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsc0RBQVk7QUFDekMsMkJBQTJCLG9EQUFTO0FBQ3BDLG9DQUFvQyxPQUFPO0FBQzNDLGlDQUFpQyx1REFBYTtBQUM5QywrQkFBK0Isb0RBQVM7QUFDeEM7QUFDQSw2QkFBNkIsdURBQWE7O0FBRTFDOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDSjtBQUNFOztBQUU1QiwyQkFBMkIsdURBQWE7QUFDdkQ7QUFDQTtBQUNBLHFCQUFxQixvREFBUztBQUM5QixzQkFBc0Isb0RBQVM7O0FBRS9CLHFCQUFxQix3REFBYTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDRzs7QUFFN0I7QUFDZjtBQUNBLHFCQUFxQixvREFBUztBQUM5QixzQkFBc0Isb0RBQVM7QUFDL0IscUJBQXFCLHVEQUFZOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDSjtBQUNLOztBQUUvQiwyQkFBMkIsdURBQWE7QUFDdkQ7QUFDQTtBQUNBLHFCQUFxQixvREFBUztBQUM5QixzQkFBc0Isb0RBQVM7QUFDL0IscUJBQXFCLHlEQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQ3JEOztBQUV0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBSzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDbUM7QUFDeEI7QUFDdEI7O0FBRTFCO0FBQ1AsT0FBTywyREFBTztBQUNkOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBLDBCQUEwQixxREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVM7QUFDbEM7QUFDQTtBQUNBLDhCQUE4QixtREFBSSxlQUFlLHFEQUFVO0FBQzNEO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsOERBQWU7QUFDckQseUJBQXlCLG9EQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRSIsImZpbGUiOiJzYW5yaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBDT05UUk9MX0NBTlZBU19IRUlHSFQgPSAxMjU7XG5leHBvcnQgY29uc3QgQ09OVFJPTF9DQU5WQVNfV0lEVEggPSA2NTA7XG5cbmV4cG9ydCBjb25zdCBDQU5WQVNfSEVJR0hUID0gNDAwO1xuZXhwb3J0IGNvbnN0IENBTlZBU19XSURUSCA9IDcwMDtcblxuZXhwb3J0IGNvbnN0IExFVkVMX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBMRVZFTF9XSURUSCA9IDcwMDtcblxuZXhwb3J0IGNvbnN0IEhFSUdIVFNQQU4gPSAyMDtcbmV4cG9ydCBjb25zdCBXSURUSFNQQU4gPSA0MDtcblxuZXhwb3J0IGNvbnN0IERJUkVDVElPTlMgPSB7XG4gICAgTEVGVDogKC0xLCAwKSxcbiAgICBSSUdIVDogKDEsIDApLFxuICAgIFVQOiAoMCwgMSksXG59O1xuXG5leHBvcnQgY29uc3QgSlVNUCA9IDEyO1xuZXhwb3J0IGNvbnN0IFNQRUVEID0gNTtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUiA9IDE1O1xuXG5leHBvcnQgY29uc3QgR1JBVklUWSA9IDAuNTtcbmV4cG9ydCBjb25zdCBCTE9DS1NJWkUgPSAxNTsiLCJpbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gJy4vcGxheWVycy9wbGF5ZXJJbnB1dCc7XG5pbXBvcnQgR2FtZUlucHV0SGFuZGxlciBmcm9tICcuL2dhbWVTdGF0ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcnMvcGxheWVyJztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L21lbnUnO1xuaW1wb3J0IHsgY2xvdWRzIH0gZnJvbSAnLi9pbWdMb2FkZXInO1xuaW1wb3J0IENsb3VkIGZyb20gJy4vc2NlbmUvY2xvdWQnO1xuaW1wb3J0IHsgbGV2ZWxzLCBwYXJzZUxldmVsIH0gZnJvbSAnLi91dGlsL2x2bExvYWRlcic7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEgsIGN0eCkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmNsb3VkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNsb3VkcyA9IHt9O1xuXG4gICAgfVxuXG4gICAgZGVsZXRlRWxlbWVudChoYXNoLCBrZXkpe1xuICAgICAgICBzd2l0Y2ggKGhhc2gpe1xuICAgICAgICAgICAgY2FzZSAnY2xvdWRzJzpcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jbG91ZHNba2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMuY2xvdWRDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkRWxlbWVudChoYXNoLCBrZXkpe1xuICAgICAgICBzd2l0Y2ggKGhhc2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3Vkcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XSA9IG5ldyBDbG91ZCh0aGlzLCB0aGlzLmNsb3VkQ291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRDb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KHRoaXMpO1xuICAgICAgICB0aGlzLm1lbnUuZ2VuZXJhdGVDb250cm9scygpO1xuICAgICAgICBuZXcgR2FtZUlucHV0SGFuZGxlcih0aGlzLCB0aGlzLm1lbnUpO1xuICAgICAgICAvLyB0aGlzLmxldmVsT2JqZWN0cyA9IHBhcnNlTGV2ZWwobGV2ZWxzWzFdKTtcbiAgICAgICAgLy8gdGhpcy5zY2VuZU9iamVjdHMgPSB0aGlzLmxldmVsT2JqZWN0c1sxXTtcbiAgICAgICAgLy8gdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICAgIC8vIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMuY2xvdWRDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGUgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlLmxvb3ApO1xuXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0ge1xuICAgICAgICAgICAgLy8gMTogbmV3IFBsYXRmb3JtQnVpbGRlcigzMywgMCwgMzUwLCAxKSxcbiAgICAgICAgLy8gICAgIDI6IG5ldyBQbGF0Zm9ybUJ1aWxkZXIoNywgMTUwLCAyMjUsIDIpLFxuICAgICAgICAvLyAgICAgMzogbmV3IFBsYXRmb3JtQnVpbGRlcigxMCwgNDU1LCAyMjUsIDEpLFxuICAgICAgICAvLyAgICAgNDogbmV3IFBsYXRmb3JtQnVpbGRlcig3LCAyMCwgMzIwLCAxKSxcbiAgICAgICAgfTtcblxuICAgIFxuICAgIH1cbiAgICBcbiAgICBwYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdHYW1lKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQ29udGFpbmVyJyk7XG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmxldmVsT2JqZWN0cyA9IHBhcnNlTGV2ZWwobGV2ZWxzWzFdKTtcbiAgICAgICAgdGhpcy5zY2VuZU9iamVjdHMgPSB0aGlzLmxldmVsT2JqZWN0c1sxXTtcblxuICAgICAgICBsZXQgbGl2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFydEljb24nKTtcbiAgICAgICAgd2hpbGUgKGxpdmVzLmxlbmd0aCA8IDQpe1xuICAgICAgICAgICAgdGhpcy5hZGRMaWZlKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMubWVudS5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyO1xuICAgICAgICAvLyB0aGlzLnBsYXllci5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUubG9vcCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHVwZGF0ZShkZWx0YVRpbWUpe1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCB8fCB0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xvdWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3Vkc1trZXldLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjZW5lT2JqZWN0cy5mb3JFYWNoKHggPT4geC51cGRhdGUodGhpcy5wbGF5ZXIpKTtcblxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lKTtcblxuICAgIH1cblxuICBcblxuICAgIGFkZExpZmUoKXtcbiAgICAgICAgbGV0IGhlYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGhlYXJ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhcnRJY29uJyk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9saWZlLnBuZyc7XG5cbiAgICAgICAgbGV0IGhlYXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYXJ0Q29udGFpbmVyJyk7XG4gICAgICAgIGhlYXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpe1xuICAgICAgICBsZXQgbGl2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFydEljb24nKTtcbiAgICAgICAgbGl2ZXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaXZlc1swXSk7XG4gICAgICAgIGlmIChsaXZlcy5sZW5ndGggPT09IDApIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cblxuICAgICAgICB0aGlzLmN0eC5yZXNldFRyYW5zZm9ybSgpOyBcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLSh0aGlzLnBsYXllci5wb3NpdGlvbi54IC0gdGhpcy5nYW1lV2lkdGgvMiksIC0odGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMuZ2FtZUhlaWdodC8yKSk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnBsYXllci5wb3NpdGlvbi54IC0gdGhpcy5nYW1lV2lkdGgvMiwgLXRoaXMucGxheWVyLnBvc2l0aW9uLnkgLSB0aGlzLmdhbWVIZWlnaHQvMik7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNjYWxlKDIsMik7XG4gICAgICAgIC8vIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zY2FsZSguNSwuNSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jbG91ZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvdWRzW2tleV0uZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMubGV2ZWxPYmplY3RzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxldmVsT2JqZWN0c1trZXldLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5kcmF3KHRoaXMuY3R4KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuU1RBUlQpe1xuICAgICAgICAgICAgdGhpcy5tZW51LnN0YXJ0TWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHsgXG4gICAgICAgICAgICB0aGlzLm1lbnUuc2hvd01lbnUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5HQU1FT1ZFUil7XG4gICAgICAgICAgICB0aGlzLm1lbnUuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMuY3R4KTtcblxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59XG5cbiIsImNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUlucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdhbWUsIG1lbnUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKXtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBtZW51LmRlY3JlYXNlVm9sdW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5pbmNyZWFzZVZvbHVtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKXtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnRVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5TVEFSVCkge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSl7XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gbWVudVxuY29uc3QgbWVudUFycm93SW1nID0gbmV3IEltYWdlKCk7XG5tZW51QXJyb3dJbWcuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2xpZmUucG5nJztcblxuY29uc3Qga2V5Ym9hcmRMZWZ0ID0gbmV3IEltYWdlKCk7XG5jb25zdCBrZXlib2FyZFJpZ2h0ID0gbmV3IEltYWdlKCk7XG5jb25zdCBrZXlib2FyZFVwID0gbmV3IEltYWdlKCk7XG5jb25zdCBrZXlib2FyZERvd24gPSBuZXcgSW1hZ2UoKTtcbmtleWJvYXJkTGVmdC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvYXJyb3dfbGVmdC5wbmcnO1xua2V5Ym9hcmRMZWZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdIb3Jpem9udGFsXCIpO1xua2V5Ym9hcmRSaWdodC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvYXJyb3dfcmlnaHQucG5nJztcbmtleWJvYXJkUmlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ0hvcml6b250YWxcIik7XG5rZXlib2FyZFVwLnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd191cC5wbmcnO1xua2V5Ym9hcmRVcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93SW1nVmVydGljYWxcIik7XG5rZXlib2FyZERvd24uc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X2Rvd24ucG5nJztcbmtleWJvYXJkRG93bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93SW1nVmVydGljYWxcIik7XG5cbmV4cG9ydCBjb25zdCBhcnJvd3MgPSBba2V5Ym9hcmRMZWZ0LCBrZXlib2FyZFJpZ2h0LCBrZXlib2FyZFVwLCBrZXlib2FyZERvd25dO1xuZXhwb3J0IGNvbnN0IG1lbnVBcnJvdyA9IFttZW51QXJyb3dJbWddO1xuXG4vLyBzY2VuZVxuY29uc3QgcGxhdGZvcm1MZWZ0XzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfMSA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF8yID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzMgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfNCA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF81ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGNsb3VkXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGNsb3VkXzYgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgYnVzaF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfNiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBmbG93ZXJfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgZmxvd2VyXzIgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgdHJlZV8xID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGhpbGxfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzYgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF84ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzkgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTAgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTYgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTcgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTggPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMTkgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMjAgPSBuZXcgSW1hZ2UoKTtcblxucGxhdGZvcm1MZWZ0XzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMS5wbmcnO1xucGxhdGZvcm1NaWRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzEucG5nJztcbnBsYXRmb3JtUmlnaHRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMS5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8zLnBuZyc7XG5wbGF0Zm9ybU1pZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMy5wbmcnO1xucGxhdGZvcm1SaWdodF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8zLnBuZyc7XG5cbnBsYXRmb3JtTGVmdF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzMucG5nJztcbnBsYXRmb3JtTWlkXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV8zLnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzMucG5nJztcblxucGxhdGZvcm1MZWZ0XzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMy5wbmcnO1xucGxhdGZvcm1NaWRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzMucG5nJztcbnBsYXRmb3JtUmlnaHRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMy5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8zLnBuZyc7XG5wbGF0Zm9ybU1pZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMy5wbmcnO1xucGxhdGZvcm1SaWdodF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8zLnBuZyc7XG5cbmNsb3VkXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF8xLnBuZyc7XG5jbG91ZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfMi5wbmcnO1xuY2xvdWRfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzMucG5nJztcbmNsb3VkXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF80LnBuZyc7XG5jbG91ZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfNi5wbmcnO1xuY2xvdWRfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzYucG5nJztcblxuYnVzaF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF8xLnBuZyc7XG5idXNoXzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzIucG5nJztcbmJ1c2hfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfMy5wbmcnO1xuYnVzaF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF80LnBuZyc7XG5idXNoXzUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzUucG5nJztcbmJ1c2hfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfNi5wbmcnO1xuXG5mbG93ZXJfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8xLnBuZyc7XG5mbG93ZXJfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8yLnBuZyc7XG5cbnRyZWVfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3RyZWVfMS5wbmcnO1xuXG5cbmhpbGxfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMS5wbmcnO1xuaGlsbF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yLnBuZyc7XG5oaWxsXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzMucG5nJztcbmhpbGxfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNC5wbmcnO1xuaGlsbF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF81LnBuZyc7XG5oaWxsXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzYucG5nJztcbmhpbGxfNy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNy5wbmcnO1xuaGlsbF84LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF84LnBuZyc7XG5oaWxsXzkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzkucG5nJztcbmhpbGxfMTAuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEwLnBuZyc7XG5oaWxsXzExLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMS5wbmcnO1xuaGlsbF8xMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTIucG5nJztcbmhpbGxfMTMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEzLnBuZyc7XG5oaWxsXzE0LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNC5wbmcnO1xuaGlsbF8xNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTUucG5nJztcbmhpbGxfMTYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE2LnBuZyc7XG5oaWxsXzE3LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNy5wbmcnO1xuaGlsbF8xOC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTgucG5nJztcbmhpbGxfMTkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE5LnBuZyc7XG5oaWxsXzIwLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yMC5wbmcnO1xuXG5leHBvcnQgY29uc3QgcGxhdGZvcm1fbWlkID0gWycnLCBwbGF0Zm9ybU1pZF8xLCBwbGF0Zm9ybU1pZF8yLCBwbGF0Zm9ybU1pZF8zLCBwbGF0Zm9ybU1pZF80LCBwbGF0Zm9ybU1pZF81XTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV9sZWZ0ID0gWycnLCBwbGF0Zm9ybUxlZnRfMSwgcGxhdGZvcm1MZWZ0XzIsIHBsYXRmb3JtTGVmdF8zLCBwbGF0Zm9ybUxlZnRfNCwgcGxhdGZvcm1MZWZ0XzVdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtX3JpZ2h0ID0gWycnLCBwbGF0Zm9ybVJpZ2h0XzEsIHBsYXRmb3JtUmlnaHRfMiwgcGxhdGZvcm1SaWdodF8zLCBwbGF0Zm9ybVJpZ2h0XzQsIHBsYXRmb3JtUmlnaHRfNV07XG5cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV8xID0gW3BsYXRmb3JtTGVmdF8xLCBwbGF0Zm9ybU1pZF8xLCBwbGF0Zm9ybVJpZ2h0XzFdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzIgPSBbcGxhdGZvcm1MZWZ0XzIsIHBsYXRmb3JtTWlkXzIsIHBsYXRmb3JtUmlnaHRfMl07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fMyA9IFtwbGF0Zm9ybUxlZnRfMywgcGxhdGZvcm1NaWRfMywgcGxhdGZvcm1SaWdodF8zXTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV80ID0gW3BsYXRmb3JtTGVmdF80LCBwbGF0Zm9ybU1pZF80LCBwbGF0Zm9ybVJpZ2h0XzRdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzUgPSBbcGxhdGZvcm1MZWZ0XzUsIHBsYXRmb3JtTWlkXzUsIHBsYXRmb3JtUmlnaHRfNV07XG5leHBvcnQgY29uc3QgYnVzaGVzID0gW2J1c2hfMSwgYnVzaF8yLCBidXNoXzMsIGJ1c2hfNCwgYnVzaF81LCBidXNoXzZdO1xuZXhwb3J0IGNvbnN0IGNsb3VkcyA9IFtjbG91ZF8xLCBjbG91ZF8yLCBjbG91ZF8zLCBjbG91ZF80LCBjbG91ZF81LCBjbG91ZF82XTtcbmV4cG9ydCBjb25zdCBmbG93ZXJzID0gW2Zsb3dlcl8xLnBuZywgZmxvd2VyXzIucG5nXTtcbmV4cG9ydCBjb25zdCB0cmVlcyA9IFt0cmVlXzFdO1xuLy9jbG9zZVxuZXhwb3J0IGNvbnN0IGhpbGxzXzEgPSBbaGlsbF8zLCBoaWxsXzQsIGhpbGxfMTMsIGhpbGxfMTQsIGhpbGxfMTUsIGhpbGxfMTYsIGhpbGxfMTddO1xuZXhwb3J0IGNvbnN0IGhpbGxzXzIgPSBbaGlsbF8xLCBoaWxsXzIsIGhpbGxfOCwgaGlsbF85LCBoaWxsXzEwLCBoaWxsXzExLCBoaWxsXzEyXTtcbmV4cG9ydCBjb25zdCBoaWxsc18zID0gW2hpbGxfNSwgaGlsbF8yMF07XG5leHBvcnQgY29uc3QgaGlsbHNfNCA9IFtoaWxsXzYsIGhpbGxfNywgaGlsbF8xOCwgaGlsbF8xOV07XG4iLCJpbXBvcnQge0NBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgQ09OVFJPTF9DQU5WQVNfSEVJR0hULCBDT05UUk9MX0NBTlZBU19XSURUSH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBUdXRvcmlhbCBmcm9tICcuL21lbnUvdHV0b3JpYWwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgbGV0IHR1dG9yaWFsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xDYW52YXMnKTtcbiAgICB0dXRvcmlhbENhbnZhcy5oZWlnaHQgPSBDT05UUk9MX0NBTlZBU19IRUlHSFQ7XG4gICAgdHV0b3JpYWxDYW52YXMud2lkdGggPSBDT05UUk9MX0NBTlZBU19XSURUSDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICBjYW52YXMud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjb250cm9sY3R4ID0gdHV0b3JpYWxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRILCBjdHgpO1xuICAgIGxldCB0dXRvcmlhbCA9IG5ldyBUdXRvcmlhbChDT05UUk9MX0NBTlZBU19IRUlHSFQsQ09OVFJPTF9DQU5WQVNfV0lEVEgsY29udHJvbGN0eCwgZ2FtZSk7XG4gICAgZ2FtZS5zdGFydCgpO1xuICAgIHR1dG9yaWFsLnN0YXJ0KCk7XG4gICAgXG4gICAgXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuLy8gaW1hZ2VzXG5cbiAgICBmdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgLy8gbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxDQU5WQVNfV0lEVEgsQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIGNvbnRyb2xjdHguY2xlYXJSZWN0KDAsMCxDT05UUk9MX0NBTlZBU19XSURUSCxDT05UUk9MX0NBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgIHR1dG9yaWFsLnVwZGF0ZSgpO1xuICAgICAgICB0dXRvcmlhbC5kcmF3KGNvbnRyb2xjdHgpO1xuXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGdhbWUuZHJhdyhjdHgpO1xuICAgICAgICAvLyBnYW1lLmRyYXcoY29udHJvbGN0eCk7XG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5cbn0pO1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgXFx0XFx0XFx0R1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHhcXG5cXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4WFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eFhcXG5cXHRcXHRcXHRcXHRcXHQgXFx0XFx0ICBcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFx0ICAgXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICBcXHQgXFx0XFx0XFx0XFx0XFx0IHBcXG5cXHRcXHRcXHRcXHR4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgeHh4eHh4eHh4WFxcdHh4eHh4WFxcdFxcblxcblxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICAgeHh4eHh4eFhcXG4geHh4eHh4eHh4eHh4eHh4eHhYXFx0XFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0cFxcbnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcblxcblxcblxcblxcblxcblxcdFxcdFwiIiwiaW1wb3J0IHsgYXJyb3dzIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcbiAgICAgICAgdGhpcy5vcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVPcHRpb25zJyk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5vcHRpb25zTGlzdC5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25NZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25NZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMub3B0aW9uTGVuZ3RoID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ29Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ29NZW51T3B0aW9uQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuZ29DdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ29NZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLmdvTGVuZ3RoID0gdGhpcy5nb09wdGlvbnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0TWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0T3B0aW9ucycpO1xuICAgICAgICB0aGlzLnN0YXJ0TGVuZ3RoID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm1lbnVIYXNoID0ge1xuICAgICAgICAgICAgMDogJ21haW4nLFxuICAgICAgICAgICAgMTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgMjogJ2NvbnRyb2wnLFxuICAgICAgICAgICAgMzogJ2dhbWVvdmVyJyxcbiAgICAgICAgICAgIDQ6ICdzdGFydCcsXG4gICAgICAgICAgICA1OiAnaW50cm8nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWVudVR5cGUgPSB0aGlzLm1lbnVIYXNoWzBdO1xuICAgIH1cblxuICAgIHNoaWZ0RG93bigpe1xuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2ludGVyQXJyb3cnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L21lbnVDdXJzb3IucG5nJztcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGhpcy5tZW51VHlwZSl7ICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ICU9IHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudCAlIHRoaXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMV06XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkN1cnJlbnQgPj0gdGhpcy5vcHRpb25MZW5ndGgpIHRoaXMub3B0aW9uQ3VycmVudCAlPSB0aGlzLm9wdGlvbkxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudCAlIHRoaXMub3B0aW9uTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ29udGFpbmVyc1t0aGlzLm9wdGlvbkN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzNdOlxuICAgICAgICAgICAgICAgIGxldCBnb0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBnb0Fycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29BcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0N1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nb0N1cnJlbnQgPj0gdGhpcy5nb0xlbmd0aCkgdGhpcy5nb0N1cnJlbnQgJT0gdGhpcy5nb0xlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQgPSB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnQgJSB0aGlzLmdvTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Db250YWluZXJzW3RoaXMuZ29DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFs0XTpcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgc3RhcnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0YXJ0QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRDdXJyZW50ID49IHRoaXMuc3RhcnRMZW5ndGgpIHRoaXMuc3RhcnRDdXJyZW50ICU9IHRoaXMuc3RhcnRMZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50ICUgdGhpcy5zdGFydExlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyc1t0aGlzLnN0YXJ0Q3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hpZnRVcCgpe1xuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2ludGVyQXJyb3cnKTtcbiAgICAgICAgYXJyb3cuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L21lbnVDdXJzb3IucG5nJztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMubWVudVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMub3B0aW9uc0xpc3RbdGhpcy5jdXJyZW50ICUgdGhpcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5BcnJvdycpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFsxXTpcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25DdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uQ3VycmVudCA8IDApIHRoaXMub3B0aW9uQ3VycmVudCA9IHRoaXMub3B0aW9uTGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnQgJSB0aGlzLm9wdGlvbkxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnNbdGhpcy5vcHRpb25DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFszXTpcbiAgICAgICAgICAgICAgICBsZXQgZ29BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgZ29BcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvQXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29DdXJyZW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29DdXJyZW50IDwgMCkgdGhpcy5nb0N1cnJlbnQgPSB0aGlzLmdvTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQgPSB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnQgJSB0aGlzLmdvTGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ29udGFpbmVyc1t0aGlzLmdvQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbNF06XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGFydEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0Q3VycmVudCA8IDApIHRoaXMuc3RhcnRDdXJyZW50ID0gdGhpcy5zdGFydExlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50ICUgdGhpcy5zdGFydExlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyc1t0aGlzLnN0YXJ0Q3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU1lbnVUeXBlKHgpe1xuICAgICAgICB0aGlzLm1lbnVUeXBlID0gdGhpcy5tZW51SGFzaFt4XTtcbiAgICB9XG5cbiAgICBlbnRlcigpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFswXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCl7XG4gICAgICAgICAgICAgICAgLy8gcmVzdW1lXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGdhbWVcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSl7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uQ3VycmVudCl7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMl0pe1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbM10pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdvQ3VycmVudCl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbNF0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXJ0Q3VycmVudCl7XG4gICAgICAgICAgICAgICAgLy8gb25lIHBsYXllciBnYW1lXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGV4aXRcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgbGV0IGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0NvbnRhaW5lcicpO1xuICAgICAgICBlbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMyk7XG4gICAgfVxuXG4gICAgc3RhcnRNZW51KCl7XG4gICAgICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydENvbnRhaW5lcicpO1xuICAgICAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSg0KTtcbiAgICB9XG5cbiAgICBzaG93TWVudSgpe1xuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgXG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICBcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29udHJvbHMoKXtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICB0b2dnbGVPcHRpb25zKCl7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgc3Bhd24oKXtcbiAgICB9XG5cbiAgICBkZWNyZWFzZVZvbHVtZSgpe1xuICAgICAgICBpZiAodGhpcy5tZW51VHlwZSA9PT0gdGhpcy5tZW51SGFzaFsxXSkge1xuICAgICAgICAgICAgbGV0IHZvbHVtZSA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbkN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZnhSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpY1JhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgaW5jcmVhc2VWb2x1bWUoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pIHtcbiAgICAgICAgICAgIGxldCB2b2x1bWUgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4UmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSArIDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpICsgMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMF0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNYXAoKXt9XG5cbiAgICBleGl0KCl7XG4gICAgICAgIHRoaXMuZ2FtZS5wYXVzZSgpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIGxldCBrZXlib2FyZCA9ICdRV0VSVFlVSU9QQVNERkdISktMWlhDVkJOTSc7XG4gICAgICAgIGxldCBudW1zID0gJzEyMzQ1Njc4OTAnO1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGxldHRlciA9IDA7XG4gICAgICAgIGxldCBrZXlBcnJheSA9IFtcbiAgICAgICAgICAgIFs0LCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCA0LCAxMl0sXG4gICAgICAgICAgICBbNSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNSwgNV0sXG4gICAgICAgICAgICBbMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgNSwgMF0sXG4gICAgICAgICAgICBbOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNSwgNSwgNV0sXG4gICAgICAgICAgICBbNiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgNl0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgNywgMCwgMCwgOSwgMTAsIDExXVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGtleUFycmF5Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJvdyR7cm93fWApO1xuICAgICAgICAgICAga2V5QXJyYXlbcm93XS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGtleSR7bnVtc1tudW1iZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7bnVtc1tudW1iZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlOdW1iZXJDb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vZGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0bm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBga2V5JHtrZXlib2FyZFtsZXR0ZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlcm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2tleWJvYXJkW2xldHRlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5TGV0dGVyQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcm5vZGUuYXBwZW5kQ2hpbGQobGV0dGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxldHRlcm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3cga2V5c1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG93bkFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVwQXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb3duQXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5hcHBlbmRDaGlsZChhcnJvd3NbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0QXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaWdodGJsYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmlnaHRibGFuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJsYW5rIGtleXNcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVhcnRlcktleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhhbGZLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2ZXJ0aWNhbEhhbGZLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaGlmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmFja3NwYWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXJzL3BsYXllcic7XG5pbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gJy4uL3BsYXllcnMvcGxheWVySW5wdXQnO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IHt0cmVlcywgYnVzaGVzfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsIHtcbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBjb250cm9sY3R4LCBnYW1lKXtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4ID0gY29udHJvbGN0eDtcblxuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHtcbiAgICAgICAgICAgIDE6IG5ldyBQbGF0Zm9ybUJ1aWxkZXIoMjUsIDUwLCA5NSwgMSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjZW5lT2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xIYW5kbGUgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNvbnRyb2xIYW5kbGUubG9vcCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxvc2VMaWZlKCl7fVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZmlsbFN0eWxlPSAncmVkJztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wbGF0Zm9ybXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1zW2tleV0uZHJhdyh0aGlzLnR1dG9yaWFsY3R4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKHRyZWVzWzBdLCA0MjAsIC01LCA0MCwgMTAwKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UodHJlZXNbMF0sIDQ2Mi41LCAyMCwgMzAsIDc1KTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UoYnVzaGVzWzNdLCAxNjUsIDc1LCA3MCwgMjApO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZShidXNoZXNbMV0sIDM4NSwgNzUsIDY1LCAyMCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKGJ1c2hlc1syXSwgNDc1LCA3NSwgODUsIDIwKTtcblxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMudHV0b3JpYWxjdHgpO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgUExBWUVSLCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZXRlY3RDb2xsaXNpb259IGZyb20gJy4uL3V0aWwvY29sbGlzaW9uJztcblxuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gUExBWUVSO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBMQVlFUjtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUuZ2FtZVdpZHRoLzQgIC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLmdhbWVIZWlnaHQgIFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gR1JBVklUWTtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uKVxuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgKj0gMC45O1xuICAgICAgICAvLyBpZiAodGhpcy55X3ZlbG9jaXR5IDwgMCkge3RoaXMueV92ZWxvY2l0eSArPSAxNSB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueV92ZWxvY2l0eSk7XG4gICAgICAgIC8vIGlmICh0aGlzLnlfdmVsb2NpdHkgIT0gMCl7XG4gICAgICAgIHRoaXMueV92ZWxvY2l0eSArPSAwLjk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueF92ZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMueV92ZWxvY2l0eSA7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldE9mZnNldF94KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnhfdmVsb2NpdHk7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2V0X3koanVtcCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCArIGp1bXA7XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmUoKTtcblxuICAgICAgICAvL2NoZWNrIGNvbGxpc2lvbnMgd2l0aCB3YWxsXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZS5nYW1lV2lkdGgpIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZS5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuXG4gICAgICAgIC8vYWRqdXN0IGNhbWVyYSBvZmZzZXRcblxuXG4gICAgICAgIC8vY2hlY2sgY29sbGlzaW9ucyB3IGZsb29yIFxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPCAwKSB0aGlzLnBvc2l0aW9uLnkgPSAwO1xuICAgICAgICAvLyBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0KSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodC10aGlzLmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lLmdhbWVIZWlnaHQgLyAyO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvc2VMaWZlKCk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gY2hlY2sgY29sbGlzaW9ucyB3aXRoIHBsYXRmb3Jtc1xuXG4gICAgICAgIHRoaXMuZ2FtZS5zY2VuZU9iamVjdHMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0Q29sbGlzaW9uKHRoaXMsIHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm0ucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5nYW1lLnBsYXRmb3JtcykuZm9yRWFjaCAoa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBwbGF0Zm9ybSA9IHRoaXMuZ2FtZS5wbGF0Zm9ybXNba2V5XTtcbiAgICAgICAgICAgIGlmIChkZXRlY3RDb2xsaXNpb24odGhpcywgcGxhdGZvcm0pKXtcbiAgICAgICAgICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge1NQRUVELCBKVU1QfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBnYW1lKXtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIC8vIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNhbkp1bXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRPZmZzZXRfeSgtSlVNUCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAtU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuICAgIFxuICAgIGNvbnRyb2xsZXIgKGUpe1xuICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlJVTk5JTkcpe1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbG9vcCAoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy51cCAmJiB0aGlzLnBsYXllci5jYW5KdW1wICkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9IC1KVU1QO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IGZhbHNlOyBcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oaXQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gU1BFRUQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gLVNQRUVEOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnBsYXllci5oZWlnaHQgfHwgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29udHJvbGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgICAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgQ0FOVkFTX1dJRFRILCBKVU1QX0hFSUdIVCwgU1BFRUQsIENBTlZBU19IRUlHSFQsIEdSQVZJVFkgfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjbG91ZHMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwga2V5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm51bWJlciA9IHRoaXMucmFuZG9tSW50KDAsIDUpO1xuICAgICAgICB0aGlzLmltYWdlID0gY2xvdWRzW3RoaXMubnVtYmVyXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nYW1lLmdhbWVXaWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LyB0aGlzLnJhbmRvbUludCgwLjUsMTApXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ID0gLU1hdGgucmFuZG9tKDEsMik7XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5nYW1lLmRlbGV0ZUVsZW1lbnQoJ2Nsb3VkcycsIHRoaXMua2V5KTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLnJhbmRvbUludCgyLDQpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMubnVtYmVyKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDI1Mi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4MTYvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDYwL211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDQ2NS9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTYyL211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDcwMi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTg0L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDY5OC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTc2L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDg1OC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMjk0L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDg5MS9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlKCk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG59XG5cbiIsImltcG9ydCBQbGF0Zm9ybVBpZWNlIGZyb20gJy4vcGxhdGZvcm1fcGllY2UnO1xuaW1wb3J0IFBsYXRmb3JtTGVmdCBmcm9tICcuL3BsYXRmb3JtX2xlZnQnO1xuaW1wb3J0IFBsYXRmb3JtUmlnaHQgZnJvbSAnLi9wbGF0Zm9ybV9yaWdodCc7XG5pbXBvcnQge0JMT0NLU0laRSwgQ0FOVkFTX0hFSUdIVH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1CdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihudW1CbG9ja3MsIHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkUgKiAobnVtQmxvY2tzKzIpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5waWVjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5udW1CbG9ja3MgPSBudW1CbG9ja3M7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feCA9IHg7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feSA9IHk7XG4gICAgICAgIHRoaXMueF9maWxsZXIgPSB4O1xuICAgICAgICB0aGlzLnlfZmlsbGVyID0geSArIEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAvLyB0aGlzLmZpbGxlciA9IGZpbGxlcjtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCl7XG4gICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtTGVmdCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3ggKz0gQkxPQ0tTSVpFO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5udW1CbG9ja3M7IGkgPiAwOyBpLS0pe1xuICAgICAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1QaWVjZSh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybVJpZ2h0KHRoaXMucGxhdGZvcm1feCwgdGhpcy5wbGF0Zm9ybV95LCB0aGlzLmNvbG9yKSk7XG5cbiAgICB9XG5cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHBsYXllci5nZXRPZmZzZXRfeSgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuXG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UudXBkYXRlKHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY3R4LnJlY3QodGhpcy54X2ZpbGxlciwgdGhpcy55X2ZpbGxlciwgdGhpcy5wbGF0Zm9ybV94LXRoaXMueF9maWxsZXIrQkxPQ0tTSVpFLCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDExMCw0OSwyNSknO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuICAgICAgICBcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgeyBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtwbGF0Zm9ybV9sZWZ0fSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUxlZnQgZXh0ZW5kcyBQbGF0Zm9ybVBpZWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xuICAgICAgICBzdXBlcih4LHksIGNvbG9yKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCTE9DS1NJWkU7XG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtX2xlZnRbY29sb3JdO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgcGxhdGZvcm1fbWlkIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV9taWRbY29sb3JdO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKHBsYXllcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSBwbGF5ZXIuZ2V0T2Zmc2V0X3koKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMueV92ZWxvY2l0eTtcblxuICAgIH1cblxuICAgIHVwZGF0ZShwbGF5ZXIpe1xuICAgICAgICB0aGlzLm1vdmUocGxheWVyKTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgeyBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgcGxhdGZvcm1fcmlnaHQgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUxlZnQgZXh0ZW5kcyBQbGF0Zm9ybVBpZWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xuICAgICAgICBzdXBlcih4LHksIGNvbG9yKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV9yaWdodFtjb2xvcl07XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENBTlZBU19XSURUSCwgSlVNUF9IRUlHSFQsIFNQRUVELCBDQU5WQVNfSEVJR0hULCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdHJlZXMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTA7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0cmVlc1swXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHkgLSB0aGlzLmhlaWdodC8yXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGVjdENvbGxpc2lvbihvYmosIHRhcmdldCkge1xuICAgIGxldCBvYmpMZWZ0ID0gb2JqLng7XG4gICAgbGV0IG9ialJpZ2h0ID0gb2JqLnggKyBvYmoud2lkdGg7XG4gICAgbGV0IG9ialRvcCA9IG9iai5wb3NpdGlvbi55O1xuICAgIGxldCBvYmpCb3R0b20gPSBvYmoucG9zaXRpb24ueSArIG9iai5oZWlnaHQ7XG5cbiAgICBsZXQgdGFyZ2V0TGVmdCA9IHRhcmdldC5wb3NpdGlvbi54O1xuICAgIGxldCB0YXJnZXRSaWdodCA9IHRhcmdldC5wb3NpdGlvbi54ICsgdGFyZ2V0LndpZHRoO1xuICAgIGxldCB0YXJnZXRUb3AgPSB0YXJnZXQucG9zaXRpb24ueTtcbiAgICBsZXQgdGFyZ2V0Qm90dG9tID0gdGFyZ2V0LnBvc2l0aW9uLnkgKyB0YXJnZXQuaGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgICBvYmpCb3R0b20gPj0gdGFyZ2V0VG9wICYmXG4gICAgICAgIG9ialRvcCA8PSB0YXJnZXRCb3R0b20gJiZcbiAgICAgICAgLy8gb2JqQm90dG9tIDw9IHRhcmdldFRvcCAmJlxuICAgICAgICAvLyBvYmpUb3AgPj0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ID49IHRhcmdldExlZnQgJiZcbiAgICAgICAgb2JqLnBvc2l0aW9uLnggKyBvYmoud2lkdGggPD0gdGFyZ2V0UmlnaHRcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgbGV2ZWwwMSBmcm9tICcuLi9sZXZlbHMvbGV2ZWxfMS50eHQnO1xuaW1wb3J0IHsgSEVJR0hUU1BBTiwgV0lEVEhTUEFOLCBDQU5WQVNfSEVJR0hULCBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuLi9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXInO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vc2NlbmUvdHJlZSc7XG5cbmV4cG9ydCBjb25zdCBsZXZlbHMgPSB7XG4gICAgMTogbGV2ZWwwMVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlTGV2ZWwgPSBsZXZlbERhdGEgPT4ge1xuICAgIGxldCBsZXZlbCA9IGxldmVsRGF0YS5zcGxpdChcIlwiKTtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBibG9ja0NvdW50ID0gMDtcblxuICAgIGxldCBzY2VuZU9iamVjdHMgPSBbXTtcbiAgICBsZXQgZGVjbyA9IFtdO1xuICAgIGxldCBlbmVtaWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc3dpdGNoIChsZXZlbFtpXSl7XG4gICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgIGhlaWdodCArPSBIRUlHSFRTUEFOO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBUcmVlKHdpZHRoLCBoZWlnaHQtSEVJR0hUU1BBTioyKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICBibG9ja0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGggKz0gQkxPQ0tTSVpFO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIGxldCBkZXB0aCA9IDU7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChoZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAwICYmIGhlaWdodCA8IDEwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoaGVpZ2h0ID49IDEwMCAmJiBoZWlnaHQgPCAyMDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAyMDAgJiYgaGVpZ2h0IDwgMzAwKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMzAwICYmIGhlaWdodCA8IDQwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBoZWlnaHQgPj0gNDAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjZW5lT2JqZWN0cy5wdXNoKG5ldyBQbGF0Zm9ybUJ1aWxkZXIoYmxvY2tDb3VudCwgd2lkdGgsIGhlaWdodCwgZGVwdGgpKTtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBXSURUSFNQQU47XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIDE6IHNjZW5lT2JqZWN0cyxcbiAgICAgICAgLy8gMjogZGVjb1xuICAgIH07XG5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==