class EnemiesCrab {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemiesCrab.png");
        this.speed = 10;
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 0, 4, 75.6, 47, 5, .15, 7, true, true);
        this.BB = new BoundingBox(this.x, this.y, 45, 55);
        this.updateBB();
    };

    update() {
        // Move Left
        this.x -= this.speed * 0.1;
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 45, 55);
    }

    draw(ctx) {
        this.sonicEnemy.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.5);
    };
}

class Bug {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bug.png");
        this.speed = 5;
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 0, 4, 40, 30, 3, .15, 4,false, true);
        this.BB = new BoundingBox(this.x, this.y, 700, 540);
        this.updateBB();
    };
    
    update() {
        // Move Left
        this.x += this.speed * 0.1;
        this.updateBB();
        
    };

    
    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 700, 540);
    }

    draw(ctx) {
        this.sonicEnemy.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.5);
    };
}