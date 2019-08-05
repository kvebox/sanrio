import level01 from '../levels/level_1.txt';
// import {hills_1, hills_2, hills_3, hills_4, trees, flowers, clouds} from '../../imgLoader';
import { BLOCKSIZE } from '../constants';
import PlatformPiece from '../scene/platform_piece';

export const levels = {
    1: level01
};

export const parseLevel = levelData => {
    let level = levelData.split("");
    let height = 0;
    let width = 0;

    let sceneObjects = [];
    let enemies = [];

    for (let i = 0; i < level.length; i++){
        switch (level[i]){
            case '\n':
                height += BLOCKSIZE;
                break;
            case ' ':
                width += BLOCKSIZE;
                break;
            case 'x':
                sceneObjects.push(new PlatformPiece(width, height, 4));
                width += BLOCKSIZE;
                break;
        }
    }
    
    return {
        1: sceneObjects
    };

};