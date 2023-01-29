class BackgroundHill { 
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/backgroundHill.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 3800, 2000, 0, 192, 12000, 7000);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};

class TreesAndWaterfall { 
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/treesAndWaterfall.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 3800, 2000, 0, 360, 12000, 7000);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};

class Cloud1 { 
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cloud1.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 700, 200, 0, 0, 1400, 600);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};
class Cloud2 { 
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cloud2.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 700, 200, 0, 96, 1400, 600);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};

class Cloud3 { 
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cloud3.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 700, 200, 0, 144, 1400, 600);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};

class Water {
    constructor(game) {
        this.game = game;
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/water.png"), 0, 0, 400, 105, 8, 0.2);
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/water.png"), 0, 0, 400, 105, 8, 0.2, 0, false, true);
                                                                //xStart, yStart, width, height, frameCount, frameDuration
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 501, 3);
       
    };
}