function checkColition() {
	demons.forEach(function(demon){
		if(demon.isTouching(aztecaHero) && demon.active){
			console.log("Demon toca a azteca"); 
			//programar evento destroy del azteca
		}
		shots.forEach(function(shoot){
			if(demon.active &&  shoot.active && shoot.isTouching(demon)){
				console.log("shoot pega a demon"); 
				demon.destroy();
				shoot.destroy();
				aztecaHero.addScore(10);
				generateDemon(); 
				//shots.splice(shoot, 1);
				console.log(shoot)
			}
		});
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
	
	shots.forEach(function(shoot){
		shoot.draw();
	})
}

function drawDemons(){
	
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