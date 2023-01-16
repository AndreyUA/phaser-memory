import * as Phaser from "phaser";

const scene = new Phaser.Scene("Game");
scene.preload = function () {
  console.log("preload method");
};
scene.create = function () {
  console.log("create method");
};

const config = {
  type: Phaser.AUTO, // webgl (default) OR canvas
  width: 1280,
  height: 720,
  scene,
};

const game = new Phaser.Game(config);
