class Background {
    constructor(){

    };
    update(){

    };
    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./background.png"), 400,400,1000,300)
    }
}