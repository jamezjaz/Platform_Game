/* eslint-disable prefer-const */

import Phaser from 'phaser';

import config from '../Config/config';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  // preload () {

  // }

  create() {
    // Play Again
    this.playAgameButton = new Button(this, config.width / 2, config.height / 2 - 150, 'blueButton1', 'blueButton2', 'Play Again', 'Input');

    // Go Back
    this.backButton = new Button(this, config.width / 2, config.height / 2 - 50, 'blueButton1', 'blueButton2', 'Go Back', 'Title');

    let gameOverText;
    gameOverText = this.add.text(400, 80, 'GAME OVER', { fontSize: '64px', fill: '#940000' });
    gameOverText.setOrigin(0.5);

    this.add.image(400, 300, 'titleImage').setDepth(-1);
  }
}