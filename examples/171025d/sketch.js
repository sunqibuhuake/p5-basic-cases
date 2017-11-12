function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    noFill();
    stroke( 116, 170, 221, 48);
    for(var i = 1; i <= 20; i ++) {
        var deg = (millis() + 300 * i) / 8.55;
        var rad = radians(deg);
        var pingPong = sin(rad);

        var sw = map(pingPong, -1, 1, 44.2, 3.9);
        strokeWeight(sw);
        ellipse( width / 2, height / 2, i * 20, i * 20);
    }
}