import level01 from '../levels/level_1.txt';
// import {hills_1, hills_2, hills_3, hills_4, trees, flowers, clouds} from '../../imgLoader';
import { BLOCKSIZE, CANVAS_HEIGHT } from '../constants';
import PlatformBuilder from '../scene/platformBuilder';
import Tree from '../scene/tree';

export const levels = {
    1: level01
};

export const parseLevel = levelData => {
    let level = levelData.split("");
    let height = 0;
    let width = 0;
    let depth = 5;
    let blockCount = 0;

    let sceneObjects = [];
    let enemies = [];

    for (let i = 0; i < level.length; i++){
        switch (level[i]){
            case '\n':
                height += BLOCKSIZE * 2;
                width = 0;
                break;
            case '\t':
                width += BLOCKSIZE * 4;
                break;
            case 'G':
                sceneObjects.push(new Tree(width, height+BLOCKSIZE));
                break;
            case ' ':
                width += BLOCKSIZE;
                break;
            case 'x':
                blockCount += 1;
                width += BLOCKSIZE;
                break;
            case 'X':
                switch (height) {
                    case height <= CANVAS_HEIGHT / 5 * 5:
                        depth = 5;
                        break;
                    case height <= CANVAS_HEIGHT / 5 * 4:
                        depth = 4;
                        break;
                    case height <= CANVAS_HEIGHT / 5 * 3:
                        depth = 3;
                        break;
                    case height <= CANVAS_HEIGHT / 5 * 2:
                        depth = 2;
                        break;
                    case height <= CANVAS_HEIGHT / 5 * 1:
                        depth = 1;
                        break;
                }
                sceneObjects.push(new PlatformBuilder(blockCount, width, height, depth));
                blockCount = 0;
                break;
            default:
        }
    }
    
    return {
        1: sceneObjects
    };

};