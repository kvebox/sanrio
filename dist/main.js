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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./players/player */ \"./src/players/player.js\");\n\nconst Game = function() {\n    this.color = 'rgb(0,0,0)';\n    this.colors = [0,0,0];\n    this.shifts = [1,1,1];\n\n    this.update = function() {\n        for (let index = 0; index < 3; index++){\n            let color = this.colors[index];\n            let shift = this.shifts[index];\n        }\n    }\n}\n\n// class Game {\n//     constructor() {\n        \n//     }\n    \n//     addPlayer() {\n//         const player = new Player();\n//     }\n    \n//     draw(ctx) {\n//         ctx.clearRect(0, 0, 300, 400);\n//         ctx.fillStyle = '#ccc';\n//         ctx.fillRect(0, 0, 300, 400);\n//     }\n// }\n\n\n// module.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n    constructor (game, ctx) {\n        this.ctx = ctx;\n        this.game = game;\n        this.player = this.game.addPlayer();\n    }\n}\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players/player */ \"./src/players/player.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _players_playerInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/playerInput */ \"./src/players/playerInput.js\");\n\n\n\n\n\n\nconst GameView = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let canvas = document.getElementById('canvas');\n    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS_HEIGHT\"];\n    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS_WIDTH\"];\n    let ctx = canvas.getContext('2d');\n    // let game = new Game();\n    // new GameView(game, ctx);\n    ctx.fillStyle = '#EF5455';\n    let player = new _players_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS_HEIGHT\"], _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS_WIDTH\"]);\n    // let platform = new Platform(50, 100);\n    // platform.draw(ctx);\n    // player.draw(ctx);\n\n    new _players_playerInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player);\n    let lastTime = 0;\n\n    function gameLoop(timestamp){\n        let deltaTime = timestamp - lastTime;\n        lastTime = timestamp;\n\n        ctx.clearRect(0,0,800,600);\n        player.update(deltaTime);\n\n        player.draw(ctx);\n\n        requestAnimationFrame(gameLoop);\n        \n    }\n\n    gameLoop();\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/players/player.js":
/*!*******************************!*\
  !*** ./src/players/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ \"./src/constants.js\");\n\n\nclass Player {\n    constructor(gameheight, gamewidth) {\n        // this.image = \n        this.width = 15;\n        this.height = 15;\n\n        this.position = {\n            x: gamewidth/2  - this.width/2,\n            y: gameheight/2 \n        };\n\n        this.speedx = 0;\n        this.speedy = -_constants__WEBPACK_IMPORTED_MODULE_0__[\"GRAVITY\"];\n\n    }\n\n    jump() {\n        this.speedy = _constants__WEBPACK_IMPORTED_MODULE_0__[\"JUMP_HEIGHT\"];\n    }\n\n    stop() {\n        this.speedx = 0;\n    }\n\n    drop(){\n        this.speedy = -_constants__WEBPACK_IMPORTED_MODULE_0__[\"GRAVITY\"];\n    }\n\n    move() {\n\n    }\n\n    moveLeft(){\n        this.speedx = -_constants__WEBPACK_IMPORTED_MODULE_0__[\"SPEED\"];\n    }\n\n    moveRight(){\n        this.speedx = _constants__WEBPACK_IMPORTED_MODULE_0__[\"SPEED\"];\n    }\n\n    shoot() {\n\n    }\n\n    draw(ctx) {\n        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n\n    update(deltaTime) {\n        if (!deltaTime) return;\n\n        \n        this.position.x += this.speedx;\n        this.position.y -= this.speedy;\n        \n        if(this.position.x < 0) this.position.x = 0;\n        if(this.position.x + this.width > _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"]) this.position.x = _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"]-this.width;\n        if(this.position.y < 0) this.position.y = 0;\n        if(this.position.y + this.height > _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_HEIGHT\"]) this.position.y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_HEIGHT\"]-this.height;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/players/player.js?");

/***/ }),

/***/ "./src/players/playerInput.js":
/*!************************************!*\
  !*** ./src/players/playerInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n    constructor (player) {\n        document.addEventListener('keydown', (e) => {\n        switch (e.keyCode) {\n            case 37:\n                player.moveLeft();\n                break;\n            case 39:\n                player.moveRight();\n            }\n        });\n        \n        document.addEventListener('keypress', (e) => {\n            switch (e.keyCode) {\n                case 32:\n                    player.jump();\n                    break;\n            }\n        });\n        \n        document.addEventListener('keyup', e => {\n            switch (e.keyCode) {\n                case 37:\n                    if (player.speedx < 0) player.stop();\n                    break;\n                case 39:\n                    if (player.speedx > 0) player.stop();\n                    break;\n                case 32:\n                    if (player.speedy > 0) player.drop();\n                    break;\n            }\n        });\n\n    }\n}\n\n//# sourceURL=webpack:///./src/players/playerInput.js?");

/***/ })

/******/ });