var canvas = document.querySelector('canvas')
var nav = document.querySelector('nav')

var ch = window.innerHeight-(window.innerHeight/2);
canvas.width = window.innerWidth;
canvas.height = ch;

var c = canvas.getContext('2d');

// for(var i=0;i<100;i++){
//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }

var mouse ={
    x:undefined,
    y:undefined
}

var maxRad = 40;

var colorArray = [
    '#e0cc70',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#29B0B9',
];

window.addEventListener('resize',function(){
    var ch = window.innerHeight-(window.innerHeight/2);
    canvas.width = window.innerWidth;
    canvas.height = ch;

    init();

})

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

function Circle(x,y,dx,dy,rad){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.minRad = rad;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function(){
        if (this.x + this.rad>innerWidth || this.x - this.rad<0)
        this.dx=-this.dx;
        if (this.y + this.rad>ch || this.y - this.rad<0)
        this.dy=-this.dy;
        this.x+=this.dx;
        this.y+=this.dy;

        //===interactivity===

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y -this.y < 50 && mouse.y - this.y > -50){
            if(this.rad<maxRad)
                this.rad +=1;
        }
        else if(this.rad > this.minRad)
            this.rad -=1;
        this.draw();
    }

}

var circleArray = [];

function init(){

    circleArray = [];
    for (var i=0;i<800;i++){

        var rad = Math.random()*3 + 1;
        var x = Math.random()*(innerWidth-2*rad)+rad;
        var y = Math.random()*(ch-2*rad)+rad;
        var dx = (Math.random()-0.5)*2;
        var dy = (Math.random()-0.5)*2;

        circleArray.push(new Circle(x, y, dx, dy,rad));

    }
}

function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i=0;i<circleArray.length;i++){

        circleArray[i].update()

    }

}

init();
animate();