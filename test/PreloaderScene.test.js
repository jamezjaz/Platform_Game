import Phaser from 'phaser';
import PreloaderScene from '../src/Scenes/PreloaderScene';

require('jest-expect-subclass');


test('PreloaderScene should be a subclass of Phaser.Scene', () => {
  expect(PreloaderScene).toBeSubclassOf(Phaser.Scene);
});