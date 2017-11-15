//全局变量保存振荡器
var o = null;
function setup() {
  // 第一个参数 频率 第二个参数振荡器发声类型
  o = new p5.Oscillator(200, 'triangle');
  o.start();
}
