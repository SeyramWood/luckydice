import Game from './game';
export default class LevelTwo extends Game{
    constructor(){
        super();
        this.levelTwo = 2;
        this.levelTwoContainer = document.createElement('div');
        this.levelTwoFirstContainer = document.createElement('div');
        this.levelTwoSecondContainer = document.createElement('div');
        this.levelTwoHeader = document.createElement('h3');
        this.levelTwoContainer.setAttribute('class', 'game__container__levels__wrapper')
        this.levelTwoContainer.setAttribute('id', 'game__container__levels__wrapper')

        this.levelTwoRoundOneHeader = document.createElement('h4');
        this.displayGuess = document.createElement('div');
        this.displayRandom = document.createElement('div');
        this.displayStatus = document.createElement('div');
        this.statusButton = document.createElement('span');

        this.levelTwoRoundTwoHeader = document.createElement('h4');
        this.displayGuessSecond = document.createElement('div');
        this.displayRandomSecond = document.createElement('div');
        this.displayStatusSecond = document.createElement('div');
    }
    generateDom(){
        this.levelTwoFirstContainer.setAttribute('id', 'round__one');
        this.levelTwoFirstContainer.setAttribute('class', 'level');
        this.levelTwoRoundOneHeader.textContent = 'Round 1'
        this.displayGuess.textContent = `Player`;
        this.displayRandom.textContent = `Computer `;
        this.displayStatus.textContent = `Status `;

        this.displayGuess.innerHTML = `<span>Player</span> <span id="guess21"></span>`;
        this.displayRandom.innerHTML = `<span>Computer</span> <span id="computer21"></span>`;
        this.displayStatus.innerHTML = `<span>Status</span> <span id="status21"></span>`;

        this.levelTwoFirstContainer.appendChild(this.levelTwoRoundOneHeader);
        this.levelTwoFirstContainer.appendChild(this.displayGuess);
        this.levelTwoFirstContainer.appendChild(this.displayRandom);
        this.levelTwoFirstContainer.appendChild(this.displayStatus);
        this.levelTwoContainer.appendChild(this.levelTwoFirstContainer)
        this.levelsContainer.appendChild(this.levelTwoContainer)
    }
    generateDomSecond(){
        this.levelTwoSecondContainer.setAttribute('id', 'round__two');
        this.levelTwoSecondContainer.setAttribute('class', 'level');
        this.levelTwoRoundTwoHeader.textContent = 'Round 2'
        this.displayGuessSecond.textContent = `Player `;
        this.displayRandomSecond.textContent = `Computer `;
        this.displayStatusSecond.textContent = `Status `;

        this.displayGuessSecond.innerHTML = `<span>Player</span> <span id="guess22"></span>`;
        this.displayRandomSecond.innerHTML = `<span>Computer</span> <span id="computer22"></span>`;
        this.displayStatusSecond.innerHTML = `<span>Status</span> <span id="status22"></span>`;

        this.levelTwoSecondContainer.appendChild(this.levelTwoRoundTwoHeader);
        this.levelTwoSecondContainer.appendChild(this.displayGuessSecond);
        this.levelTwoSecondContainer.appendChild(this.displayRandomSecond);
        this.levelTwoSecondContainer.appendChild(this.displayStatusSecond);
        this.levelTwoContainer.appendChild(this.levelTwoSecondContainer)
        this.levelsContainer.appendChild(this.levelTwoContainer)
    }

    renderGuessedValueRoundOne(value){
        const el = document.querySelector('#guess21');
        el.setAttribute('class', 'btn btn-rounded2');
        el.textContent =  `${value}`;
    
    }
    renderGuessedValueRoundTwo(value){
        const el = document.querySelector('#guess22');
        el.setAttribute('class', 'btn btn-rounded2');
        el.textContent =  `${value}`;
    }
}