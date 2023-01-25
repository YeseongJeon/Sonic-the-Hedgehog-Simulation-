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

      
        this.lastFacing = 0;
        this.animations = [];
        this.loadAnimations();

        document.addEventListener("keydown", event => {
            if (event.code === "ArrowRight") {
              this.state = 1;
              this.facing = 0;
              this.lastFacing = 0;
            } else if (event.code === "ArrowLeft") {
              this.state = 1;
              this.facing = 1;
              this.lastFacing = 1;
            } else if (event.code === "KeyX") {
              if (this.lastFacing === 0) {
                this.state = 2;
                this.facing = 0;
                this.velocity.x = jumpVelocity;
              } else {
                this.state = 2;
                this.facing = 1;
                this.velocity.x = -jumpVelocity;
              }
            } else if (event.code === "KeyZ") {
              if (this.lastFacing === 0) {
                this.state = 3;
                this.facing = 0;
              } else {
                this.state = 3;
                this.facing = 1;
              }
            }
          });
    }
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
      this.animations[3][0] =  new Animator(this.spritesheet, 1, 1113, 3, 47, 40, 10, 0.08, 0, false, true);
          // facing left
      this.animations[3][1] = new Animator(this.spritesheet, 746, 427, -47, 40, 10, 0.08, 0, false, true);


      // pure spinning animation (might need)
//     //  this.animator =  new Animator(this.spritesheet, 376, 1114, 54, 40, 2, 0.08, 0, false, true);
}


}

update () {

  // new collision detection and state changes
  if (this.state === 2) {
    if (this.velocity.y >= 0) {
      this.state = 0;
    }
  } else if (this.state === 3) {
    if (this.animations[3][this.facing].isDone()) {
      this.state = 0;
    }
  }

  // animation switching
  switch (this.state) {
    case 0:
      this.animations[0][this.facing].update();
      break;
    case 1:
      this.animations[1][this.facing].update();
      break;
    case 2:
      this.animations[2][this.facing].update();
      break;
    case 3:
      this.animations[3][this.facing].update();
      break;
  }

  // velocity and position updates
  this.velocity.y += this.fallAcc * this.game.clockTick;
  this.x += this.velocity.x * this.game.clockTick;
  this.y += this.velocity.y * this.game.clockTick;

  // collision detection and state changes
  if (this.y > platformY) {
    this.y = platformY;
    this.velocity.y = 0;
    this.state = 0;
  }

  if (this.x > 1024) {
    this.x = 0;
  }
};

// draw
draw(ctx) {
    let anim = this.animations[this.state][this.facing];
    anim.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }

}
