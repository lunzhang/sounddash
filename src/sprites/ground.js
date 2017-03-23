import Phaser from 'phaser';

export default class Ground extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
      super(game,x,y,'ground',frame);
      this.anchor.setTo(0, 1);
      this.game.physics.arcade.enableBody(this);
      this.body.allowGravity = false;
      this.body.immovable = true;
      this.height = 50;
      this.width = 50;
  }

}
