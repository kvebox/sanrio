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
/*! exports provided: CANVAS_HEIGHT, CANVAS_WIDTH, DIRECTIONS, JUMP, SPEED, GRAVITY, BLOCKSIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_HEIGHT", function() { return CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_WIDTH", function() { return CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUMP", function() { return JUMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEED", function() { return SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY", function() { return GRAVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKSIZE", function() { return BLOCKSIZE; });

const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 700;

const DIRECTIONS = {
    LEFT: (-1, 0),
    RIGHT: (1, 0),
    UP: (0, 1),
};

const JUMP = 15;
const SPEED = 5;

const GRAVITY = .5;
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
/* harmony import */ var _scene_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/platform */ "./src/scene/platform.js");
/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/player */ "./src/players/player.js");
/* harmony import */ var _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene/platformBuilder */ "./src/scene/platformBuilder.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");







const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};


class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;

        //13, 
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_3__["default"](this);

  
        this.platforms = {
            1: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](8, 250, 350),
            2: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](7, 150, 250),
            3: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](2, 375, 225),
            4: new _scene_platformBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](7, 20, 320),
        };
        this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_5__["default"](this);
        this.menu.generateControls();
        new _gameStateController__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.menu);
        const handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
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
    MENU: 2,
    GAMEOVER: 3
};

class GameInputHandler {
    constructor (game, menu) {
        document.addEventListener('keydown', (e) => {
            // if (e.repeat) return;
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
        } else {
            switch (e.keyCode){
                case 80:
                    game.pause();
                }
        }
        });

    //     document.addEventListener('keyup', e => {
    //     switch (e.keyCode) {
    //         case 37:
    //             if (player.speedx < 0) player.stop();
    //             break;
    //         case 39:
    //             if (player.speedx > 0) player.stop();
    //             break;
    //         case 32:
    //             if (player.speedy > 0) player.drop();
    //             break;
    //     }
    // });
    }
}

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



document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"];
    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"];
    window.ctx = canvas.getContext('2d');
    // ctx.fillStyle = '#EF5455';

    
    let game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"], _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"]);
    game.start();
    
    
    let lastTime = 0;

// images

    function gameLoop(timestamp) {
        
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0,0,_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"],_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"]);

        game.update(deltaTime);
        game.draw(ctx);


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
class Menu {
    constructor(game){
        this.optionsList = document.getElementsByClassName('menuOptions');
        this.current = 0;
        this.length = this.optionsList.length;
        
        this.audioOptionsList = document.getElementsByClassName('optionMenuOptions');
        this.optionCurrent = 0;
        this.optionLength = this.audioOptionsList.length;
        
        this.game = game;
        this.menuHash = {
            0: 'main',
            1: 'options',
            2: 'control'
        };
        this.menuType = this.menuHash[0];

    }

    shiftDown(){
        switch (this.menuType){
            case this.menuHash[0]:
                this.optionsList[this.current].removeAttribute('id', 'selected');
                this.current += 1;
                if (this.current >= this.length) this.current %= this.length;
                this.selected = this.optionsList[this.current % this.length];
                this.selected.setAttribute("id", "selected");
                break;
            case this.menuHash[1]:
                this.audioOptionsList[this.optionCurrent].removeAttribute('id', 'selected');
                this.optionCurrent += 1;
                if (this.optionCurrent >= this.optionLength) this.optionCurrent %= this.optionLength;
                this.optionSelected = this.audioOptionsList[this.optionCurrent % this.optionLength];
                this.optionSelected.setAttribute("id", "selected");
                break;
        }
    }

    shiftUp(){
        switch (this.menuType) {
            case this.menuHash[0]:
                this.optionsList[this.current].removeAttribute('id', 'selected');
                this.current -= 1;
                if (this.current < 0) this.current = this.length-1;
                this.selected = this.optionsList[this.current % this.length];
                this.selected.setAttribute("id", "selected");
                break;
            case this.menuHash[1]:
                this.audioOptionsList[this.optionCurrent].removeAttribute('id', 'selected');
                this.optionCurrent -= 1;
                if (this.optionCurrent < 0) this.optionCurrent = this.optionLength-1;
                this.optionSelected = this.audioOptionsList[this.optionCurrent % this.optionLength];
                this.optionSelected.setAttribute("id", "selected");
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
                    break;
                // controls
                case 2:
                    this.toggleControls();
                    this.changeMenuType(3);
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
            switch (this.optionCurrent) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    this.changeMenuType(0);
                    this.toggleMenu();
                    return;
                default:
                    this.exit();
            }
        }
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

