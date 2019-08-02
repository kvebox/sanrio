import PlatformPiece from './platform_piece';
import { BLOCKSIZE } from '../constants';
import {platform_1} from '../imgLoader';

export default class PlatformLeft extends PlatformPiece {
    constructor(x, y) {
        super(x,y);
        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;

        this.image = platform_1[0];

        this.position = {
            x: x,
            y: y
        };
    }


}
