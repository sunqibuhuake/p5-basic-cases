var img;
var slider;
var pd = 1;
var filterMode = 'NO FILTER';
function preload() {
	img = loadImage("../assets/xyy.jpeg");
}
function setup() {

	slider = createSlider(0.1, 2, 1, 0.1);
	slider.position(200, 10);
	slider.style('width', '200px');
	createCanvas(500,500)
}
function draw() {
	var val = slider.value();
	pixelDensity(val)
	image(img, 0, 0, 500, 500);
}