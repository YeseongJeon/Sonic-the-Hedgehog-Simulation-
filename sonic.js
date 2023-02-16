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

    this.dead = false;
    this.speed = 1300;
    this.jumpSpeed = 200;
    this.spinSpeed = 1400;
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/realSonicSheet.png");

    this.updateBB();

    this.animations = [];
    this.state = 0;
    this.direction = 0;
    this.loadAnimations();
    this.BB = new BoundingBox(this.position.x, this.position.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2);
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
    this.animations[3][0] = new Animator(this.spritesheet, 1, 1113, 47, 40, 10, 0.08, 0, false, true);
    // facing left

    this.animations[3][1] = new Animator(this.spritesheet, 746, 427, -47, 40, 10, 0.08, 0, false, true);
  }
  updateBB() { //update our Bounding Box
    this.lastBB = this.BB;
    if (this.direction === 0) { // when we are idle (not right or left)
      this.BB = new BoundingBox(this.position.x, this.position.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    }
    else {
      this.BB = new BoundingBox(this.position.x, this.position.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2);
    }
  };

  update() {
    if(this.dead){
      this.position.y = 1000;
      this.position.x = 2000;
      return;
    }
    const gravity = 0.5;


    this.position.y += this.velocity.y;
    this.velocity.y += gravity;

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
      this.state = 1;
    }
    // Jump
    if (this.game.jump) {
      console.log(this.game.jump)
      this.position.y -= 25 // straight up about 17 pixels
      this.state = 2;
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

    this.collisionCheck();
    this.updateBB();
  }
  draw(ctx) {
    if (this.state < 0 || this.state > 3) this.state = 0;
    let done = this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x, this.position.y);
    if (done) {
      this.animations[this.state][this.direction].elapsedTime = 0;
      this.state = 0;
    }
  };

  collisionCheck() {
    this.game.entities.forEach(element => {
      if (element instanceof EnemiesCrab) {
        if(this.BB.collide(element.BB)){
          this.dead = true;
        }
      }
      // if (element.BB != undefined) {
      //   if (this.BB.collide(element.BB)) {
      //     console.log("On collision")
      //     console.log(element)
      //     if (element instanceof Enemies) {
      //       console.log("Make Dead")
      //       this.position.y = 1000;
      //       this.dead = true;
      //     }
      //   }
      // }

    });
  }

}
