'use strict'

import {Howl, Howler} from 'howler';
import Game from './game';
//import Sound from './sound';
import LevelOne from './level-one';
import LevelTwo from './level-two';
import LevelThree from './level-three';
import RenderGameLevels from './render-game-levels';

//const sound = new Sound();
const game = new Game();
const levelOne = new LevelOne();
const levelTwo = new LevelTwo();
const levelThree = new LevelThree();
new RenderGameLevels();


let counter = 1
game.throwDiceButton.disabled = true;
game.throwDiceButton.setAttribute('style','color:#555')
game.options.forEach((button) => {
    button.addEventListener('click', (e) => {
        game.throwDiceButton.disabled = false;
        game.throwDiceButton.removeAttribute('style')

       if (game.checkGameLevel === levelThree.levelThree){
            if (counter === 1) {
                game.guessedValue[0] = parseInt(e.target.textContent);
                levelThree.renderGuessedValueRoundOne(game.guessedValue[0])
                counter++;
            }
            else if (counter === 2){
                game.guessedValue[1] = parseInt(e.target.textContent);
                levelThree.renderGuessedValueRoundTwo(game.guessedValue[1])
                counter++;
            }
            else if (counter === 3){
                game.guessedValue[2] = parseInt(e.target.textContent);
                levelThree.renderGuessedValueRoundThree(game.guessedValue[2])
                counter = 1;
            }
       }
       else if (game.checkGameLevel === levelTwo.levelTwo){
            if (counter === 1) {
                game.guessedValue[0] = parseInt(e.target.textContent);
                levelTwo.renderGuessedValueRoundOne(game.guessedValue[0])
                counter++; 
            }
            else if (counter === 2){
                game.guessedValue[1] = parseInt(e.target.textContent);
                levelTwo.renderGuessedValueRoundTwo(game.guessedValue[1])
                counter = 1; 
            }
       }
       else if (game.checkGameLevel === levelOne.levelOne){
            game.guessedValue[0] = parseInt(e.target.textContent);
            levelOne.renderGuessedValue(game.guessedValue[0])
            counter = 1; 
       } 
    })
});


let counter2 = 1
let checkRoundWin = 0

const refreshGame = function() {
    counter = 1
    counter2 = 1
    game.throwDiceButton.disabled = true;
    game.throwDiceButton.setAttribute('style','color:#555')
    game.resetGame();
}

