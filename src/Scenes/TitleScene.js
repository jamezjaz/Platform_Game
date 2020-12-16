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
  }
};