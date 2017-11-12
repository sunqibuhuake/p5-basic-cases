function  setup() {

	createCanvas(1280, 720);
	angleMode(DEGREES);
	rectMode(CENTER);
	noLoop();

}

function draw() {
	background(0);
	noFill();
	strokeWeight(2.5);
	stroke(255);

	for (var i = 0; i <= 35; i = i + 1 ) {
		push();
		translate(width / 2, height / 2);
		rotate(5 * i);
		rect(0, 0, i * 15, i * 15);
		pop();
	}


}