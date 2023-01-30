class Platform {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.boundingBox = {
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height
    };
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floor.png");
  }

  updateBB() {
    this.boundingBox.x = this.position.x;
    this.boundingBox.y = this.position.y;
  }

  update() {
    this.updateBB();
  }

  draw(ctx) {
    ctx.drawImage(this.spritesheet, this.position.x - this.game.camera.x, this.position.y, this.width, this.height);

    if (PARAMS.DEBUG) {
      ctx.strokeStyle = "lime";
      ctx.strokeRect(
        this.boundingBox.x - this.game.camera.x,
        this.boundingBox.y,
        this.boundingBox.width,
        this.boundingBox.height
      );
    }
  }
}
