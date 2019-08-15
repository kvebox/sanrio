import Enemy from "./enemy";
import { pink, pinkFlipped } from '../imgLoader';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';

export default class Pink extends Enemy {
    constructor(x, y, key) {
        super(x, y);
        this.width = 35;
        this.height = 35;
        this.cycle = 0;
        this.type = 'pink';
        this.image = pink;
        this.image_flipped = pinkFlipped;
        this.key = key;

        this.position = {
            x: x,
            y: y - this.height
        };
    }

//     flipImage(image, ctx, flipH, flipV) {
//     var scaleH = flipH ? -1 : 1, // Set horizontal scale to -1 if flip horizontal
//         scaleV = flipV ? -1 : 1, // Set verical scale to -1 if flip vertical
//         posX = flipH ? width * -1 : 0, // Set x position to -100% if flip horizontal 
//         posY = flipV ? height * -1 : 0; // Set y position to -100% if flip vertical

//     ctx.save(); // Save the current state
//     ctx.scale(scaleH, scaleV); // Set scale to flip the image
//     ctx.drawImage(img, posX, posY, width, height); // draw the image
//     ctx.restore(); // Restore the last saved state
// }


    move(player) {
        this.position.x -= player.getOffset_x();
        if (player.position.x > this.position.x){
            this.image = this.image_flipped;
        }
        if (player.position.x < this.position.x){
            this.image = pink;
        }
    }

    // transform: rotateY(180deg)


    draw(ctx) {
        this.cycle += 0.25;
        if (this.cycle > this.image.length - 1) {
            this.cycle = 0;
        }

        // var scaleH = flipH ? -1 : 1, // Set horizontal scale to -1 if flip horizontal
        //     scaleV = flipV ? -1 : 1, // Set verical scale to -1 if flip vertical
        //     posX = flipH ? width * -1 : 0, // Set x position to -100% if flip horizontal 
        //     posY = flipV ? height * -1 : 0; // Set y position to -100% if flip vertical

        // ctx.save(); // Save the current state
        // ctx.scale(-1, 1); // Set scale to flip the image
        // ctx.drawImage(img, posX, posY, width, height); // draw the image
        ctx.drawImage(this.image[Math.ceil(this.cycle)], this.position.x, this.position.y, this.width, this.height);
        // ctx.restore(); // Restore the last saved state
    }
}