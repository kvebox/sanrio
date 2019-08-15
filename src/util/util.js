export function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function flipImage(imageArr){
    imageArr.map(image => {
        image.style.transform = 'scaleX(-1)';
    });
    return imageArr;
}