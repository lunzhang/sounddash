import Phaser from 'phaser';
import Person from '../sprites/person.js';
import GroundGroup from '../sprites/groundgroup.js';
import BoxGroup from '../sprites/boxgroup.js';
import SoundDash from '../main.js';

export default class GameState extends Phaser.State{

  create(){

    //person
    this.person = new Person(this.game,this.game.world.centerX,this.game.world.centerY);
    this.game.add.existing(this.person);

    //boxes
    this.boxGroup = new BoxGroup(this.game);
    this.boxGenerator = this.game.time.events.loop(600,this.generateBox,this);
    this.boxGenerator.timer.start();
    this.generateBox();

    //Ground
    this.ground = new GroundGroup(this.game);

    //score
    this.score = this.game.add.text(20,20,'Score: '+SoundDash.Score,{
      fontSize:'16px',
      fill:'white'
    });

    let w = this.input.keyboard.addKey(Phaser.Keyboard.W);
    w.onDown.add(this.person.jump, this.person);
  }

  update() {
    this.game.physics.arcade.collide(this.person, this.boxGroup, this.loss,null,this);
    this.game.physics.arcade.collide(this.person, this.ground);
    if(this.person.y > this.game.height){
      this.loss();
    }else if(this.person.y < 0){
      this.person.y = 0;
    }
    this.score.text = 'Score: '+parseInt(SoundDash.score);
  }

  generateBox(){
    this.boxGroup.generateBoxes();
  }

  loss(){
    if(SoundDash.score > SoundDash.highScore){
      SoundDash.highScore = SoundDash.score;
      localStorage.sfHighScore = SoundDash.score;
    }
    SoundDash.score = 0;
    this.game.state.start('menu');
  }

}
