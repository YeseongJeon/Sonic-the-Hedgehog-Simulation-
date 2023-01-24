// class Sonic {
//   constructor(game, x, y) {
//       Object.assign(this, { game, x, y });

//       this.game.sonic = this;

//       // spritesheet
//       this.spritesheet = ASSET_MANAGER.getAsset("./sprites/sonicsheet.png");

//       // Sonic's state variables
//       this.facing = 0; // 0 = right, 1 = left
//       this.state = 0; // 0 = idle, 1 = running, 2 = jumping/falling 

//       this.velocity = { x: 0, y: 0 };
//       this.fallAcc = 562.5;

//       this.updateBB();

//       // Sonic's animations
//       this.animations = [];
//       this.loadAnimations();
//   };

//   loadAnimations() {
//       for (var i = 0; i < 3; i++) { // three states
//           this.animations.push([]);
//           for (var k = 0; k < 2; k++) { // two directions
//               this.animations[i].push([]);
//           }
//       }

//       // idle animation for state = 0
//       // facing right = 0
//       this.animations[0][0] = new Animator(this.spritesheet, 0, 0, 16, 16, 1, 0.33, 14, false, true);

//       // facing left = 1
//       this.animations[0][1] = new Animator(this.spritesheet, 16, 0, 16, 16, 1, 0.33, 14, false, true);

//       // run animation
//       // facing right
//       this.animations[1][0] = new Animator(this.spritesheet, 32, 0, 16, 16, 3, 0.10, 14, false, true);

//       // facing left
//       this.animations[1][1] = new Animator(this.spritesheet, 48, 0, 16, 16, 3, 0.10, 14, true, true);

//       // jump animation
//       // facing right
//       this.animations[2][0] = new Animator(this.spritesheet, 64, 0, 16, 16, 1, 0.33, 14, false, true);

//       // facing left
//       this.animations[2][1] = new Animator(this.spritesheet, 80, 0, 16, 16, 1, 0.33, 14, false, true);
//   };

//   update() { // Lets move our running sonic towards the right
//     this.x+= this.speed * this.game.clockTick;  
//     if (this.x > 1024){ // if movement gets past the width of the canvas
//        this.x = 0; // make it back to 0
//     }

//   };

  
//   draw(ctx) {
//      this.animator.drawFrame(this.game.clockTick, ctx,this.x,this.y);
//   };
// };

class Sonic {
    constructor(game) {
      this.game = game;
      this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/realSonicSheet.png"), 0, 57, 45, 38, 6, 0.08)
      this.x = 0;
      this.y = 480;
      this.speed = 400; // movement of sprite animation towards the right speed (400 pixels per second)
    };
  
    update() { // Lets move our running sonic towards the right
      this.x+= this.speed * this.game.clockTick;  
      if (this.x > 1024){ // if movement gets past the width of the canvas
         this.x = 0; // make it back to 0
      }
  
    };
  
    
    draw(ctx) {
       this.animator.drawFrame(this.game.clockTick, ctx,this.x,this.y);
    };
  
  };
  