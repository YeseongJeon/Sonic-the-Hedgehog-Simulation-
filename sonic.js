class Sonic {
  constructor(game, x, y) {
      Object.assign(this, { game, x, y });

      this.game.sonic = this;

      // spritesheet
      this.spritesheet = ASSET_MANAGER.getAsset("./sprites/realSonicSheet.png");

      // Sonic's state variables
      this.facing = 0; // 0 = right, 1 = left
      this.state = 0; // 0 = idle, 1 = running, 2 = jumping 3 = spinning

      this.velocity = { x: 0, y: 0 };
      this.fallAcc = 562.5;

      this.updateBB();

      // Sonic's animations
      this.animations = [];
      this.loadAnimations();
  };

  loadAnimations() {
      for (var i = 0; i < 4; i++) { // four states (idle, running, jumping and spinning)
          this.animations.push([]);
          for (var k = 0; k < 2; k++) { // two directions (right or left)
              this.animations[i].push([]);
          }
      }

      // idle animation for state = 0
      // facing right = 0
      this.animations[0][0] = new Animator(this.spritesheet, 5, 723, 45, 45, 1, 0.33, 0, false, true);

      // facing left = 1
      this.animations[0][1] = new Animator(this.spritesheet, 741, 38, -41, 47, 1, 0.33, 0, false, true); // change to true true if issues

      // run animation
      // facing right
      this.animations[1][0] = new Animator(this.spritesheet, 2, 916, 49, 45, 14, 0.08, 0, false, true);

      // facing left
      this.animations[1][1] = new Animator(this.spritesheet, 745, 230, -49, 47, 14, 0.08, 0, false, true);

      // jump animation
      // facing right
      this.animations[2][0] = new Animator(this.spritesheet, 340, 1160, 47, 56, 8, 0.08, 0, false, true);

      // facing left
      this.animations[2][1] = new Animator(this.spritesheet, 410, 480, -47, 56, 8, 0.08, 0, false, true);

      // spinning animation
      // facing right
      this.animations[3][0] =  new Animator(this.spritesheet, 1, 1113, 47, 40, 10, 0.08, 0, false, true);

      // facing left
      this.animations[3][1] = new Animator(this.spritesheet, 746, 427, -47, 40, 10, 0.08, 0, false, true);


    // pure spinning animation (might need)
    //  this.animator =  new Animator(this.spritesheet, 376, 1114, 54, 40, 2, 0.08, 0, false, true);


  };

  update() { // Lets move our running sonic towards the right
    this.x+= this.speed * this.game.clockTick;  
    if (this.x > 1024){ // if movement gets past the width of the canvas
       this.x = 0; // make it back to 0
    }

  };

updateBB() {};  
  draw(ctx) {
     this.animator.drawFrame(this.game.clockTick, ctx,this.x,this.y);
  };
};

   