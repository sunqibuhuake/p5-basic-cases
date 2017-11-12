var deg = 0;
var degVel = 0;
var degAcc = 0.1;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    rectMode(CENTER);
    // degAcc = 1;
}

function draw() {
    background(255, 255, 255);
    if (mouseIsPressed) {
        degVel = degVel + degAcc;
        deg = deg + degVel;
    }
    if( deg > 360) {
    	deg = 360;
    }
    push();
    translate(250, 250);
    rotate(deg);
    fill(0);
    rect(0, 0, 50, 50);
    pop();

}