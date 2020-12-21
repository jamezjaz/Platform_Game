import Phaser from 'phaser';
import TitleScene from '../src/Scenes/TitleScene';
require('jest-expect-subclass');

test('PreloaderScene should be a subclass of Phaser.Scene', () => {
  expect(TitleScene).toBeSubclassOf(Phaser.Scene);
});