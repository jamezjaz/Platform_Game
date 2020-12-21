import Phaser from 'phaser';
import CreditsScene from '../src/Scenes/CreditsScene';
require('jest-expect-subclass');

test('CreditScene should be a subclass of Phaser.Scene', () => {
  expect(CreditsScene).toBeSubclassOf(Phaser.Scene);
});