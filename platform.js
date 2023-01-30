class Platform {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floor.png");
  }

 

  update () {

  }

  draw(ctx) {
    ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height)
  }
}