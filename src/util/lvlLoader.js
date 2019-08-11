import level01 from '../levels/level_1.txt';
import { HEIGHTSPAN, WIDTHSPAN, TREEHEIGHT, TREEWIDTH } from '../constants';
import PlatformBuilder from '../scene/platformBuilder';
import Tree from '../scene/tree';
import Coin from '../scene/coin';
import Bush from '../scene/bush';
import { randomInt } from './util';

export const levels = {
    1: level01
};

export const parseLevel = levelData => {
    let level = levelData.split("");
    let height = 0;
    let width = 0;
    let blockCount = 0;
    let itemCount = 0;

    let sceneObjects = [];
    let deco = [];
    let enemies = [];
    let items = [];

    for (let i = 0; i < level.length; i++){
        switch (level[i]){
            case '\n':
                height += HEIGHTSPAN;
                width = 0;
                break;
            case '\t':
                width += WIDTHSPAN*4;
                break;
            case 'G':
                break;
            case 'c':
                items[itemCount] = (new Coin(width, height - HEIGHTSPAN, itemCount));
                itemCount += 1;
                width += WIDTHSPAN;
                break;
            case 'T':
                deco.push(new Tree(width, height + HEIGHTSPAN, 1.5));
                width += WIDTHSPAN;
                break;
            case 't':
                deco.push(new Tree(width, height + HEIGHTSPAN, 1));
                width += WIDTHSPAN;
                break;
            case 'b':
                deco.push(new Bush(width, height, randomInt(0,5)));
                width += WIDTHSPAN;
                break;
            case ' ':
                width += WIDTHSPAN;
                break;
            case 'x':
                blockCount += 1;
                // width += BLOCKSIZE;
                break;
            case 'X':
                blockCount += 1;
                let depth = 5;
                switch (height > 0) {
                    case (height >= 0 && height < 100):
                        depth = 5;
                        break;
                    case (height >= 100 && height < 200):
                        depth = 4;
                        break;
                    case (height >= 200 && height < 300):
                        depth = 3;
                        break;
                    case (height >= 300 && height < 400):
                        depth = 2;
                        break;
                    case height >= 400:
                        depth = 1;
                        break;
                }
                sceneObjects.push(new PlatformBuilder(blockCount, width, height, depth));
                width += WIDTHSPAN;
                blockCount = 0;
                break;
            default:
        }
    }
    
    return {
        0: sceneObjects,
        1: deco,
        2: items
    };

};