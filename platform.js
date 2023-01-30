class Platform {
  constructor(game) {
    this.position = {
      x: 400,
      y: 667
    }
    this.game = game;
    this.width = 400
    this.height = 120

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floor.png")
  }
 

  update () {

  }

  draw(ctx) {
    ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height)
  }
}