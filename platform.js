class Platform {
  constructor(game) {
    this.position = {
      x: 0,
      y: -2030 //1500
    }
    this.game = game;
    this.width = 40000
    this.height = 3600

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/map.png")
  }
 

  update () {

  }

  draw(ctx) {
    ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height)
  }
}

// class BackgroundHill { 
//   constructor(game) {
//       this.position = {
//                 x: 0,
//                 y: 192
//               }
//               this.game = game;
//               this.width = 24000
//               this.height = 168

//       this.spritesheet = ASSET_MANAGER.getAsset("./sprites/backgroundHill.png");
//   };

//   update() {

//   };

//   drawMinimap(ctx, mmX, mmY) {
//   }

//   draw(ctx) {
//       ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height);
//                                       // x, y,        frameLocation,framesize x , y, 
//   }
// };