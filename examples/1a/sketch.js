function  setup() {

	createCanvas(500, 500);
	background(255, 255, 255);
	noLoop();

}

function draw() {


	fill(100, 100, 100, 100);
	strokeWeight(10);
	stroke(255, 0, 0, 100);
	ellipse(250, 250, 200, 200);

	fill(0, 0, 0, 255);
	noStroke();
	ellipse(250, 250, 100, 100);

	noFill();
	stroke(255);
	strokeWeight(10);
	ellipse(250, 250, 50, 50);

}