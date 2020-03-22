function Game() {
    this.frames = [];
    this.currentFrame = 0;
    this.currentRoll = 0;
}
Game.prototype.addFrame = function (frame) {

    if (frame.frameNo === 11) return "GameOver";
    this.frames.push(frame);

}
Game.prototype.calculateScore = function () {
    var score = 0;
    for (var i = 0; i < this.currentFrame; i++) {
        score += this.frames[i].roll_one + this.frames[i].roll_second;
    }
    return score;
}
