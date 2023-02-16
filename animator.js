class Animator {
  constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {
    Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop});

    this.elapsedTime = 0;
    this.totalTime = frameCount * frameDuration;
    this.frame = 0;
    this.done = false;
  };

  drawFrame(tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.elapsedTime > this.totalTime) {
        if(this.loop){
            this.elapsedTime -= this.totalTime;
        }else{
            this.done = true;
            return;
        }
    }
    if (this.reverse) {
        this.frame = Math.floor((this.totalTime - this.elapsedTime) / this.frameDuration);
    } else {
        this.frame = Math.floor(this.elapsedTime / this.frameDuration);
    }
    ctx.drawImage(this.spritesheet, 
      this.xStart + (this.width + this.framePadding) * this.frame, this.yStart, 
      this.width, this.height, 
      x, y,
      this.width*3, this.height*3
  );
  
  };

  isDone(){
      return this.done;
  }
};
