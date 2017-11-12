function setup() {
    createCanvas( 500, 500);
}

function draw() {
    background(0);
    var cx = width / 2;
    var cy = height / 2;
    noFill();
    stroke(255);
    strokeWeight(2);
    beginShape();
    for( var i = 0; i < 360; i+= 7.6) {
        var deg = millis() / 8 + 259.9 * i;
        var mrad = radians(deg);
        var pingPong = sin(mrad);
        var r = map(pingPong, -1, 1, 0, 100);

        var rad = radians(i);
        var x = cx + r * sin(rad);
        var y = cy + r * cos(rad);
        vertex(x, y);
    }
    endShape(CLOSE);
}