export default class GameInputHandler {

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