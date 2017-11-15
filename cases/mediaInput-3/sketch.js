var img = null;
// 存储所有的黑色坐标 一共九千多个
var particlePosArr =[];

var keyParticles = [];

function preload() {
	img = loadImage('http://oojq4xaei.bkt.clouddn.com/p5-500px.png');

}
function setup() {
	frameRate(30)
	createCanvas(500, 500);
	pixelDensity(1);
	image(img, 0, 0);
	loadPixels();
	// pixels 数组有一百万个元素，因为原图分辨率500 * 500， 每个像素点有rgba 四个值
	for(var y = 0; y < img.height; y++) {
		for(var x = 0; x < img.width; x ++) {
			var r = pixels[ (img.width * y + x) * 4 + 0];
			var g = pixels[ (img.width * y + x) * 4 + 1];
			var b = pixels[ (img.width * y + x) * 4 + 2];
			var a = pixels[ (img.width * y + x) * 4 + 3];
			// console.log(x,y);
			if(r == 0 && g == 0 && b == 0) {
				particlePosArr.push({
					x: x,
					y: y
				})
			}
		}
	}

	particlePosArr.forEach(function(obj) {
		if(random(1) < 0.1) {
			var x = random(width);
			var y = random(height);
			var p  = new Particle(x, y, obj.x, obj.y)
			keyParticles.push(p);
		}
	})

	// noLoop();
}
function draw() {

	var count = 0;
	background(0);
	keyParticles.forEach(function(p) {

		p.draw();

	})

	console.log(count)
}

function Particle(x1, y1, x2, y2) {
	this.originPos = {
		x: x1,
		y: y1
	}
	// var name = 'tom';
	// var people = {
	// 	name: 'tom',
	// 	age: 25
	// }
	this.finalPos = {
		x: x2,
		y: y2
	}
	this.amt = random(0.5);
	this.color = color(random(255), random(255), random(255), random(255));
	this.d = random(8);
}
Particle.prototype = {
	move: function() {
		var x = lerp(this.originPos.x, this.finalPos.x, this.amt)
		this.originPos.x = x;
		var y = lerp(this.originPos.y, this.finalPos.y, this.amt)
		this.originPos.y = y;
	},
	draw: function() {
		fill(this.color);
		noStroke();
		ellipse(this.originPos.x, this.originPos.y, this.d, this.d)
		this.move()
	},
	className: 'Particle',


}
