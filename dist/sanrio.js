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
/* harmony import */ var _scene_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/platform */ "./src/scene/platform.js");
/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/player */ "./src/players/player.js");




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
        this.gameState = GAMESTATE.RUNNING;
        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_2__["default"](this);

        // constructor(width, height, x, y, filler)
        this.platforms = {
            1: new _scene_platform__WEBPACK_IMPORTED_MODULE_1__["default"](50, 15, 100, 50),
            2: new _scene_platform__WEBPACK_IMPORTED_MODULE_1__["default"](100, 15, 75, 100)

        };
        
        new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this);
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
        this.jump = true;
        this.speedx = 0;
        this.speedy = -_constants__WEBPACK_IMPORTED_MODULE_0__["GRAVITY"];
        this.color = '#ff00ff';
    }

    jump() {
        this.speedy = _constants__WEBPACK_IMPORTED_MODULE_0__["JUMP_HEIGHT"];
    }

    stop() {
        this.speedx = 0;
    }

    drop(){
        this.speedy = -_constants__WEBPACK_IMPORTED_MODULE_0__["GRAVITY"];
    }

    moveLeft(){
        this.speedx = -_constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
    }

    moveRight(){
        this.speedx = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
    }

    shoot() {

    }

    draw(ctx) {
        // ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        
        this.position.x += this.speedx;
        this.position.y -= this.speedy;

        //check collisions with wall
        
        if(this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth-this.width;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;


        // check collisions with platforms

        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(this, platform)){
                this.speedy = 0;
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



class InputHandler {
    constructor(player, game){
        this.left = false;
        this.right = false;
        this.up = false;
        // this.loop = this.loop.bind(this);
    
        this.controller = function(e) {
            var key_state = (event.type == 'keydown') ? true : false;

        switch (e.keyCode) {
            case 37:
            this.left = key_state;
            console.log(this.left);
            break;
            case 32:
            this.up = key_state;
            break;
            case 39:
            this.right = key_state;
            break;
            case 80:
            game.pause();
        }

        this.loop = function() {
            if (this.up ) {
                // player.jump = true;
                // player.speedy = 0;
                player.jump();
            }
            (this.left) ? player.moveLeft() : player.stop()
                // (this.right && player.speedx > 0) ? player.moveRight() : player.stop()

            if (this.right) {
                player.moveRight();
            }

            // if (this.up) {
            //     player.jump();
            // }
        };
        window.requestAnimationFrame(this.loop);
    };

    document.addEventListener('keydown', this.controller);
    document.addEventListener('keyup', this.controller);

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
}
}



    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL3BsYXllcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb2xsaXNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ0E7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBOztBQUVBLG1COzs7Ozs7Ozs7Ozs7QUNiUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ1Q7QUFDRjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQix1REFBTTs7QUFFaEM7QUFDQTtBQUNBLG1CQUFtQix1REFBUTtBQUMzQixtQkFBbUIsdURBQVE7O0FBRTNCOztBQUVBLFlBQVksNERBQVk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBd0Q7QUFDOUI7O0FBRTFCO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQWE7QUFDakMsbUJBQW1CLHVEQUFZO0FBQy9CO0FBQ0E7OztBQUdBLG1CQUFtQiw2Q0FBSSxDQUFDLHdEQUFhLEVBQUUsdURBQVk7QUFDbkQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsdURBQVksQ0FBQyx3REFBYTs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDeEM7Ozs7QUFJbkM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBTztBQUM5QjtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNEQUFXO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrREFBTztBQUM5Qjs7QUFFQTtBQUNBLHVCQUF1QixnREFBSztBQUM1Qjs7QUFFQTtBQUNBLHNCQUFzQixnREFBSztBQUMzQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7Ozs7QUFJVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBMkI7OztBQUdaO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUM1S0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InNhbnJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDQwMDtcbmV4cG9ydCBjb25zdCBDQU5WQVNfV0lEVEggPSA3MDA7XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0ge1xuICAgIExFRlQ6ICgtMSwgMCksXG4gICAgUklHSFQ6ICgxLCAwKSxcbiAgICBVUDogKDAsIDEpLFxufTtcblxuZXhwb3J0IGNvbnN0IEpVTVBfSEVJR0hUID0gMTA7XG5leHBvcnQgY29uc3QgU1BFRUQgPSA1O1xuXG5leHBvcnQgY29uc3QgR1JBVklUWSA9IDEwOyIsImltcG9ydCBJbnB1dEhhbmRsZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcklucHV0JztcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3NjZW5lL3BsYXRmb3JtJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXJzL3BsYXllcic7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHgsIHksIGZpbGxlcilcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSB7XG4gICAgICAgICAgICAxOiBuZXcgUGxhdGZvcm0oNTAsIDE1LCAxMDAsIDUwKSxcbiAgICAgICAgICAgIDI6IG5ldyBQbGF0Zm9ybSgxMDAsIDE1LCA3NSwgMTAwKVxuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpe1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wbGF0Zm9ybXMpLmZvckVhY2ggKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXRmb3Jtc1trZXldLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgY3R4LnJlc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XG4gICAgICAgIC8vIGN0eC50cmFuc2xhdGUoLXRoaXMuZ2FtZVdpZHRoLzIsIC10aGlzLmdhbWVIZWlnaHQvMik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KGN0eCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucGxhdGZvcm1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXRmb3Jtc1trZXldLmRyYXcoY3R4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgY3R4LnJlY3QoMCwgMCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC41KSc7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDQU5WQVNfSEVJR0hULCBDQU5WQVNfV0lEVEh9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICBjYW52YXMud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgd2luZG93LmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI0VGNTQ1NSc7XG5cbiAgICBcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKENBTlZBU19IRUlHSFQsIENBTlZBU19XSURUSCk7XG4gICAgZ2FtZS5zdGFydCgpO1xuICAgIFxuICAgIFxuICAgIGxldCBsYXN0VGltZSA9IDA7XG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLENBTlZBU19XSURUSCxDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICBnYW1lLmRyYXcoY3R4KTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5cbn0pO1xuXG5cbiIsImltcG9ydCB7IENBTlZBU19XSURUSCwgSlVNUF9IRUlHSFQsIFNQRUVELCBDQU5WQVNfSEVJR0hULCBHUkFWSVRZIH0gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZXRlY3RDb2xsaXNpb259IGZyb20gJy4uL3V0aWwvY29sbGlzaW9uJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICAvLyB0aGlzLmltYWdlID0gXG4gICAgICAgIHRoaXMud2lkdGggPSAxNTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nYW1lLmdhbWVXaWR0aC8yICAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LzIgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuanVtcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZHkgPSAtR1JBVklUWTtcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjZmYwMGZmJztcbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLnNwZWVkeSA9IEpVTVBfSEVJR0hUO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWR4ID0gMDtcbiAgICB9XG5cbiAgICBkcm9wKCl7XG4gICAgICAgIHRoaXMuc3BlZWR5ID0gLUdSQVZJVFk7XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKXtcbiAgICAgICAgdGhpcy5zcGVlZHggPSAtU1BFRUQ7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCl7XG4gICAgICAgIHRoaXMuc3BlZWR4ID0gU1BFRUQ7XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWR4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZHk7XG5cbiAgICAgICAgLy9jaGVjayBjb2xsaXNpb25zIHdpdGggd2FsbFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWUuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWUuZ2FtZVdpZHRoLXRoaXMud2lkdGg7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSA8IDApIHRoaXMucG9zaXRpb24ueSA9IDA7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5nYW1lLmdhbWVIZWlnaHQpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZS5nYW1lSGVpZ2h0LXRoaXMuaGVpZ2h0O1xuXG5cbiAgICAgICAgLy8gY2hlY2sgY29sbGlzaW9ucyB3aXRoIHBsYXRmb3Jtc1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2FtZS5wbGF0Zm9ybXMpLmZvckVhY2ggKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhdGZvcm0gPSB0aGlzLmdhbWUucGxhdGZvcm1zW2tleV07XG4gICAgICAgICAgICBpZiAoZGV0ZWN0Q29sbGlzaW9uKHRoaXMsIHBsYXRmb3JtKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZHkgPSAwO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3BlZWR4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICB9XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGdhbWUpe1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIFxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGVmdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICB0aGlzLnVwID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXAgKSB7XG4gICAgICAgICAgICAgICAgLy8gcGxheWVyLmp1bXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHBsYXllci5zcGVlZHkgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXllci5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAodGhpcy5sZWZ0KSA/IHBsYXllci5tb3ZlTGVmdCgpIDogcGxheWVyLnN0b3AoKVxuICAgICAgICAgICAgICAgIC8vICh0aGlzLnJpZ2h0ICYmIHBsYXllci5zcGVlZHggPiAwKSA/IHBsYXllci5tb3ZlUmlnaHQoKSA6IHBsYXllci5zdG9wKClcblxuICAgICAgICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnVwKSB7XG4gICAgICAgICAgICAvLyAgICAgcGxheWVyLmp1bXAoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb250cm9sbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuY29udHJvbGxlcik7XG5cbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgLy8gICAgICAgICBjYXNlIDM3OlxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkeCA8IDApIHBsYXllci5zdG9wKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWR4ID4gMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZHkgPiAwKSBwbGF5ZXIuZHJvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIH1cbiAgICBcbiAgICAgICAgLy8gfSk7XG59XG59XG5cblxuXG4gICAgXG4vLyBsZXQgY29udHJvbGxlciA9IHtcbi8vICAgbGVmdDogZmFsc2UsXG4vLyAgIHJpZ2h0OiBmYWxzZSxcbi8vICAgdXA6IGZhbHNlLFxuLy8gICBrZXlMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuLy8gICAgICAgICB2YXIga2V5X3N0YXRlID0gKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKT8gdHJ1ZTogZmFsc2U7XG4vLyAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbi8vICAgICAgICAgICAgIGNhc2UgMzc6XG4vLyAgICAgICAgICAgICAgICAgY29udHJvbGxlci5sZWZ0ID0ga2V5X3N0YXRlO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuLy8gICAgICAgICAgICAgY2FzZSAzMjpcbi8vICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnVwID0ga2V5X3N0YXRlO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgY2FzZSAzOTpcbi8vICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnJpZ2h0ID0ga2V5X3N0YXRlO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgY2FzZSA4MDpcbi8vICAgICAgICAgICAgICAgICBnYW1lLnBhdXNlKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuXG4vLyBsb29wID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmIChjb250cm9sbGVyLnVwICYmIHBsYXllci5qdW1wID09IGZhbHNlKSB7XG4vLyAgICAgICAgIHBsYXllci5qdW1wID0gdHJ1ZTtcbi8vICAgICAgICAgcGxheWVyLnNwZWVkeSA9IDA7XG4vLyAgICAgfVxuLy8gICAgIGlmIChjb250cm9sbGVyLmxlZnQpIHtcbi8vICAgICAgICAgcGxheWVyLm1vdmVMZWZ0KCk7XG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKGNvbnRyb2xsZXIucmlnaHQpIHtcbi8vICAgICAgICAgcGxheWVyLm1vdmVSaWdodCgpO1xuLy8gICAgIH1cblxuLy8gICAgIGlmIChjb250cm9sbGVyLnVwKSB7XG4vLyAgICAgICAgIHBsYXllci5qdW1wKCk7XG4vLyAgICAgfVxuLy8gfTtcbi8vIH1cbi8vIH1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNvbnRyb2xsZXIua2V5TGlzdGVuZXIpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjb250cm9sbGVyLmtleUxpc3RlbmVyKTtcbi8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEhhbmRsZXIge1xuXG4gICAgLy8gY29uc3RydWN0b3IgKHBsYXllciwgZ2FtZSkge1xuICAgIC8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChlLnJlcGVhdCkgcmV0dXJuO1xuICAgIC8vICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIC8vICAgICAgICAgY2FzZSAzNzpcbiAgICAvLyAgICAgICAgICAgICBjb250cm9sbGVyLmxlZnQgPSBrZXlfc3RhdGU7XG4gICAgLy8gICAgICAgICAgICAgLy8gcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7ICAgICAgXG4gICAgLy8gICAgICAgICBjYXNlIDMyOlxuICAgIC8vICAgICAgICAgICAgIGNvbnRyb2xsZXIudXAgPSBrZXlfc3RhdGU7XG4gICAgLy8gICAgICAgICAgICAgLy8gcGxheWVyLmp1bXAoKTtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIGNhc2UgMzk6XG4gICAgLy8gICAgICAgICAgICAgY29udHJvbGxlci5yaWdodCA9IGtleV9zdGF0ZTtcbiAgICAvLyAgICAgICAgICAgICAvLyBwbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBjYXNlIDgwOlxuICAgIC8vICAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgLy8gbG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgaWYgKGNvbnRyb2xsZXIudXAgJiYgcGxheWVyLmp1bXAgPT0gZmFsc2Upe1xuICAgICAgICAvLyAgICAgICAgIHBsYXllci5qdW1wID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICBwbGF5ZXIuc3BlZWR5ID0gMDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChjb250cm9sbGVyLmxlZnQpIHtcbiAgICAgICAgLy8gICAgICAgICBwbGF5ZXIubW92ZUxlZnQoKTtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyAgICAgaWYgKGNvbnRyb2xsZXIucmlnaHQpe1xuICAgICAgICAvLyAgICAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyAgICAgaWYgKGNvbnRyb2xsZXIudXApIHtcbiAgICAgICAgLy8gICAgICAgICBwbGF5ZXIuanVtcCgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgIC8vICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAvLyAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWR4IDwgMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZHggPiAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICBjYXNlIDMyOlxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkeSA+IDApIHBsYXllci5kcm9wKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcblxuLy8gICAgIH1cbi8vIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgeCwgeSkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLmZpbGxlciA9IGZpbGxlcjtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lKXtcblxuICAgIH1cbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGVjdENvbGxpc2lvbihvYmosIHRhcmdldCkge1xuICAgIGxldCBvYmpMZWZ0ID0gb2JqLng7XG4gICAgbGV0IG9ialJpZ2h0ID0gb2JqLnggKyBvYmoud2lkdGg7XG4gICAgbGV0IG9ialRvcCA9IG9iai5wb3NpdGlvbi55O1xuICAgIGxldCBvYmpCb3R0b20gPSBvYmoucG9zaXRpb24ueSArIG9iai5oZWlnaHQ7XG5cbiAgICBsZXQgdGFyZ2V0TGVmdCA9IHRhcmdldC5wb3NpdGlvbi54O1xuICAgIGxldCB0YXJnZXRSaWdodCA9IHRhcmdldC5wb3NpdGlvbi54ICsgdGFyZ2V0LndpZHRoO1xuICAgIGxldCB0YXJnZXRUb3AgPSB0YXJnZXQucG9zaXRpb24ueTtcbiAgICBsZXQgdGFyZ2V0Qm90dG9tID0gdGFyZ2V0LnBvc2l0aW9uLnkgKyB0YXJnZXQuaGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgICBvYmpCb3R0b20gPj0gdGFyZ2V0VG9wICYmXG4gICAgICAgIG9ialRvcCA8PSB0YXJnZXRCb3R0b20gJiZcbiAgICAgICAgLy8gb2JqQm90dG9tIDw9IHRhcmdldFRvcCAmJlxuICAgICAgICAvLyBvYmpUb3AgPj0gdGFyZ2V0Qm90dG9tICYmXG4gICAgICAgIG9iai5wb3NpdGlvbi54ID49IHRhcmdldExlZnQgJiZcbiAgICAgICAgb2JqLnBvc2l0aW9uLnggKyBvYmoud2lkdGggPD0gdGFyZ2V0UmlnaHRcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9