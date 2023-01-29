class SceneManager {

  constructor(game) {
    this.game = game;
    this.game.camera = this; // special entity
    this.x = 0;
    this.sonic = this.game.sonic;


    // add coins

    // add lives

    // add score


  }

  update () {

    let midpoint = PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2;
    
    this.x = this.sonic.position.x - midpoint
   
    // if sonic dead ..

  }

  draw() {

  }
}