describe("Frame", function () {
  var frame;
  it("sets a new frame", function () {
    var frame = new Frame(1, 1);
    expect(frame.frameNo).toEqual(1);
    expect(frame.roll_one).toEqual(1);
    expect(frame.roll_second).toEqual(0);

  })

})































