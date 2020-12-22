/* eslint-disable no-unused-vars, func-names, no-use-before-define, class-methods-use-this,
brace-style, prefer-template, prefer-arrow-callback, prefer-const */

import Phaser from 'phaser';

import scoreData from '../modules/scoreAPI';

let platforms;
let player;
let cursors;
let stars;
let score = 0;
let scoreText;
let gameOverText;
let bombs;
let gameOver = false;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('sky', '../src/assets/game/sky.png');
    this.load.image('ground', '../src/assets/game/platform.png');
    this.load.image('star', '../src/assets/game/star.png');
    this.load.image('bomb', '../src/assets/game/bomb.png');
    this.load.spritesheet('dude',
      '../src/assets/game/dude.png',
      { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    stars.children.iterate(child => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
    scoreText = this.add.text(16, 20, 'score: 0', { fontSize: '32px', fill: '#940000' });
    gameOverText = this.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#940000' });
    gameOverText.setOrigin(0.5);
    gameOverText.visible = false;
    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
  }

  update() {
    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    }
    else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }
  }
}

const collectStar = (player, star) => {
  star.disableBody(true, true);
  score += 10;
  scoreText.setText('Your Score: ' + score);

  if (stars.countActive(true) === 0) {
    stars.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });
    let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    let bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
  }
};

function hitBomb(player, bomb) {
  let final = score;
  scoreData.scoreSetter(final);
  scoreData.postScores();
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play('turn');
  gameOver = true;
  gameOverText.visible = true;
  score = 0;
  // this.scene.start('Title');
  this.scene.start('GameOverScene');
}