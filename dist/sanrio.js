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
        this.sceneObjects = this.levelObjects[0];
        this.items = this.levelObjects[2];
     


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

        this.levelObjects = Object(_util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__["parseLevel"])(_util_lvlLoader__WEBPACK_IMPORTED_MODULE_7__["levels"][1]);
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
/*! exports provided: arrows, menuArrow, platform_mid, platform_left, platform_right, platform_1, platform_2, platform_3, platform_4, platform_5, bushes, clouds, flowers, trees, hills_1, hills_2, hills_3, hills_4, coin */
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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxX\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttb\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxX\t\n\n\n\t\t\t\t\t \t\t  \t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  b\t\tccc\t\t\tT   tb\n\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\txxxxxxxxxxxX\n\t\t\t\t\t t\n\t\t\t\t\txxxxxxX\t\t\t\t\t\t\t\t\t      \t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t    \t xxxxxxxX\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxX\n\tb\tT  t\t\tG\t\t\t\t\t\tb\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX\t\t\t\t\t\t\n\n\n\n\t\t");

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
            y: y 
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
/* harmony import */ var _scene_coin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene/coin */ "./src/scene/coin.js");
/* harmony import */ var _scene_bush__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scene/bush */ "./src/scene/bush.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./src/util/util.js");








const levels = {
    1: _levels_level_1_txt__WEBPACK_IMPORTED_MODULE_0__["default"]
};

