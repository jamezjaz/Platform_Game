import Phaser from 'phaser';
import LeaderBoard from '../src/Scenes/LeaderBoardScene';
require('jest-expect-subclass');

test('LeaderBoardScene should be a subclass of Phaser.Scene', () => {
  expect(LeaderBoard).toBeSubclassOf(Phaser.Scene);
});