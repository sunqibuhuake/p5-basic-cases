
function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    var r = 100;
    var cx = width / 2;
    var cy = height / 2;
    noFill();
    stroke(255);
    strokeWeight(7);
    beginShape();
    for ( var i = 0; i <= TWO_PI; i += PI / 3) {
        var x = cx + r * sin(i);
        var y = cy + r * cos(i);
        vertex(x, y)
    }
    endShape(CLOSE);
}

