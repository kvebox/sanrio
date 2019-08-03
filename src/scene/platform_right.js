import PlatformPiece from './platform_piece';
import { BLOCKSIZE } from '../constants';
import { platform_right } from '../imgLoader';

export default class PlatformLeft extends PlatformPiece {
    constructor(x, y, color) {
        super(x,y, color);
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;
        this.image = platform_right[color];
        this.position = {
            x: x,
            y: y
        };
    }
}
