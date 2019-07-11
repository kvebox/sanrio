export default class Menu {
    constructor(game){
        this.optionsList = document.getElementsByClassName('menuOptions');
        this.current = 0;
        this.length = this.optionsList.length;
        this.game = game;
        this.menuType = '';
    }

    shiftDown(){
        this.optionsList[this.current].removeAttribute('id', 'selected');
        this.current += 1;
        if (this.current >= this.length) this.current %= this.length;
        this.selected = this.optionsList[this.current % this.length];
        this.selected.setAttribute("id", "selected");
    }

    shiftUp(){
        this.optionsList[this.current].removeAttribute('id', 'selected');
        this.current -= 1;
        if (this.current < 0) this.current = this.length-1;
        this.selected = this.optionsList[this.current % this.length];
        this.selected.setAttribute("id", "selected");
    }

    enter(){
        switch (this.current){
            // resume
            case 0:
                this.exit();
                break;
            // new game
            case 1:
                break;
            // controls
            case 2:
                break;
            // options
            case 3:
                this.toggleOptions();
                break;
            default:
                this.exit();
        }
    }

    toggleOptions(){
        let optionsMenu = document.getElementById('optionsMenuContainer');
        optionsMenu.style.display = 'block';
        let menu = document.getElementById('mainMenuContent');
        let mainMenu = document.getElementById('mainMenuContainer');
        mainMenu.style.position = 'static';
        menu.style.display = 'none';
    }

    decreaseVolumne(){}

    increaseVolumne(){}

    toggleMap(){}

    toggleControls(){}

    exit(){
        this.game.pause();
    }

    toggleMenu(){
        let menu = document.getElementById('mainMenuContainer');
        menu.style.display = 'block';
    }
}