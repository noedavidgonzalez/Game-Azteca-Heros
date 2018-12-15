function checkColition() {
	demons.forEach(function(demon){
		if(demon.isTouching(player1) && demon.active){
			console.log("Demon toca a player1"); 
			//programar evento destroy del azteca
			player1.life-=10;
			demon.destroy();
			generateDemon();
		}
		if(demon.isTouching(player2) && demon.active){
			console.log("Demon toca a player2"); 
			//programar evento destroy del azteca
			player2.life-=10;
			demon.destroy();
			generateDemon();
		}
		shotsP1.forEach(function(shoot){
			if(demon.active &&  shoot.active && shoot.isTouching(demon)){
				console.log("shoot P1 pega a demon"); 
				demon.destroy();
				shoot.destroy();
				player1.addScore(1);
				for(let a=1;a<=(Math.floor((Math.random() * 2)+1));a++)
				generateDemon();
			}
		});
		shotsP2.forEach(function(shoot){
			if(demon.active &&  shoot.active && shoot.isTouching(demon)){
				console.log("shoot P2 pega a demon"); 
				demon.destroy();
				shoot.destroy();
				player2.addScore(1);
				for(let a=1;a<=(Math.floor((Math.random() * 2)+1));a++)
				generateDemon();
			}
		});
	});
	
}

function generateShootP1(x,y){ 
	let shoot= new ShootAzteca(x,y); 
	shotsP1.push(shoot);
}

function generateShootP2(x,y){ 
	let shoot= new ShootAzteca(x,y); 
	shotsP2.push(shoot);
}

function generateDemon(){
	console.log("Genera demon");
	let demon= new Demon();
	demons.push(demon);
}

function drawShoots(){
	
	shotsP1.forEach(function(shoot){
		shoot.draw();
	})
	shotsP2.forEach(function(shoot){
		shoot.draw();
	})
}

function drawDemons(){
	
	demons.forEach(function (demon){
		demon.draw();
		
	});
}

function gameOver() {
	if(player1.y < 0 || player1.y > canvas.height - player1.height 
	  || checkColition() ){
	  clearInterval(interval)
	  interval = 0;
	  ctx.font = "50px Arial";
	  ctx.fillText("Game Over",canvas.width/2,canvas.height/2);
	}
	if(player1.life==0){
		interval = 0;
		ctx.font = "50px Arial";
		ctx.fillText("Game Over",canvas.width/2,canvas.height/2);
		delta=0;
	}
	
}

function drawRotatedImage(image, x, y, angle) {  
  ctx.save(); 
  ctx.translate(x, y); 
  ctx.rotate(angle * TO_RADIANS); 
  ctx.drawImage(image, -(image.width/2), -(image.height/2)); 
  ctx.restore(); 
  }