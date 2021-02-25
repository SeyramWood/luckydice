import Game from './game';
import LevelOne from './level-one';
import LevelTwo from './level-two';
import LevelThree from './level-three';

export default class RenderGameLevels extends Game{
    constructor(){
        super();
        this.levelOne = new LevelOne();
        this.levelTwo = new LevelTwo();
        this.levelThree = new LevelThree();
        if (this.checkGameLevel === this.levelThree.levelThree){
            this.levelThree.generateDom();
            this.levelThree.generateDomSecond();
            this.levelThree.generateDomThird();
        }
        else if (this.checkGameLevel === this.levelTwo.levelTwo){
            this.levelTwo.generateDom();
            this.levelTwo.generateDomSecond();
        }
        else{
            this.levelOne.generateDom();
        }
    }
}