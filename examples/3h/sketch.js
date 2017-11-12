
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    var deg = millis() / 20.1;
    var rad = radians(deg);
    var pingPong = sin(rad);
    var r = map(pingPong, -1, 1, 0, 100);
    fill(255);
    ellipse(width / 2, height / 2, r, r);
}
