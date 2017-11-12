function setup() {
    createCanvas(500, 500);
    background(0);
}
function draw() {
    stroke(255);
    strokeWeight(3.0);
    //noise函数
    var x = width*noise(millis()/1000.0, 0.0);
    var y = height*noise(0.0, millis()/1000.0);
    point(x, y);
}