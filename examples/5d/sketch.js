var polygons = [];
function setup() {
    createCanvas(700, 700);
    for( var i = 0; i <= 20; i++) {
        var cx = width / 2;
        var cy = height / 2;
        var c = color(255, 255, 255);
        var r = i * 10;
        var count = 20;
        polygons.push(new CustomPolygon(cx, cy, r, c, count));
    }
}
function draw() {
    background(0);
    for (var i = 0; i < polygons.length; i++) {
        var instance = polygons[i];
        if(!instance.isInside(mouseX, mouseY)) {
            instance.drawPolygon();
        }
    }
}

// 构造函数
function CustomPolygon(cx, cy, r, c, count) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.count = count;
    this.color = c;
}

// 原型链
CustomPolygon.prototype = {
    drawPolygon: function () {
        strokeWeight(3);
        stroke(this.color);
        noFill();
        push();
        translate(this.cx, this.cy);
        beginShape();
        for (var i = 1; i <= this.count; i = i + 1) {
            var unit = 360 / this.count;
            var x = this.r * sin(radians(unit * i));
            var y = this.r * cos(radians(unit * i));
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    },
    isInside: function(x, y) {
        var dst = dist( x, y, this.cx, this.cy);
        if (dst < this.r) {
            return true;
        } else {
            return false;
        }
    }
}


// 构造函数
function Book( title, price, author) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.init();
}

Book.prototype = {
  getAuthor: function() {
    return this.author;
  },
  getPrice: function() {
    return this.price;
  },
  init: function() {
    this.id = Math.random(); // random(1)
  }
}

var mybook = new Book('abc', 23, 'Tom');

console.log(mybook.getAuthor());
