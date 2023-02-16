class SceneManager {

  constructor(game) {
    this.game = game;
    this.game.camera = this; // special entity
    this.x = 0;
    this.sonic = this.game.sonic;
    this.enemy = this.game.enemy;

    this.loadLevelOne();
  }

  loadLevelOne() {
    this.game.entities = [];
    this.x = 0;

    this.sonic = new Sonic(this.game);
    this.game.entities.push(this.sonic);

    this.enemy = new EnemiesCrab(this.game, 650, 570);
    this.game.entities.push(this.enemy);
    this.enemy = new Bug(this.game, 700, 540);
    this.game.entities.push(this.enemy);


    let platform_1 = new Platform(this.game, 300, 400, 400, 120);
    this.game.entities.push(platform_1);
    let platform1 = new Platform(this.game, 0, 667, 400, 120);
    this.game.entities.push(platform1);
    let platform2 = new Platform(this.game, 400, 667, 400, 120);
    this.game.entities.push(platform2);
    let platform3 = new Platform(this.game, 800, 667, 400, 120);
    this.game.entities.push(platform3);
    let platform_2 = new Platform(this.game, 1000, 400, 400, 120);
    this.game.entities.push(platform_2);
    let platform4 = new Platform(this.game, 1300, 667, 400, 120);
    this.game.entities.push(platform4);
    let platform5 = new Platform(this.game, 1800, 667, 400, 120);
    this.game.entities.push(platform5);
    let platform6 = new Platform(this.game, 2300, 667, 400, 120);
    this.game.entities.push(platform6);
    let platform_7 = new Platform(this.game, 2500, 400, 400, 120);
    this.game.entities.push(platform_7);
    let platform7 = new Platform(this.game, 2700, 667, 400, 120);
    this.game.entities.push(platform7);
    let platform8 = new Platform(this.game, 3100, 667, 400, 120);
    this.game.entities.push(platform8);
    let platform_4= new Platform(this.game, 3200, 400, 400, 120);
    this.game.entities.push(platform_4);
    let platform9 = new Platform(this.game, 3600, 667, 400, 120);
    this.game.entities.push(platform9);
    let platform10 = new Platform(this.game, 4100, 667, 800, 120);

    let platform11 = new Platform(this.game, 4400, 400, 400, 120);
    this.game.entities.push(platform11);
    let platform12 = new Platform(this.game, 4200, 667, 400, 120);
    this.game.entities.push(platform12);
    let platform13 = new Platform(this.game, 4800, 667, 400, 120);
    this.game.entities.push(platform13);
    let platform14 = new Platform(this.game, 5200, 667, 400, 120);
    this.game.entities.push(platform14);
    let platform15 = new Platform(this.game, 5300, 400, 400, 120);
    this.game.entities.push(platform15);
    let platform16 = new Platform(this.game, 5500, 667, 400, 120);
    this.game.entities.push(platform16);
    let platform17 = new Platform(this.game, 5700, 667, 400, 120);
    this.game.entities.push(platform17);
    let platform18 = new Platform(this.game, 5900, 667, 400, 120);
    this.game.entities.push(platform18);
    let platform19 = new Platform(this.game, 6000, 400, 400, 120);
    this.game.entities.push(platform19);
    let platform20 = new Platform(this.game, 6400, 667, 400, 120);
    this.game.entities.push(platform20);
    let platform21 = new Platform(this.game, 6800, 667, 400, 120);
    this.game.entities.push(platform21);
    let platform22 = new Platform(this.game, 7000, 400, 400, 120);
    this.game.entities.push(platform22);
    let platform23 = new Platform(this.game, 7300, 667, 400, 120);
    this.game.entities.push(platform23);
    let platform24 = new Platform(this.game, 7600, 667, 800, 120);
    this.game.entities.push(platform24);

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
