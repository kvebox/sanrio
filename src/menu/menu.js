export default class Menu {
    constructor(){
        this.optionsList = document.getElementsByClassName('menuOptions');
        this.current = 0;
        this.length = this.optionsList.length;
    }
    draw(ctx){
        // ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        // ctx.fillStyle = 'rgba(0,0,0,0.5)';
        // ctx.fill();
    }

    shiftDown(){
        this.optionsList[this.current].removeAttribute('id', 'selected');
        this.current += 1;
        if (this.current >= this.length) this.current %= this.length;
        this.selected = this.optionsList[this.current % this.length];
        this.selected.setAttribute("id", "selected");
        
    }

    shiftUp(){

    }

    toggleOptions(){}

    toggleMap(){}

    toggleControls(){}

    exit(){}

    toggleMenu(){
        let menu = document.getElementById('mainMenuContainer');
        menu.style.display = 'block';
    }
}