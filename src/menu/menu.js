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
        let nums = '1234567890';
        let number = 0;
        let letter = 0;
        let keyArray = [
            [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
            // numbers
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5],
            // qwertyuiop
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 0],
            // asdfghjkl
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 5, 5, 5],
            // zxcvbnm
            [6, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 6],
            // space
            [0, 0, 0, 0, 7, 0, 0, 9, 10, 11]
        ];

        for (let row = 0; row < keyArray.length; row++){
            let list = document.getElementById(`row${row}`);
            keyArray[row].forEach(key => {
                let element = document.createElement('LI');
                switch (key){
                    case 1:
                        element.setAttribute("class", "keyboardKey");
                        element.setAttribute("id", `key${nums[number]}`);
                        let textnode = document.createElement('P');
                        let textContent = document.createTextNode(`${nums[number]}`);
                        textnode.setAttribute("class", "keyNumberContent");
                        textnode.appendChild(textContent);
                        element.appendChild(textnode);
                        list.appendChild(element);
                        number += 1;
                        break;
                    case 2:
                        element.setAttribute("class", "keyboardKey");
                        element.setAttribute("id", `key${keyboard[letter]}`);
                        let letternode = document.createElement('P');
                        let letterContent = document.createTextNode(`${keyboard[letter]}`);
                        letternode.setAttribute("class", "keyLetterContent");
                        letternode.appendChild(letterContent);
                        element.appendChild(letternode);
                        list.appendChild(element);
                        letter += 1;
                        break;
                    case 7:
                        element.setAttribute("id", "space");
                        list.appendChild(element);
                        break;
                    // arrow keys
                    case 9:
                        element.setAttribute("class", "arrowContainer");
                        let leftArrow = document.createElement('DIV');
                        leftArrow.setAttribute("class", "arrow");
                        leftArrow.setAttribute("id", "leftArrow");

                        let blank = document.createElement('DIV');
                        blank.setAttribute("class", "arrow");

                        element.appendChild(blank);
                        element.appendChild(leftArrow);
                        list.appendChild(element);
                        break;  
                    case 10:
                        element.setAttribute("class", "arrowContainer");
                        let upArrow = document.createElement('DIV');
                        upArrow.setAttribute("class", "arrow");
                        upArrow.setAttribute("id", "upArrow");

                        let downArrow = document.createElement('DIV');
                        downArrow.setAttribute("class", "arrow");
                        downArrow.setAttribute("id", "downArrow");

                        element.appendChild(upArrow);
                        element.appendChild(downArrow);
                        list.appendChild(element);
                        break;  
                    case 11:
                        element.setAttribute("class", "arrowContainer");
                        
                        let rightArrow = document.createElement('DIV');
                        rightArrow.setAttribute("class", "arrow");
                        rightArrow.setAttribute("id", "rightArrow");


                        let rightblank = document.createElement('DIV');
                        rightblank.setAttribute("class", "arrow");

                        element.appendChild(rightblank);
                        element.appendChild(rightArrow);
                        list.appendChild(element);
                        break;  

                    // blank keys
                    case 0:
                        element.setAttribute("class", "keyboardKey");
                        list.appendChild(element);
                        break;
                    case 3:
                        element.setAttribute("class", "quarterKey");
                        list.appendChild(element);
                        break;
                    case 4:
                        element.setAttribute("class", "halfKey");
                        list.appendChild(element);
                        break;
                    case 5:
                        element.setAttribute("class", "verticalHalfKey");
                        list.appendChild(element);
                        break;
                    case 6:
                        element.setAttribute("class", "shift");
                        list.appendChild(element);
                        break;
                    case 8:
                        element.setAttribute("class", "caps");
                        list.appendChild(element);
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