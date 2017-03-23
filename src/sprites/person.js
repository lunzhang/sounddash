import Phaser from 'phaser';

export default class Person extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'person',frame);
    this.anchor.setTo(0.5,0);
    this.scale.setTo(0.4,0.4);
    this.game.physics.arcade.enableBody(this);
    
    //walk
    let walk = this.animations.add('walk');
    this.animations.play('walk',7,true);
  }

  jump(amount){
    this.body.velocity.y = -amount || -200;
  }

}
