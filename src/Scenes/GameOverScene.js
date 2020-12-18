import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
 
export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOverScene');
  }
 
  // preload () {
  
  // }
 
  create () {
    // Play Again
    this.playAgameButton = new Button(this, config.width/2, config.height/2 - 150, 'blueButton1', 'blueButton2', 'Play Again', 'Input');

    // Go Back
    this.backButton = new Button(this, config.width/2, config.height/2 - 50, 'blueButton1', 'blueButton2', 'Go Back', 'Title');

    let gameOverText;
    gameOverText = this.add.text(400, 80, 'GAME OVER', { fontSize: '64px', fill: '#940000' });
    gameOverText.setOrigin(0.5);
    // Credits
    // this.creditsButton = new Button(this, config.width/2, config.height/2 + 50, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // LeaderBoard
    // this.leadboardButton = new Button(this, config.width / 2, config.height / 2 + 150, 'blueButton1', 'blueButton2', 'Board', 'LeaderBoard');

    //backgroud music from the glodel model state
    // this.model = this.sys.game.globals.model;
    // if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
    //   this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
    //   this.bgMusic.play();
    //   this.model.bgMusicPlaying = true;
    //   this.sys.game.globals.bgMusic = this.bgMusic;
    // }

    this.add.image(400, 300, 'titleImage').setDepth(-1);
  }
};