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
class Bat {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bat.png");
        this.speed = 5;
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 26, 0, 28, 50, 2, .50, 7,false, true);
        this.BB = null;
        this.updateBB();
    };
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 110, 90, "red");
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
            this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height, 2.5);
          }
    }
}

class Bee {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bee.png");
        this.speed = 50;
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 0, 0, 37, 40, 2, .50, 0,false, true);
        this.BB = null;
        this.updateBB();
    };
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 120, 120, "red");
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
            this.game.ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height, 1.5);
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


class Ring {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/RingReal.png");
        this.x = x;
        this.y = y;
        this.sonicEnemy = new Animator(this.spritesheet, 2.26, 0, 23.9, 26, 4, 0.075, 0,false, true);
        this.BB = null;
        this.updateBB();
    };
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 77, 80, "red");
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