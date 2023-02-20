class EnemiesCrab {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemyCrab.png");
        this.speed = 10;
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 0, 10, 75.6, 47, 5, .15, 7, true, true);
        this.BB = null;
        this.updateBB();
    };
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 230, 115, "red");
    }

    update() {
        // Move Left
        this.x -= this.speed * 0.1;
        this.updateBB();
    };

    draw(ctx) {
        if (this.spritesheet) {
            this.sonicEnemy.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        } else {
            console.log("Spritesheet not loaded");
        }

        if (PARAMS.DEBUG) {
            this.game.ctx.strokeStyle = "red";
            this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
          }
    }
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
        this.BB = null;
        this.updateBB();
    };
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 120, 78, "red");
    }

    update() {
        // Move Left
        this.x += this.speed * 0.1;
        this.updateBB();
        
    };

    draw(ctx) {
        if (this.spritesheet) {
            this.sonicEnemy.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        } else {
            console.log("Spritesheet not loaded");
        }

        if (PARAMS.DEBUG) {
            this.game.ctx.strokeStyle = "red";
            this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
          }
    }
}


class Checkpoint {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/goalplate.png");
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 0, 0, 32, 48, 1, 1, 0,false, true);
        this.BB = null;
        this.updateBB();
    };
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 100, 150, "red");
    }

    update() {
        this.updateBB();
        
    };

    draw(ctx) {
        if (this.spritesheet) {
            this.sonicEnemy.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y);
        } else {
            console.log("Spritesheet not loaded");
        }

        if (PARAMS.DEBUG) {
            this.game.ctx.strokeStyle = "red";
            this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
          }
    }
}