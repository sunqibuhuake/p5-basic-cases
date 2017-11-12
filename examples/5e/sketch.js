function setup() {
    createCanvas(700, 700);
}
function draw() {
    background(0);
    noFill();
    colorMode(HSB);
    push();
    translate(width / 2, height / 2);
    var count = 40;
    for (var i = 1; i <= count; i = i + 1) {
        var r = 99 + 138 * noise((millis() + i * 2009) / 1800.0);
        var sw = 2 + 1 * noise((millis() + i) / 1800.0);
        var alpha = noise((millis() + i) / 1800.0);
        var hue01 = 200 * noise((millis() + i * 908) / 1800.0);
        var hue02 = 400 * noise((millis() + i * 620) / 4800.0);
        var unit = 360 / count;
        var vx = r * sin(radians(unit * i));
        var vy = r * cos(radians(unit * i));
        var lx = 55 * sin(radians(unit * i));
        var ly = (24 + map(sin(radians(millis() / 10.3)),
                -1, 1, -15, 15)) * cos(radians(unit * i));
        strokeWeight(sw);
        stroke(hue01 + hue02, 238, 238, alpha);
        line(lx, ly, vx, vy);
    }
    pop();
}