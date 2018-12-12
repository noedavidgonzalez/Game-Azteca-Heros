let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let aztecaHero = new AztecaHero();
let board= new Board(); 
let demons= [], shots =[];
let interval, frames = 0;
let keysDown = {}, gravity, fireworks = [];