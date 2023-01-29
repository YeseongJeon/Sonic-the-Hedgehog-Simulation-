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
	
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	gameEngine.addEntity(new Sonic(gameEngine));
	gameEngine.addEntity(new Platform(gameEngine));
	gameEngine.addEntity(new SceneManager(gameEngine));
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	gameEngine.start();
});
