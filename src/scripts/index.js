import 'phaser';

import '../styles/index.css';

import BootScene from "./scenes/BootScene";
import MainScene from "./scenes/MainScene";
import LevelScene from "./scenes/LevelScene";
import EndScene from "./scenes/EndScene";

const gameConfig = {
    type: Phaser.AUTO,
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    antialias: false,
    width: 680,
    height: 400,
    scene: BootScene
};

let game = new Phaser.Game(gameConfig);
game.scene.add("MainScene", MainScene);
game.scene.add("LevelScene", LevelScene);
game.scene.add("EndScene", EndScene);
