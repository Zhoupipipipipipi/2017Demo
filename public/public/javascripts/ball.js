let c = document.getElementById('ball');
let ctx = c.getContext('2d');
/* 小球类 */
class Ball {
    /* 构造器 */
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = 25
    }
    /* 绘制小球 */
    render() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

/* 会移动的小球类 继承小球 */
class MoveBall extends Ball{
    constructor(x, y, color){
        super(x, y, color)

        //量的变化
        this.dx = _.random(-5,5);
        this.dy = _.random(-5,5);
        this.dr = _.random(1,3);
    }

    upDate(){
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;
        if(this.r<0){
            this.r = 0;
        }
    }
}

let ballArr = [];
let colorArr = ['yellow','green','white','red','purple','pick']

/* 监听鼠标移动 */
c.addEventListener('mousemove', function(e){
    let ball = new MoveBall(e.offsetX,e.offsetY,colorArr[_.random(0,colorArr.length-1)]);
    ballArr.push(ball);
})
/* 开启定时器 */
setInterval(function(){
    //清屏
    ctx.clearRect(0,0,c.width,c.height);
    for (let i = 0; i < ballArr.length; i++) {
        ballArr[i].render();
        ballArr[i].upDate();
    }
},50)




