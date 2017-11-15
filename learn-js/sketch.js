// 全局变量
var arr = []
var count = 10

function setup() {
  createCanvas(500, 500)
  noFill()
  // 实例化操作放在setup 函数中
  for (var i = 0; i < count; i++) {
    var c = color(random(255), random(255), random(255))
    var pos = {
      x: random(width),
      y: random(height)
    }
    var cc = new CustomCircle(40, c, 'circle' + i, pos)
    // arr[i] = cc
    arr.push(cc)
  }

    $('#btn').click( function() {
      arr.forEach(function(elem) {
        elem.radiusInc()
      })
    })

}
function draw() {
  background(0)

  // 第一种 for 循环
  // i < arr.length
  // for (var i = 0 i < arr i++) {
  //   console.log(arr[i])
  //   arr[i].draw()
  // }

  // forEach 迭代
  arr.forEach(function(element, index) {
    // console.log(index)
    element.draw()
  })

  // map 迭代
  // arr.map(function(element) {
  //   element.draw()
  // })
}


// CustomCirlce Class
function CustomCircle(originRadius, c, text, pos) {
    this.originRadius = originRadius
    this.c = c
    this.text = text
    this.pos = pos
    // 非传入属性
    this.delta = random(0.003) + 0.002
    this.t = random(10);
    // 预设当前未被鼠标悬浮
    this.isHover = false;
}

// js 原型链知识
CustomCircle.prototype = {
  draw: function() {
    this.drawCircle()
    // 执行鼠标检测 改变this.isHover 状态值
    this.mouseDetect();
    this.drawText()
    this.move()
  },
  drawCircle: function() {
    noFill();
    stroke(this.c)
    strokeWeight(4)
    this.currentRadius = (this.originRadius / 2 + this.originRadius / 2  * noise(this.t));
    // console.log(d);
    ellipse( this.pos.x, this.pos.y, this.currentRadius * 2, this.currentRadius * 2);
  },
  drawText: function() {
    textSize(12)
    textAlign(CENTER, CENTER)
    if(this.isHover) {
      fill(255);
    } else {
      fill(this.c);
    }
    strokeWeight(1)
    text(this.text, this.pos.x, this.pos.y)
  },
  move: function() {
    this.pos.x = noise(this.t) * width;
    this.pos.y = noise(this.t + 5) * height;
    this.t += this.delta;
  },
  radiusInc: function() {
    this.radius += 2
  },
  mouseDetect: function() {

    // 圆心坐标
    var cx = this.pos.x;
    var cy = this.pos.y;

    // 鼠标在画布的坐标
    var mx = mouseX;
    var my = mouseY;

    var distance = dist(cx, cy, mx, my);
    if(distance > this.currentRadius) {
      this.isHover = false;
    } else {
      this.isHover = true;
    }

    // dist()函数获取两点间距
    // 与当前半径(this.currentRadius)判断

  }
}
