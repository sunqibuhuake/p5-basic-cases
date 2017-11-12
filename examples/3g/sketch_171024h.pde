void setup() {
  size(500, 500);
}
void draw() {
  background(0, 0);
  float r = 100;
  float cx = width/2;
  float cy = height/2;
  noFill();
  stroke(255);
  strokeWeight(7.0);
  beginShape();
  for (float i = 0.0; i<=360.0; i=i+60.0) {
    float rad = radians(i);
    float x = cx+r*sin(rad);
    float y = cy+r*cos(rad);
    vertex(x, y);
  }
  endShape(CLOSE);
}