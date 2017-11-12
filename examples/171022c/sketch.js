function  setup() {

	createCanvas(500, 500);
	background(255, 255, 255, 255);
	angleMode(DEGREES);
	noLoop();

}

function draw() {

	fill(100, 100, 100, 100);
	strokeWeight(36.9);
	stroke(171, 226, 193, 100);
	var start_angle = 0;
	var end_angle = 225.4;
	arc( 250, 250, 200, 200, start_angle, end_angle, PIE);

	console.log('render')

}
