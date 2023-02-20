class BackgroundHill { 
    constructor(game, x, y, width, height) {
        this.game = game;
        this.position = {
          x: x,
          y: y
        };
        this.width = width;
        this.height = height;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/backgroundHill.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};





class TreesAndWaterfall { 
    constructor(game, x, y, width, height) {
        this.game = game;
        this.position = {
          x: x,
          y: y
        };
        this.width = width;
        this.height = height;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/treesAndWaterfall.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};

class Cloud1 { 
    constructor(game, x, y, width, height) {
        this.game = game;
        this.position = {
          x: x,
          y: y
        };
        this.width = width;
        this.height = height;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cloud1.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};
class Cloud2 { 
    constructor(game, x, y, width, height) {
        this.game = game;
        this.position = {
          x: x,
          y: y
        };
        this.width = width;
        this.height = height;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cloud2.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height);
                                        // x, y,        frameLocation,framesize x , y, 
    }
};

class Cloud3 { 
    constructor(game, x, y, width, height) {
        this.game = game;
        this.position = {
          x: x,
          y: y
        };
        this.width = width;
        this.height = height;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cloud3.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.position.x-this.game.camera.x, this.position.y, this.width, this.height);
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
};
