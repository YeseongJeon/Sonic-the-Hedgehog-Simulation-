class Platform {
  constructor(game, x, y) {
    this.game = game;
    this.position = {
      x: x,
      y: y
    };
    this.width = 400;
    this.height = 120;
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floor.png");
  }

 

  update () {

  }

  draw(ctx) {
    ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height)
  }
}