/* eslint-disable prefer-const, no-unused-vars */

import Phaser from 'phaser';

import config from '../Config/config';
import Button from '../Objects/Button';

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  // preload () {

  // }

  create() {
    // Play
    this.playAgameButton = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'Play', 'Input');

    // Go Back
    this.backButton = new Button(this, config.width / 2, config.height / 2 + 150, 'blueButton1', 'blueButton2', 'Go Back', 'Title');

    let howToPlayText;
    howToPlayText = this.add.text(400, 50, 'HOW TO PLAY', { fontSize: '64px', fill: '#006400' });
    howToPlayText.setOrigin(0.5);

    let instructionText;
    instructionText = this.add.text(150, 100, 'Move Dude left and right using Left ⬅️ & Right ➡️\narrow keys respectively.', { fontSize: '20px', fill: '#ffffff' });
    instructionText = this.add.text(150, 160, 'Use Up ⬆️ arrow key to jump.', { fontSize: '20px', fill: '#ffffff' });

    this.add.image(400, 300, 'InstructionImage').setDepth(-1);
  }
}