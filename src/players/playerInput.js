import Game from "../game";


export default class InputHandler {
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
            this.player.jump(); }
            else {
                this.player.drop();
            }
            // (this.left) ? this.player.moveLeft() : this.player.stop()
            // (this.right) ? this.player.moveRight() : this.player.stop()
            
            if (this.right) {
                this.player.moveRight();
            } else if (this.left) {
                this.player.moveLeft() } else {
                this.player.stop();
            }
            document.addEventListener('keydown', this.controller);
        document.addEventListener('keyup', this.controller);
        
        // if (this.up) {
            //     player.jump();
            // }
            
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