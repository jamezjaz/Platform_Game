import Phaser from 'phaser';
import InstructionScene from '../src/Scenes/InstructionScene';

require('jest-expect-subclass');

test('Bootscene should be a subclass of Phaser.Scene', () => {
  expect(InstructionScene).toBeSubclassOf(Phaser.Scene);
});