class GameView {
    constructor (game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();
    }
}



module.exports = GameView;