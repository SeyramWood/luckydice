import Game from './game';

export default class LevelOne extends Game{
    constructor(){
        super()
        this.levelOneContainer = document.createElement('div');
        this.levelOneFirstContainer = document.createElement('div');
        this.levelOneHeader = document.createElement('h3');
        this.levelOneRoundOneHeader = document.createElement('h3');
        this.displayGuess = document.createElement('div');
        this.displayRandom = document.createElement('div');
        this.displayStatus = document.createElement('div');
        this.levelOneContainer.setAttribute('class', 'game__container__levels__wrapper');
        this.levelOneContainer.setAttribute('id', 'game__container__levels__wrapper');

        this.levelOne = 1;
    }
    generateDom(){
        this.levelOneFirstContainer.setAttribute('id', 'level__one');
        this.levelOneFirstContainer.setAttribute('class', 'level');
        this.levelOneRoundOneHeader.textContent ='Round 1';
        this.displayGuess.textContent = `Player `;
        this.displayRandom.textContent = `Computer `;
        this.displayStatus.textContent = `Status `;

        this.displayGuess.innerHTML = `<span>Player</span> <span id="guess11"></span>`;
        this.displayRandom.innerHTML = `<span>Computer</span> <span id="computer11"></span>`;
        this.displayStatus.innerHTML = `<span>Status</span> <span id="status11"></span>`;

        this.levelOneFirstContainer.appendChild(this.levelOneRoundOneHeader);
        this.levelOneFirstContainer.appendChild(this.displayGuess);
        this.levelOneFirstContainer.appendChild(this.displayRandom);
        this.levelOneFirstContainer.appendChild(this.displayStatus);
        this.levelOneContainer.appendChild(this.levelOneFirstContainer);
        this.levelsContainer.appendChild(this.levelOneContainer);
    }
    renderGuessedValue(value){
        const el = document.querySelector('#guess11');
        el.setAttribute('class', 'btn btn-rounded2');
        el.textContent =  `${value}`;
        //console.log(this.guessedValue[0])
    }
}