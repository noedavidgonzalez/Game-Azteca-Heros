function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src='images/Background.jpg'
  this.img.onload = function(){ 
    this.draw()
  }.bind(this)
  this.move = function () {
    this.x--
    if(this.x < -canvas.width) this.x = 0;
  }
  this.draw = function(){
    ctx.fillStyle='blue';
    ctx.fillRect(0,0,canvas.width, canvas.height) 
  }
 }

 function AztecaHero(){
  this.x = 100;
  this.y = canvas.height/2;
  this.width = 50; 
  this.height = 50; 
  this.img = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/flappy.png'
  this.img.onload = function(){
   this.draw()
  }.bind(this)
  this.up = function(){
   this.y -=  20
  }
  this.down = function(){
   this.y +=  20
  }
  this.left = function(){
   this.x -=  20
  }
  this.right = function(){
   this.x +=  20
  }
  this.draw = function () {
   //this.y++
   ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
 }

 function Enemi(){
  this.x = 0;
  this.x = 0;
  this.width =50;
 }