function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    noFill();
    colorMode(HSB);
    for (var i = 1; i<=30; i=i+1) {
    //用i让每一次正弦波的弧度都不一样
    var deg = (millis()+57*i)/6.18;
    var rad = radians(deg);
    var pingPong = sin(rad);
    //不同节奏的来回往复用在笔触上
    var sw = map(pingPong, -1.0, 1.0, 14.3, 0.5);
    strokeWeight(sw);
    stroke(map(i,1,30,1,360), 89, 89, 0.6);
    drawPolygon(width/2, height/2, i*8, 5);
  }
}

function drawPolygon(cx, cy, r, count) {
    push();
    translate(cx, cy);
    beginShape();
    for (var i = 0; i <= count; i ++) {
        var unit = 360 / count;
        var mr = r + map(sin(radians((millis() + 824 * i) / 6.1)), -1, 1, -60, 162);
        var x = mr * sin(radians(unit * i));
        var y = mr * cos(radians(unit * i));
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}