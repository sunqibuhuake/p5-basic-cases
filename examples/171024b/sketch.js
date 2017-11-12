function  setup() {
	createCanvas(500, 500);
	background(0);
	rectMode(CENTER);
	noLoop();
}

function draw() {
	noFill();
	stroke(255);
	strokeWeight(3);
	for (var i = 30; i < 500; i += 40) {
		for (var j = 30; j < 500; j += 40) {
			rect(i, j, 30, 30);
		}
	}
}