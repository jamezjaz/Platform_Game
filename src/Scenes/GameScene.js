import 'phaser';
import OptionsScene from './OptionsScene';

var platforms
let player
let cursors
let stars
let score = 0;
let scoreText;
let gameOverText
let bombs
var gameOver = false;
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('sky', '../src/assets/game/sky.png');
    this.load.image('ground', '../src/assets/game/platform.png');
    this.load.image('star', '../src/assets/game/star.png');
    this.load.image('bomb', '../src/assets/game/bomb.png');
    this.load.spritesheet('dude', 
    '../src/assets/game/dude.png',
    { frameWidth: 32, frameHeight: 48 }
);
  }
 
  create () {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
  }
};