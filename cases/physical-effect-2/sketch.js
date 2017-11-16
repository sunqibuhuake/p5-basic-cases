// 白色小球位置
var pos = {};
// 绿色牵引绳单位长度能产生的拉力
var s = 1;
// 白色小球速度
var v = {
	x: 6,
	y: 3
}
// 白色小球加速度
var a = {
	x: 0,
	y: 0
}
function setup() {
	createCanvas(500, 500);
	pos = {
		x: width / 2,
		y: height / 2
	}
}
function draw() {
	background(0);
	// 绘制跟随鼠标的具有引力的小球
	fill(255, 0, 0);
	noStroke();
	// 跟随鼠标移动的引力球
	ellipse( mouseX, mouseY, 50, 50);
	// 牵引绳长度
	var length = dist(pos.x, pos.y, mouseX, mouseY);
	if (length <= 50)  {
		stroke(0,255, 0);
	} else {
		stroke(255, 0, 0);
	}
	line(pos.x, pos.y, mouseX, mouseY);

	var deltaX = mouseX - pos.x;
	var deltaY = mouseY - pos.y;
	a.x = (deltaX * s) / 1000;
	a.y = (deltaY * s) / 1000;

	// 绘制运动小球
	fill(255);
	noStroke();
	ellipse( pos.x, pos.y, 30, 30)


	// 先计算新的速度
	v.x = v.x + a.x;
	v.y = v.y + a.y;
	// 再计算由新速度改变的新位置
	pos.x = pos.x + v.x;
	pos.y = pos.y + v.y;

	// 如果y方向位置触底，速度反向
	// 动能 = 质量 x 速度

	if (pos.y + 15 >= height) {
		pos.y = height - 15;
		v.y = -v.y;
	}
	if(pos.y - 15 <= 0) {
		pos.y = 0 + 15;
		v.y = -v.y;
	}

	if (pos.x + 15 >= width) {
		pos.x = width - 15;
		v.x = - v.x;
	}
	if(pos.x - 15 <= 0){
		pos.x = 15;
		v.x = - v.x;
	}

}
