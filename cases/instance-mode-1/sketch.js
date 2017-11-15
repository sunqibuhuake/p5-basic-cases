// 普通模式下只绘制一个canvas时
// 可通过  parent() 方法来设定父元素
function setup() {
    var cnv = createCanvas(300, 300);
    cnv.parent('canvas-container');
}
function draw() {
    background(255);
    fill(0);
    ellipse(width / 2, height / 2, 100, 100);

}