const parseLevel = levelData => {
    let level = levelData.split("");
    let height = 0;
    let width = 0;
    let blockCount = 0;
    let itemCount = 0;

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
            case 'c':
                items[itemCount] = (new _scene_coin__WEBPACK_IMPORTED_MODULE_4__["default"](width, height - _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHTSPAN"], itemCount));
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
                deco.push(new _scene_bush__WEBPACK_IMPORTED_MODULE_5__["default"](width, height, Object(_util__WEBPACK_IMPORTED_MODULE_6__["randomInt"])(0,5)));
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
                width += _constants__WEBPACK_IMPORTED_MODULE_1__["WIDTHSPAN"];
                blockCount = 0;
                break;
            default:
        }
    }
    
    return {
        0: sceneObjects,
        1: deco,
        2: items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWxzL2xldmVsXzEudHh0Iiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvdHV0b3JpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9idXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9jbG91ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvY29pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1CdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9sZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9waWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvcGxhdGZvcm1fcmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3N0YXRpY09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbHZsTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ0E7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR087QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ0E7OztBQUdQOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7O0FBRU8sbUI7Ozs7Ozs7Ozs7OztBQzlLUDtBQUFBO0FBQUE7QUFBQTtBQUFxRztBQUMzRTtBQUNhOztBQUV2QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQXFCO0FBQ2pELDJCQUEyQiwrREFBb0I7QUFDL0Msb0JBQW9CLHdEQUFhO0FBQ2pDLG1CQUFtQix1REFBWTtBQUMvQjtBQUNBOztBQUVBLG1CQUFtQiw2Q0FBSSxDQUFDLHdEQUFhLEVBQUUsdURBQVk7QUFDbkQsdUJBQXVCLHNEQUFRLENBQUMsZ0VBQXFCLENBQUMsK0RBQW9CO0FBQzFFO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQix1REFBWSxDQUFDLHdEQUFhO0FBQ3BELGlDQUFpQywrREFBb0IsQ0FBQyxnRUFBcUI7O0FBRTNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFBZSwyckI7Ozs7Ozs7Ozs7OztBQ0FmO0FBQUE7QUFBQTtBQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7O0FBRUEsRTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic2FucmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgQ09OVFJPTF9DQU5WQVNfSEVJR0hUID0gMTI1O1xuZXhwb3J0IGNvbnN0IENPTlRST0xfQ0FOVkFTX1dJRFRIID0gNjUwO1xuXG5leHBvcnQgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBDQU5WQVNfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9IRUlHSFQgPSA0MDA7XG5leHBvcnQgY29uc3QgTEVWRUxfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBIRUlHSFRTUEFOID0gMjA7XG5leHBvcnQgY29uc3QgV0lEVEhTUEFOID0gMjA7XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0ge1xuICAgIExFRlQ6ICgtMSwgMCksXG4gICAgUklHSFQ6ICgxLCAwKSxcbiAgICBVUDogKDAsIDEpLFxufTtcblxuZXhwb3J0IGNvbnN0IFRSRUVXSURUSCA9IDUwO1xuZXhwb3J0IGNvbnN0IFRSRUVIRUlHSFQgPSAxMTA7XG5cbmV4cG9ydCBjb25zdCBKVU1QID0gMTI7XG5leHBvcnQgY29uc3QgU1BFRUQgPSA1O1xuXG5leHBvcnQgY29uc3QgUExBWUVSID0gMTU7XG5cbmV4cG9ydCBjb25zdCBHUkFWSVRZID0gMC41O1xuZXhwb3J0IGNvbnN0IEJMT0NLU0laRSA9IDIwOyIsImltcG9ydCBJbnB1dEhhbmRsZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBHYW1lSW5wdXRIYW5kbGVyIGZyb20gJy4vZ2FtZVN0YXRlQ29udHJvbGxlcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVycy9wbGF5ZXInO1xuaW1wb3J0IFBsYXRmb3JtQnVpbGRlciBmcm9tICcuL3NjZW5lL3BsYXRmb3JtQnVpbGRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUvbWVudSc7XG5pbXBvcnQgeyBjbG91ZHMgfSBmcm9tICcuL2ltZ0xvYWRlcic7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9zY2VuZS9jbG91ZCc7XG5pbXBvcnQgeyBsZXZlbHMsIHBhcnNlTGV2ZWwgfSBmcm9tICcuL3V0aWwvbHZsTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMuY2xvdWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2xvdWRzID0ge307XG5cbiAgICB9XG5cbiAgICBkZWxldGVFbGVtZW50KGhhc2gsIGtleSl7XG4gICAgICAgIHN3aXRjaCAoaGFzaCl7XG4gICAgICAgICAgICBjYXNlICdjbG91ZHMnOlxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsb3Vkc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCgnY2xvdWRzJywgdGhpcy5jbG91ZENvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50KGhhc2gsIGtleSl7XG4gICAgICAgIHN3aXRjaCAoaGFzaCkge1xuICAgICAgICAgICAgY2FzZSAnY2xvdWRzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Vkc1trZXldID0gbmV3IENsb3VkKHRoaXMsIHRoaXMuY2xvdWRDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZENvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcyk7XG4gICAgICAgIHRoaXMubWVudS5nZW5lcmF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIG5ldyBHYW1lSW5wdXRIYW5kbGVyKHRoaXMsIHRoaXMubWVudSk7XG4gICAgICAgIC8vIHRoaXMubGV2ZWxPYmplY3RzID0gcGFyc2VMZXZlbChsZXZlbHNbMV0pO1xuICAgICAgICAvLyB0aGlzLnNjZW5lT2JqZWN0cyA9IHRoaXMubGV2ZWxPYmplY3RzWzFdO1xuICAgICAgICAvLyB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB0aGlzLm5ld0dhbWUoKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCgnY2xvdWRzJywgdGhpcy5jbG91ZENvdW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUubG9vcCk7XG5cbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSB7XG4gICAgICAgICAgICAvLyAxOiBuZXcgUGxhdGZvcm1CdWlsZGVyKDMzLCAwLCAzNTAsIDEpLFxuICAgICAgICAvLyAgICAgMjogbmV3IFBsYXRmb3JtQnVpbGRlcig3LCAxNTAsIDIyNSwgMiksXG4gICAgICAgIC8vICAgICAzOiBuZXcgUGxhdGZvcm1CdWlsZGVyKDEwLCA0NTUsIDIyNSwgMSksXG4gICAgICAgIC8vICAgICA0OiBuZXcgUGxhdGZvcm1CdWlsZGVyKDcsIDIwLCAzMjAsIDEpLFxuICAgICAgICB9O1xuXG4gICAgXG4gICAgfVxuICAgIFxuICAgIHBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5ld0dhbWUoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29Db250YWluZXInKTtcbiAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMubGV2ZWxPYmplY3RzID0gcGFyc2VMZXZlbChsZXZlbHNbMV0pO1xuICAgICAgICB0aGlzLnNjZW5lT2JqZWN0cyA9IHRoaXMubGV2ZWxPYmplY3RzWzBdO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5sZXZlbE9iamVjdHNbMl07XG4gICAgIFxuXG5cbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIHdoaWxlIChsaXZlcy5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlmZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLm1lbnUuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgIC8vIHRoaXMucGxheWVyLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlLmxvb3ApO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB1cGRhdGUoZGVsdGFUaW1lKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQgfHwgdGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLkdBTUVPVkVSKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNsb3VkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG91ZHNba2V5XS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sZXZlbE9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxPYmplY3RzW2tleV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZSh0aGlzLnBsYXllcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLnNjZW5lT2JqZWN0cy5mb3JFYWNoKHggPT4geC51cGRhdGUodGhpcy5wbGF5ZXIpKTtcblxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lLCAwLjAyNSk7XG5cbiAgICB9XG5cbiAgXG5cbiAgICBhZGRMaWZlKCl7XG4gICAgICAgIGxldCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBoZWFydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYXJ0SWNvbicpO1xuICAgICAgICBoZWFydC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvbGlmZS5wbmcnO1xuXG4gICAgICAgIGxldCBoZWFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFydENvbnRhaW5lcicpO1xuICAgICAgICBoZWFydENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXtcbiAgICAgICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhcnRJY29uJyk7XG4gICAgICAgIGxpdmVzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGl2ZXNbMF0pO1xuICAgICAgICBpZiAobGl2ZXMubGVuZ3RoID09PSAwKSB0aGlzLmdhbWVPdmVyKCk7XG5cbiAgICAgICAgdGhpcy5sZXZlbE9iamVjdHMgPSBwYXJzZUxldmVsKGxldmVsc1sxXSk7XG4gICAgICAgIHRoaXMuc2NlbmVPYmplY3RzID0gdGhpcy5sZXZlbE9iamVjdHNbMF07XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmxldmVsT2JqZWN0c1syXTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuXG4gICAgICAgIHRoaXMuY3R4LnJlc2V0VHJhbnNmb3JtKCk7IFxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtKHRoaXMucGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLmdhbWVXaWR0aC8yKSwgLSh0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gdGhpcy5nYW1lSGVpZ2h0LzIpKTtcblxuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xvdWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3Vkc1trZXldLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxldmVsT2JqZWN0cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZXZlbE9iamVjdHNba2V5XS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QuZHJhdyh0aGlzLmN0eCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlNUQVJUKXtcbiAgICAgICAgICAgIHRoaXMubWVudS5zdGFydE1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7IFxuICAgICAgICAgICAgdGhpcy5tZW51LnNob3dNZW51KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuR0FNRU9WRVIpe1xuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDApJztcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyh0aGlzLmN0eCk7XG5cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxufVxuXG4iLCJjb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBtZW51KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCl7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnRVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5kZWNyZWFzZVZvbHVtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuaW5jcmVhc2VWb2x1bWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZXhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LmNoYW5nZU1lbnVUeXBlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5HQU1FT1ZFUil7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyB1cCAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBtZW51LnNoaWZ0VXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5lbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuU1RBUlQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnRVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZW51LmVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vIG1lbnVcbmNvbnN0IG1lbnVBcnJvd0ltZyA9IG5ldyBJbWFnZSgpO1xubWVudUFycm93SW1nLnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9saWZlLnBuZyc7XG5cbmNvbnN0IGtleWJvYXJkTGVmdCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qga2V5Ym9hcmRSaWdodCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qga2V5Ym9hcmRVcCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qga2V5Ym9hcmREb3duID0gbmV3IEltYWdlKCk7XG5rZXlib2FyZExlZnQuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X2xlZnQucG5nJztcbmtleWJvYXJkTGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93SW1nSG9yaXpvbnRhbFwiKTtcbmtleWJvYXJkUmlnaHQuc3JjID0gJy4vc3JjL2ltYWdlcy9tZW51L2Fycm93X3JpZ2h0LnBuZyc7XG5rZXlib2FyZFJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dJbWdIb3Jpem9udGFsXCIpO1xua2V5Ym9hcmRVcC5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lbnUvYXJyb3dfdXAucG5nJztcbmtleWJvYXJkVXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ1ZlcnRpY2FsXCIpO1xua2V5Ym9hcmREb3duLnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9hcnJvd19kb3duLnBuZyc7XG5rZXlib2FyZERvd24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0ltZ1ZlcnRpY2FsXCIpO1xuXG5leHBvcnQgY29uc3QgYXJyb3dzID0gW2tleWJvYXJkTGVmdCwga2V5Ym9hcmRSaWdodCwga2V5Ym9hcmRVcCwga2V5Ym9hcmREb3duXTtcbmV4cG9ydCBjb25zdCBtZW51QXJyb3cgPSBbbWVudUFycm93SW1nXTtcblxuLy8gc2NlbmVcbmNvbnN0IHBsYXRmb3JtTGVmdF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzEgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfMiA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBwbGF0Zm9ybUxlZnRfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1NaWRfMyA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcGxhdGZvcm1SaWdodF8zID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHBsYXRmb3JtTGVmdF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybU1pZF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBwbGF0Zm9ybVJpZ2h0XzQgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgcGxhdGZvcm1MZWZ0XzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtTWlkXzUgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHBsYXRmb3JtUmlnaHRfNSA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBjbG91ZF8xID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF80ID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBjbG91ZF82ID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IGJ1c2hfMSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF8yID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1c2hfNCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgYnVzaF81ID0gbmV3IEltYWdlKCk7XG5jb25zdCBidXNoXzYgPSBuZXcgSW1hZ2UoKTtcblxuY29uc3QgZmxvd2VyXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGZsb3dlcl8yID0gbmV3IEltYWdlKCk7XG5cbmNvbnN0IHRyZWVfMSA9IG5ldyBJbWFnZSgpO1xuXG5jb25zdCBoaWxsXzEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfMiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF8zID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfNSA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF82ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzcgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGhpbGxfOCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGlsbF85ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzEwID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzExID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzEyID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzEzID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE0ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE1ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE2ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE3ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE4ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzE5ID0gbmV3IEltYWdlKCk7XG5jb25zdCBoaWxsXzIwID0gbmV3IEltYWdlKCk7XG5cblxucGxhdGZvcm1MZWZ0XzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfMS5wbmcnO1xucGxhdGZvcm1NaWRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzEucG5nJztcbnBsYXRmb3JtUmlnaHRfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfMS5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF8yLnBuZyc7XG5wbGF0Zm9ybU1pZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfMi5wbmcnO1xucGxhdGZvcm1SaWdodF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF8yLnBuZyc7XG5cbnBsYXRmb3JtTGVmdF8zLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1MZWZ0XzMucG5nJztcbnBsYXRmb3JtTWlkXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybU1pZGRsZV8zLnBuZyc7XG5wbGF0Zm9ybVJpZ2h0XzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybVJpZ2h0XzMucG5nJztcblxucGxhdGZvcm1MZWZ0XzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9wbGF0Zm9ybUxlZnRfNC5wbmcnO1xucGxhdGZvcm1NaWRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTWlkZGxlXzQucG5nJztcbnBsYXRmb3JtUmlnaHRfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtUmlnaHRfNC5wbmcnO1xuXG5wbGF0Zm9ybUxlZnRfNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3BsYXRmb3JtTGVmdF81LnBuZyc7XG5wbGF0Zm9ybU1pZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1NaWRkbGVfNS5wbmcnO1xucGxhdGZvcm1SaWdodF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvcGxhdGZvcm1SaWdodF81LnBuZyc7XG5cbmNsb3VkXzEuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF8xLnBuZyc7XG5jbG91ZF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfMi5wbmcnO1xuY2xvdWRfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzMucG5nJztcbmNsb3VkXzQuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9jbG91ZF80LnBuZyc7XG5jbG91ZF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvY2xvdWRfNi5wbmcnO1xuY2xvdWRfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Nsb3VkXzYucG5nJztcblxuYnVzaF8xLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF8xLnBuZyc7XG5idXNoXzIuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzIucG5nJztcbmJ1c2hfMy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfMy5wbmcnO1xuYnVzaF80LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvYnVzaF80LnBuZyc7XG5idXNoXzUuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9idXNoXzUucG5nJztcbmJ1c2hfNi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2J1c2hfNi5wbmcnO1xuXG5mbG93ZXJfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8xLnBuZyc7XG5mbG93ZXJfMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2Zsb3dlcl8yLnBuZyc7XG5cbnRyZWVfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL3RyZWVfMS5wbmcnO1xuXG5cbmhpbGxfMS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMS5wbmcnO1xuaGlsbF8yLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yLnBuZyc7XG5oaWxsXzMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzMucG5nJztcbmhpbGxfNC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNC5wbmcnO1xuaGlsbF81LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF81LnBuZyc7XG5oaWxsXzYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzYucG5nJztcbmhpbGxfNy5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfNy5wbmcnO1xuaGlsbF84LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF84LnBuZyc7XG5oaWxsXzkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzkucG5nJztcbmhpbGxfMTAuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEwLnBuZyc7XG5oaWxsXzExLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xMS5wbmcnO1xuaGlsbF8xMi5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTIucG5nJztcbmhpbGxfMTMuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzEzLnBuZyc7XG5oaWxsXzE0LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNC5wbmcnO1xuaGlsbF8xNS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTUucG5nJztcbmhpbGxfMTYuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE2LnBuZyc7XG5oaWxsXzE3LnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8xNy5wbmcnO1xuaGlsbF8xOC5zcmMgPSAnLi9zcmMvaW1hZ2VzL3NjZW5lL2hpbGxfMTgucG5nJztcbmhpbGxfMTkuc3JjID0gJy4vc3JjL2ltYWdlcy9zY2VuZS9oaWxsXzE5LnBuZyc7XG5oaWxsXzIwLnNyYyA9ICcuL3NyYy9pbWFnZXMvc2NlbmUvaGlsbF8yMC5wbmcnO1xuXG4vLyBpdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV9taWQgPSBbJycsIHBsYXRmb3JtTWlkXzEsIHBsYXRmb3JtTWlkXzIsIHBsYXRmb3JtTWlkXzMsIHBsYXRmb3JtTWlkXzQsIHBsYXRmb3JtTWlkXzVdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtX2xlZnQgPSBbJycsIHBsYXRmb3JtTGVmdF8xLCBwbGF0Zm9ybUxlZnRfMiwgcGxhdGZvcm1MZWZ0XzMsIHBsYXRmb3JtTGVmdF80LCBwbGF0Zm9ybUxlZnRfNV07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fcmlnaHQgPSBbJycsIHBsYXRmb3JtUmlnaHRfMSwgcGxhdGZvcm1SaWdodF8yLCBwbGF0Zm9ybVJpZ2h0XzMsIHBsYXRmb3JtUmlnaHRfNCwgcGxhdGZvcm1SaWdodF81XTtcblxuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzEgPSBbcGxhdGZvcm1MZWZ0XzEsIHBsYXRmb3JtTWlkXzEsIHBsYXRmb3JtUmlnaHRfMV07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fMiA9IFtwbGF0Zm9ybUxlZnRfMiwgcGxhdGZvcm1NaWRfMiwgcGxhdGZvcm1SaWdodF8yXTtcbmV4cG9ydCBjb25zdCBwbGF0Zm9ybV8zID0gW3BsYXRmb3JtTGVmdF8zLCBwbGF0Zm9ybU1pZF8zLCBwbGF0Zm9ybVJpZ2h0XzNdO1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtXzQgPSBbcGxhdGZvcm1MZWZ0XzQsIHBsYXRmb3JtTWlkXzQsIHBsYXRmb3JtUmlnaHRfNF07XG5leHBvcnQgY29uc3QgcGxhdGZvcm1fNSA9IFtwbGF0Zm9ybUxlZnRfNSwgcGxhdGZvcm1NaWRfNSwgcGxhdGZvcm1SaWdodF81XTtcbmV4cG9ydCBjb25zdCBidXNoZXMgPSBbYnVzaF8xLCBidXNoXzIsIGJ1c2hfMywgYnVzaF80LCBidXNoXzUsIGJ1c2hfNl07XG5leHBvcnQgY29uc3QgY2xvdWRzID0gW2Nsb3VkXzEsIGNsb3VkXzIsIGNsb3VkXzMsIGNsb3VkXzQsIGNsb3VkXzUsIGNsb3VkXzZdO1xuZXhwb3J0IGNvbnN0IGZsb3dlcnMgPSBbZmxvd2VyXzEucG5nLCBmbG93ZXJfMi5wbmddO1xuZXhwb3J0IGNvbnN0IHRyZWVzID0gW3RyZWVfMV07XG4vL2Nsb3NlXG5leHBvcnQgY29uc3QgaGlsbHNfMSA9IFtoaWxsXzMsIGhpbGxfNCwgaGlsbF8xMywgaGlsbF8xNCwgaGlsbF8xNSwgaGlsbF8xNiwgaGlsbF8xN107XG5leHBvcnQgY29uc3QgaGlsbHNfMiA9IFtoaWxsXzEsIGhpbGxfMiwgaGlsbF84LCBoaWxsXzksIGhpbGxfMTAsIGhpbGxfMTEsIGhpbGxfMTJdO1xuZXhwb3J0IGNvbnN0IGhpbGxzXzMgPSBbaGlsbF81LCBoaWxsXzIwXTtcbmV4cG9ydCBjb25zdCBoaWxsc180ID0gW2hpbGxfNiwgaGlsbF83LCBoaWxsXzE4LCBoaWxsXzE5XTtcblxuXG5jb25zdCBjb2lucyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDE5OyBpKyspIHtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBgLi9zcmMvaW1hZ2VzL2l0ZW1zL2NvaW4vY29pbl8ke2l9LnBuZ2A7XG4gICAgY29pbnMucHVzaChpbWFnZSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb2luID0gY29pbnM7IiwiaW1wb3J0IHtDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEgsIENPTlRST0xfQ0FOVkFTX0hFSUdIVCwgQ09OVFJPTF9DQU5WQVNfV0lEVEh9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgVHV0b3JpYWwgZnJvbSAnLi9tZW51L3R1dG9yaWFsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGxldCB0dXRvcmlhbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sQ2FudmFzJyk7XG4gICAgdHV0b3JpYWxDYW52YXMuaGVpZ2h0ID0gQ09OVFJPTF9DQU5WQVNfSEVJR0hUO1xuICAgIHR1dG9yaWFsQ2FudmFzLndpZHRoID0gQ09OVFJPTF9DQU5WQVNfV0lEVEg7XG4gICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgY2FudmFzLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgY29udHJvbGN0eCA9IHR1dG9yaWFsQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCwgY3R4KTtcbiAgICBsZXQgdHV0b3JpYWwgPSBuZXcgVHV0b3JpYWwoQ09OVFJPTF9DQU5WQVNfSEVJR0hULENPTlRST0xfQ0FOVkFTX1dJRFRILGNvbnRyb2xjdHgsIGdhbWUpO1xuICAgIGdhbWUuc3RhcnQoKTtcbiAgICB0dXRvcmlhbC5zdGFydCgpO1xuICAgIFxuICAgIFxuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbi8vIGltYWdlc1xuXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gICAgICAgIC8vIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSBsYXN0VGltZTtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsQ0FOVkFTX1dJRFRILENBTlZBU19IRUlHSFQpO1xuICAgICAgICBjb250cm9sY3R4LmNsZWFyUmVjdCgwLDAsQ09OVFJPTF9DQU5WQVNfV0lEVEgsQ09OVFJPTF9DQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICB0dXRvcmlhbC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgdHV0b3JpYWwuZHJhdyhjb250cm9sY3R4KTtcblxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICBnYW1lLmRyYXcoY3R4KTtcbiAgICAgICAgLy8gZ2FtZS5kcmF3KGNvbnRyb2xjdHgpO1xuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxuXG59KTtcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBcIlxcblxcblxcblxcdCAgICAgIFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHhYXFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGJcXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcblxcblxcblxcdFxcdFxcdFxcdFxcdCBcXHRcXHQgIFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgYlxcdFxcdGNjY1xcdFxcdFxcdFQgICB0YlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4WFxcdFxcdFxcdHh4eHh4eHh4eHh4WFxcblxcdFxcdFxcdFxcdFxcdCB0XFxuXFx0XFx0XFx0XFx0XFx0eHh4eHh4WFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIFxcdFxcblxcblxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgICBcXHQgeHh4eHh4eFhcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHhYXFxuXFx0YlxcdFQgIHRcXHRcXHRHXFx0XFx0XFx0XFx0XFx0XFx0Ylxcbnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFhcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXG5cXG5cXG5cXHRcXHRcIiIsImltcG9ydCB7IGFycm93cyB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBTVEFSVDogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBJTlRSTzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XG4gICAgICAgIHRoaXMub3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51T3B0aW9ucycpO1xuICAgICAgICB0aGlzLm1haW5Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMub3B0aW9uc0xpc3QubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uTWVudU9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uTWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLm9wdGlvbkN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLm9wdGlvbkxlbmd0aCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdC5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdvQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dvTWVudU9wdGlvbkNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmdvQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dvTWVudU9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5nb0xlbmd0aCA9IHRoaXMuZ29PcHRpb25zTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydE1lbnVPcHRpb25Db250YWluZXInKTtcbiAgICAgICAgdGhpcy5zdGFydEN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydE9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5zdGFydExlbmd0aCA9IHRoaXMuc3RhcnRPcHRpb25zTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5tZW51SGFzaCA9IHtcbiAgICAgICAgICAgIDA6ICdtYWluJyxcbiAgICAgICAgICAgIDE6ICdvcHRpb25zJyxcbiAgICAgICAgICAgIDI6ICdjb250cm9sJyxcbiAgICAgICAgICAgIDM6ICdnYW1lb3ZlcicsXG4gICAgICAgICAgICA0OiAnc3RhcnQnLFxuICAgICAgICAgICAgNTogJ2ludHJvJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1lbnVUeXBlID0gdGhpcy5tZW51SGFzaFswXTtcbiAgICB9XG5cbiAgICBzaGlmdERvd24oKXtcbiAgICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9pbnRlckFycm93Jyk7XG4gICAgICAgIGFycm93LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9tZW51Q3Vyc29yLnBuZyc7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHRoaXMubWVudVR5cGUpeyAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMF06XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLnJlbW92ZUNoaWxkKHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCAlPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zTGlzdFt0aGlzLmN1cnJlbnQgJSB0aGlzLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzFdOlxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50QXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkN1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25DdXJyZW50ID49IHRoaXMub3B0aW9uTGVuZ3RoKSB0aGlzLm9wdGlvbkN1cnJlbnQgJT0gdGhpcy5vcHRpb25MZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnQgJSB0aGlzLm9wdGlvbkxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnNbdGhpcy5vcHRpb25DdXJyZW50XS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFszXTpcbiAgICAgICAgICAgICAgICBsZXQgZ29BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgZ29BcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvQXJyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29PcHRpb25zTGlzdFt0aGlzLmdvQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29DdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29DdXJyZW50ID49IHRoaXMuZ29MZW5ndGgpIHRoaXMuZ29DdXJyZW50ICU9IHRoaXMuZ29MZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkID0gdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50ICUgdGhpcy5nb0xlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dvQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ29udGFpbmVyc1t0aGlzLmdvQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbNF06XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRBcnJvdycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGFydEFycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T3B0aW9uc0xpc3RbdGhpcy5zdGFydEN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0Q3VycmVudCA+PSB0aGlzLnN0YXJ0TGVuZ3RoKSB0aGlzLnN0YXJ0Q3VycmVudCAlPSB0aGlzLnN0YXJ0TGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZCA9IHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudCAlIHRoaXMuc3RhcnRMZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lcnNbdGhpcy5zdGFydEN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNoaWZ0VXAoKXtcbiAgICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9pbnRlckFycm93Jyk7XG4gICAgICAgIGFycm93LnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVudS9tZW51Q3Vyc29yLnBuZyc7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLm1lbnVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMF06XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyc1t0aGlzLmN1cnJlbnRdLnJlbW92ZUNoaWxkKHRoaXMubWFpbkNvbnRhaW5lcnNbdGhpcy5jdXJyZW50XS5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudCAlIHRoaXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQXJyb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250YWluZXJzW3RoaXMuY3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMV06XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25BcnJvdycpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBcnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkN1cnJlbnQgPCAwKSB0aGlzLm9wdGlvbkN1cnJlbnQgPSB0aGlzLm9wdGlvbkxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQgPSB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50ICUgdGhpcy5vcHRpb25MZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wdGlvbkFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25Db250YWluZXJzW3RoaXMub3B0aW9uQ3VycmVudF0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbM106XG4gICAgICAgICAgICAgICAgbGV0IGdvQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29BcnJvdycpO1xuICAgICAgICAgICAgICAgIGdvQXJyb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb0Fycm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvT3B0aW9uc0xpc3RbdGhpcy5nb0N1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdvQ3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvQ3VycmVudCA8IDApIHRoaXMuZ29DdXJyZW50ID0gdGhpcy5nb0xlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkID0gdGhpcy5nb09wdGlvbnNMaXN0W3RoaXMuZ29DdXJyZW50ICUgdGhpcy5nb0xlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5nb1NlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdnb0Fycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nb0NvbnRhaW5lcnNbdGhpcy5nb0N1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzRdOlxuICAgICAgICAgICAgICAgIGxldCBzdGFydEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QXJyb3cnKTtcbiAgICAgICAgICAgICAgICBzdGFydEFycm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3RhcnRBcnJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydE9wdGlvbnNMaXN0W3RoaXMuc3RhcnRDdXJyZW50XS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEN1cnJlbnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFydEN1cnJlbnQgPCAwKSB0aGlzLnN0YXJ0Q3VycmVudCA9IHRoaXMuc3RhcnRMZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZCA9IHRoaXMuc3RhcnRPcHRpb25zTGlzdFt0aGlzLnN0YXJ0Q3VycmVudCAlIHRoaXMuc3RhcnRMZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydEFycm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lcnNbdGhpcy5zdGFydEN1cnJlbnRdLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VNZW51VHlwZSh4KXtcbiAgICAgICAgdGhpcy5tZW51VHlwZSA9IHRoaXMubWVudUhhc2hbeF07XG4gICAgfVxuXG4gICAgZW50ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMF0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIC8vIHJlc3VtZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIG5ldyBnYW1lXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubmV3R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbkN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzJdKXtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzNdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nb0N1cnJlbnQpe1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzRdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zdGFydEN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIC8vIG9uZSBwbGF5ZXIgZ2FtZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sc1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBleGl0XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGxldCBlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29Db250YWluZXInKTtcbiAgICAgICAgZW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDMpO1xuICAgIH1cblxuICAgIHN0YXJ0TWVudSgpe1xuICAgICAgICBsZXQgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRDb250YWluZXInKTtcbiAgICAgICAgc3RhcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoNCk7XG4gICAgfVxuXG4gICAgc2hvd01lbnUoKXtcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgICAgIFxuICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgXG4gICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbnRyb2xzKCl7XG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzTWVudUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICBjb250cm9sc01lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdG9nZ2xlT3B0aW9ucygpe1xuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG9wdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHNwYXduKCl7XG4gICAgfVxuXG4gICAgZGVjcmVhc2VWb2x1bWUoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMV0pIHtcbiAgICAgICAgICAgIGxldCB2b2x1bWUgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4UmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSAtIDEwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNSYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUudmFsdWUgPSBwYXJzZUludCh2b2x1bWUudmFsdWUpIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGluY3JlYXNlVm9sdW1lKCl7XG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzFdKSB7XG4gICAgICAgICAgICBsZXQgdm9sdW1lID0gJyc7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uQ3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeFJhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZS52YWx1ZSA9IHBhcnNlSW50KHZvbHVtZS52YWx1ZSkgKyAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljUmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lLnZhbHVlID0gcGFyc2VJbnQodm9sdW1lLnZhbHVlKSArIDEwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzBdKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWFwKCl7fVxuXG4gICAgZXhpdCgpe1xuICAgICAgICB0aGlzLmdhbWUucGF1c2UoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvbnRyb2xzKCkge1xuICAgICAgICBsZXQga2V5Ym9hcmQgPSAnUVdFUlRZVUlPUEFTREZHSEpLTFpYQ1ZCTk0nO1xuICAgICAgICBsZXQgbnVtcyA9ICcxMjM0NTY3ODkwJztcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBsZXR0ZXIgPSAwO1xuICAgICAgICBsZXQga2V5QXJyYXkgPSBbXG4gICAgICAgICAgICBbNCwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgNCwgMTJdLFxuICAgICAgICAgICAgWzUsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDUsIDVdLFxuICAgICAgICAgICAgWzAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDUsIDUsIDBdLFxuICAgICAgICAgICAgWzgsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDUsIDUsIDVdLFxuICAgICAgICAgICAgWzYsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDAsIDAsIDZdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDcsIDAsIDAsIDksIDEwLCAxMV1cbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBrZXlBcnJheS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3cke3Jvd31gKTtcbiAgICAgICAgICAgIGtleUFycmF5W3Jvd10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5Ym9hcmRLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGBrZXkke251bXNbbnVtYmVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke251bXNbbnVtYmVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5TnVtYmVyQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRub2RlLmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGtleSR7a2V5Ym9hcmRbbGV0dGVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXJub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtrZXlib2FyZFtsZXR0ZXJdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVybm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleUxldHRlckNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJub2RlLmFwcGVuZENoaWxkKGxldHRlckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZXR0ZXJub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3BhY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFycm93IGtleXNcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LmFwcGVuZENoaWxkKGFycm93c1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0QXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnRBcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFuay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJsYW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cEFycm93LmFwcGVuZENoaWxkKGFycm93c1syXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cEFycm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXBBcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bkFycm93LmFwcGVuZENoaWxkKGFycm93c1szXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvd25BcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1cEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRibGFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRibGFuay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0YmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBibGFuayBrZXlzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1YXJ0ZXJLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmVydGljYWxIYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hpZnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXBzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhY2tzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVycy9wbGF5ZXInO1xuaW1wb3J0IElucHV0SGFuZGxlciBmcm9tICcuLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCB7dHJlZXMsIGJ1c2hlc30gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbCB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udHJvbGN0eCwgZ2FtZSl7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eCA9IGNvbnRyb2xjdHg7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHtcbiAgICAgICAgICAgIDE6IG5ldyBQbGF0Zm9ybUJ1aWxkZXIoMjUsIDUwLCA5NSwgMC41KVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2NlbmVPYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICAgICAgbmV3IElucHV0SGFuZGxlcih0aGlzLnBsYXllciwgdGhpcyk7XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpe1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lLCAwLjA1NSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxvc2VMaWZlKCl7fVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZmlsbFN0eWxlPSAncmVkJztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wbGF0Zm9ybXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1zW2tleV0uZHJhdyh0aGlzLnR1dG9yaWFsY3R4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKHRyZWVzWzBdLCA0MjAsIC01LCA0MCwgMTAwKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UodHJlZXNbMF0sIDQ2Mi41LCAyMCwgMzAsIDc1KTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5kcmF3SW1hZ2UoYnVzaGVzWzNdLCAxNjUsIDc1LCA3MCwgMjApO1xuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmRyYXdJbWFnZShidXNoZXNbMV0sIDM4NSwgNzUsIDY1LCAyMCk7XG4gICAgICAgIHRoaXMudHV0b3JpYWxjdHguZHJhd0ltYWdlKGJ1c2hlc1syXSwgNDc1LCA3NSwgODUsIDIwKTtcblxuICAgICAgICB0aGlzLnR1dG9yaWFsY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwwLDApJztcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyh0aGlzLnR1dG9yaWFsY3R4KTtcbiAgICAgICAgdGhpcy50dXRvcmlhbGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBMQVlFUiwgR1JBVklUWSB9IGZyb20gJy4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGV0ZWN0Q29sbGlzaW9ufSBmcm9tICcuLi91dGlsL2NvbGxpc2lvbic7XG5cblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIFNUQVJUOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIElOVFJPOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IFBMQVlFUjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBQTEFZRVI7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IGxldmVsRGF0YTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nYW1lLmdhbWVXaWR0aCAgLSB0aGlzLndpZHRoLzIsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUuZ2FtZUhlaWdodC8yIFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55X3ZlbG9jaXR5ID0gR1JBVklUWTtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGRlbHRhVGltZSwgeCl7XG4gICAgICAgIHRoaXMueF92ZWxvY2l0eSAqPSAwLjkgKiAoZGVsdGFUaW1lICogeCk7XG4gICAgICAgIHRoaXMueV92ZWxvY2l0eSArPSAwLjk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnhfdmVsb2NpdHk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnlfdmVsb2NpdHk7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2V0X3goKXtcbiAgICAgICAgcmV0dXJuIHRoaXMueF92ZWxvY2l0eTtcbiAgICB9XG5cbiAgICBnZXRPZmZzZXRfeShqdW1wKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsganVtcDtcbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcblxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUsIHgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW92ZShkZWx0YVRpbWUsIHgpO1xuXG4gICAgICAgIC8vY2hlY2sgY29sbGlzaW9ucyB3aXRoIHdhbGxcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5nYW1lLmdhbWVXaWR0aCkgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lLmdhbWVXaWR0aCAtIHRoaXMud2lkdGg7XG5cbiAgICAgICAgLy9hZGp1c3QgY2FtZXJhIG9mZnNldFxuXG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHcgZmxvb3IgXG4gICAgICAgIC8vIGlmKHRoaXMucG9zaXRpb24ueSA8IDApIHRoaXMucG9zaXRpb24ueSA9IDA7XG4gICAgICAgIC8vIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5nYW1lLmdhbWVIZWlnaHQpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LXRoaXMuaGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5nYW1lLmdhbWVIZWlnaHQrMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lLmdhbWVIZWlnaHQgLyAyO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvc2VMaWZlKCk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gY2hlY2sgY29sbGlzaW9ucyB3aXRoIHBsYXRmb3Jtc1xuXG4gICAgICAgIHRoaXMuZ2FtZS5zY2VuZU9iamVjdHMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0Q29sbGlzaW9uKHRoaXMsIHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm0ucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdhbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChkZXRlY3RDb2xsaXNpb24odGhpcywgaXRlbSkpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvaW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2FtZS5pdGVtc1tpdGVtLmtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWUucGxhdGZvcm1zKS5mb3JFYWNoIChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gdGhpcy5nYW1lLnBsYXRmb3Jtc1trZXldO1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBwbGF0Zm9ybSkpe1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm0ucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAvLyB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge1NQRUVELCBKVU1QfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgU1RBUlQ6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgSU5UUk86IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBnYW1lKXtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIC8vIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNhbkp1bXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRPZmZzZXRfeSgtSlVNUCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAtU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRBcnJvd1wiKS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSBTUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25BcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHVwICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRBcnJvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEFycm93XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuICAgIFxuICAgIGNvbnRyb2xsZXIgKGUpe1xuICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlJVTk5JTkcpe1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbG9vcCAoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy51cCAmJiB0aGlzLnBsYXllci5jYW5KdW1wICkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9IC1KVU1QO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IGZhbHNlOyBcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhpdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oaXQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gU1BFRUQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gLVNQRUVEOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnhfdmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnBsYXllci5oZWlnaHQgfHwgdGhpcy5wbGF5ZXIueV92ZWxvY2l0eSA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29udHJvbGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgICAgICB9XG59XG5cblxuIiwiaW1wb3J0IFN0YXRpY09iamVjdCBmcm9tICcuL3N0YXRpY09iamVjdCc7XG5pbXBvcnQgeyBidXNoZXMgfSBmcm9tICcuLi9pbWdMb2FkZXInO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbC91dGlsJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1c2ggZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgseSwgbnVtYmVyKXtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBidXNoZXNbdGhpcy5udW1iZXJdO1xuICAgICAgICB0aGlzLm11bHRpcGxpZXIgPSAyLjU7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5IFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDIgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM1OSAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDc1IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAyMzggLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA5NiAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzg1IC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gODAgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDI5NyAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDExMyAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMjkwIC8gdGhpcy5tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNzQgLyB0aGlzLm11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDIwOCAvIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsImltcG9ydCB7IENBTlZBU19XSURUSCwgSlVNUF9IRUlHSFQsIFNQRUVELCBDQU5WQVNfSEVJR0hULCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2xvdWRzIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGtleSwgcG9zaXRpb25feCkge1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLnJhbmRvbUludCgwLCA1KTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGNsb3Vkc1t0aGlzLm51bWJlcl07XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uX3ggfHwgKHRoaXMuZ2FtZS5nYW1lV2lkdGggKyB0aGlzLmdhbWUuZ2FtZVdpZHRoIC8gMikgKiAoTWF0aC5yYW5kb20oMCwgMSkpLFxuICAgICAgICAgICAgeTogKHRoaXMuZ2FtZS5nYW1lSGVpZ2h0ICsgdGhpcy5nYW1lLmdhbWVIZWlnaHQvMikgLyB0aGlzLnJhbmRvbUludCgwLjUsMTApXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ID0gLU1hdGgucmFuZG9tKDEsMik7XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzcGF3bigpe1xuICAgICAgICAodGhpcy5nYW1lLmdhbWVXaWR0aCArIHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyKSAqIE1hdGgucmFuZG9tKDAsIDEpO1xuICAgIH1cblxuICAgIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZ2FtZS5kZWxldGVFbGVtZW50KCdjbG91ZHMnLCB0aGlzLmtleSk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gdGhpcy5yYW5kb21JbnQoMiw0KTtcbiAgICAgICAgc3dpdGNoICh0aGlzLm51bWJlcil7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAyNTIvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gODE2L211bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA2MC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA0NjUvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE2Mi9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA3MDIvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE4NC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA2OTgvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE3Ni9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4NTgvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDI5NC9tdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA4OTEvbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueF92ZWxvY2l0eTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMubW92ZSgpO1xuXG4gICAgICAgIC8vY2hlY2sgY29sbGlzaW9ucyB3aXRoIHdhbGxcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCArIHRoaXMuZ2FtZS5nYW1lV2lkdGggLyAyIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG59XG5cbiIsImltcG9ydCBTdGF0aWNPYmplY3QgZnJvbSAnLi9zdGF0aWNPYmplY3QnO1xuaW1wb3J0IHsgY29pbiB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW4gZXh0ZW5kcyBTdGF0aWNPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBrZXkpIHtcbiAgICAgICAgc3VwZXIoeCx5KTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgICAgICB0aGlzLmltYWdlID0gY29pbjtcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb2luJztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQvMlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgdGhpcy5jeWNsZSArPSAwLjU7XG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID4gdGhpcy5pbWFnZS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlW01hdGguZmxvb3IodGhpcy5jeWNsZSldLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgUGxhdGZvcm1MZWZ0IGZyb20gJy4vcGxhdGZvcm1fbGVmdCc7XG5pbXBvcnQgUGxhdGZvcm1SaWdodCBmcm9tICcuL3BsYXRmb3JtX3JpZ2h0JztcbmltcG9ydCB7QkxPQ0tTSVpFLCBDQU5WQVNfSEVJR0hUfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKG51bUJsb2NrcywgeCwgeSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJMT0NLU0laRSAqIChudW1CbG9ja3MrMik7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLnBpZWNlcyA9IFtdO1xuICAgICAgICB0aGlzLm51bUJsb2NrcyA9IG51bUJsb2NrcztcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ID0geDtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV95ID0geTtcbiAgICAgICAgdGhpcy54X2ZpbGxlciA9IHg7XG4gICAgICAgIHRoaXMueV9maWxsZXIgPSB5ICsgQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmZpbGxlckNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29sb3IgPSBNYXRoLmNlaWwodGhpcy5maWxsZXJDb2xvcik7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpe1xuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybUxlZnQodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3ksIHRoaXMuY29sb3IpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubnVtQmxvY2tzOyBpID4gMDsgaS0tKXtcbiAgICAgICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtUGllY2UodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3ksIHRoaXMuY29sb3IpKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1feCArPSBCTE9DS1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1SaWdodCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSwgdGhpcy5jb2xvcikpO1xuXG4gICAgfVxuXG5cbiAgICBtb3ZlKHBsYXllcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSBwbGF5ZXIuZ2V0T2Zmc2V0X3koKTtcblxuICAgICAgICB0aGlzLnhfZmlsbGVyIC09IHBsYXllci5nZXRPZmZzZXRfeCgpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtX3ggLT0gcGxheWVyLmdldE9mZnNldF94KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuXG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UudXBkYXRlKHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMucGllY2VzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgcGllY2UuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKE1hdGguZmxvb3IodGhpcy5maWxsZXJDb2xvcikpe1xuICAgICAgICAgICAgY2FzZSAwOiBcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoOTAsNDksMzMpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTE1LDcyLDQ1KSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDEyMCw4Miw1MCknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMjMsOTIsNTcpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTM4LDEyMCw2OSknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDQ5LDI1KSc7XG4gICAgICAgIH1cblxuICAgICAgICBjdHgucmVjdCh0aGlzLnhfZmlsbGVyLCB0aGlzLnlfZmlsbGVyLCB0aGlzLnBsYXRmb3JtX3gtdGhpcy54X2ZpbGxlcitCTE9DS1NJWkUsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBQbGF0Zm9ybVBpZWNlIGZyb20gJy4vcGxhdGZvcm1fcGllY2UnO1xuaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7cGxhdGZvcm1fbGVmdH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1MZWZ0IGV4dGVuZHMgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY29sb3IpIHtcbiAgICAgICAgc3VwZXIoeCx5LCBjb2xvcik7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwbGF0Zm9ybV9sZWZ0W2NvbG9yXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHBsYXRmb3JtX21pZCB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmltYWdlID0gcGxhdGZvcm1fbWlkW2NvbG9yXTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmUocGxheWVyKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBwbGF5ZXIuZ2V0T2Zmc2V0X3goKTtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHBsYXllci5nZXRPZmZzZXRfeSgpO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5O1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcil7XG4gICAgICAgIHRoaXMubW92ZShwbGF5ZXIpO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCB7IEJMT0NLU0laRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwbGF0Zm9ybV9yaWdodCB9IGZyb20gJy4uL2ltZ0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtTGVmdCBleHRlbmRzIFBsYXRmb3JtUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHN1cGVyKHgseSwgY29sb3IpO1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHBsYXRmb3JtX3JpZ2h0W2NvbG9yXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgbW92ZShwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHBsYXllci5nZXRPZmZzZXRfeCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKHBsYXllcikge1xuICAgICAgICB0aGlzLm1vdmUocGxheWVyKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IHRyZWVzIH0gZnJvbSAnLi4vaW1nTG9hZGVyJztcbmltcG9ydCBTdGF0aWNPYmplY3QgZnJvbSAnLi9zdGF0aWNPYmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIGV4dGVuZHMgU3RhdGljT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplKSB7XG4gICAgICAgIHN1cGVyKHgseSk7XG4gICAgICAgIHRoaXMud2lkdGggPSA1MCAqIHNpemU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTEwICogc2l6ZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRyZWVzWzBdO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRlY3RDb2xsaXNpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBsZXQgb2JqTGVmdCA9IG9iai54O1xuICAgIGxldCBvYmpSaWdodCA9IG9iai54ICsgb2JqLndpZHRoO1xuICAgIGxldCBvYmpUb3AgPSBvYmoucG9zaXRpb24ueTtcbiAgICBsZXQgb2JqQm90dG9tID0gb2JqLnBvc2l0aW9uLnkgKyBvYmouaGVpZ2h0O1xuXG4gICAgbGV0IHRhcmdldExlZnQgPSB0YXJnZXQucG9zaXRpb24ueDtcbiAgICBsZXQgdGFyZ2V0UmlnaHQgPSB0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aDtcbiAgICBsZXQgdGFyZ2V0VG9wID0gdGFyZ2V0LnBvc2l0aW9uLnk7XG4gICAgbGV0IHRhcmdldEJvdHRvbSA9IHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodDtcblxuICAgIGlmIChcbiAgICAgICAgb2JqQm90dG9tID49IHRhcmdldFRvcCAmJlxuICAgICAgICBvYmpUb3AgPD0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIC8vIG9iakJvdHRvbSA8PSB0YXJnZXRUb3AgJiZcbiAgICAgICAgLy8gb2JqVG9wID49IHRhcmdldEJvdHRvbSAmJlxuICAgICAgICBvYmoucG9zaXRpb24ueCA+PSB0YXJnZXRMZWZ0ICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ICsgb2JqLndpZHRoIDw9IHRhcmdldFJpZ2h0XG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IGxldmVsMDEgZnJvbSAnLi4vbGV2ZWxzL2xldmVsXzEudHh0JztcbmltcG9ydCB7IEhFSUdIVFNQQU4sIFdJRFRIU1BBTiwgVFJFRUhFSUdIVCwgVFJFRVdJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBQbGF0Zm9ybUJ1aWxkZXIgZnJvbSAnLi4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL3NjZW5lL3RyZWUnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi4vc2NlbmUvY29pbic7XG5pbXBvcnQgQnVzaCBmcm9tICcuLi9zY2VuZS9idXNoJztcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBsZXZlbHMgPSB7XG4gICAgMTogbGV2ZWwwMVxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlTGV2ZWwgPSBsZXZlbERhdGEgPT4ge1xuICAgIGxldCBsZXZlbCA9IGxldmVsRGF0YS5zcGxpdChcIlwiKTtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBibG9ja0NvdW50ID0gMDtcbiAgICBsZXQgaXRlbUNvdW50ID0gMDtcblxuICAgIGxldCBzY2VuZU9iamVjdHMgPSBbXTtcbiAgICBsZXQgZGVjbyA9IFtdO1xuICAgIGxldCBlbmVtaWVzID0gW107XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc3dpdGNoIChsZXZlbFtpXSl7XG4gICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgIGhlaWdodCArPSBIRUlHSFRTUEFOO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOKjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1Db3VudF0gPSAobmV3IENvaW4od2lkdGgsIGhlaWdodCAtIEhFSUdIVFNQQU4sIGl0ZW1Db3VudCkpO1xuICAgICAgICAgICAgICAgIGl0ZW1Db3VudCArPSAxO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IFdJRFRIU1BBTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIGRlY28ucHVzaChuZXcgVHJlZSh3aWR0aCwgaGVpZ2h0ICsgSEVJR0hUU1BBTiwgMS41KSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBUcmVlKHdpZHRoLCBoZWlnaHQgKyBIRUlHSFRTUEFOLCAxKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgZGVjby5wdXNoKG5ldyBCdXNoKHdpZHRoLCBoZWlnaHQsIHJhbmRvbUludCgwLDUpKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgYmxvY2tDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoICs9IEJMT0NLU0laRTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgICAgIGJsb2NrQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgZGVwdGggPSA1O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMCAmJiBoZWlnaHQgPCAxMDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKGhlaWdodCA+PSAxMDAgJiYgaGVpZ2h0IDwgMjAwKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChoZWlnaHQgPj0gMjAwICYmIGhlaWdodCA8IDMwMCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoaGVpZ2h0ID49IDMwMCAmJiBoZWlnaHQgPCA0MDApOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgaGVpZ2h0ID49IDQwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY2VuZU9iamVjdHMucHVzaChuZXcgUGxhdGZvcm1CdWlsZGVyKGJsb2NrQ291bnQsIHdpZHRoLCBoZWlnaHQsIGRlcHRoKSk7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gV0lEVEhTUEFOO1xuICAgICAgICAgICAgICAgIGJsb2NrQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICAwOiBzY2VuZU9iamVjdHMsXG4gICAgICAgIDE6IGRlY28sXG4gICAgICAgIDI6IGl0ZW1zXG4gICAgfTtcblxufTsiLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufSJdLCJzb3VyY2VSb290IjoiIn0=