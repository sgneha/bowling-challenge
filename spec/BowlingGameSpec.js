
describe("Game", function () {
    var game;
    beforeEach(function () {
        game = new Game();

    });

    it("game starts with empty array of frames", function () {
        expect(game.frames).toEqual([])
    });
    describe("#addFrame", function () {
        it("adds a new frame in game", function () {
            frame = new Frame(1);
            game.addFrame(frame);
            expect(game.frames[0]).toEqual(frame);
        })
        it('only allows 10 frames', function () {
            frame = new Frame(11);
            expect(game.addFrame(frame)).toEqual("GameOver");
        })
    })
    describe('#calculateScore', function () {
        it("gives scores in regular scenario", function () {
            frame = new Frame(1);
            game.addFrame(frame);
            game.currentFrame = 1;
            game.frames[0].roll_one = 2;
            game.frames[0].roll_second = 3;
            // frame.roll_one = 2;
            // frame.roll_second = 3;
            expect(game.calculateScore()).toEqual(5);
        })
    })
});

