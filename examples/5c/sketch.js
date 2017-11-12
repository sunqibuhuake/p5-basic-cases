function setup() {
    createCanvas(700, 700);
}
function draw() {
    background(0);
    noStroke();
    colorMode(HSB);
    for (var i = 10; i<width-4; i=i+39) {
        for (var j = 10; j<height-5; j=j+41) {
            var x = 18*noise((millis()+i*j)/1800.0, 0.0);
            var y = 18*noise(0.0, (millis()+i*j)/1800.0);
            var r = 15*noise((millis()+i*j)/1800.0);
            var alpha = noise((millis()+i*j)/1800.0);
            var hue01 = 200*noise((millis()+i*j)/1800.0);
            var hue02 = 400*noise((millis()+i*j)/4800.0);
            fill(hue01+hue02, 99, 99, alpha);
            ellipse(i+x, j+y, r+15, r+15);
        }
    }
}