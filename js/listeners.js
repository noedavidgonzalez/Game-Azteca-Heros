addEventListener('keydown', function(e){
  console.log("Tecla", e.keyCode);
  if(e.keyCode === 38){
    aztecaHero.up()
  }
  if(e.keyCode === 40){
    aztecaHero.down()
  }
  if(e.keyCode === 39){
    aztecaHero.right()
  }
  if(e.keyCode === 37){
    aztecaHero.left()
  }
  if(e.keyCode === 32){
    aztecaHero.shoot();
  }
})