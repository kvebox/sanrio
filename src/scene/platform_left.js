import PlatformPiece from './platform_piece';
import { BLOCKSIZE } from '../constants';
import {platform_left} from '../imgLoader';

export default class PlatformLeft extends PlatformPiece {
    constructor(x, y, color) {
        super(x,y, color);
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;

        this.image = platform_left[color];

        this.position = {
            x: x,
            y: y
        };
    }


}
