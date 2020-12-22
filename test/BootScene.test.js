import Phaser from 'phaser';
import BootScene from '../src/Scenes/BootScene';

require('jest-expect-subclass');

test('Bootscene should be a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});