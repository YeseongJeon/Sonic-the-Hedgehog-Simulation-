class Sonic {

  constructor(game) {
      
      this.game = game;
      this.game.sonic = this; // special entity
      this.position = {
        x: 0,
        y: 0
      }
      this.velocity = {
        x: 0, //increase as to the right ->
        y: 0 // increase as downwards 
      }


      this.speed = 1300;
      this.jumpSpeed = 200;
      this.spinSpeed = 1400;
      this.spritesheet = ASSET_MANAGER.getAsset("./sprites/realSonicSheet.png");
     
      this.updateBB();

      this.animations = [];
      this.state = 0;
      this.direction = 0;
      this.loadAnimations();
      this.ground = 550;
      this.isGrounded = false;
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
    this.animations[0][1] = new Animator(this.spritesheet, 741, 38, -41, 47, 1, 0.33, 0, true, true); // change to true true if issues

    // run animation
    // facing right
    this.animations[1][0]=  new Animator(this.spritesheet, 2, 916, 49, 45, 14, 0.08, 0, false, true);

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
  }
 
 
  updateBB() {
    this.lastBB = this.BB;
    this.BB = new BoundingBox(this.position.x, this.position.y, 155,130, "red");

    console.log("This is this.BB", this.BB);

};
    
update() {
  
  const gravity = 0.5;
  let standingOnPlatform = false;

  // Check if Sonic is standing on a platform
  this.game.entities.forEach(entity => {
    if (entity instanceof Platform && entity.BB && this.BB.collide(entity.BB)) {
        standingOnPlatform = true;
        this.position.y = entity.y - PARAMS.BLOCKWIDTH;
        this.velocity.y = 0;
    }
});

  if (!standingOnPlatform) {
    this.position.y += this.velocity.y;
    this.updateBB();
    this.velocity.y += gravity;
  }
  // this.isGrounded = false;
  //   this.game.entities.forEach(entity => {
  //   if (entity.BB && this.BB.collide(entity.BB)) {
  //     if (this.velocity.y > 0) {
  //       if (entity instanceof Platform) {
  //         if (this.lastBB.bottom <= entity.BB.top) {
  //           this.y = entity.BB.top - this.height;
  //           this.velocity.y = 0;
  //           this.updateBB();
  //           this.isGrounded = true;
  //         }
  //       }
  //     }
  //     if (this.velocity.y < 0) {
  //       if (entity instanceof Platform) {
  //         if (this.lastBB.top >= entity.BB.bottom) {
  //           this.y = entity.BB.bottom;
  //           this.velocity.y = 0;
  //           this.updateBB();
  //         }
  //       }
  //     }
  //     if (this.velocity.x > 0) {
  //       if (entity instanceof Platform) {
  //         if (this.lastBB.right <= entity.BB.left) {
  //           this.x = entity.BB.left - this.width;
  //           this.velocity.x = 0;
  //           this.updateBB();
  //         }
  //       }
  //     }
  //     if (this.velocity.x < 0) {
  //       if (entity instanceof Platform) {
  //         if (this.lastBB.left >= entity.BB.right) {
  //           this.x = entity.BB.right;
  //           this.velocity.x = 0;
  //           this.updateBB();
  //         }
  //       }
  //     }
  //   }
  // });
  //   this.x += this.velocity.x * this.game.clockTick;
  //   this.y += this.velocity.y * this.game.clockTick;
  //   this.updateBB();

  if (this.position.y > 550) {
    this.position.y = 550;
    this.velocity.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = 0;
    this.velocity.y = 0;
  }
  // Move left
  if (this.game.left) {
    console.log(this.game.left);
    this.position.x -= this.speed * this.game.clockTick;
    this.direction = 1;
    this.state = 1;
    console.log(this.position.x);
  }
  // Move right and spinning left
  if (this.game.spin && this.game.left) {
    this.position.x -= this.spinSpeed * this.game.clockTick;
    this.state = 3;
  } 
  // Move right
  if (this.game.right) {
    console.log(this.game.right);
    this.position.x += this.speed * this.game.clockTick;
    this.direction = 0;
    this.state = 1
    console.log(this.position.x)
  }
  // Jump
  
    if (this.game.jump) {
      console.log(this.game.jump)
      this.position.y -= 20;
      this.state = 2;
      this.direction = 0;
      
  }

  if (this.position.y >= this.ground) {
      this.position.y = this.ground;
      this.state = 1;
      this.direction = 0;
  }
    // Spin
  if (this.game.spin) {
    console.log(this.game.spin)
    this.position.x += this.spinSpeed * this.game.clockTick;
    this.position.y += 10;
    this.state = 3;
  }

  // Set state back to idle if no actions are being performed
  if (!this.game.left && !this.game.right && !this.game.jump && !this.game.spin) {
    this.state = 0;
  }
  // Check if Sonic falls past the bottom of the screen
  if(this.position.y > 768 && !this.isGrounded) {
    // Refresh the game
    window.location.reload();
  }
  
}

  draw(ctx) {
    if(this.state < 0 || this.state > 3) this.state = 0;
    let done = this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x , this.position.y);
    if (done) {
      this.animations[this.state][this.direction].elapsedTime = 0;
      this.state = 0;
    }
    if (PARAMS.DEBUG) {
      this.game.ctx.strokeStyle = "red";
      this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
    }
  }
  
}
