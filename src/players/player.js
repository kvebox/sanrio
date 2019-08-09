import { PLAYER, GRAVITY } from './../constants';
import {detectCollision} from '../util/collision';


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    START: 2,
    GAMEOVER: 3,
    INTRO: 4
};

export default class Player {
    constructor(game) {
        this.width = PLAYER;
        this.height = PLAYER;
        this.game = game;
        this.offset = 0;
        // this.level = levelData;

        this.position = {
            x: this.game.gameWidth  - this.width/2,
            y: this.game.gameHeight/2 
        };
        this.canJump = false;
        this.y_velocity = GRAVITY;
        this.x_velocity = 0;
        this.hit = false;
    }

    move(){
        // console.log(this.position);
        // console.log(this.position)
        this.x_velocity *= 0.9;
        // if (this.y_velocity < 0) {this.y_velocity += 15 }
        // console.log(this.y_velocity);
        // if (this.y_velocity != 0){
        this.y_velocity += 0.9;
        // }
        this.position.x += this.x_velocity;
        this.position.y += this.y_velocity ;
        
    }

    getOffset_x(){
        return this.x_velocity;
    }

    getOffset_y(jump){
        return this.offset + jump;
    }

    shoot() {

    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        
        this.move();

        //check collisions with wall
        
        if (this.position.x < 0) this.position.x = 0;

        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;

        //adjust camera offset


        //check collisions w floor 
        // if(this.position.y < 0) this.position.y = 0;
        // if(this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight-this.height;
        
        if (this.position.y + this.height > this.game.gameHeight+100) {
            this.position.x = this.game.gameWidth / 2 - this.width / 2;
            this.position.y = this.game.gameHeight / 2;
            this.game.loseLife();
        }



        // check collisions with platforms

        this.game.sceneObjects.forEach(platform => {
            if (detectCollision(this, platform)) {
                this.y_velocity = 5;
                this.position.y = platform.position.y - this.height;
                this.hit = true;
                this.canJump = true;
            }
        });

        this.game.items.forEach(item => {
            if (detectCollision(this, item)){
                switch (item.type) {
                    case 'coin':
                        delete this.game.items[item.key];
                        break;
                }
            }
        });
        
        // if (this.game.gameState == GAMESTATE.PAUSED) {
        Object.keys(this.game.platforms).forEach (key => {
            let platform = this.game.platforms[key];
            if (detectCollision(this, platform)){
                this.y_velocity = 5;
                this.position.y = platform.position.y - this.height;
                this.hit = true;
                this.canJump = true;
            }
        });
    // }
    }
}

