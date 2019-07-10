const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

export default class GameInputHandler {

    constructor (game, menu) {
        document.addEventListener('keydown', (e) => {
            // if (e.repeat) return;
        if (game.gameState == GAMESTATE.PAUSED){
            switch (e.keyCode) {
                // down
                case 40:
                    console.log('down');
                    break;  
                // up    
                case 38:
                    break;
                // enter
                case 13:
                    break;
                case 80:
                    game.pause();
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