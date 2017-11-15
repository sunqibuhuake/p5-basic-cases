// 全局变量保存音频数据
// var music = null;
var music;
var amp;
function preload() {
	// 载入音频
    music = loadSound('http://oojq4xaei.bkt.clouddn.com/8855.wav');
}
function setup() {
	createCanvas(300,300);
	// 实例化振幅类
	amp = new p5.Amplitude()
	music.play();
}
function draw() {
	background(0);
	noStroke();
	//通过amp 获取实时振幅数据,映射到透明度a和半径r
	var l = amp.getLevel();
	var a = map(l, 0, 0.3, 100, 255);
	fill(255,255, 255, a)
	var r = map(l, 0, 0.3, 25, 50);

	ellipse( width / 2, height / 2, r * 2, r * 2);
}
