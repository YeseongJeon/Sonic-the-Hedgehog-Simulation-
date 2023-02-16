const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


// spritesheets

ASSET_MANAGER.queueDownload("./sprites/realSonicSheet.png");
ASSET_MANAGER.queueDownload("./sprites/bug.png");
ASSET_MANAGER.queueDownload("./sprites/enemiesCrab.png");

// platform
ASSET_MANAGER.queueDownload("./sprites/floor.png");
ASSET_MANAGER.queueDownload("./sprites/map.png");

ASSET_MANAGER.queueDownload("./sprites/backgroundHill.png");
ASSET_MANAGER.queueDownload("./sprites/cloud1.png");
ASSET_MANAGER.queueDownload("./sprites/cloud2.png");
ASSET_MANAGER.queueDownload("./sprites/cloud3.png");
ASSET_MANAGER.queueDownload("./sprites/water.png");
ASSET_MANAGER.queueDownload("./sprites/treesAndWaterfall.png");



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	gameEngine.addEntity(new Sonic(gameEngine));
	gameEngine.addEntity(new EnemiesCrab(gameEngine, 650, 570));
	gameEngine.addEntity(new Bug(gameEngine, 700, 540));
	gameEngine.addEntity(new Platform(gameEngine));
	gameEngine.addEntity(new TreesAndWaterfall(gameEngine));
	gameEngine.addEntity(new BackgroundHill(gameEngine));
	gameEngine.addEntity(new Cloud1(gameEngine));
	gameEngine.addEntity(new Cloud2(gameEngine));
	gameEngine.addEntity(new Cloud3(gameEngine));
	gameEngine.addEntity(new Water(gameEngine));
	gameEngine.addEntity(new SceneManager(gameEngine));
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	gameEngine.start();
});
