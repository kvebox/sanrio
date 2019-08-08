import { trees } from '../imgLoader';
import SceneObject from './sceneObject';

export default class Tree extends SceneObject {
    constructor(x, y) {
        super(x,y);
        this.width = 50;
        this.height = 110;
        this.image = trees[0];

        this.position = {
            x: x,
            y: y - this.height/2
        };
    }

}

