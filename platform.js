class Platform {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    
    // this.BB = new BoundingBox(this.position.x, this.position.y, 155, 130, "red");
    // this.lastBB = new BoundingBox(this.BB.x, this.BB.y, this.BB.width, this.BB.height, this.BB.color);
    
    
    this.BB = new BoundingBox(this.position.x,this.position.y,this.width, this.height, "lime");

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floor.png");
  }

  updateBB() {
    this.BB.x = this.position.x;
    this.BB.y = this.position.y;
  }

  update() {
    this.updateBB();
  }

  draw(ctx) {
    ctx.drawImage(this.spritesheet, this.position.x - this.game.camera.x, this.position.y, this.width, this.height);

    if (PARAMS.DEBUG) {
      ctx.strokeStyle = "lime";
      ctx.strokeRect(
        this.BB.x - this.game.camera.x,
        this.BB.y,
        this.BB.width,
        this.BB.height
      );
    }
  }
}