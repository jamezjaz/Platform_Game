/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import regeneratorRuntime from 'regenerator-runtime';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
import InputScene from './Scenes/InputScene';
import Board from './Scenes/LeaderBoardScene';
import GameOverScene from './Scenes/GameOverScene';
import InstructionScene from './Scenes/InstructionScene';
import './css/style.css';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Input', InputScene.InputScene);
    this.scene.add('LeaderBoard', Board);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.add('Instruction', InstructionScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();