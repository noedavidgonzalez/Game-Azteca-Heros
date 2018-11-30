window.onload = function () {
  function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
    aztecaHero.draw() 
    gameOver()

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  function gameOver() {
    if(aztecaHero.y < 0 || aztecaHero.y > canvas.height - aztecaHero.height 
      || checkColition() ){
      clearInterval(interval)
      interval = 0
      ctx.font = "50px Arial";
      //ctx.fillText("Game Over",canvas.width/2,canvas.height/2);
    }
  }

  function createEnemy () {
    //enemy.draw()
    console.log('aún no')
  }

  startGame()
}