game.throwDiceButton.addEventListener('click', () => {
    document.querySelector('#dice').setAttribute('class', 'rotate-dice')
    checkRoundWin = 0
    setTimeout(() => {
        if (game.checkGameLevel === levelThree.levelThree){
            let randomValue = game.randomNumber()
            if (counter2 === 1) {
                let el = document.querySelector('#computer31')
                    el.setAttribute('class', 'btn btn-rounded2');
                    el.textContent =  randomValue;
                if(!game.isRoundWin(game.guessedValue[0], randomValue)){
                    game.points[0] = 0;
                    let el = document.querySelector('#status31')
                    el.setAttribute('class', 'btn btn-danger');
                    el.textContent =  `Loss`;
                }else{
                    game.points[0] = 1;
                    let el = document.querySelector('#status31')
                    el.setAttribute('class', 'btn btn-success');
                    el.textContent =  `Win`;
                    game.guessedValue = []
                }
                counter2++;
            }
            else if (counter2 === 2){
                let randomValue = game.randomNumber()
                let el = document.querySelector('#computer32')
                    el.setAttribute('class', 'btn btn-rounded2');
                    el.textContent =  randomValue;
                if(!game.isRoundWin(game.guessedValue[1], randomValue)){
                    game.points[1] = 0;
                    let el = document.querySelector('#status32')
                    el.setAttribute('class', 'btn btn-danger');
                    el.textContent =  `Loss`;
                }else{
                    game.points[1] = 1;
                    let el = document.querySelector('#status32')
                    el.setAttribute('class', 'btn btn-success');
                    el.textContent =  `Win`;
                    game.guessedValue = []
                }
                counter2++;
            }
            else if (counter2 === 3){
                const randomValue = game.randomNumber()
                const el = document.querySelector('#computer33')
                    el.setAttribute('class', 'btn btn-rounded2');
                    el.textContent =  randomValue;
                if(!game.isRoundWin(game.guessedValue[2], randomValue)){
                    game.points[2] = 0;
                    let el = document.querySelector('#status33')
                    el.setAttribute('class', 'btn btn-danger');
                    el.textContent =  `Loss`;
                }else{
                    game.points[2] = 1
                    let el = document.querySelector('#status33')
                    el.setAttribute('class', 'btn btn-success');
                    el.textContent =  `Win`;
                    game.guessedValue = []
                }
                counter2 = 1;
                checkRoundWin = 1
            }
            if (game.accumulatePoints(game.points) === 3) {
                const messagePopover = document.querySelector('#messagePopover');
                const cancelGame = document.querySelector('#cancelGame');
                const continueGame = document.querySelector('#continueGame');
                const changeLevel = document.querySelector('#changeLevel');
                const messageQuestion = document.querySelector('#messageQuestion');
                changeLevel.textContent = 'Level 3';
                messageQuestion.textContent = 'Start over again ?';
                setTimeout(() => {
                    messagePopover.setAttribute('class', 'popover show'); 
                }, 800);
                cancelGame.addEventListener('click', () => {
                    messagePopover.setAttribute('class', 'popover');
                })
                continueGame.addEventListener('click', () => {
                    localStorage.setItem('gameLevel', '1');
                    document.querySelector('#game__container__levels__wrapper').remove();
                    messageQuestion.textContent = 'Continue to next level ?';
                    messagePopover.setAttribute('class', 'popover');
                    refreshGame();
                    new RenderGameLevels();
                })
            }else if (checkRoundWin === 1 ){
                game.displayErrorMessage('Ooops!!! try again');
            }
        }
        else if (game.checkGameLevel === levelTwo.levelTwo){
            const randomValue = game.randomNumber()
            if (counter2 === 1) {
                const el = document.querySelector('#computer21')
                    el.setAttribute('class', 'btn btn-rounded2');
                    el.textContent =  randomValue;
                if(!game.isRoundWin(game.guessedValue[0], randomValue)){
                    game.points[0] = 0
                    let el = document.querySelector('#status21')
                    el.setAttribute('class', 'btn btn-danger');
                    el.textContent =  `Loss`;
                }else{
                    game.points[0] = 1
                    let el = document.querySelector('#status21')
                    el.setAttribute('class', 'btn btn-success');
                    el.textContent =  `Win`;
                    game.guessedValue = []
                    localStorage.setItem('gameLevel', '2');
                }
                counter2++;
            }
            else if (counter2 === 2){
                const randomValue = game.randomNumber()
                const el = document.querySelector('#computer22')
                    el.setAttribute('class', 'btn btn-rounded2');
                    el.textContent =  randomValue;
                if(!game.isRoundWin(game.guessedValue[1], randomValue)){
                    game.points[1] = 0
                    let el = document.querySelector('#status22')
                    el.setAttribute('class', 'btn btn-danger');
                    el.textContent =  `Loss`;
                }else{
                    game.points[1] = 1
                    let el = document.querySelector('#status22')
                    el.setAttribute('class', 'btn btn-success');
                    el.textContent =  `Win`;
                    game.guessedValue = []
                    localStorage.setItem('gameLevel', '2');
                }
                counter2 = 1;
                checkRoundWin = 1;
            }
            if (game.accumulatePoints(game.points) === 2) {
                const messagePopover = document.querySelector('#messagePopover');
                const cancelGame = document.querySelector('#cancelGame');
                const continueGame = document.querySelector('#continueGame');
                const changeLevel = document.querySelector('#changeLevel');
                changeLevel.textContent = 'Level 2';
                setTimeout(() => {
                    messagePopover.setAttribute('class', 'popover show'); 
                }, 800);
                cancelGame.addEventListener('click', () => {
                    messagePopover.setAttribute('class', 'popover');
                })
                continueGame.addEventListener('click', () => {
                    localStorage.setItem('gameLevel', '3');
                    document.querySelector('#game__container__levels__wrapper').remove();
                    messagePopover.setAttribute('class', 'popover');
                    refreshGame();
                    new RenderGameLevels();
                })
            }
            else if (checkRoundWin === 1 ){
                game.displayErrorMessage('Ooops!!! try again');
            }
        }
        else if (game.checkGameLevel === levelOne.levelOne){
            const randomValue = game.randomNumber()
            const el = document.querySelector('#computer11')
                    el.setAttribute('class', 'btn btn-rounded2');
                    el.textContent =  randomValue;
            if(!game.isRoundWin(game.guessedValue[0], randomValue)){
                game.points[0] = 0;
                const el = document.querySelector('#status11')
                    el.setAttribute('class', 'btn btn-danger');
                    el.textContent =  `Loss`;
                    counter2 = 1;
                    checkRoundWin = 1;
            }else{
                game.points[0] = 1
                game.guessedValue = []
                const el = document.querySelector('#status11')
                    el.setAttribute('class', 'btn btn-success');
                    el.textContent =  `Win`;
                    counter2 = 1;
                    checkRoundWin = 1;
            }
            if (game.accumulatePoints(game.points) === 1) {
                const popover = document.querySelector('#messagePopover');
                const cancelGame = document.querySelector('#cancelGame');
                const continueGame = document.querySelector('#continueGame');
                const changeLevel = document.querySelector('#changeLevel');
                changeLevel.textContent = 'Level 1';
                setTimeout(() => {
                    messagePopover.setAttribute('class', 'popover show'); 
                }, 800);
                cancelGame.addEventListener('click', () => {
                    messagePopover.setAttribute('class', 'popover');
                })
                continueGame.addEventListener('click', () => {
                    localStorage.setItem('gameLevel', '2');
                    document.querySelector('#game__container__levels__wrapper').remove();
                    messagePopover.setAttribute('class', 'popover');
                    refreshGame();
                    new RenderGameLevels();
                })
            }else{
                game.displayErrorMessage('Ooops!!! try again');
            }
        }
        document.querySelector('#dice').setAttribute('class', ''); 
    }, 2000);
});

game.resetGameButton.addEventListener('click', () => {
    refreshGame();
    document.querySelector('#game__container__levels__wrapper').remove();
    new RenderGameLevels();
});

const url = document.createElement('a')
url.setAttribute('href','bell_ring.mp3')
console.log(url)
const sound = new Pizzicato.Sound({
    source: 'file',
    options: {path: './sounds/bell_ring.mp3'}
},function () {
    console.log('sound loaded')
})
sound.play(2,0)


