var img;
// 全局变量，draw里能调用
var slider;
var pd = 1;
var filterMode = 'NO FILTER';
function preload() {
	img = loadImage("http://oojq4xaei.bkt.clouddn.com/xyy.jpeg");
}
function setup() {
	slider = createSlider(0.1, 2, 1, 0.1);
	slider.position(200, 10);
	slider.style('width', '200px');
	createCanvas(500,500)
}
function draw() {
	var val = slider.value();
	pixelDensity(val);
	//pixelDensity = 1， 100 x 100 像素的图片有10000像素
	//pixelDensity = 2， 100 x 100 像素的图片有40000像素

	image(img, 0, 0, 500, 500);
}
