
class Animator {
  constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
    Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

    this.elapsedTime = 0;
    this.totalTime = frameCount * frameDuration;
    
  };

  drawFrame(tick, ctx, x, y) {
    // drawImage(this.spritesheet, 
    //     sx, sy // where on sprite sheet we want to draw
    //     sw, sh // how big of a frame we are grabbing from that
    //     dX, dY // where we want to draw it on the canvvas
    //     dW, dH // how big we want to draw that as well
    // );
    this.elapsedTime += tick;
    const frame = this.currentFrame();
    if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
 ctx.drawImage(this.spritesheet, 
        this.xStart + this.width*frame, this.yStart, // shift by one frame to the right for each frame that we are on (x axis)
        this.width,this.height, 
        x, y, // passed in
        this.width*3,this.height*3  
    );


  };

  currentFrame() {
      return Math.floor(this.elapsedTime / this.frameDuration);
  };

  isDone() {
      return (this.elapsedTime >= this.totalTime);
  };
};