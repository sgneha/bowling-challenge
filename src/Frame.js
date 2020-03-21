function Frame(id) {
  this.frameNo = id;
  this.roll_one = 0;
  this.roll_second = 0;
};
Frame.prototype.getFrameStatus = function () {
  if (this.roll_one === 10) return "strike";
  if (this.roll_one + this.roll_second === 10) return "spare";
  return "regular";
};

Frame.prototype.setRoll = function (roll_number, pin) {
  if (roll_number === 1) {
    this.roll_one = pin;
  }
  else if (roll_number === 2) {
    this.roll_second = pin;

  }
  else
    return "select valid roll";



}



















