window.onload = function () { 
  
   }

  

function setup(){ // setup de canvas
   
  frameRate(40); 
  gravity = createVector(0, 0.2); 
}

var render= function(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (board.ready) {
    board.draw();
  }
  if (aztecaHero.ready) {
    aztecaHero.draw();
  }
  drawShoots();
  drawDemons();
  gameOver();

  // Score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Demons destroyed: " + aztecaHero.score, 10, 10);
};

var reset = function () { 
  aztecaHero.x = 100;
  aztecaHero.y = canvas.height/2;
  generateDemon();
  generateDemon();
  generateDemon();
};

var update = function (modifier) {
  if (38 in keysDown) {  
    aztecaHero.y -= aztecaHero.speed * modifier;
  }
  if (40 in keysDown) {  
    aztecaHero.y += aztecaHero.speed * modifier;
  }
  if (37 in keysDown) {  
    aztecaHero.x -= aztecaHero.speed * modifier;
  }
  if (39 in keysDown) { 
    aztecaHero.x += aztecaHero.speed * modifier;
  }

}

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;
};



// Let's play
reset();
var then = Date.now();
setInterval(main, 1); // Execute as fast as possible