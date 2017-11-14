var CircleArr = [];
var count = 20;
var w = 1900;
var h = 800;
var step = 0.5;
var fangxiang = 1;

function setup() {
    createCanvas(w, h);
    for (var i = 0; i < count; i++) {
        this.pos = {
            x: random(w),
            y: random(h)
        };
        this.r = 30 +
            i * 10; //确保圆的直径最小为30
        this.c = color(random(255), random(255),
            random(255));
        this.msg = "circle" +
            i;
        this.msgColor = this.c;
        this.msgSize = 10 +
            i;
        CircleArr.push(new CustomCircle(this.pos, this.r, this.c, this.msg, this.msgColor, this.msgSize))
    }
}

function draw() {
    background(0);
    for (var i = 0; i < CircleArr.length; i++) {
        CircleArr[i].DrawTask();
    }
}

// 圆形类的属性
function CustomCircle(pos, r, c, msg, msgColor, msgSize) {
    this.pos = pos;
    this.r = r;
    this.c = c;
    this.msg = msg;
    this.msgColor = msgColor;
    this.msgSize = msgSize;
    this.msgFont = msgFont;
}

// 圆形类的方法
CustomCircle.prototype = {
    DrawTask: function () {
        this.DrawCircle();
        this.DrawText();
        this.ObjMove();
// this.ChangeSize();
// this.ChangeSize();
// this.ChangeColor();
    },
    DrawCircle: function () {
        stroke(this.c);
        strokeWeight(1);
        noFill()
        ellipse(this.pos.x, this.pos.y, this.r);
    },
    DrawText: function () {
        stroke(this.c);
        strokeWeight(1);
        textAlign(CENTER, CENTER);
        textSize(this.msgSize);
        text(this.msg, this.pos.x, this.pos.y);

    },
    ObjMove: function () {
        this.pos.x += step * fangxiang;
        if (this.pos.x > w) {
            fangxiang = -fangxiang;
        }
    },
    ChangeSize: function () {
    },
    ChangeColor: function () {
    },
    MouseDetect: function () {
    }
}

