let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
   
let aztecaHero = new AztecaHero();
let board= new Board();
let enemy= new Enemy();
let interval, frames = 0;
 