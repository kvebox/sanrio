const Player = require('./players/player');

class Game {
    constructor() {

    }

    addPlayer() {
        const player = new Player();
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 300, 400);
        ctx.fillStyle = '#ccc';
        ctx.fillRect(0, 0, 300, 400);
    }
}


Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;