const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


// spritesheets

ASSET_MANAGER.queueDownload("./sprites/realSonicSheet.png");


// platform
ASSET_MANAGER.queueDownload("./sprites/floor.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.addEntity(new Sonic(gameEngine));
	gameEngine.addEntity(new Platform(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
