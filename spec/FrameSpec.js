describe("Frame", function () {
  var frame;
  beforeEach(function () {
    frame = new Frame(1);
  });
  it("sets a new frame", function () {
    expect(frame.frameNo).toEqual(1);
    expect(frame.roll_one).toEqual(0);
    expect(frame.roll_second).toEqual(0);
  });

  describe("gets the frame status", function () {

    it("if its a strike", function () {
      frame.setRoll(1, 10);
      expect(frame.getFrameStatus()).toEqual("strike")
    });
    it("if its a spare", function () {
      frame.setRoll(1, 8);
      frame.setRoll(2, 2);
      expect(frame.getFrameStatus()).toEqual("spare")
    });
    it("if neither a spare nor a strike", function () {
      frame.setRoll(1, 4);
      frame.setRoll(2, 5);
      expect(frame.getFrameStatus()).toEqual("regular")
    });
  })
});































