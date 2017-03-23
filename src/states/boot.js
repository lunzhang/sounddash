import Phaser from 'phaser';

export default class BootState extends Phaser.State{

  constructor(){
    super();
    this.ready = false;
  }

  preload(){
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.game.load.image('ground','src/assets/ground.png');
    this.game.load.image('box','src/assets/box.png');
    this.game.load.spritesheet('person','src/assets/personwalk.png',89,100,3);
  }

  create(){
    this.game.stage.backgroundColor = '#71c5cf';
    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.parentIsWindow  = true;

    if(this.game.device.desktop){
        this.game.scale.maxWidth = 600;
        this.game.scale.maxHeight = 400;
        this.game.scale.minWidth = 600;
        this.game.scale.minHeight = 400;
    }

  }

  onLoadComplete() {
    this.ready = true;
  }

  update(){
    if(this.ready){
      this.game.state.start('menu', true, false);
    }
  }

}
