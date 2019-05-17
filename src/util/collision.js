export function detectCollision(obj, target) {
    let objBottom = obj.position.y + obj.width;
    let objTop = obj.position.y;

    let targetTop = target.position.y;
    let targetLeft = target.position.x;
    let targetRight = target.position.x + target.width;
    let targetBottom = target.position.y + target.height;

    if (
        objBottom >= targetTop &&
        objTop <= targetBottom &&
        obj.position.x >= targetLeft &&
        obj.position.x + obj.width <= targetRight
    ) {
        return true;
    } else {
        return false;
    }
}