function  setup() {

	createCanvas(500, 500);
	rectMode(CENTER);

}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(3);
	for(var i = 1; i < 10; i++) {
		for (var j = 1; j < 10; j++) {
			if(isHover( i * 30, j * 30, 30, 30, mouseX, mouseY)) {
				fill(random(255), random(255), random(255));
			} else {
				noFill();
			}
			rect( i * 30, j * 30, 30, 30);
		}
	}
}

function isHover (rx, ry, rw, rh, mx, my) {
	if( mx > (rx - rw / 2) && mx < (rx + rw / 2) 
		&& my > (ry - rh / 2) && my < (ry + rh / 2)) {
		return true;
	} else {
		return false;
	}
}