
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
  if (32 == e.keyCode) { // Player shot
    aztecaHero.shoot();
  }
});

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
});