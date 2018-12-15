
function setup(){ // setup de canvas
  frameRate(40);  
}

var render= function(){
  frames++; 
  if (board.ready)
    board.draw();
  if(eart.ready)
    eart.draw();
  if(player1.ready){
     player1.draw(); 
    player1.drawLife();
  }
  if(player2.active && player2.ready){
    player2.draw();  
    player2.drawLife();
  }
  drawShoots();
  drawDemons();
  gameOver();

  // Score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "20px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Demons destroyed Quetzalcoatl: " + player1.score, 160, 10);

  // Score p2
  if(player2.active){
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "20px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Demons destroyed Tlaloc: " + player2.score, 160, canvas.height-25);
  }
};

var reset = function () { 
  frames=0;

  player2.active=false;

  player1.x = 200;
  player1.y = (canvas.height/2)-(player1.height/2) -(player2.active?player2.height:0);

 
  player2.x = 200;
  player2.y = (canvas.height/2)+(player1.height/2);

  generateDemon();
  generateDemon();
  generateDemon();
};

var update = function (modifier) {
  if (38 in keysDown) {
    player1.up(modifier);
  }
  if (40 in keysDown) { 
    player1.down(modifier);
  }
  if (37 in keysDown) {   
    player1.left(modifier);
  }
  if (39 in keysDown) {  
    player1.right(modifier);
  }

if(player2.active){
  if (87 in keysDown) {   
    player2.up(modifier);
  }
  if (90 in keysDown) { 
    player2.down(modifier);
  }
  if (65 in keysDown) {   
    player2.left(modifier);
  }
  if (83 in keysDown) {  
    player2.right(modifier);
  }
}

}

var then;
// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;
};


function startGame(){
  // Let's play
  reset();
   then= Date.now();
  setInterval(main, 1); // Execute as fast as possible
}
