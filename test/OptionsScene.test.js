import Phaser from 'phaser';
import OptionsScene from '../src/Scenes/OptionsScene';

require('jest-expect-subclass');

test('OptionsScene should be a subclass of Phaser.Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
});