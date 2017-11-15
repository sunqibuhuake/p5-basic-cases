// 振荡器
var o = null;
// midi音符初始值
var note = 50;
// midi音符累加值
var delta = 2;
function setup() {
  frameRate(1);
  o = new p5.Oscillator();
  o.start();
}
function draw() {
  note += delta;
  var freq = midiToFreq(note);
  o.freq(freq);
}