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
function CustomCircle(radius, c, text, pos) {
    this.radius = radius
    this.c = c
    this.text = text
    this.pos = pos
    // 非传入属性
    this.delta = random(0.02)
    this.t = random(10);
    // 预设当前未被鼠标悬浮
    this.isHover = false;
}

// js 原型链知识
CustomCircle.prototype = {
  draw: function() {
    this.drawCircle()
    this.drawText()
    this.move()
  },
  drawCircle: function() {
    stroke(this.c)
    strokeWeight(4)
    this.currentRadius = (this.radius / 2 + this.radius / 2  * noise(this.t));
    // console.log(d);
    ellipse( this.pos.x, this.pos.y, this.currentRadius * 2, this.currentRadius * 2);
  },
  drawText: function() {
    textSize(12)
    textAlign(CENTER, CENTER)
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

    // dist()函数获取两点间距
    // 与当前半径(this.currentRadius)判断

  }
}


