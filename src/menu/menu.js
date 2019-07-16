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

    generateControls(){
        let keyboard = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        let number = 0;
        let letter = 0;
        let keyArray = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        for (let row = 1; row < keyArray.length; row++){
            let list = document.getElementById(`row${row}`);
            keyArray[row].forEach(key => {
                let element = document.createElement('LI');
                switch (key){
                    case 0:
                        element.setAttribute("class", "keyboardKey");
                        list.appendChild(element);
                        break;
                    case 1:
                        element.setAttribute("class", "keyboardKey");
                        let textnode = document.createTextNode(`${number}`);
                        // textnode.setAttribute("id", `key${number}`);
                        element.appendChild(textnode);
                        list.appendChild(element);
                        number += 1;
                        break;
                    case 2:
                        element.setAttribute("class", "keyboardKey");
                        let letternode = document.createTextNode(`${keyboard[letter]}`);
                        // letternode.setAttribute("id", `key${keyboard[letter]}`);
                        element.appendChild(letternode);
                        list.appendChild(element);
                        letter += 1;
                        break;
                    default:
                        break;
                }
            });
        }


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