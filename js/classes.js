function Board() {
  this.ready=false;
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src='images/fondo.png'
  this.img.onload = function(){ 
    this.ready=true; 
  }.bind(this)
  this.move = function () {
    //console.log("frames:",frames, frames)
    this.x=frames%2?this.x-0.3:this.x;
    if(this.x < -canvas.width) this.x = 0;
  }
  this.draw = function(){ 
    this.move()
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
}
function Eart() {
  this.ready=false;
  this.y = canvas.height/2
  this.x = 3
  this.radius=255
  this.angle=0;
  this.width = canvas.width/2
  this.height = canvas.height/2
  this.img = new Image()
  this.img.src='images/eart.png'
  this.img.onload = function(){ 
    this.ready=true; 
  }.bind(this)
  this.draw = function(){       
      this.angle+= 0.019;
      drawRotatedImage(this.img,-250,canvas.height/2,this.angle);
  }
}
function QuetzalcoatlHero(){
  this.ready=false;
  this.speed=256 
  this.score=0;
  this.x = 100;
  this.y = canvas.height/2;
  this.width = 100;
  this.height = 100;
  this.img = new Image()
  this.img.src = 'images/quetzal.png'
  this.img.onload = function(){
    this.ready=true; 
  }.bind(this)
  this.up = function(modifier){
    if(this.y-(this.speed * modifier) <0 ) this.y=0;
    else this.y-=(this.speed * modifier);
  }
  this.down = function(modifier){
    if(this.y+this.height+(this.speed * modifier) >= canvas.height ) this.y= canvas.height - this.height;
    else this.y+=(this.speed * modifier);
  }
  this.left = function(modifier){
    if(this.x-(this.speed * modifier) <= 0) this.x= 0;
    else this.x-=this.speed * modifier;
  }
  this.right = function(modifier){
    if(this.x+this.width+(this.speed * modifier) >= canvas.width) this.x= canvas.width - this.width;
    else this.x+=this.speed * modifier;
  }
  this.draw = function (){ 
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
  }
  this.shoot = function (){
    console.log("aztecaShoot",this.x, this.y);
    generateShootP1(this.x+ this.width, this.y+ (this.height/2));
  }
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
  this.addScore = function (score){
    this.score+=score;
  }
  this.life=100;
  this.drawLife = function(){
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle="white";
    ctx.rect(489,11,202,15);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle="#4CAE51";
    ctx.fillRect(490,10,this.life*2,16);
  }
}
function TlalocHero(){
  this.active=false;
  this.ready=false;
  this.speed=256 // movement in pixels per second
  this.score=0;
  this.x = 100;
  this.y = canvas.height/2;
  this.width = 100;
  this.height = 100;
  this.img = new Image()
  this.img.src = 'images/tlaloc.png'
  this.img.onload = function(){
    this.ready=true; 
  }.bind(this)
  this.up = function(modifier){
    if(this.y-(this.speed * modifier) <0 ) this.y=0;
    else this.y-=(this.speed * modifier);
  }
  this.down = function(modifier){
    if(this.y+this.height+(this.speed * modifier) >= canvas.height ) this.y= canvas.height - this.height;
    else this.y+=(this.speed * modifier);
  }
  this.left = function(modifier){
    if(this.x-(this.speed * modifier) <= 0) this.x= 0;
    else this.x-=this.speed * modifier;
  }
  this.right = function(modifier){
    if(this.x+this.width+(this.speed * modifier) >= canvas.width) this.x= canvas.width - this.width;
    else this.x+=this.speed * modifier;
  }
  this.draw = function (){ 
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
  }
  this.shoot = function (){ 
    generateShootP2(this.x+ this.width, this.y+ (this.height/2));
  }
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
  this.addScore = function (score){
    this.score+=score;
  }
  this.life=100;
  this.life=100;
  this.drawLife = function(){
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle="white";
    ctx.rect(489,canvas.height-15,202,15);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle="#4CAE51";
    ctx.fillRect(490,canvas.height-15,this.life*2,16);
  }
}
function Demon(){
  this.active= true;
  this.width =50;
  this.height= 40;
  this.speed=Math.random();
  this.x = Math.floor(Math.random() * ((canvas.width- this.width) - canvas.width+1)+canvas.width);
  this.y = Math.floor(Math.random() * (canvas.height-this.height));
  this.img = new Image();
  this.img.src = ('images/demon'+(Math.floor((Math.random() * 3)+1))+'.png')
  this.img.onload= function () {
    this.draw();
  }.bind(this);
  this.draw = function (){
    if(this.active){
      this.x=frames%2?this.x-(this.speed):this.x; 
      ctx.fillStyle='black';
      if(this.x <= 0) { 
        player1.life-=10;
        if(player2.active)
          player2.life-=10;
        this.x = Math.floor(Math.random() * ((canvas.width- this.width) - canvas.width+1)+canvas.width);
        this.y = Math.floor(Math.random() * (canvas.height-this.height));
      } 
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
  this.destroy = function(){
    this.active= false;
  }
}

function ShootAzteca(x,y){
  this.active=true;
  this.width= 15;
  this.height= 5;
  this.x = x;  
  this.y = y;  
  this.img = new Image();
  this.img.src= '';
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function (){
  if(this.active && this.x<canvas.width){ 
    this.x++;  
    ctx.fillStyle ="red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }else{
    this.destroy();
  }
  }
  this.isTouching = function (pipe) {
   return (this.x < pipe.x + pipe.width)  &&
          (this.x + this.width > pipe.x)  &&
          (this.y < pipe.y + pipe.height) &&
          (this.y + this.height > pipe.y)
  }
  this.destroy = function(){
    this.active= false;
  }
}
