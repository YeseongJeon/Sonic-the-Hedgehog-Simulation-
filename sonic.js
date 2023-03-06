class Sonic {

  constructor(game) {
      this.game = game;
      this.rings = 0;
      this.game.sonic = this; // special entity
      this.position = {
        x: 0,
        y: 300
      }
      this.velocity = {
        x: 0, //increase as to the right ->
        y: 0 // increase as downwards 
      }
      this.speed = 700;
      this.jumpSpeed = 200;
      this.spinSpeed = 600;
      this.spritesheet = ASSET_MANAGER.getAsset("./sprites/realSonicSheet.png");
      this.updateBB();
      // this.scenemanager = SceneManager
      this.gameWon = false;
      this.dead = false;
      this.animations = [];
      this.state = 0;
      this.direction = 0;
      this.loadAnimations();
      this.ground = 550;
      this.onGround = false;
      this.BB = null;
      this.lastBB = null;
  }

  loadAnimations() {
    for (var i = 0; i < 5; i++) { // four states (idle, running, jumping and spinning, die)
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

    // die animation facing right 
    this.animations[4][0] = new Animator(this.spritesheet, 385, 547, 42, 47, 1, 1, 0, false, true);
  }
  updateBB() {
    this.lastBB = this.BB;
    this.BB = new BoundingBox(this.position.x + 20, this.position.y, 120, 130, "red");
    // this.lastBB = new BoundingBox(this.BB.x, this.BB.y, this.BB.width, this.BB.height, this.BB.color);

  }
  
update() {
  const GRAVITY = 0.5;
  this.updateBB();
  let standingOnPlatform = false;
  let canvasHeight = 768;
  // console.log("Sonic is at " + this.position.x + " " + this.position.y)
  // console.log("canvas height " + canvasHeight)
  // Move left
  if (this.game.left) {
    // console.log(this.game.left);
    
    this.position.x -= this.speed * this.game.clockTick;
    this.direction = 0;
    this.state = 1;
    // console.log(this.position.x);
  }
  // Move right and spinning left
  if (this.game.spin && this.game.left) {
    this.position.x -= this.spinSpeed * this.game.clockTick;
    this.state = 3;
  } 
  // Move right
  if (this.game.right) {
    // console.log(this.game.right);
    this.position.x += this.speed * this.game.clockTick;
    this.direction = 0;
    this.state = 1;
    // console.log(this.position.x)
  }
  // Jump
  
    
  if (this.game.jump && !this.game.spin && !this.dead) {
    console.log(this.game.jump)

    if(this.onGround){
      this.velocity.y -= 20;
      this.state = 2;
      this.direction = 0;
    }
    this.onGround = false;
}
  this.velocity.y += GRAVITY; // Gravity to pull sonic down after jumping
  this.position.y += this.velocity.y;

    // Spin
  if (this.game.spin) {
    // console.log(this.game.spin)
    this.position.x += this.spinSpeed * this.game.clockTick;
    this.position.y += 10;
    this.state = 3;
  }

  // Set state back to idle if no actions are being performed
  if (!this.game.left && !this.game.right && !this.game.jump && !this.game.spin) {
    this.state = 0;
  }
  // If Sonic is not standing on a platform, check if he has fallen off the screen
  if (!standingOnPlatform) {
    this.velocity.y += GRAVITY;
    this.position.y += this.velocity.y;

    // Check if Sonic has fallen off the screen
    if (this.position.y > canvasHeight) {
      // Reload the game
      window.location.reload();
      // this.position.y = 300; // start at y position 300
    }
}
if(this.dead){
  this.speed = 0; //stops from moving
  this.state = 4;
  setTimeout(() => this.velocity.y = 10, 1000); //wait 1 sec to fall
}

// Update the bounding box for Sonic's new position
this.updateBB();
this.collisionCheck();
this.collideWithFinalEntity();
}
collideWithFinalEntity() {

  // if (typeof this.rings === 'undefined') {
  //   this.rings = 0;
  // }

  // Assuming that the final entity is an object with a property 'BB' that holds its bounding box]
  this.game.entities.forEach(entity => {
  if (entity.BB && this.BB.collide(entity.BB)) {
    if (entity instanceof Checkpoint) {
      // console.log("Collide with Checkpoint")
      this.gameWon = true; /// winning game animation
    }
  }
});
}
collisionCheck() {
  this.game.entities.forEach(entity => {
    if (entity.BB && this.BB.collide(entity.BB)&& !this.dead) { //falling

      if (this.velocity.y > 0) {
        
        if ((entity instanceof Platform) && (this.lastBB.bottom) <= entity.BB.top) {//landing
          this.onGround = true;
          this.position.y = entity.BB.top - this.BB.height;
          this.velocity.y = 0;
          this.updateBB();
          // return;
        }
        if ((entity instanceof Ring) && (this.lastBB.bottom) <= entity.BB.top) {//landing
          // console.log("Landing on Ring");
          this.rings++; // increment the rings variable in SceneManager
          entity.removeFromWorld = true;
        }  
        if ((entity instanceof Ring) && (this.lastBB.bottom) <= entity.BB.top && this.BB.collide(entity.BB)) { // colliding from top side
          // console.log("Colliding from top side of Ring");
          this.rings++;
          entity.removeFromWorld = true;
        }
        if ((entity instanceof Ring) && (this.lastBB.top) >= entity.BB.bottom && this.BB.collide(entity.BB)) { // colliding from bottom side
          // console.log("Colliding from bottom side of Ring");
          this.rings++;
          entity.removeFromWorld = true;
        }
        
      }
      

      if (this.velocity.y < 0) { //w
        // console.log("Collide top of Platform");
        if ((entity instanceof Platform) 
        && this.lastBB.top >= entity.BB.bottom
        && this.BB.collide(entity.BB.bottom)) {
          // console.log("Collide top of Platform");
          this.velocity.y = 0;
          this.state = 0;
        }
      }
      
      //Other cases for hitting Platform
      if ((entity instanceof Platform)) { 
        if (this.BB.left <= entity.BB.right 
            && this.BB.bottom > entity.BB.top
            && this.velocity.x < 0) { //Touching right side
          // console.log("Touching right");
          this.position.x = entity.BB.right;

          if (this.velocity.x < 0) this.velocity.x = 0;
        }

        if (this.BB.right >= entity.BB.left 
            && this.BB.bottom > entity.BB.top 
            && this.velocity.x > 0) {  //Touching left side
          // console.log("Touching left");
          this.position.x = entity.BB.left - this.BB.width;

          if (this.velocity.x > 0) this.velocity.x = 0;
        }
      }
      if ((entity instanceof EnemiesCrab || entity instanceof Bug ||  entity instanceof Bee || entity instanceof Bat) //Crab or Bug BB
            && !entity.dead
            && this.game.spin // if it's spinning
            && this.BB.collide(entity.BB)) { 
              entity.dead = true; //enmie dies
              entity.removeFromWorld = true;
              
      }else if ((entity instanceof EnemiesCrab || entity instanceof Bug || entity instanceof Bee || entity instanceof Bat) //Crab or Bug BB
            && !entity.dead //if enemy is not dead yet
            && this.BB.collide(entity.BB)) { // if sonic collides the enemy
              this.velocity.y = -20;
              this.dead = true;
              entity.dead = true; // make the sonic to not detect enemy
            }  

      if ((entity instanceof Ring)  // Ring BB
      && this.BB.collide(entity.BB)) { 
        // console.log("Cool Ring Collision")
        this.rings++;
        entity.removeFromWorld = true
        console.log("The number of Rings is: " + this.rings);
      }
    }
  });
}


  draw(ctx) {
    if(this.state < 0 || this.state > 4) this.state = 0;
    let done = this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x , this.position.y);
    if (done) {
      this.animations[this.state][this.direction].elapsedTime = 0;
      this.state = 0;
    }
    if (PARAMS.DEBUG) {
      this.game.ctx.strokeStyle = "red";
      this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
    }
    if(this.gameWon) {
      ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
      ctx.filllstyle = 'black';
      ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height)
      ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/FinishedLevel.png"), 200 , 345, 600, 40);
  }
  }
  
}
