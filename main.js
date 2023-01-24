const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


// spritesheets

ASSET_MANAGER.queueDownload("./sprites/realSonicSheet.png");


// brick floor 
// ASSET_MANAGER.queueDownload("./sprites/bricks.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.addEntity(new Sonic(gameEngine));
	// gameEngine.addEntity(new Background());

	gameEngine.init(ctx);

	gameEngine.start();
});
