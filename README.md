<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jamezjaz/Platform_Game">
    <img src="assets/readme/microverse.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">JavaScript / Capstone --> [Platform Game]</h3>

  <p align="center">
    This is the JavaScript Capstone Project of Microverse curriculum!
    <br />
    <a href="https://github.com/jamezjaz/Platform_Game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jamezjaz/Platform_Game/issues">Report Bug</a>
    ·
    <a href="https://github.com/jamezjaz/Platform_Game/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table Of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Walkthrough Video and Deployment (GitHub-Pages)](#walkthrough-video)
* [Usage](#usage)
* [Contributors](#contributors)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project

This is the Capstone project that seals the completion of the JavaScript module in Microverse Curriculum.
It is a platform game. The inspiration was from Zenva and Richard Davey Phaser 3 tutorials.
The principal aim of this game is to collect/swallow the stars. The point increment by 10 each time a star is collected. A bomb and a set of new stars show up as soon as the current set of stars are collected completely.
The player is destroyed the moment s/he collides with the bomb!

### How To Play

    ⬅️  ➡️
     ⬆️

Basically, the game can played with the Left, the Right and the Up arrow keys only.
To collect the stars and gain points, move the character left with ⬅️ key and right with ➡️ key.
To jump, use ⬆️ key.
The player should endavour to collect as many stars as possible in order to gain more points.
S/he should also try as much as possible to avoid the the bomb. The player is destroyed the moment s/he collides with the bomb.


### Design Process

Platform Game was designed on an initial, quite complex, webpack configuration specific for Phaser 3. I had to ask questions in order to keep the initial webpack config up and running. The platforms are created with Phaser 3's physics. The Static Physics Group of Phaser 3's physics is completely ideal for platforms as static bodies are not affected by gravity and they do not move when something collides on them. The player actually runs on these platforms.

The player has a set velocity and can move across the platforms by using the arrow keys speified on How To play section.

### Built With
This project was built using these technologies.
* JavaScript
* Phaser 3
* Webpack
* Jest Tests
* Babel
* GitHub Action :muscle:
* VScode :vscode:

<!-- Walkthrough Link -->
## Walkthrough Video and Deployment (GitHub-Pages)
https://www.loom.com/share/34f0969ac0524696937bb2b2ccc21eba


<!-- Live Demo -->
## Live Demo
* Live Demo Link --> App Deployed with GitHub-Pages: [Final Warrior](https://rammazzoti2000.github.io/js_capstone_rpg/) :point_left:


## Preview
![screenshot-1](assets/readme/menu.png)
![screenshot-2](assets/readme/guide.png)
![screenshot-3](assets/readme/game.png)

### Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

 * [Node.js](https://nodejs.org/) is required to install dependencies and run scripts via npm.
 * A modern browser

### Clone
* Clone this repo:
  - Clone with SSH:
  ```
    git@github.com:jamezjaz/Platform_Game.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/jamezjaz/Platform_Game.git
  ```
  - Clone with GitHub CLI
  ```
    gh repo clone jamezjaz/Platform_Game

### Setup

Install dependencies:

```
$ npm install
```

Start the local webserver:

```$ npm start``` > will open a local webserver at http://localhost:8080/ directly in your default browser with the game ready to be played

  ## Automated Test

* Run the command and see the output:
```$ npm run test``` or simply ```$ npm test```


 ## Potential future features
- Extend the game to a multiplayer online game

<!-- CONTACT -->
## Contributors

👤 **Odufu James Chigozie**

- Github: [@jamezjaz](https://github.com/jamezjaz)
- Twitter: [@jamezjaz90](https://twitter.com/jamezjaz90)
- Linkedin: [@linkedin](https://www.linkedin.com/in/jamesgozieodufu/)
- Email: jamezjaz@gmail.com

## :handshake: Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jamezjaz/Platform_Game/issues).

## Show your support

Give a :star: if you like this project!


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Sound Theme](https://bensound.com) - Bensound website
* [Pixel Art](https://opengameart.org/) - OpenGameArt website
* [Template](https://phaser.io/phaser3) - Phaser website
* [Inspiration](https://phasertutorials.com/) - Phasertutorilas website
* [Microverse](https://www.microverse.org/) - Microverse website


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jamezjaz/Platform_Game.svg?style=flat-square
[contributors-url]: https://github.com/jamezjaz/Platform_Game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jamezjaz/Platform_Game.svg?style=flat-square
[forks-url]: https://github.com/jamezjaz/Platform_Game/network/members
[stars-shield]: https://img.shields.io/github/stars/jamezjaz/Platform_Game.svg?style=flat-square
[stars-url]: https://github.com/jamezjaz/Platform_Game/stargazers
[issues-shield]: https://img.shields.io/github/issues/jamezjaz/Platform_Game.svg?style=flat-square
[issues-url]: https://github.com/jamezjaz/Platform_Game/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.