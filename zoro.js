class Zoro {
    constructor(game) {
        // I create a new animator for Zoro using the spritesheet
        this.animator = new Animator(ASSET_MANAGER.getAsset("./zoro.png"), 0, 0, 209, 329, 9, 1.06);
        this.game = game;

        // I set Zoro's starting position
        this.x = 605;
        this.y = 605;

        // I define how fast Zoro moves
        this.speed = 100;
    }

    // I update Zoro's position based on the game clock
    update() {
        this.x += this.speed * this.game.clockTick;

        // If Zoro moves off the screen, I reset his position
        if (this.x > 1024) this.x = 0;
    }

    // I draw Zoro on the canvas using the animator
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}
