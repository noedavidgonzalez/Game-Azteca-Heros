function Board() {
  this.ready=false;
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src='images/Background.jpg'
  this.img.onload = function(){ 
    this.ready=true; 
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
  this.ready=false;
  this.speed=256 // movement in pixels per second
  this.score=0;
  this.x = 100;
  this.y = canvas.height/2;
  this.width = 30;
  this.height = 30;
  this.img = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/flappy.png'
  this.img.onload = function(){
    this.ready=true; 
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
  this.addScore = function (score){
    this.score+=score;
  }
}

function Demon(){
  this.active= true;
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
    if(this.active){
      this.x--;
      ctx.fillStyle='black';
      if(this.x == 0) {
        console.log('Enemigo llega a y=0');
        this.x = Math.floor(Math.random() * ((canvas.width- this.width) - 550+1)+550);
        this.y = Math.floor(Math.random() * (canvas.height-this.height));
      }
      ctx.fillRect(this.x,this.y,this.width, this.height);
      console.log("Dibuja los demonios");
    }
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
  this.destroy = function(){
    this.active= false;
  }
}

function ShootAzteca(x,y){
  this.active=true;
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
    
  
    if(this.active && this.x<canvas.width){ 
        this.x++; // Revisar como aumentar la velocidad con forme avance el disparo
        ctx.fillStyle ="red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        console.log("Dibuja las balas del arreglo: ", this.active, this.x, this.y,canvas.width);
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

function Explosion(){
  this.hue = random(255);
  this.firework = new Particle(random(width), height, this.hue, true);
  this.exploded = false;
  this.particles = [];
  
  this.done = function(){
    if(this.exploded && this.particles.length === 0){
      return true;
    }
    else {
      return false;
    }
  }
  this.update = function(){
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      if(this.firework.vel.y >= 0){
        this.exploded = true;
        this.explode();
      }
    } 
    for(var i = this.particles.length-1; i >= 0; i--){
      this.particles[i].applyForce(gravity);
      this.particles[i].update();  
      if(this.particles[i].done()){
        this.particles.splice(i, 1);
      }
    }
  }
  this.explode = function(){
    for(var i = 0; i < 100; i++){
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false);
      this.particles.push(p);
    }
  }
  this.show = function(){
    if(!this.exploded){
      this.firework.show();
    }
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].show();
    }
  }
}

//function for individual paarticles
function Particle(x, y, hue, firework){
  //position
  this.pos = createVector(x, y);
  //variable to store seed firework
  this.firework = firework;
  //lifespan of exploding particles
  this.lifespan = 255;
  this.hue = hue;
  if(this.firework){
    //velocity of individual fireworks
    this.vel = createVector(0, random(-18, -10));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(5, 15));
  }
  //acceleration 
  this.acc = createVector(0, 0);
  this.applyForce = function(force){
    this.acc.add(force);
  }
  this.update = function(){
    if(!this.firework){
       this.vel.mult(0.85);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  this.done = function(){
    if(this.lifespan < 0){
      return true;
    }
    else {
      return false;
    }
  }
  this.show = function(){
    colorMode(HSB);
    if(!this.firework){
      strokeWeight(2);
      stroke(hue, 255, 255, this.lifespan)
    }
    else {
      strokeWeight(4);
      stroke(hue, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}
