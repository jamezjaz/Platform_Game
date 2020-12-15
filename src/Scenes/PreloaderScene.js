import 'phaser';
 
export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }
 
  preload () {
    // add logo image
    this.add.image(400, 200, 'logo');

    //display progress bar
    const progressBar = this.add. graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'LOADING...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ff0000'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading Asset: ' + file.key);
    });

    // // remove progress bar when complete
    // this.load.on('complete', function () {
    //   progressBar.destroy();
    //   progressBox.destroy();
    //   loadingText.destroy();
    //   percentText.destroy();
    //   assetText.destroy();
    // });

    // remove progress bar when complete
//   this.load.on('complete', function () {
    this.load.on('complete', function () {
    progressBar.destroy();
    progressBox.destroy();
    loadingText.destroy();
    percentText.destroy();
    assetText.destroy();
    this.ready();
  }.bind(this));
   
  this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('blueButton1', '../src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', '../src/assets/ui/blue_button03.png');
    this.load.image('phaserLogo', '../src/assets/logo.png');
    }

  init () {
    this.readyCount = 0;
  }

  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
 
  create () {
  }
};