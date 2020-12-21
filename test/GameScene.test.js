import Phaser from 'phaser';
import GameScene from '../src/Scenes/GameScene';
require('jest-expect-subclass');

test('PreloaderScene should be a subclass of Phaser.Scene', () => {
  expect(GameScene).toBeSubclassOf(Phaser.Scene);
});