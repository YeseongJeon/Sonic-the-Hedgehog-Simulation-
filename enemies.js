class EnemyCrab {

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
            this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemyCrab.png");
           
            this.updateBB();
      
            this.animations = [];
            this.state = 0;
            this.direction = 0;
            this.loadAnimations();
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
          this.animations[0][0] = new Animator(this.spritesheet, 5, 723, 61, 49, 1, 0.33, 0, false, true);
      
          // facing left = 1
          this.animations[0][1] = new Animator(this.spritesheet, 741, 38, -41, 47, 1, 0.33, 0, true, true); // change to true true if issues
      
          // run animation
          // facing right
          this.animations[1][0]=  new Animator(this.spritesheet, 2, 916, 49, 45, 14, 0.08, 0, false, true);
        }
        updateBB() { //update our Bounding Box
          this.lastBB = this.BB;
          if (this.direction === 0) { // when we are idle (not right or left)
              this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
          }
          else {
              this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2);
          }
      };
      
        update() {
          const gravity = 0.5;
      
      
          this.position.y += this.velocity.y;
          this.velocity.y += gravity;
          
         
                  
        
          if (this.position.y > 550) {
            this.position.y = 550;
            this.velocity.y = 0;
          } else if (this.position.y <  0){
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
            this.state = 1;
            console.log(this.position.x)
          }
           
      }
        draw(ctx) {
          if(this.state < 0 || this.state > 3) this.state = 0;
          let done = this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x , this.position.y);
          if (done) {
            this.animations[this.state][this.direction].elapsedTime = 0;
            this.state = 0;
          }
        }
        
      }
      