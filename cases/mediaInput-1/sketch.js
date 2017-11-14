var img;
var filterMode = 'THRESHOLD';
function preload() {
	img = loadImage("../assets/xyy.jpeg");
}
function setup() {
	createCanvas(500,500)

}
function draw() {
	image(img, 0, 0, 500, 500);
	if(filterMode) {
		filter(filterMode)
	}
}