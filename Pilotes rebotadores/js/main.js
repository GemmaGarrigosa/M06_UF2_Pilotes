import {Pilota} from "./pilota.js";

// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


let arrayPilotes = new Array(25); //creem array de 25 pilotes

function loop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < arrayPilotes.length; i++) {
      if (!arrayPilotes[i]) { //mira que no existeixi una pilota
          let mida = random(10, 20);
          let x = random(mida, canvas.width - mida);
          let y = random(mida, canvas.height - mida);
          let color = randomRGB();
          arrayPilotes[i] = new Pilota(x, y, random(-5, 5), random(-5, 5), color, mida);
      }

      arrayPilotes[i].mou(canvas.width, canvas.height);
      arrayPilotes[i].dibuixa(ctx);
  }

  requestAnimationFrame(loop);
}


loop();

function colisionaPIlota () {
  for (let i= 0; i < arrayPilotes.length; i++){
    for (let j = i +1 <arrayPilotes.length; j++){
      
    }
  }
}