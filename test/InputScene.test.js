import Phaser from 'phaser';
import InputScene from '../src/Scenes/InputScene';

require('jest-expect-subclass');

test('InputScene should be a subclass of Phaser.Scene', () => {
  expect(InputScene.InputScene).toBeSubclassOf(Phaser.Scene);
});

test('InputScene should be a subclass of Phaser.Scene', () => {
  expect(InputScene).not.toBeSubclassOf(Phaser.Scene);
});