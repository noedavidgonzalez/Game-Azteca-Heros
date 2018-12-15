
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
  if (32 == e.keyCode) { // Player1 shot
    player1.shoot();
  }
  if (player2.active && 68 == e.keyCode ) { // Player2 shot
    player2.shoot();
  } 
});

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
});