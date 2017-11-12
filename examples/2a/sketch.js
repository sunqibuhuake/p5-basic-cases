function  setup() {

	createCanvas(500, 500);
	background(255, 255, 255);
	angleMode(DEGREES);
	noLoop();

}

function draw() {
	translate(250, 250);
	rotate(45);
	fill(0);
	rect( 0, 0, 50, 50);
}