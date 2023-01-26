class  EnemiesBee{
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./EnemiesBee.png"), 0, 4, 71, 47, 4, 0.2, false, false);

        this.x = 0;
        this.y = 0;
        this.speed = 300;
    };
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x >900 ) this.x = 0; 
    };
    draw(ctx) {

        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}