class SceneManager {

  constructor(game) {
    this.game = game;
    this.game.camera = this; // special entity
    this.x = 0;
    this.sonic = this.game.sonic;

    this.loadLevelOne();
  }

  loadLevelOne() {
    this.game.entities = [];
    this.x = 0;
    this.sonic = new Sonic(this.game);
    this.game.entities.push(this.sonic);
    let platform0 = new Platform(this.game, 300, 300, 400, 120);
    this.game.entities.push(platform0);
    let platform1 = new Platform(this.game, 0, 667, 400, 120);
    this.game.entities.push(platform1);
    let platform2 = new Platform(this.game, 400, 667, 400, 120);
    this.game.entities.push(platform2);
    let platform3 = new Platform(this.game, 800, 667, 400, 120);
    this.game.entities.push(platform3);
    let platform4 = new Platform(this.game, 1300, 667, 400, 120);
    this.game.entities.push(platform4);
    let platform5 = new Platform(this.game, 1800, 667, 400, 120);
    this.game.entities.push(platform5);
    let platform6 = new Platform(this.game, 2300, 667, 400, 120);
    this.game.entities.push(platform6);
    let platform7 = new Platform(this.game, 2700, 667, 400, 120);
    this.game.entities.push(platform7);
    let platform8 = new Platform(this.game, 3100, 667, 400, 120);
    this.game.entities.push(platform8);
    let platform9 = new Platform(this.game, 3600, 667, 400, 120);
    this.game.entities.push(platform9);
    let platform10 = new Platform(this.game, 4100, 667, 800, 120);
    this.game.entities.push(platform10);
    let backgroundHill = new BackgroundHill(gameEngine);
    let treesAndWaterfall = new TreesAndWaterfall(gameEngine);
    let cloud1 = new Cloud1(gameEngine);
    let cloud2 = new Cloud2(gameEngine);
    let cloud3 = new Cloud3(gameEngine);
    let water = new Water(gameEngine);
    this.game.entities.push(backgroundHill, treesAndWaterfall, cloud1, cloud2, cloud3, water);
    
  }
  
  loadLevel(level) {
    switch (level) {
      case 1:
        this.loadLevelOne();
        break;
      default:
        console.error("Invalid level number");
    }
  }

  update() {
    let midpoint = PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2;
    if(this.x < this.sonic.position.x - midpoint) this.x = this.sonic.position.x - midpoint;
  }

  draw() {
  }
}
