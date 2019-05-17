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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_HEIGHT\", function() { return CANVAS_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_WIDTH\", function() { return CANVAS_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTIONS\", function() { return DIRECTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JUMP_HEIGHT\", function() { return JUMP_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPEED\", function() { return SPEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRAVITY\", function() { return GRAVITY; });\n\nconst CANVAS_HEIGHT = 400;\nconst CANVAS_WIDTH = 700;\n\nconst DIRECTIONS = {\n    LEFT: (-1, 0),\n    RIGHT: (1, 0),\n    UP: (0, 1),\n};\n\nconst JUMP_HEIGHT = 10;\nconst SPEED = 5;\n\nconst GRAVITY = 10;\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _players_playerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players/playerInput */ \"./src/players/playerInput.js\");\n/* harmony import */ var _scene_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/platform */ \"./src/scene/platform.js\");\n/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/player */ \"./src/players/player.js\");\n\n\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    RUNNING: 1,\n    MENU: 2,\n    GAMEOVER: 3\n};\n\n\nclass Game {\n    constructor(CANVAS_HEIGHT, CANVAS_WIDTH) {\n        this.gameWidth = CANVAS_WIDTH;\n        this.gameHeight = CANVAS_HEIGHT;\n\n        \n    }\n\n    start() {\n        this.gameState = GAMESTATE.RUNNING;\n        this.player = new _players_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n\n        // constructor(width, height, x, y, filler)\n        this.platforms = {\n            1: new _scene_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](50, 15, 100, 50),\n            2: new _scene_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100, 15, 75, 100)\n\n        };\n        \n        new _players_playerInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.player, this);\n    }\n\n    pause() {\n        if (this.gameState == GAMESTATE.PAUSED) {\n            this.gameState = GAMESTATE.RUNNING;\n        } else {\n            this.gameState = GAMESTATE.PAUSED;\n        }\n    }\n\n\n    update(deltaTime){\n        if (this.gameState == GAMESTATE.PAUSED) return;\n        this.player.update(deltaTime);\n        Object.keys(this.platforms).forEach (key => {\n            this.platforms[key].update(deltaTime);\n        });\n    }\n    \n    \n    draw() {\n\n        this.player.draw(ctx);\n        Object.keys(this.platforms).forEach(key => {\n            this.platforms[key].draw(ctx);\n        });\n        \n        if (this.gameState == GAMESTATE.PAUSED) {\n            ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n            ctx.fillStyle = 'rgba(0,0,0,0.5)';\n            ctx.fill();\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let canvas = document.getElementById('canvas');\n    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_HEIGHT\"];\n    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"];\n    let ctx = canvas.getContext('2d');\n    // ctx.fillStyle = '#fff';\n    ctx.fillStyle = 'rgba(0,0,0,0.5)';\n\n    \n    let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_HEIGHT\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"]);\n    game.start();\n    \n    \n    let lastTime = 0;\n    function gameLoop(timestamp) {\n        \n        let deltaTime = timestamp - lastTime;\n        lastTime = timestamp;\n\n        ctx.clearRect(0,0,_constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"],_constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_HEIGHT\"]);\n\n        game.update(deltaTime);\n        game.draw(ctx);\n\n        requestAnimationFrame(gameLoop);\n    }\n    \n    requestAnimationFrame(gameLoop);\n\n\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/players/player.js":
/*!*******************************!*\
  !*** ./src/players/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ \"./src/constants.js\");\n/* harmony import */ var _util_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/collision */ \"./src/util/collision.js\");\n\n\n\n\n\nclass Player {\n    constructor(game) {\n        // this.image = \n        this.width = 15;\n        this.height = 15;\n        this.game = game;\n\n        this.position = {\n            x: this.game.gameWidth/2  - this.width/2,\n            y: this.game.gameHeight/2 \n        };\n\n        this.speedx = 0;\n        this.speedy = -_constants__WEBPACK_IMPORTED_MODULE_0__[\"GRAVITY\"];\n        // this.color = '#ff00ff';\n    }\n\n    jump() {\n        this.speedy = _constants__WEBPACK_IMPORTED_MODULE_0__[\"JUMP_HEIGHT\"];\n    }\n\n    stop() {\n        this.speedx = 0;\n    }\n\n    drop(){\n        this.speedy = -_constants__WEBPACK_IMPORTED_MODULE_0__[\"GRAVITY\"];\n    }\n\n    moveLeft(){\n        this.speedx = -_constants__WEBPACK_IMPORTED_MODULE_0__[\"SPEED\"];\n    }\n\n    moveRight(){\n        this.speedx = _constants__WEBPACK_IMPORTED_MODULE_0__[\"SPEED\"];\n    }\n\n    shoot() {\n\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n\n    update(deltaTime) {\n        \n        this.position.x += this.speedx;\n        this.position.y -= this.speedy;\n\n        //check collisions with wall\n        \n        if(this.position.x < 0) this.position.x = 0;\n        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth-this.width;\n        if(this.position.y < 0) this.position.y = 0;\n        if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;\n\n\n        // check collisions with platforms\n\n        Object.keys(this.game.platforms).forEach (key => {\n            let platform = this.game.platforms[key];\n            if (Object(_util_collision__WEBPACK_IMPORTED_MODULE_1__[\"detectCollision\"])(this, platform)){\n                this.speedy = 0;\n                // this.speedx = 0;\n            }\n        });\n\n\n        \n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/players/player.js?");

