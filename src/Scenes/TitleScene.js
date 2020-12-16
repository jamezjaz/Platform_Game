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
    // Game
    this.gameButton = new Button(this, config.width/2, config.height/2 - 150, 'blueButton1', 'blueButton2', 'Play', 'Input');

    // Options
    this.optionsButton = new Button(this, config.width/2, config.height/2 - 50, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width/2, config.height/2 + 50, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    //backgroud music from the glodel model state
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.model.bgMusicPlaying = true;
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
    }
  }
};