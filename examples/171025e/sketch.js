function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    noFill();
    stroke( 186, 197, 18, 100);
    for(var i = 1; i <= 8; i ++) {
        var deg = (millis() + 300 * i) / 8.55;
        var rad = radians(deg);
        var pingPong = sin(rad);

        var sw = map(pingPong, -1, 1, 44.2, 3.9);
        strokeWeight(sw);
        drawPolygon(width/2, height/2, i*30, 7);
    }
}

function drawPolygon(cx, cy, r, count) {
    push();
    translate(cx, cy);
    beginShape();
    for (var i = 0; i <= count; i ++) {
        var unit = 360 / count;
        var x = r * sin(radians(unit * i));
        var y = r * cos(radians(unit * i));
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}