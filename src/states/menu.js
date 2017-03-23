import Phaser from 'phaser';
import Person from '../sprites/person.js';
import GroundGroup from '../sprites/groundgroup.js';
import SoundDash from '../main.js';

export default class MenuState extends Phaser.State{

  create(){
    //add detail
    let detail = this.game.add.text(this.game.world.centerX, 100,
      "Make sound to move the person",{
      fill:'#ffffff',
      align: "center"
    });
    detail.anchor.set(0.5);

    //add start
    let start = this.game.add.text(this.game.world.centerX, 150,
      "Start Game",{
      fill:'#4CAF50',
      align: "center"
    });
    start.inputEnabled = true;
    start.anchor.set(0.5);
    start.events.onInputDown.add((item)=>{
        this.game.state.start('game');
    });

    //add warning
    let warning = this.game.add.text(this.game.world.centerX, this.game.world.centerY+100,
      "Please enable microphone to play the game",{
      fontSize:'16px',
      fill:'#ffffff',
      align: "center"
    });
    warning.anchor.set(0.5);

    //high score
    let highScore = this.game.add.text(20,20,'High Score : '+SoundDash.highScore,{
      fontSize:'16px',
      fill:'white'
    });

    //create ground
    this.ground = new GroundGroup(this.game);

    //start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;

    //create person
    this.person = new Person(this.game,this.game.world.centerX,this.game.world.centerY*1.5);
    this.game.add.existing(this.person);

  }

  update(){
      this.game.physics.arcade.collide(this.person, this.ground, this.jump,null,this);
  }

  jump(){
    this.person.jump(255);
  }

}
