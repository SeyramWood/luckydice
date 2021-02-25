export default class Game{
    constructor(){
        this.options = document.querySelectorAll(".options > .option");
        this.throwDiceButton = document.querySelector("#throwDice");
        this.levelsContainer = document.querySelector("#game__container__levels");
        this.resetGameButton = document.querySelector("#resetGame");
        this.guessedValue = [];
        this.points = [];
        this.randomValue = '';

        this.levelString = localStorage.getItem('gameLevel');
        if(this.levelString === null){
            localStorage.setItem('gameLevel', '1')
        }
    }
    accumulatePoints(arr){
        const reducer = (accumulator, currentVal) => accumulator + currentVal;
        return arr.reduce(reducer);
    }
    get checkGameLevel(){
        let levelString = localStorage.getItem('gameLevel');
        if(levelString !== null){
            return parseInt(levelString);
        }
    }
    randomNumber(){
        return Math.floor(Math.random()*6) + 1; //return random integers from 1 to 6
    }
    isRoundWin(guess , rand) {
        return guess === rand;
        
    }
    displayErrorMessage(message){
        const alert = document.createElement('div');
        alert.className ='error-message animate--moveInLeft';
        alert.setAttribute('id','error-message');
        alert.innerText = message;
        document.querySelector('body').prepend(alert);
        setTimeout(()=>{
            document.querySelector('#error-message').remove();
        },4000)
    }
    resetGame(){
        this.guessedValue = [];
        this.points = [];
        this.randomValue = '';
    }
}



