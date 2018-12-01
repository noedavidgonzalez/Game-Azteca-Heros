window.onload = function () {
  function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    board.draw();
    aztecaHero.draw();   
    drawShoots();
    drawDemons();
    gameOver();
  }

  function startGame(){
    interval = setInterval(update, 1000/60);
    generateDemon();
    generateDemon();
    generateDemon(); 
  }

  startGame()
}