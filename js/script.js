var img = new Image();
img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

var imgObj = new Image()
imgObj.src='images/Background.jpg';

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //backgroundImage.draw();
  //ctx.drawImage(imgObj,0,0,canvas.width, canvas.height);
  ctx.fillStyle='blue';
  ctx.fillRect(0,0,canvas.width, canvas.height)
  requestAnimationFrame(updateCanvas);
}

function diosAzteca(name, health, strength) {
  this.name;
  this.health=health;
  this.strength=strength;
  this.attack= function (){
    return this.strength;
  }
  this.receiveDamage=function(damage){
    this.health -= damage;
  }
  this.move= function() {
    this.x += this.speed;
    this.x %= canvas.width;
  }
  this.draw= function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  }
}
 
window.onload=function(){
  updateCanvas();
}
