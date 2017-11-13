var t;
var t_increment;

function setup() {
	createCanvas(400, 400);
	textSize(16);
	t = 0;
	t_increment = 0;
}

function draw() {
	background(0);

	t_increment = map(mouseX, 0, width, 0, 0.2);
	var y = height * noise(t);
	t += t_increment;
	fill(0, 255, 0);
	ellipse(width/2, y, 60, 60);

	fill(255);
	text("t_increment = "+t_increment, 20, 30);
	text("t = "+t, 20, 60);
	text("noise(t) = "+noise(t), 20, 90);
	text("height * noise(t) = "+height * noise(t), 20, 120);
}
