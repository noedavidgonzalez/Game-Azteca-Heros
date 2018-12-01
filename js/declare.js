let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let aztecaHero = new AztecaHero();
let board= new Board();
let demon = new Demon();
let shootAzteca = new ShootAzteca(50,50);
let demons= [], shots =[];
let interval, frames = 0; 

