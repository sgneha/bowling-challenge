function Game() {
    this.frames = [];
    this.currentFrame = 0;
    this.currentRoll = 0;
}
Game.prototype.addFrame = function (frame) {

    if (frame.frameNo === 11) return "GameOver";
    this.frames.push(frame);

}
