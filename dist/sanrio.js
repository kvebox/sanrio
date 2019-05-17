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
/*! exports provided: CANVAS_HEIGHT, CANVAS_WIDTH, DIRECTIONS, JUMP_HEIGHT, SPEED, GRAVITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_HEIGHT", function() { return CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_WIDTH", function() { return CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUMP_HEIGHT", function() { return JUMP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEED", function() { return SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY", function() { return GRAVITY; });

const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 700;

const DIRECTIONS = {
    LEFT: (-1, 0),
    RIGHT: (1, 0),
    UP: (0, 1),
};

const JUMP_HEIGHT = 10;
const SPEED = 5;

const GRAVITY = 10;

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

        
    }

    start() {
        // debugger
        this.gameState = GAMESTATE.RUNNING;
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_3__["default"](this);

        // constructor(width, height, x, y, filler)
        this.platforms = {
            1: new _scene_platform__WEBPACK_IMPORTED_MODULE_2__["default"](50, 15, 100, 50),
            2: new _scene_platform__WEBPACK_IMPORTED_MODULE_2__["default"](100, 15, 75, 100)

        };
        new _gameStateController__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        const handle = new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
        requestAnimationFrame(handle.loop);
    }
    
    pause() {
        if (this.gameState == GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        } else {
            this.gameState = GAMESTATE.PAUSED;
        }
    }
    
    
    update(deltaTime){
        
        if (this.gameState == GAMESTATE.PAUSED) return;
        
        this.player.update(deltaTime);
        Object.keys(this.platforms).forEach (key => {
            this.platforms[key].update(deltaTime);
        });
    }
    
    
    draw() {
        ctx.resetTransform();
        ctx.translate(this.player.x, this.player.y);
        // ctx.translate(-this.gameWidth/2, -this.gameHeight/2);
        
        this.player.draw(ctx);
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(ctx);
        });
        
        if (this.gameState == GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fill();
        }
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
class GameInputHandler {

    constructor (game) {
        document.addEventListener('keydown', (e) => {
        //     if (e.repeat) return;
        switch (e.keyCode) {
        //     case 37:
        //         controller.left = key_state;
        //         // player.moveLeft();
        //         break;      
        //     case 32:
        //         controller.up = key_state;
        //         // player.jump();
        //         break;
        //     case 39:
        //         controller.right = key_state;
        //         // player.moveRight();
        //         break;
            case 80:
                game.pause();
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
    ctx.fillStyle = '#EF5455';

    
    let game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](_constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_HEIGHT"], _constants__WEBPACK_IMPORTED_MODULE_0__["CANVAS_WIDTH"]);
    game.start();
    
    
    let lastTime = 0;
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
        this.color = '#ff00ff';
    }

    move(){
        this.position.x += this.x_velocity;
        this.position.y += this.y_velocity;
    }

    shoot() {

    }

    draw(ctx) {
        // ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        
        this.move();

        //check collisions with wall
        
        if(this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth-this.width;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;


        // check collisions with platforms

        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, platform)){
                this.y_velocity = 0;
                console.log('hit');
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
        // debugger
        if (this.up && this.player.canJump ) {
            this.player.y_velocity = -100;
            this.player.canJump = false; 
        } else {
            this.player.y_velocity = 5;
        }
        
        if (this.right) {
            this.player.x_velocity = 5;
        } else if (this.left) {
            this.player.x_velocity = -5; 
        } else {
            this.player.x_velocity = 0;
        }
        

        // console.log(this.player.y);
        if (this.player.position.y >= this.game.gameHeight - this.player.height){
            // this.player.y_velocity = 0;
            this.player.canJump = true;
            // console.log(this.player.canJump);
            // console.log('hi');
        }
        // debugger



        document.addEventListener('keydown', this.controller);
        document.addEventListener('keyup', this.controller);
        
            requestAnimationFrame(this.loop);
        }
}



    

        // document.addEventListener('keyup', (e) => {
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



    
// let controller = {
//   left: false,
//   right: false,
//   up: false,
//   keyListener: function(e) {
//         var key_state = (event.type == 'keydown')? true: false;
//         switch(e.keyCode) {
//             case 37:
//                 controller.left = key_state;
//                 break;      
//             case 32:
//                 controller.up = key_state;
//                 break;
//             case 39:
//                 controller.right = key_state;
//                 break;
//             case 80:
//                 game.pause();
//         }
//     }
// };

// loop = function () {
//     if (controller.up && player.jump == false) {
//         player.jump = true;
//         player.speedy = 0;
//     }
//     if (controller.left) {
//         player.moveLeft();
//     }

//     if (controller.right) {
//         player.moveRight();
//     }

//     if (controller.up) {
//         player.jump();
//     }
// };
// }
// }

// document.addEventListener('keydown', controller.keyListener);
// document.addEventListener('keyup', controller.keyListener);
// window.requestAnimationFrame(loop);







// export default class InputHandler {

    // constructor (player, game) {
    //     document.addEventListener('keydown', (e) => {
    //         if (e.repeat) return;
    //     switch (e.keyCode) {
    //         case 37:
    //             controller.left = key_state;
    //             // player.moveLeft();
    //             break;      
    //         case 32:
    //             controller.up = key_state;
    //             // player.jump();
    //             break;
    //         case 39:
    //             controller.right = key_state;
    //             // player.moveRight();
    //             break;
    //         case 80:
    //             game.pause();
    //         }
    //     });

        // loop = function() {
        //     if (controller.up && player.jump == false){
        //         player.jump = true;
        //         player.speedy = 0;
        //     }
        //     if (controller.left) {
        //         player.moveLeft();
        //     }

        //     if (controller.right){
        //         player.moveRight();
        //     }

        //     if (controller.up) {
        //         player.jump();
        //     }
        // };

        // document.addEventListener('keyup', e => {
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

//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb2xsaXNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ0E7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFF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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDdE1BO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzYW5yaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGNvbnN0IENBTlZBU19IRUlHSFQgPSA0MDA7XG5leHBvcnQgY29uc3QgQ0FOVkFTX1dJRFRIID0gNzAwO1xuXG5leHBvcnQgY29uc3QgRElSRUNUSU9OUyA9IHtcbiAgICBMRUZUOiAoLTEsIDApLFxuICAgIFJJR0hUOiAoMSwgMCksXG4gICAgVVA6ICgwLCAxKSxcbn07XG5cbmV4cG9ydCBjb25zdCBKVU1QX0hFSUdIVCA9IDEwO1xuZXhwb3J0IGNvbnN0IFNQRUVEID0gNTtcblxuZXhwb3J0IGNvbnN0IEdSQVZJVFkgPSAxMDsiLCJpbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gJy4vcGxheWVycy9wbGF5ZXJJbnB1dCc7XG5pbXBvcnQgR2FtZUlucHV0SGFuZGxlciBmcm9tICcuL2dhbWVTdGF0ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vc2NlbmUvcGxhdGZvcm0nO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcnMvcGxheWVyJztcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDNcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRIKSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG5cbiAgICAgICAgLy8gY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgeCwgeSwgZmlsbGVyKVxuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHtcbiAgICAgICAgICAgIDE6IG5ldyBQbGF0Zm9ybSg1MCwgMTUsIDEwMCwgNTApLFxuICAgICAgICAgICAgMjogbmV3IFBsYXRmb3JtKDEwMCwgMTUsIDc1LCAxMDApXG5cbiAgICAgICAgfTtcbiAgICAgICAgbmV3IEdhbWVJbnB1dEhhbmRsZXIodGhpcyk7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLmxvb3ApO1xuICAgIH1cbiAgICBcbiAgICBwYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgdXBkYXRlKGRlbHRhVGltZSl7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucGxhdGZvcm1zKS5mb3JFYWNoIChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xuICAgICAgICAvLyBjdHgudHJhbnNsYXRlKC10aGlzLmdhbWVXaWR0aC8yLCAtdGhpcy5nYW1lSGVpZ2h0LzIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBsYXRmb3JtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybXNba2V5XS5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIGN0eC5yZWN0KDAsIDAsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUlucHV0SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChlLnJlcGVhdCkgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAvLyAgICAgY2FzZSAzNzpcbiAgICAgICAgLy8gICAgICAgICBjb250cm9sbGVyLmxlZnQgPSBrZXlfc3RhdGU7XG4gICAgICAgIC8vICAgICAgICAgLy8gcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7ICAgICAgXG4gICAgICAgIC8vICAgICBjYXNlIDMyOlxuICAgICAgICAvLyAgICAgICAgIGNvbnRyb2xsZXIudXAgPSBrZXlfc3RhdGU7XG4gICAgICAgIC8vICAgICAgICAgLy8gcGxheWVyLmp1bXAoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICAgICAgICAgY29udHJvbGxlci5yaWdodCA9IGtleV9zdGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAvLyBwbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAvLyAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAvLyAgICAgICAgIGNhc2UgMzc6XG4gICAgLy8gICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZHggPCAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgY2FzZSAzOTpcbiAgICAvLyAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkeCA+IDApIHBsYXllci5zdG9wKCk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBjYXNlIDMyOlxuICAgIC8vICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWR5ID4gMCkgcGxheWVyLmRyb3AoKTtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0NBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICB3aW5kb3cuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjRUY1NDU1JztcblxuICAgIFxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoQ0FOVkFTX0hFSUdIVCwgQ0FOVkFTX1dJRFRIKTtcbiAgICBnYW1lLnN0YXJ0KCk7XG4gICAgXG4gICAgXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSBsYXN0VGltZTtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsQ0FOVkFTX1dJRFRILENBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGdhbWUuZHJhdyhjdHgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cblxufSk7XG5cblxuIiwiaW1wb3J0IHsgQ0FOVkFTX1dJRFRILCBKVU1QX0hFSUdIVCwgU1BFRUQsIENBTlZBU19IRUlHSFQsIEdSQVZJVFkgfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2RldGVjdENvbGxpc2lvbn0gZnJvbSAnLi4vdXRpbC9jb2xsaXNpb24nO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIC8vIHRoaXMuaW1hZ2UgPSBcbiAgICAgICAgdGhpcy53aWR0aCA9IDE1O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDE1O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUuZ2FtZVdpZHRoLzIgIC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLmdhbWVIZWlnaHQvMiBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2U7XG4gICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IEdSQVZJVFk7XG4gICAgICAgIHRoaXMueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnI2ZmMDBmZic7XG4gICAgfVxuXG4gICAgbW92ZSgpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5O1xuICAgIH1cblxuICAgIHNob290KCkge1xuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW92ZSgpO1xuXG4gICAgICAgIC8vY2hlY2sgY29sbGlzaW9ucyB3aXRoIHdhbGxcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5nYW1lLmdhbWVXaWR0aCkgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lLmdhbWVXaWR0aC10aGlzLndpZHRoO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPCAwKSB0aGlzLnBvc2l0aW9uLnkgPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0KSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUuZ2FtZUhlaWdodC10aGlzLmhlaWdodDtcblxuXG4gICAgICAgIC8vIGNoZWNrIGNvbGxpc2lvbnMgd2l0aCBwbGF0Zm9ybXNcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmdhbWUucGxhdGZvcm1zKS5mb3JFYWNoIChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gdGhpcy5nYW1lLnBsYXRmb3Jtc1trZXldO1xuICAgICAgICAgICAgaWYgKGRldGVjdENvbGxpc2lvbih0aGlzLCBwbGF0Zm9ybSkpe1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCcpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3BlZWR4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICB9XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lXCI7XG5pbXBvcnQge0NBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgZ2FtZSl7XG4gICAgICAgIC8vIHRoaXMuY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuICAgIFxuICAgIGNvbnRyb2xsZXIgKGUpe1xuICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgdGhpcy51cCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsb29wICgpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMudXAgJiYgdGhpcy5wbGF5ZXIuY2FuSnVtcCApIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnlfdmVsb2NpdHkgPSAtMTAwO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IGZhbHNlOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnlfdmVsb2NpdHkgPSA1O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5yaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IDU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci54X3ZlbG9jaXR5ID0gLTU7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIueSk7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5wb3NpdGlvbi55ID49IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0IC0gdGhpcy5wbGF5ZXIuaGVpZ2h0KXtcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5jYW5KdW1wKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlYnVnZ2VyXG5cblxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNvbnRyb2xsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuY29udHJvbGxlcik7XG4gICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgICAgIH1cbn1cblxuXG5cbiAgICBcblxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgIC8vICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAvLyAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWR4IDwgMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZHggPiAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICBjYXNlIDMyOlxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkeSA+IDApIHBsYXllci5kcm9wKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgfVxuICAgIFxuICAgICAgICAvLyB9KTtcblxuXG5cbiAgICBcbi8vIGxldCBjb250cm9sbGVyID0ge1xuLy8gICBsZWZ0OiBmYWxzZSxcbi8vICAgcmlnaHQ6IGZhbHNlLFxuLy8gICB1cDogZmFsc2UsXG4vLyAgIGtleUxpc3RlbmVyOiBmdW5jdGlvbihlKSB7XG4vLyAgICAgICAgIHZhciBrZXlfc3RhdGUgPSAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpPyB0cnVlOiBmYWxzZTtcbi8vICAgICAgICAgc3dpdGNoKGUua2V5Q29kZSkge1xuLy8gICAgICAgICAgICAgY2FzZSAzNzpcbi8vICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmxlZnQgPSBrZXlfc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgXG4vLyAgICAgICAgICAgICBjYXNlIDMyOlxuLy8gICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXAgPSBrZXlfc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlIDM5OlxuLy8gICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucmlnaHQgPSBrZXlfc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlIDgwOlxuLy8gICAgICAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH07XG5cbi8vIGxvb3AgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgaWYgKGNvbnRyb2xsZXIudXAgJiYgcGxheWVyLmp1bXAgPT0gZmFsc2UpIHtcbi8vICAgICAgICAgcGxheWVyLmp1bXAgPSB0cnVlO1xuLy8gICAgICAgICBwbGF5ZXIuc3BlZWR5ID0gMDtcbi8vICAgICB9XG4vLyAgICAgaWYgKGNvbnRyb2xsZXIubGVmdCkge1xuLy8gICAgICAgICBwbGF5ZXIubW92ZUxlZnQoKTtcbi8vICAgICB9XG5cbi8vICAgICBpZiAoY29udHJvbGxlci5yaWdodCkge1xuLy8gICAgICAgICBwbGF5ZXIubW92ZVJpZ2h0KCk7XG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKGNvbnRyb2xsZXIudXApIHtcbi8vICAgICAgICAgcGxheWVyLmp1bXAoKTtcbi8vICAgICB9XG4vLyB9O1xuLy8gfVxuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY29udHJvbGxlci5rZXlMaXN0ZW5lcik7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNvbnRyb2xsZXIua2V5TGlzdGVuZXIpO1xuLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcblxuICAgIC8vIGNvbnN0cnVjdG9yIChwbGF5ZXIsIGdhbWUpIHtcbiAgICAvLyAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoZS5yZXBlYXQpIHJldHVybjtcbiAgICAvLyAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAvLyAgICAgICAgIGNhc2UgMzc6XG4gICAgLy8gICAgICAgICAgICAgY29udHJvbGxlci5sZWZ0ID0ga2V5X3N0YXRlO1xuICAgIC8vICAgICAgICAgICAgIC8vIHBsYXllci5tb3ZlTGVmdCgpO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuICAgIC8vICAgICAgICAgY2FzZSAzMjpcbiAgICAvLyAgICAgICAgICAgICBjb250cm9sbGVyLnVwID0ga2V5X3N0YXRlO1xuICAgIC8vICAgICAgICAgICAgIC8vIHBsYXllci5qdW1wKCk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBjYXNlIDM5OlxuICAgIC8vICAgICAgICAgICAgIGNvbnRyb2xsZXIucmlnaHQgPSBrZXlfc3RhdGU7XG4gICAgLy8gICAgICAgICAgICAgLy8gcGxheWVyLm1vdmVSaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgY2FzZSA4MDpcbiAgICAvLyAgICAgICAgICAgICBnYW1lLnBhdXNlKCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuXG4gICAgICAgIC8vIGxvb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIGlmIChjb250cm9sbGVyLnVwICYmIHBsYXllci5qdW1wID09IGZhbHNlKXtcbiAgICAgICAgLy8gICAgICAgICBwbGF5ZXIuanVtcCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgcGxheWVyLnNwZWVkeSA9IDA7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAoY29udHJvbGxlci5sZWZ0KSB7XG4gICAgICAgIC8vICAgICAgICAgcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmIChjb250cm9sbGVyLnJpZ2h0KXtcbiAgICAgICAgLy8gICAgICAgICBwbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmIChjb250cm9sbGVyLnVwKSB7XG4gICAgICAgIC8vICAgICAgICAgcGxheWVyLmp1bXAoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcblxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAvLyAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgLy8gICAgICAgICBjYXNlIDM3OlxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkeCA8IDApIHBsYXllci5zdG9wKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWR4ID4gMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZHkgPiAwKSBwbGF5ZXIuZHJvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbi8vICAgICB9XG4vLyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHgsIHkpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgLy8gdGhpcy5maWxsZXIgPSBmaWxsZXI7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSl7XG5cbiAgICB9XG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRlY3RDb2xsaXNpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBsZXQgb2JqTGVmdCA9IG9iai54O1xuICAgIGxldCBvYmpSaWdodCA9IG9iai54ICsgb2JqLndpZHRoO1xuICAgIGxldCBvYmpUb3AgPSBvYmoucG9zaXRpb24ueTtcbiAgICBsZXQgb2JqQm90dG9tID0gb2JqLnBvc2l0aW9uLnkgKyBvYmouaGVpZ2h0O1xuXG4gICAgbGV0IHRhcmdldExlZnQgPSB0YXJnZXQucG9zaXRpb24ueDtcbiAgICBsZXQgdGFyZ2V0UmlnaHQgPSB0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aDtcbiAgICBsZXQgdGFyZ2V0VG9wID0gdGFyZ2V0LnBvc2l0aW9uLnk7XG4gICAgbGV0IHRhcmdldEJvdHRvbSA9IHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodDtcblxuICAgIGlmIChcbiAgICAgICAgb2JqQm90dG9tID49IHRhcmdldFRvcCAmJlxuICAgICAgICBvYmpUb3AgPD0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIC8vIG9iakJvdHRvbSA8PSB0YXJnZXRUb3AgJiZcbiAgICAgICAgLy8gb2JqVG9wID49IHRhcmdldEJvdHRvbSAmJlxuICAgICAgICBvYmoucG9zaXRpb24ueCA+PSB0YXJnZXRMZWZ0ICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ICsgb2JqLndpZHRoIDw9IHRhcmdldFJpZ2h0XG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==