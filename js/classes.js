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
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }
 }

 function AztecaHero(){
  this.x = 100;
  this.y = canvas.height/2;
  this.width = 30; 
  this.height = 30; 
  this.img = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/flappy.png'
  this.img.onload = function(){
   this.draw()
  }.bind(this)
  this.up = function(){
    if(this.y-20<0) this.y=0;
    else this.y -= 20;
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
    //ctx.fillStyle='black';
    //ctx.fillRect(this.x,this.y,this.width, this.height) 
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

 function Enemy(){
  this.width =50;
  this.height= 50;
  this.x = canvas.width-this.width;
  this.y = canvas.height/2;
  this.img = new Image();
  this.img.src = '';
  this.img.onload= function () {
    this.draw();
  }.bind(this);
  this.draw = function (){
    this.x--;
    ctx.fillStyle='black';
    ctx.fillRect(this.x,this.y,this.width, this.height) 
  }
  this.up = function(y){
   this.y -=  20;
  }
  this.down = function(y){
   this.y +=  20;
  }
  this.left = function(x){
   this.x -=  20;
  }
  this.right = function(x){
   this.x +=  20;
  }
 }