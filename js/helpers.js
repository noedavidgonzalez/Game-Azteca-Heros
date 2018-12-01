function checkColition() {
	demons.forEach(function(demon){
		if(demon.isTouching()){
			console.log(""); 
		}
	});

}



function generateShoot(x,y){
	console.log("Genera disparo", x,y);
	let shoot= new ShootAzteca(x,y);
	console.log("shoot: ",shoot.x, shoot.y)
	shots.push(shoot);
}

function generateDemon(){
	console.log("Genera demon");
	let demon= new Demon();
	demons.push(demon);
}

function drawShoots(){
	console.log("Dibuja las balas del arreglo");
	shots.forEach(function(shoot){
		shoot.draw();
	})
}

function drawDemons(){
	console.log("Dibuja los demonios")
	demons.forEach(function (demon){
		demon.draw();
	});
}

function gameOver() {
	if(aztecaHero.y < 0 || aztecaHero.y > canvas.height - aztecaHero.height 
	  || checkColition() ){
	  clearInterval(interval)
	  interval = 0;
	  ctx.font = "50px Arial";
	  ctx.fillText("Fin",canvas.width/2,canvas.height/2);
	}
}