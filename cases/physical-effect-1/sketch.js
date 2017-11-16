var pos = {};
var v = {
	x: 2,
	y: 1
}
var a = {
	x: 0.2,
	y: 0.1
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
	fill(255);
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
		v.y = - (v.y * 0.9);
		a.y = 0;
	}
	if(pos.y - 15 <= 0) {
		pos.y = 0 + 15;
		v.y = - (v.y * 0.9);
		a.y = 0;
	}

	if (pos.x + 15 >= width) {
		pos.x = width - 15;
		v.x = - (v.x * 0.9);
		a.x = 0;
	}
	if(pos.x - 15 <= 0){
		pos.x = 15;
		v.x = - (v.x * 0.9);
		a.x = 0;
	}

}
