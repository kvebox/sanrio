const Player = require('./players/player');

const Game = function() {
    this.color = 'rgb(0,0,0)';
    this.colors = [0,0,0];
    this.shifts = [1,1,1];

    this.update = function() {
        for (let index = 0; index < 3; index++){
            let color = this.colors[index];
            let shift = this.shifts[index];
        }
    }
}

// class Game {
//     constructor() {
        
//     }
    
//     addPlayer() {
//         const player = new Player();
//     }
    
//     draw(ctx) {
//         ctx.clearRect(0, 0, 300, 400);
//         ctx.fillStyle = '#ccc';
//         ctx.fillRect(0, 0, 300, 400);
//     }
// }


// module.exports = Game;