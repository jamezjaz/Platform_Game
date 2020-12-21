import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  // preload () {
  
  // }
 
  create () {
    //Game Title
    let gameTitle;
    gameTitle = this.add.text(400, 550, 'PLATFORM GAME', { fontSize: '64px', fill: '#1ea7e1', fontFamily: 'Georgia, serif' });
    gameTitle.setOrigin(0.5);

    // Game
    this.gameButton = new Button(this, config.width/2, config.height/2 - 150, 'blueButton1', 'blueButton2', 'Play', 'Input');

    // Options
    this.optionsButton = new Button(this, config.width/2, config.height/2 - 50, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width/2, config.height/2 + 50, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // LeaderBoard
    this.leadboardButton = new Button(this, config.width / 2, config.height / 2 + 150, 'blueButton1', 'blueButton2', 'Board', 'LeaderBoard');

    // Instruction
    this.instructionButton = new Button(this, config.width / 2, config.height / 2 - 250, 'blueButton1', 'blueButton2', 'Instruction', 'Instruction');

    //backgroud music from the glodel model state
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    this.add.image(400, 300, 'titleImage').setDepth(-1);
  }
};