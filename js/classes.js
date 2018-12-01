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
    if(this.y-this.height <0 ) this.y=0;
    else this.y -= 20;
  }
  this.down = function(){
    if(this.y+this.height >= canvas.height ) this.y= canvas.height - this.height;
    else this.y +=  20;
  }
  this.left = function(){
    if(this.x-this.width <= 0) this.x= 0;
    else this.x -=  20; 
  }
  this.right = function(){
    if(this.x+this.width >= canvas.width) this.x= canvas.width - this.width;
    else this.x += 20;
  }
  this.draw = function (){
    //ctx.fillStyle='white'; 
    //ctx.fillRect(this.x,this.y,this.width, this.height); 
    //this.y++;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
  }
  this.shoot = function (){
    console.log("aztecaShoot",this.x, this.y);
    generateShoot(this.x+ this.width, this.y+ (this.height/2));
  }
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
 }

 function Demon(){
  this.width =50;
  this.height= 50;
  this.x = Math.floor(Math.random() * ((canvas.width- this.width) - 750+1)+750);
  this.y = Math.floor(Math.random() * (canvas.height-this.height));
  this.img = new Image();
  this.img.src = '';
  this.img.onload= function () {
    this.draw();
  }.bind(this);
  this.draw = function (){

    this.x--;
    ctx.fillStyle='black';
    if(this.x == 0) {
      console.log('Enemigo llega a y=0');
      this.x = Math.floor(Math.random() * ((canvas.width- this.width) - 550+1)+550);
      this.y = Math.floor(Math.random() * (canvas.height-this.height));
    }
    ctx.fillRect(this.x,this.y,this.width, this.height);
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
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
 }

 function ShootAzteca(x,y){
  this.width= 15;
  this.height= 5;
  this.x = x; //posicion x de donde dispara el Azteca 
  this.y = y; //posicion y de donde dispara el Azteca menos el height/2 para simular el centro del azteca
  this.img = new Image();
  this.img.src= '';
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function (){
    if(x<canvas.width){
      this.x++; // Revisar como aumentar la velocidad con forme avance el disparo
    ctx.fillStyle ="red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
 }