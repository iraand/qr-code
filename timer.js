window.requestAnimFrame = (function () {
 return (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (/* function */ callback) {
   window.setTimeout(callback, 1000 / 60);
  }
 );
})();

var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

canvas.width = 68;
canvas.height = 68;

var particle_count = 1,
 particles = [],
 radius = 34,
 marginHeight = radius,
 marginWidth = radius,
 iIncr = 0,
 color = "#8FD0FF";
function Particle(radius, y, x, lineWidth) {
 this.radius = radius;
 this.x = x;
 this.y = y;
 this.color = color;
 this.lineWidth = lineWidth;

 this.move = function () {
  var dateDev = new Date();

   var unite  = dateDev.getSeconds() + (dateDev.getMilliseconds()/1000);
   var diviseur = 30;
   var texte = unite;
  context.closePath();

  context.beginPath();

  context.fillStyle = "#FFF";
  context.arc(34, 34, 20, 0, Math.PI * 2);
  context.fill();
  context.closePath();
  context.beginPath();
  context.globalCompositeOperation = "source-over";
  context.globalCompositeOperation = "destination-over";
  context.lineWidth = this.lineWidth;
  context.fill();
  context.fillStyle = this.color;
  context.strokeStyle = this.color;

  context.arc(
    this.x,
    this.y,
    this.radius,
    Math.PI * 1.5,
    Math.PI * (unite / diviseur) + Math.PI * 1.5,
    true
   );
   context.lineTo(this.x, this.y);
   context.fill();
 };
}

var particle = new Particle(75, marginHeight, marginWidth, 5);
marginHeight = marginHeight + radius * 2;
marginWidth = radius;


function animate() {
 context.clearRect(0, 0, canvas.width, canvas.height);

 particle.move();

 requestAnimFrame(animate);
}

animate();