    decreaseVolume(){}
    
    increaseVolume(){}

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
        // this.image = 
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

    move(deltaTime){
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
        // ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        
        this.move(deltaTime);

        //check collisions with wall
        
        if(this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;

        // this.position.x =  this.game.gameWidth-this.width;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;


        // check collisions with platforms

        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, platform)){
                this.y_velocity = 5;
                this.position.y = platform.position.y - this.height
                this.hit = true;
                this.canJump = true;
                // console.log('hit');
                // this.speedx = 0;
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




class InputHandler {
    constructor(player, game){
        // this.controller = this.controller.bind(this);
        this.left = false;
        this.right = false;
        this.up = false;
        this.controller = this.controller.bind(this);
        this.loop = this.loop.bind(this);
        this.player = player;
        this.game = game;
    }
    
    controller (e){
        var key_state = (event.type == 'keydown') ? true : false;
        
        switch (e.keyCode) {
            case 37:
            this.left = key_state;
            break;
            case 32:
            this.up = key_state;
            break;
            case 39:
            this.right = key_state;
            break;
        }
    }
    
    loop () {
        if (this.up && this.player.canJump ) {
            this.player.y_velocity = -_constants__WEBPACK_IMPORTED_MODULE_1__["JUMP"];
            this.player.canJump = false; 
            this.player.hit = false;
        } else if (this.player.hit == true) {
            // this.player.y_velocity = 0;
            this.player.hit = false;
        } 
        
        if (this.right) {
            this.player.x_velocity = _constants__WEBPACK_IMPORTED_MODULE_1__["SPEED"];
        } else if (this.left) {
            this.player.x_velocity = -_constants__WEBPACK_IMPORTED_MODULE_1__["SPEED"]; 
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

/***/ "./src/scene/platform.js":
/*!*******************************!*\
  !*** ./src/scene/platform.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
class Platform {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        // this.filler = filler;

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){

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
    constructor(numBlocks, x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"] * (numBlocks+2);
        this.height = _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        this.pieces = [];
        this.numBlocks = numBlocks;
        this.platform_x = x;
        this.platform_y = y;
        this.x_filler = x;
        this.y_filler = y + _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        // this.filler = filler;

        this.position = {
            x: x,
            y: y
        };
        this.build();
    }

    build(){
        this.pieces.push(new _platform_left__WEBPACK_IMPORTED_MODULE_1__["default"](this.platform_x, this.platform_y));
        this.platform_x += _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        for (let i = this.numBlocks; i > 0; i--){
            this.pieces.push(new _platform_piece__WEBPACK_IMPORTED_MODULE_0__["default"](this.platform_x, this.platform_y));
            this.platform_x += _constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"];
        }
        this.pieces.push(new _platform_right__WEBPACK_IMPORTED_MODULE_2__["default"](this.platform_x, this.platform_y));

    }

    draw(ctx) {
        this.pieces.forEach(piece => {
            piece.draw(ctx);
        });
        ctx.rect(this.x_filler, this.y_filler, this.platform_x-this.x_filler+_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCKSIZE"], _constants__WEBPACK_IMPORTED_MODULE_3__["CANVAS_HEIGHT"]);
        ctx.fillStyle = 'rgba(110,49,25)';
        ctx.fill();
        
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



class PlatformLeft  {
    constructor(x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];

        this.image = document.getElementById('platformPiece-left');

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

    }
}

// export function PlatformLeft(x,y){
//     PlatformPiece.call(this, x, y);
//     this.image = document.getElementById('platformPiece-left');
// }


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


class PlatformPiece {
    constructor(x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["BLOCKSIZE"];
        this.image = document.getElementById('platformPiece-middle');

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

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



class PlatformLeft {
    constructor(x, y) {
        this.width = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_1__["BLOCKSIZE"];

        this.image = document.getElementById('platformPiece-right');

        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVySW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtX2xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL3BsYXRmb3JtX3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybV9yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb2xsaXNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJB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Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InNhbnJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBDQU5WQVNfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0ge1xuICAgIExFRlQ6ICgtMSwgMCksXG4gICAgUklHSFQ6ICgxLCAwKSxcbiAgICBVUDogKDAsIDEpLFxufTtcblxuZXhwb3J0IGNvbnN0IEpVTVAgPSAxNTtcbmV4cG9ydCBjb25zdCBTUEVFRCA9IDU7XG5cbmV4cG9ydCBjb25zdCBHUkFWSVRZID0gLjU7XG5leHBvcnQgY29uc3QgQkxPQ0tTSVpFID0gMTU7IiwiaW1wb3J0IElucHV0SGFuZGxlciBmcm9tICcuL3BsYXllcnMvcGxheWVySW5wdXQnO1xuaW1wb3J0IEdhbWVJbnB1dEhhbmRsZXIgZnJvbSAnLi9nYW1lU3RhdGVDb250cm9sbGVyJztcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3NjZW5lL3BsYXRmb3JtJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcic7XG5pbXBvcnQgUGxhdGZvcm1CdWlsZGVyIGZyb20gJy4vc2NlbmUvcGxhdGZvcm1CdWlsZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51JztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDNcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRIKSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuXG4gICAgICAgIC8vMTMsIFxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG5cbiAgXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0ge1xuICAgICAgICAgICAgMTogbmV3IFBsYXRmb3JtQnVpbGRlcig4LCAyNTAsIDM1MCksXG4gICAgICAgICAgICAyOiBuZXcgUGxhdGZvcm1CdWlsZGVyKDcsIDE1MCwgMjUwKSxcbiAgICAgICAgICAgIDM6IG5ldyBQbGF0Zm9ybUJ1aWxkZXIoMiwgMzc1LCAyMjUpLFxuICAgICAgICAgICAgNDogbmV3IFBsYXRmb3JtQnVpbGRlcig3LCAyMCwgMzIwKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcyk7XG4gICAgICAgIHRoaXMubWVudS5nZW5lcmF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIG5ldyBHYW1lSW5wdXRIYW5kbGVyKHRoaXMsIHRoaXMubWVudSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLmxvb3ApO1xuICAgIH1cbiAgICBcbiAgICBwYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxNZW51cycpO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uc01lbnVDb250YWluZXInKTtcblxuICAgICAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWFpbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsTWVudXMnKTtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgdXBkYXRlKGRlbHRhVGltZSl7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIC8vIE9iamVjdC5rZXlzKHRoaXMucGxhdGZvcm1zKS5mb3JFYWNoIChrZXkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KGN0eCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucGxhdGZvcm1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXRmb3Jtc1trZXldLmRyYXcoY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMubWVudS5zaG93TWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5HQU1FT1ZFUil7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn1cblxuIiwiY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBtZW51KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKGUucmVwZWF0KSByZXR1cm47XG4gICAgICAgIGlmIChnYW1lLmdhbWVTdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKXtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuc2hpZnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICAgICAgLy8gdXAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5zaGlmdFVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBtZW51LmRlY3JlYXNlVm9sdW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5pbmNyZWFzZVZvbHVtZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuZW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgbWVudS5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hhbmdlTWVudVR5cGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSl7XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIC8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgIC8vICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIC8vICAgICAgICAgY2FzZSAzNzpcbiAgICAvLyAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkeCA8IDApIHBsYXllci5zdG9wKCk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBjYXNlIDM5OlxuICAgIC8vICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWR4ID4gMCkgcGxheWVyLnN0b3AoKTtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIGNhc2UgMzI6XG4gICAgLy8gICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZHkgPiAwKSBwbGF5ZXIuZHJvcCgpO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG4gICAgfVxufSIsImltcG9ydCB7Q0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRIfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgY2FudmFzLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgIHdpbmRvdy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJyNFRjU0NTUnO1xuXG4gICAgXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEgpO1xuICAgIGdhbWUuc3RhcnQoKTtcbiAgICBcbiAgICBcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4vLyBpbWFnZXNcblxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxDQU5WQVNfV0lEVEgsQ0FOVkFTX0hFSUdIVCk7XG5cbiAgICAgICAgZ2FtZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgZ2FtZS5kcmF3KGN0eCk7XG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5cbn0pO1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xuICAgICAgICB0aGlzLm9wdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudU9wdGlvbnMnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLm9wdGlvbnNMaXN0Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYXVkaW9PcHRpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbk1lbnVPcHRpb25zJyk7XG4gICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMub3B0aW9uTGVuZ3RoID0gdGhpcy5hdWRpb09wdGlvbnNMaXN0Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMubWVudUhhc2ggPSB7XG4gICAgICAgICAgICAwOiAnbWFpbicsXG4gICAgICAgICAgICAxOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAyOiAnY29udHJvbCdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tZW51VHlwZSA9IHRoaXMubWVudUhhc2hbMF07XG5cbiAgICB9XG5cbiAgICBzaGlmdERvd24oKXtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1lbnVUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCAlPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zTGlzdFt0aGlzLmN1cnJlbnQgJSB0aGlzLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVIYXNoWzFdOlxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnRdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkN1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25DdXJyZW50ID49IHRoaXMub3B0aW9uTGVuZ3RoKSB0aGlzLm9wdGlvbkN1cnJlbnQgJT0gdGhpcy5vcHRpb25MZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHRoaXMuYXVkaW9PcHRpb25zTGlzdFt0aGlzLm9wdGlvbkN1cnJlbnQgJSB0aGlzLm9wdGlvbkxlbmd0aF07XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hpZnRVcCgpe1xuICAgICAgICBzd2l0Y2ggKHRoaXMubWVudVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51SGFzaFswXTpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNMaXN0W3RoaXMuY3VycmVudCAlIHRoaXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudUhhc2hbMV06XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb09wdGlvbnNMaXN0W3RoaXMub3B0aW9uQ3VycmVudF0ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uQ3VycmVudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkN1cnJlbnQgPCAwKSB0aGlzLm9wdGlvbkN1cnJlbnQgPSB0aGlzLm9wdGlvbkxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQgPSB0aGlzLmF1ZGlvT3B0aW9uc0xpc3RbdGhpcy5vcHRpb25DdXJyZW50ICUgdGhpcy5vcHRpb25MZW5ndGhdO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VNZW51VHlwZSh4KXtcbiAgICAgICAgdGhpcy5tZW51VHlwZSA9IHRoaXMubWVudUhhc2hbeF07XG4gICAgfVxuXG4gICAgZW50ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMubWVudVR5cGUgPT09IHRoaXMubWVudUhhc2hbMF0pe1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIC8vIHJlc3VtZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIG5ldyBnYW1lXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sc1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU1lbnVUeXBlKDMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTWVudVR5cGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbnVUeXBlID09PSB0aGlzLm1lbnVIYXNoWzFdKXtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VNZW51VHlwZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51KCl7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbE1lbnVzJyk7XG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICBcbiAgICAgICAgb3B0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgICAgIFxuICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0b2dnbGVDb250cm9scygpe1xuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sc01lbnVDb250YWluZXInKTtcbiAgICAgICAgbGV0IG9wdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNNZW51Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udHJvbHNNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRvZ2dsZU9wdGlvbnMoKXtcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjb250cm9sc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHNNZW51Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBvcHRpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zTWVudUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnRyb2xzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtYWluTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBvcHRpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBkZWNyZWFzZVZvbHVtZSgpe31cbiAgICBcbiAgICBpbmNyZWFzZVZvbHVtZSgpe31cblxuICAgIHRvZ2dsZU1hcCgpe31cblxuICAgIGV4aXQoKXtcbiAgICAgICAgdGhpcy5nYW1lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb250cm9scygpIHtcbiAgICAgICAgbGV0IGtleWJvYXJkID0gJ1FXRVJUWVVJT1BBU0RGR0hKS0xaWENWQk5NJztcbiAgICAgICAgbGV0IG51bXMgPSAnMTIzNDU2Nzg5MCc7XG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgbGV0dGVyID0gMDtcbiAgICAgICAgbGV0IGtleUFycmF5ID0gW1xuICAgICAgICAgICAgWzQsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDQsIDEyXSxcbiAgICAgICAgICAgIFs1LCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCA1LCA1XSxcbiAgICAgICAgICAgIFswLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA1LCA1LCAwXSxcbiAgICAgICAgICAgIFs4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA1LCA1LCA1XSxcbiAgICAgICAgICAgIFs2LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCA2XSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCA3LCAwLCAwLCA5LCAxMCwgMTFdXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwga2V5QXJyYXkubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93JHtyb3d9YCk7XG4gICAgICAgICAgICBrZXlBcnJheVtyb3ddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleWJvYXJkS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBga2V5JHtudW1zW251bWJlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtudW1zW251bWJlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0bm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleU51bWJlckNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0bm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHRub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5Ym9hcmRLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGBrZXkke2tleWJvYXJkW2xldHRlcl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVybm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7a2V5Ym9hcmRbbGV0dGVyXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcm5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlMZXR0ZXJDb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVybm9kZS5hcHBlbmRDaGlsZChsZXR0ZXJDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGV0dGVybm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNwYWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyBhcnJvdyBrZXlzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25BcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvd25BcnJvd1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1cEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd0NvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodEFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRibGFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRibGFuay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0YmxhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBibGFuayBrZXlzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlib2FyZEtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1YXJ0ZXJLZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmVydGljYWxIYWxmS2V5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hpZnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXBzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhY2tzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IENBTlZBU19XSURUSCwgSlVNUF9IRUlHSFQsIFNQRUVELCBDQU5WQVNfSEVJR0hULCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZXRlY3RDb2xsaXNpb259IGZyb20gJy4uL3V0aWwvY29sbGlzaW9uJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICAvLyB0aGlzLmltYWdlID0gXG4gICAgICAgIHRoaXMud2lkdGggPSAxNTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nYW1lLmdhbWVXaWR0aC8yICAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LzIgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSBHUkFWSVRZO1xuICAgICAgICB0aGlzLnhfdmVsb2NpdHkgPSAwO1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoZGVsdGFUaW1lKXtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5ICo9IDAuOTtcbiAgICAgICAgLy8gaWYgKHRoaXMueV92ZWxvY2l0eSA8IDApIHt0aGlzLnlfdmVsb2NpdHkgKz0gMTUgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnlfdmVsb2NpdHkpO1xuICAgICAgICAvLyBpZiAodGhpcy55X3ZlbG9jaXR5ICE9IDApe1xuICAgICAgICAgICAgdGhpcy55X3ZlbG9jaXR5ICs9IDAuOTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5IDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZlKGRlbHRhVGltZSk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSAgdGhpcy5nYW1lLmdhbWVXaWR0aC10aGlzLndpZHRoO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPCAwKSB0aGlzLnBvc2l0aW9uLnkgPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0KSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodC10aGlzLmhlaWdodDtcblxuXG4gICAgICAgIC8vIGNoZWNrIGNvbGxpc2lvbnMgd2l0aCBwbGF0Zm9ybXNcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWUucGxhdGZvcm1zKS5mb3JFYWNoIChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gdGhpcy5nYW1lLnBsYXRmb3Jtc1trZXldO1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBwbGF0Zm9ybSkpe1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm0ucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hpdCcpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3BlZWR4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICB9XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lXCI7XG5pbXBvcnQge0NBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCwgU1BFRUQsIEpVTVB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGdhbWUpe1xuICAgICAgICAvLyB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cbiAgICBcbiAgICBjb250cm9sbGVyIChlKXtcbiAgICAgICAgdmFyIGtleV9zdGF0ZSA9IChldmVudC50eXBlID09ICdrZXlkb3duJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHRoaXMudXAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbG9vcCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwICYmIHRoaXMucGxheWVyLmNhbkp1bXAgKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID0gLUpVTVA7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jYW5KdW1wID0gZmFsc2U7IFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGl0ID0gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5yaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IFNQRUVEO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IC1TUEVFRDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zaXRpb24ueSA+PSB0aGlzLmdhbWUuZ2FtZUhlaWdodCAtIHRoaXMucGxheWVyLmhlaWdodCB8fCB0aGlzLnBsYXllci55X3ZlbG9jaXR5ID09IDApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNvbnRyb2xsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuY29udHJvbGxlcik7XG4gICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICAgICAgfVxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCB4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIC8vIHRoaXMuZmlsbGVyID0gZmlsbGVyO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpe1xuXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgUGxhdGZvcm1QaWVjZSBmcm9tICcuL3BsYXRmb3JtX3BpZWNlJztcbmltcG9ydCBQbGF0Zm9ybUxlZnQgZnJvbSAnLi9wbGF0Zm9ybV9sZWZ0JztcbmltcG9ydCBQbGF0Zm9ybVJpZ2h0IGZyb20gJy4vcGxhdGZvcm1fcmlnaHQnO1xuaW1wb3J0IHtCTE9DS1NJWkUsIENBTlZBU19IRUlHSFR9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IobnVtQmxvY2tzLCB4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkUgKiAobnVtQmxvY2tzKzIpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5waWVjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5udW1CbG9ja3MgPSBudW1CbG9ja3M7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feCA9IHg7XG4gICAgICAgIHRoaXMucGxhdGZvcm1feSA9IHk7XG4gICAgICAgIHRoaXMueF9maWxsZXIgPSB4O1xuICAgICAgICB0aGlzLnlfZmlsbGVyID0geSArIEJMT0NLU0laRTtcbiAgICAgICAgLy8gdGhpcy5maWxsZXIgPSBmaWxsZXI7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpe1xuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQbGF0Zm9ybUxlZnQodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3kpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybV94ICs9IEJMT0NLU0laRTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubnVtQmxvY2tzOyBpID4gMDsgaS0tKXtcbiAgICAgICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBsYXRmb3JtUGllY2UodGhpcy5wbGF0Zm9ybV94LCB0aGlzLnBsYXRmb3JtX3kpKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGZvcm1feCArPSBCTE9DS1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waWVjZXMucHVzaChuZXcgUGxhdGZvcm1SaWdodCh0aGlzLnBsYXRmb3JtX3gsIHRoaXMucGxhdGZvcm1feSkpO1xuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5waWVjZXMuZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgICAgICAgICBwaWVjZS5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdHgucmVjdCh0aGlzLnhfZmlsbGVyLCB0aGlzLnlfZmlsbGVyLCB0aGlzLnBsYXRmb3JtX3gtdGhpcy54X2ZpbGxlcitCTE9DS1NJWkUsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTEwLDQ5LDI1KSc7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcblxuICAgIH1cbn1cblxuIiwiaW1wb3J0IFBsYXRmb3JtUGllY2UgZnJvbSAnLi9wbGF0Zm9ybV9waWVjZSc7XG5pbXBvcnQgeyBCTE9DS1NJWkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUxlZnQgIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhdGZvcm1QaWVjZS1sZWZ0Jyk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIFBsYXRmb3JtTGVmdCh4LHkpe1xuLy8gICAgIFBsYXRmb3JtUGllY2UuY2FsbCh0aGlzLCB4LCB5KTtcbi8vICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXRmb3JtUGllY2UtbGVmdCcpO1xuLy8gfVxuIiwiaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1QaWVjZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLndpZHRoID0gQkxPQ0tTSVpFO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJMT0NLU0laRTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF0Zm9ybVBpZWNlLW1pZGRsZScpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XG5cbiAgICB9XG59XG5cbiIsImltcG9ydCBQbGF0Zm9ybVBpZWNlIGZyb20gJy4vcGxhdGZvcm1fcGllY2UnO1xuaW1wb3J0IHsgQkxPQ0tTSVpFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1MZWZ0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBCTE9DS1NJWkU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQkxPQ0tTSVpFO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhdGZvcm1QaWVjZS1yaWdodCcpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XG5cbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0Q29sbGlzaW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgbGV0IG9iakxlZnQgPSBvYmoueDtcbiAgICBsZXQgb2JqUmlnaHQgPSBvYmoueCArIG9iai53aWR0aDtcbiAgICBsZXQgb2JqVG9wID0gb2JqLnBvc2l0aW9uLnk7XG4gICAgbGV0IG9iakJvdHRvbSA9IG9iai5wb3NpdGlvbi55ICsgb2JqLmhlaWdodDtcblxuICAgIGxldCB0YXJnZXRMZWZ0ID0gdGFyZ2V0LnBvc2l0aW9uLng7XG4gICAgbGV0IHRhcmdldFJpZ2h0ID0gdGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQud2lkdGg7XG4gICAgbGV0IHRhcmdldFRvcCA9IHRhcmdldC5wb3NpdGlvbi55O1xuICAgIGxldCB0YXJnZXRCb3R0b20gPSB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICAgIG9iakJvdHRvbSA+PSB0YXJnZXRUb3AgJiZcbiAgICAgICAgb2JqVG9wIDw9IHRhcmdldEJvdHRvbSAmJlxuICAgICAgICAvLyBvYmpCb3R0b20gPD0gdGFyZ2V0VG9wICYmXG4gICAgICAgIC8vIG9ialRvcCA+PSB0YXJnZXRCb3R0b20gJiZcbiAgICAgICAgb2JqLnBvc2l0aW9uLnggPj0gdGFyZ2V0TGVmdCAmJlxuICAgICAgICBvYmoucG9zaXRpb24ueCArIG9iai53aWR0aCA8PSB0YXJnZXRSaWdodFxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=