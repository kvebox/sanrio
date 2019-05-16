import {CANVAS_HEIGHT, CANVAS_WIDTH} from './constants';
import InputHandler from './players/playerInput';
import Platform from './scene/platform';
import Player from './players/player';

export default class Game {
    constructor(CANVAS_HEIGHT, CANVAS_WIDTH) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;

        
    }

    start() {
        this.player = new Player(this.gameHeight, this.gameWidth);
        this.platform = new Platform(50, 100);
        
        new InputHandler(this.player);
    }


    update(deltaTime){
        this.player.update(deltaTime);

    }
    
    
    draw() {
        this.player.draw(ctx);
        this.platform.draw(ctx);

    }
}
