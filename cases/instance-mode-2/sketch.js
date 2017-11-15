
// @param shape String 指定绘制的形状
// @param container String 画布的父元素ID
function drawShape( shape, container ) {
	//根据ID 获取父元素，并存储
	var elem = document.getElementById(container)
	//获取父元素的宽高数据
	var w = elem.offsetWidth;
	var h = elem.offsetHeight;
	console.log(w, h);

	// 绘制函数
	function func(p) {
		p.setup = function() {
			p.createCanvas(w,h);
		}
		p.draw = function() {
			p.background(0);
			p.fill(255);
			p.noStroke();
			if(shape == 'circle') {
				p.ellipse(p.width / 2, p.height / 2, p.width / 2, p.height / 2);
			}
			if(shape == 'rect') {
				p.rectMode(p.CENTER);
				p.rect(p.width / 2, p.height / 2, p.width / 2, p.height / 2);
			}



		}
		p.windowResized = function() {
			var w = elem.offsetWidth;
			var h = elem.offsetHeight;
			p.resizeCanvas(w, h);
			console.log('resized')
		}
	}
	new p5(func, container)
}

drawShape('rect', 'canvas-container-1');
drawShape('circle', 'canvas-container-2');
drawShape('rect', 'canvas-container-3');