/***/ }),

/***/ "./src/players/playerInput.js":
/*!************************************!*\
  !*** ./src/players/playerInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n\n\nclass InputHandler {\n    constructor (player, game) {\n        document.addEventListener('keydown', (e) => {\n            if (e.repeat) return;\n        switch (e.keyCode) {\n            case 37:\n                player.moveLeft();\n                break;\n            case 32:\n                player.jump();\n                break;\n            case 39:\n                player.moveRight();\n                break;\n            case 80:\n                game.pause();\n            }\n        });\n\n        document.addEventListener('keyup', e => {\n            switch (e.keyCode) {\n                case 37:\n                    if (player.speedx < 0) player.stop();\n                    break;\n                case 39:\n                    if (player.speedx > 0) player.stop();\n                    break;\n                case 32:\n                    if (player.speedy > 0) player.drop();\n                    break;\n            }\n        });\n\n    }\n}\n\n//# sourceURL=webpack:///./src/players/playerInput.js?");

/***/ }),

/***/ "./src/scene/platform.js":
/*!*******************************!*\
  !*** ./src/scene/platform.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Platform; });\nclass Platform {\n    constructor(width, height, x, y) {\n        this.width = width;\n        this.height = height;\n        // this.filler = filler;\n\n        this.position = {\n            x: x,\n            y: y\n        };\n    }\n\n    draw(ctx) {\n        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n\n    update(deltaTime){\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/scene/platform.js?");

/***/ }),

/***/ "./src/util/collision.js":
/*!*******************************!*\
  !*** ./src/util/collision.js ***!
  \*******************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\nfunction detectCollision(obj, target) {\n    let objLeft = obj.x;\n    let objRight = obj.x + obj.width;\n    let objTop = obj.position.y;\n    let objBottom = obj.position.y + obj.height;\n\n    let targetLeft = target.position.x;\n    let targetRight = target.position.x + target.width;\n    let targetTop = target.position.y;\n    let targetBottom = target.position.y + target.height;\n\n    if (\n        objBottom >= targetTop &&\n        objTop <= targetBottom &&\n        // objBottom <= targetTop &&\n        // objTop >= targetBottom &&\n        obj.position.x >= targetLeft &&\n        obj.position.x + obj.width <= targetRight\n    ) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/util/collision.js?");

/***/ })

/******/ });