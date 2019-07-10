export default class Menu {
    draw(ctx){
        // ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        // ctx.fillStyle = 'rgba(0,0,0,0.5)';
        // ctx.fill();
    }

    toggleMenu(){
        let menu = document.getElementById('mainMenuContainer');
        menu.style.display = 'block';
    }
}