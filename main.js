const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

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

	gameEngine.addEntity(new TreesAndWaterfall(gameEngine));
	gameEngine.addEntity(new BackgroundHill(gameEngine));
	gameEngine.addEntity(new Cloud1(gameEngine));
	gameEngine.addEntity(new Cloud2(gameEngine));
	gameEngine.addEntity(new Cloud3(gameEngine));
	gameEngine.addEntity(new Water(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
