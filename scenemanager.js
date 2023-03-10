class SceneManager {

  constructor(game) {
    this.game = game;
    this.game.camera = this; // special entity
    this.x = 0;
    this.sonic = this.game.sonic;
    this.enemy = this.game.enemy;
    this.title = true;
    
  }
  loadLevelOne() {
    this.game.entities = [];
    this.x = 0;

    //sonic entity
    this.sonic = new Sonic(this.game);
    this.game.entities.push(this.sonic);
    
    //enemy entities
    this.enemy = new EnemiesCrab(this.game, 650, 560);
    this.game.entities.push(this.enemy);
    this.enemy = new Bug(this.game, 700, 540);
    this.game.entities.push(this.enemy);
    this.enemy = new Bat(this.game, 450, 250);
    this.game.entities.push(this.enemy);
    this.enemy = new Bee(this.game, 400, 170);
    this.game.entities.push(this.enemy);

    //platform entities for beginnings
    let platform_1 = new Platform(this.game, 300, 400, 400, 120);
    this.game.entities.push(platform_1);
    let platform1 = new Platform(this.game, 0, 667, 400, 120);
    this.game.entities.push(platform1);
    let platform2 = new Platform(this.game, 600, 667, 400, 120);
    this.game.entities.push(platform2);
    let platform3 = new Platform(this.game, 700, 667, 400, 120);
    this.game.entities.push(platform3);
    let platform_2 = new Platform(this.game, 1000, 400, 400, 120);
    this.game.entities.push(platform_2);
    let platform4 = new Platform(this.game, 1400, 667, 400, 120);
    this.game.entities.push(platform4);
    let platform5 = new Platform(this.game, 2000, 667, 400, 120);
    this.game.entities.push(platform5);
    let platform6 = new Platform(this.game, 2600, 667, 400, 120);
    this.game.entities.push(platform6);
    let platform_7 = new Platform(this.game, 2500, 400, 400, 120);
    this.game.entities.push(platform_7);
    let platform7 = new Platform(this.game, 2800, 667, 400, 120);
    this.game.entities.push(platform7);
    let platform8 = new Platform(this.game, 3200, 667, 400, 120);
    this.game.entities.push(platform8);
    let platform_4= new Platform(this.game, 3200, 400, 400, 120);
    this.game.entities.push(platform_4);
    let platform9 = new Platform(this.game, 3900, 667, 400, 120);
    this.game.entities.push(platform9);
    let platform10 = new Platform(this.game, 4200, 667, 800, 120);
    this.game.entities.push(platform10);
    let platform11 = new Platform(this.game, 4400, 400, 400, 120);
    this.game.entities.push(platform11);
    let platform12 = new Platform(this.game, 4300, 667, 400, 120);
    this.game.entities.push(platform12);
    let platform13 = new Platform(this.game, 5300, 667, 400, 120);
    this.game.entities.push(platform13);
    let platform14 = new Platform(this.game, 5500, 667, 400, 120);
    this.game.entities.push(platform14);
    let platform15 = new Platform(this.game, 5800, 400, 400, 120);
    this.game.entities.push(platform15);
    let platform16 = new Platform(this.game, 5500, 667, 400, 120);
    this.game.entities.push(platform16);
    let platform17 = new Platform(this.game, 5700, 667, 400, 120);
    this.game.entities.push(platform17);
    let platform18 = new Platform(this.game, 5900, 667, 400, 120);
    this.game.entities.push(platform18);
    let platform19 = new Platform(this.game, 6000, 400, 400, 120);
    this.game.entities.push(platform19);
    let platform20 = new Platform(this.game, 6500, 667, 400, 120);
    this.game.entities.push(platform20);
    let platform21 = new Platform(this.game, 6800, 667, 400, 120);
    this.game.entities.push(platform21);
    let platform22 = new Platform(this.game, 7000, 400, 400, 120);
    this.game.entities.push(platform22);
    let platform23 = new Platform(this.game, 7500, 667, 400, 120);
    this.game.entities.push(platform23);
    let platform24 = new Platform(this.game, 7600, 667, 800, 120);
    this.game.entities.push(platform24);


    //ring entities for beginning
    let ring1 = new Ring(this.game, 300, 590);
    this.game.entities.push(ring1);
    let ring2 = new Ring(this.game, 400, 322);
    this.game.entities.push(ring2);

    const canvasWidth = 15000;
    const platformWidth = 400;
    const platformHeight = 120;
    const platformGap = 270;
    const ringProbability = 0.7; // probability of a platform having a ring (0.5 = 50% chance)
    const maxRingsPerPlatform = 3; // maximum number of rings per platform
    const minRingsPerPlatform = 1; // minimum number of rings per platform
    const ringWidth = 50;
    const ringHeight = 50;
    const enemyProbability = 0.5; // probability of a platform having an enemy (0.5 = 50% chance)
    const maxEnemiesPerPlatform = 2; // maximum number of enemies per platform
    const minEnemiesPerPlatform = 1; // minimum number of enemies per platform
    const enemyWidth = 70; // width of each enemy
    const enemyHeight = 60; // height of each enemy
    
    let platformX = 7600;
    let platforms = [];
    
    while (platformX < canvasWidth) {
      platformX += platformGap + Math.random() * (platformGap * 2);
      let platformY = Math.max(Math.random() * 500 + 100, 350);
      let platform = new Platform(this.game, platformX, platformY, platformWidth, platformHeight);
      this.game.entities.push(platform);
      platforms.push(platform);
    
      // generate rings for this platform
      if (Math.random() < ringProbability) {
          let numRings = Math.floor(Math.random() * (maxRingsPerPlatform - minRingsPerPlatform + 1)) + minRingsPerPlatform;
          let ringX = platformX + platformWidth/2 - (numRings * ringWidth)/2;
          let ringY = platformY - ringHeight;
    
          for (let i = 0; i < numRings; i++) {
              let ring = new Ring(this.game, ringX + (i * ringWidth), ringY-35, ringWidth, ringHeight);
              this.game.entities.push(ring);
          }
      }
    
      // generate enemies for this platform
      if (Math.random() < enemyProbability) {
          let numEnemies = Math.floor(Math.random() * (maxEnemiesPerPlatform - minEnemiesPerPlatform + 1)) + minEnemiesPerPlatform;
          let enemyX = platformX + platformWidth/2 - (numEnemies * enemyWidth)/2;
          let enemyY = platformY - platformHeight - enemyHeight;
    
          for (let i = 0; i < numEnemies; i++) {
              let enemy = null;
              if (Math.random() < enemyProbability) {
                  enemy = new Bee(this.game, enemyX + (i * enemyWidth), enemyY);
              } else {
                  enemy = new Bat(this.game, enemyX + (i * enemyWidth), enemyY);
              }
              this.game.entities.push(enemy);
          }
      }
    }

      
    let platformfinal = new Platform(this.game, 15400, 667, 800, 120);
    this.game.entities.push(platformfinal);
    let checkpoint1 = new Checkpoint(this.game, 15700, 520);
    this.game.entities.push(checkpoint1);
    
    //backgound entities
    let backgroundHill = new BackgroundHill(this.game, 0, 192, 24000, 168);
    let treesAndWaterfall = new TreesAndWaterfall(this.game, 0, 360, 24000, 141);
    let cloud1a = new Cloud1(this.game, 0, 0, 12000, 96);
    let cloud1b = new Cloud1(this.game, 12000, 0, 12000, 96);
    let cloud1c = new Cloud1(this.game, 24000, 0, 12000, 96);
    let cloud1d = new Cloud1(this.game, 36000, 0, 12000, 96);
    let cloud2a = new Cloud2(this.game, 0, 96, 12000, 48);
    let cloud2b = new Cloud2(this.game, 12000, 96, 12000, 48);
    let cloud2c = new Cloud2(this.game, 24000, 96, 12000, 48);
    let cloud2d = new Cloud2(this.game, 36000, 96, 12000, 48);
    let cloud3a = new Cloud3(this.game, 0, 144, 12000, 48);
    let cloud3b = new Cloud3(this.game, 12000, 144, 12000, 48);
    let cloud3c = new Cloud3(this.game, 24000, 144, 12000, 48);
    let cloud3d = new Cloud3(this.game, 36000, 144, 12000, 48);
   
    let water = new Water(gameEngine);
    this.game.entities.push(backgroundHill, treesAndWaterfall, 
                            cloud1a, cloud1b, cloud1c, cloud1d,
                            cloud2a, cloud2b, cloud2c, cloud2d,
                            cloud3a, cloud3b, cloud3c, cloud3d,
                            water);
  }

  update() {

    if(this.title && this.game.enterkey) {
        this.game.timer.gameTime = 0;
        this.title = false;
        this.loadLevelOne();
    }

    if(this.sonic){
      let midpoint = PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2;
      if(this.x < this.sonic.position.x - midpoint) this.x = this.sonic.position.x - midpoint;
    }

  }

  draw(ctx) {
    if (document.fonts.check('36px "Press Start 2P"')) {
      ctx.font = '36px "Press Start 2P"';
      ctx.fillStyle = "Yellow";

      if(!this.title){
        ctx.fillText("TIME  ", 3, 100);
        ctx.fillText(this.game.timerTick, 200 , 100);
        ctx.fillText("RINGS  ", 6.5 , 50);
        ctx.fillText(this.sonic.rings, 250 , 50);
      }
    } else {
      console.error('Font not loaded');
    }
    
    if(this.title) {
      ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
      ctx.filllstyle = 'black';
      ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height)
      ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/realsoniclogo.png"),200 , 80, 600, 232);
      ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/enterStart.png"), 200, 330,  600, 79);
      ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/groupName.png"),200 , 440, 600, 53);
    }
  }
}
