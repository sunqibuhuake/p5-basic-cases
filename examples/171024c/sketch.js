function  setup() {

	createCanvas(800, 600);
	rectMode(CENTER);

}

function draw() {
	background(0);
	var isInside = false;
	if(mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 400) {
		isInside = true;
	}
	if ( isInside ) {
		fill(random(255), random(255), random(255));
	} else {
		noFill();
	}
	stroke(255);
	strokeWeight(5);
	rect(width / 2, height / 2, 200, 200);
}
