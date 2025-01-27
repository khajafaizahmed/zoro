const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background.png");
ASSET_MANAGER.queueDownload("./zoro.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Zoro(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();
	
});
