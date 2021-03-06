/* eslint-disable func-names, object-shorthand, no-unused-expressions */

import Phaser from 'phaser';

import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'CREDITS', { fontSize: 40, fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'CREATED BY: Odufu James Chigozie\nEMAIL: jamezjaz@gmail.com\nINSPIRED BY: Zenva and Richard Davey\nPIXEL ART BY: Open Game Art\nBACKGROUND MUSIC BY: https://bensound.com\nFAVICON FROM: https//freelogodesign.org',
      { fontSize: '26px', fill: '#fff', lineSpacing: 40 });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.madeByText.setY(1000);

    // Credits title scroll across the screen
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}