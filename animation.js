var c = document.getElementById("playground");
var circleButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var ctx = c.getContext("2d");
ctx.fillStyle = "#ffff00";

var rid;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0,0,500,500);
};

var circleAnime = function() {
    window.cancelAnimationFrame(rid);
    console.log(rid);
    
    var radius = 0;
    var change = -2;
    var xcor = c.width/2; var ycor = c.height/2;

    var drawDot = function() {
	console.log(rid)

	if (radius==0 || radius==xcor) {
	    change *= -1;
	}
	radius += change;
	
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.arc(xcor, ycor, radius, 0, 2*Math.PI);
	ctx.fill();	
	rid = window.requestAnimationFrame(drawDot);
    };
    drawDot();
};

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

var dvdAnime = function() {
    window.cancelAnimationFrame(rid);
    console.log(rid);    

    var xcor = randInt(0, c.width-80);
    var ycor = randInt(0, c.height-50);
    var dX = 1;
    var dY = 1;

    var drawdvd = function() {
	console.log(rid)

	if (xcor==0 || xcor==c.width-80) {
	    dX *= -1;
	}
	if (ycor==0 || ycor==c.height-50) {
	    dY *= -1;
	}

	xcor += dX;
	ycor += dY;

	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.fillStyle="#FF0000";
	ctx.fillRect(xcor, ycor, 80, 50);
	rid = window.requestAnimationFrame(drawdvd);
    };
    drawdvd();
};
    

var stopIt = function() {
    console.log(rid);
    window.cancelAnimationFrame(rid);
}

circleButton.addEventListener("click", circleAnime);
dvdButton.addEventListener("click", dvdAnime);
stopButton.addEventListener("click", stopIt);
