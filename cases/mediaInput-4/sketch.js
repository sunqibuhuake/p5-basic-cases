var img = null;
var particlePosArr =[]
function preload() {
	img = loadImage('http://oojq4xaei.bkt.clouddn.com/xyy.jpeg');

}
function setup() {
	frameRate(10)
	createCanvas(500, 500);
	pixelDensity(1);
	image(img, 0, 0, 500, 500);
	filter(THRESHOLD);
	loadPixels();
	// pixels 数组有一百万个元素，因为原图分辨率500 * 500， 每个像素点有rgba 四个值
	for(var y = 0; y < height; y++) {
		for(var x = 0; x < width; x ++) {
			var r = pixels[ (width * y + x) * 4 + 0];
			var g = pixels[ (width * y + x) * 4 + 1];
			var b = pixels[ (width * y + x) * 4 + 2];
			var a = pixels[ (width * y + x) * 4 + 3];
			// console.log(x,y);
			if(r == 255 && g == 255 && b == 255) {
				particlePosArr.push({
					x: x,
					y: y
				})
			}
		}
	}

	// noLoop();
}
function draw() {
	background(0);

	particlePosArr.forEach(function(obj) {
		// fill(255);
		// noStroke();
		// rect(obj.x, obj.y, 1, 1);

		if(random(1) > 0.02) {
			return false;
		}
		fill(random(255), random(255), random(255), 255);
		noStroke();
		ellipse(obj.x, obj.y, random(6), random(6));

	})


}
