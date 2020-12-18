import Board from '../modules/scoreBoard';
import config from '../Config/config';

export default class LeaderBoard extends Phaser.Scene {
  constructor(){
    super('LeaderBoard')
  }

  preload(){
    this.load.html('leaderBoard', '../src/assets/board.html');
  }

  create(){

    let self = this

    this.add.text(config.width/3.3, 10, 'LeaderBoard', { color: 'white', fontSize: '32px '})

    let element = this.add.dom(300, 250).createFromCache('leaderBoard');

    element.setPerspective(800)

    element.addListener('click');

    element.on('click', function (event) {

      if (event.target.name === 'boardButton'){

        self.scene.start('Title')
      }
    })
    Board.create()
  }
}