import Phaser from 'phaser';
import Ground from './ground.js';
import Box from './box.js';

export default class GroundGroup extends Phaser.Group{

    constructor(game){
      super(game);
      this.generateGround();
    }

    generateGround(){
        let amount = Math.ceil(this.game.width / 100);
        for(let i = 0;i<amount;i++){
          let topGround = new Ground(this.game,i*100,100);
          this.game.add.existing(topGround);
          this.add(topGround);
          let bottomGround = new Ground(this.game,i*100,this.game.height-50);
          this.game.add.existing(bottomGround);
          this.add(bottomGround);
        }
    }
}
