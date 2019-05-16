import Player from './players/player';
const GameView = require('./gameview');
const Game = require('./game');

const GAME_WIDTH = 400;
const GAME_HEIGHT = 300;



document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    // let game = new Game();
    // new GameView(game, ctx);
    ctx.fillStyle = '#f00';
    let player = new Player(GAME_HEIGHT, GAME_WIDTH);
    // cxt.fillRect(0,0,100,100);
    player.draw(ctx);
});