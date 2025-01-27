class Animator {
    constructor(spritsheet, xStart, yStart, width, height, frameCount, frameDuration) {
        // I assign all the parameters to the object
        Object.assign(this, { spritsheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    // I draw the current frame on the canvas
    drawFrame(tick, ctx, x, y) {
        // Update how much time has passed
        this.elapsedTime += tick;

        // If we've gone through all frames, start over
        if (this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime;
        }

        // Get the frame we should show now
        const frame = this.currentFrame();

        // Draw that frame from the spritesheet
        ctx.drawImage(
            this.spritsheet,
            this.xStart + this.width * frame, // Where to start on the spritesheet
            this.yStart,                      // Y position on the spritesheet
            this.width,                       // Width of the frame
            this.height,                      // Height of the frame
            x,                                // X position on the canvas
            y,                                // Y position on the canvas
            this.width * 0.6,                  // Scale width
            this.height * 0.5                  // Scale height
        );
    }

    // I figure out which frame to show based on elapsed time
    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    // I check if the animation has finished its cycle
    isDone() {
        return this.elapsedTime >= this.totalTime;
    }
}
