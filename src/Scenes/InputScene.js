import config from '../Config/config'

class InputScene extends Phaser.Scene {


    preload(){
        this.load.html('nameform', '../src/assets/form.html');
    }

    create (){
    // this.scene.remove('Title')

    const self = this

    const text = this.add.text(config.width/3.3, 10, 'Please, enter your name', { color: 'white', fontFamily: 'Arial', fontSize: '32px '});

    const element = this.add.dom(400, 600).createFromCache('nameform');



    element.setPerspective(800);

    element.addListener('click');

    element.on('click', function (event) {

        if (event.target.name === 'saveNameBtn')
        {
            const inputName = this.getChildByName('name');

            //  Have they entered anything?
            if (inputName.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');

                //  Tween the login form out
                this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

                this.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                    onComplete: function ()
                    {
                        element.setVisible(false);
                    }
                });

                //  Populate the text with whatever they typed in as the name!

                self.scene.start('Game')

            }
            else
            {
                //  Flash the prompt
                this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
            }
        }

    });

      this.tweens.add({
          targets: element,
          y: 300,
          duration: 3000,
          ease: 'Power3'
      });
  }
}

export default {
  InputScene
}