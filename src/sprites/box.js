import Phaser from 'phaser';
import SoundDash from '../main.js';

export default class Box extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
      super(game,x,y,'box',frame);
      this.game.physics.arcade.enableBody(this);
      this.body.allowGravity = false;
      this.checkWorldBounds = true;
      this.outOfBoundsKill = true;
      this.body.immovable = true;
      this.body.velocity.x = -300;
      this.events.onOutOfBounds.add(this.onOutOfBounds,this);
      this.height = 50;
      this.width = 50;
  }

  onOutOfBounds(){
      SoundDash.score += 1;
  }

}
