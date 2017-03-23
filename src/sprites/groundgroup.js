import Phaser from 'phaser';
import Ground from './ground.js';
import Box from './box.js';

export default class GroundGroup extends Phaser.Group{

    constructor(game){
      super(game);
      this.generateGround();
    }

    generateGround(){
        let amount = Math.ceil(this.game.width / 50);
        for(let i = 0;i<amount;i++){
          let ground = new Ground(this.game,i*50,this.game.height);
          this.game.add.existing(ground);
          this.add(ground);
        }
    }
}
