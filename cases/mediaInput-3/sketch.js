var img = null;
var particlePosArr =[]
function preload() {
	img = loadImage('../assets/p5-500px.png');

}
function setup() {
	frameRate(10)
	createCanvas(500, 500);
	pixelDensity(1);
	image(img, 0, 0);
	loadPixels();
	for(var y = 0; y < img.height; y++) {
		for(var x = 0; x < img.width; x ++) {
			var r = pixels[ (img.width * y + x) * 4 + 0];
			var g = pixels[ (img.width * y + x) * 4 + 1];
			var b = pixels[ (img.width * y + x) * 4 + 2];
			var a = pixels[ (img.width * y + x) * 4 + 3];
			// console.log(x,y);
			if(r == 0 && g == 0 && b == 0) {
				particlePosArr.push({
					x: x,
					y: y
				})
			}


		}
	}
}
function draw() {
	var count = 0;
	background(255);
	particlePosArr.forEach(function(obj) {
		if(random(1) > 0.03) {
			return false;
		}
		count ++;
		fill(random(255), random(255), random(255), 255);
		noStroke();
		ellipse(obj.x, obj.y, random(10), random(10));

	})

	console.log(count)

}