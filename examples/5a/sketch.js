function setup() {
    createCanvas(500, 500);
}
function draw() {
    background(0);
    stroke(255);
    strokeWeight(3);
    point( random(width), random(height));
}