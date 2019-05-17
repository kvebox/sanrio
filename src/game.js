import InputHandler from './players/playerInput';
import Platform from './scene/platform';
import Player from './players/player';

export default class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;

        
    }

    start() {

        this.player = new Player(this);

        this.platforms = {
            1: new Platform(50, 100, 25, 100),
            2: new Platform(100, 50, 50, 200)

        };
        
        new InputHandler(this.player);
    }


    update(deltaTime){
        this.player.update(deltaTime);
        Object.keys(this.platforms).forEach (key => {
            this.platforms[key].update(deltaTime);
        });
    }
    
    
    draw() {
        this.player.draw(ctx);
        Object.keys(this.platforms).forEach(key => {
            this.platforms[key].draw(ctx);
        });

    }
}
