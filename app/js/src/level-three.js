import Game from './game';

export default class LevelThree extends Game{
    constructor(){
        super();
        this.levelThree = 3;
        this.levelThreeContainer = document.createElement('div');
        this.levelThreeFirstContainer = document.createElement('div');
        this.levelThreeSecondContainer = document.createElement('div');
        this.levelThreeThirdContainer = document.createElement('div');
        this.levelThreeHeader = document.createElement('h3');
        this.levelThreeContainer.setAttribute('class', 'game__container__levels__wrapper')
        this.levelThreeContainer.setAttribute('id', 'game__container__levels__wrapper')

        this.levelThreeRoundOneHeader = document.createElement('h4');
        this.displayGuess = document.createElement('div');
        this.displayRandom = document.createElement('div');
        this.displayStatus = document.createElement('div');

        this.levelThreeRoundTwoHeader = document.createElement('h4');
        this.displayGuessSecond = document.createElement('div');
        this.displayRandomSecond = document.createElement('div');
        this.displayStatusSecond = document.createElement('div');
        this.statusButtonSecond = document.createElement('span');
        
        this.levelThreeRoundThreeHeader = document.createElement('h4');
        this.displayGuessThird = document.createElement('div');
        this.displayRandomThird = document.createElement('div');
        this.displayStatusThird = document.createElement('div');
    }
    generateDom(){
        this.levelThreeFirstContainer.setAttribute('id', 'round__one');
        this.levelThreeRoundOneHeader.textContent = 'Round 1'
        this.levelThreeFirstContainer.setAttribute('class', 'level');
        this.displayGuess.textContent = `Player`;
        this.displayRandom.textContent = `Computer `;
        this.displayStatus.textContent = `Status `;

        this.displayGuess.innerHTML = `<span>Player</span> <span id="guess31"></span>`;
        this.displayRandom.innerHTML = `<span>Computer</span> <span id="computer31"></span>`;
        this.displayStatus.innerHTML = `<span>Status</span> <span id="status31"></span>`;

        this.levelThreeFirstContainer.appendChild(this.levelThreeRoundOneHeader);
        this.levelThreeFirstContainer.appendChild(this.displayGuess);
        this.levelThreeFirstContainer.appendChild(this.displayRandom);
        this.levelThreeFirstContainer.appendChild(this.displayStatus);
        this.levelThreeContainer.appendChild(this.levelThreeFirstContainer);
        this.levelsContainer.appendChild(this.levelThreeContainer)
    }
    generateDomSecond(){
        this.levelThreeSecondContainer.setAttribute('id', 'round__two');
        this.levelThreeSecondContainer.setAttribute('class', 'level');
        this.levelThreeRoundTwoHeader.textContent = 'Round 2'
        this.displayGuessSecond.textContent = `Player `;
        this.displayRandomSecond.textContent = `Computer `;
        this.displayStatusSecond.textContent = `Status `;

        this.displayGuessSecond.innerHTML = `<span>Player</span> <span id="guess32"></span>`;
        this.displayRandomSecond.innerHTML = `<span>Computer</span> <span id="computer32"></span>`;
        this.displayStatusSecond.innerHTML = `<span>Status</span> <span id="status32"></span>`;

        this.levelThreeSecondContainer.appendChild(this.levelThreeRoundTwoHeader);
        this.levelThreeSecondContainer.appendChild(this.displayGuessSecond);
        this.levelThreeSecondContainer.appendChild(this.displayRandomSecond);
        this.levelThreeSecondContainer.appendChild(this.displayStatusSecond);
        this.levelThreeContainer.appendChild(this.levelThreeSecondContainer);
        this.levelsContainer.appendChild(this.levelThreeContainer)
    }
    generateDomThird(){
        this.levelThreeThirdContainer.setAttribute('id', 'round__three');
        this.levelThreeThirdContainer.setAttribute('class', 'level');
        this.levelThreeRoundThreeHeader.textContent = 'Round 3'
        this.displayGuessThird.textContent = `Player `;
        this.displayRandomThird.textContent = `Computer `;
        this.displayStatusThird.textContent = `Status `;

        this.displayGuessThird.innerHTML = `<span>Player</span> <span id="guess33"></span>`;
        this.displayRandomThird.innerHTML = `<span>Computer</span> <span id="computer33"></span>`;
        this.displayStatusThird.innerHTML = `<span>Status</span> <span id="status33"></span>`;

        this.levelThreeThirdContainer.appendChild(this.levelThreeRoundThreeHeader);
        this.levelThreeThirdContainer.appendChild(this.displayGuessThird);
        this.levelThreeThirdContainer.appendChild(this.displayRandomThird);
        this.levelThreeThirdContainer.appendChild(this.displayStatusThird);
        this.levelThreeContainer.appendChild(this.levelThreeThirdContainer);
        this.levelsContainer.appendChild(this.levelThreeContainer)
    }
    renderGuessedValueRoundOne(value){
        const el = document.querySelector('#guess31');
        el.setAttribute('class', 'btn btn-rounded2');
        el.textContent =  `${value}`;
    }
    renderGuessedValueRoundTwo(value){
        const el = document.querySelector('#guess32');
            el.setAttribute('class', 'btn btn-rounded2');
            el.textContent =  `${value}`;
    }
    renderGuessedValueRoundThree(value){
        const el = document.querySelector('#guess33');
        el.setAttribute('class', 'btn btn-rounded2');
        el.textContent =  `${value}`;
    }
}