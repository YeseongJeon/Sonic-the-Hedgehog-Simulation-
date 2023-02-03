class Enemies {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemiesSonic.png");
        this.speed = 30;
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 0, 4, 75.6, 47, 5, .15, 7, false, true);
        this.BB = new BoundingBox(this.x, this.y, 45, 55);
        this.updateBB();
    };

    update() {
        // Move Left
        this.x -= this.speed * this.game.clockTick;
        // this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 45, 55);
    }

    draw(ctx) {
        this.sonicEnemy.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.5);
    };
}