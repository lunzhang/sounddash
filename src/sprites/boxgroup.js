import Phaser from 'phaser';
import Box from './box.js';

export default class BoxGroup extends Phaser.Group{

    constructor(game){
      super(game);
      this.x = this.game.width;
      this.initBoxes();
    }

    initBoxes(){
      for(let i = 0;i<10;i++){
        let box = new Box(this.game,0,0);
        box.kill();
        this.game.add.existing(box);
        this.add(box);
      }
    }

    generateBoxes(){
        let box = this.getFirstDead();
        let position = this.game.rnd.integerInRange(2,5);
        box.revive();
        box.position.x = 0;
        box.position.y = position * 50;
    }

}
