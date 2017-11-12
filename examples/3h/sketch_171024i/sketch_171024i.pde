void setup() {
  size(500, 500);
}

void draw() {
  background(0);
  float deg = millis()/10.1;
  float rad = radians(deg);
  float pingPong = sin(rad);
  float r = map(pingPong, -1.0, 1.0, 0.0, 100.0);
  fill(255);
  ellipse(width/2, height/2, r, r);
}