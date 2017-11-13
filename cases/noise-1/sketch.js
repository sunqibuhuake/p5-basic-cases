function setup() {
	createCanvas(400, 400);
	noLoop();
}

function draw() {

	background(0);
	noFill();
	stroke(255);

	beginShape();
	for (var x = 0; x < width; x++) {
		var nx = map(x, 0, width, 0, 10);
		var y = height * noise(nx);
		vertex(x, y);
	}
	endShape();
}
