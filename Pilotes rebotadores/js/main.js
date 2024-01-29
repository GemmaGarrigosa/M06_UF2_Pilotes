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
     
  }

  for (let j = 0; j < arrayPilotes.length; j++){
    for (let k = 0; k < arrayPilotes.length; k++){
      if ( j!= k){
        if (colisionaPilota(arrayPilotes[j],arrayPilotes[k])){
           arrayPilotes[j].color = randomRGB();
            arrayPilotes[k].color = randomRGB();
        }
      }
    }
    arrayPilotes[j].mou(canvas.width, canvas.height);
    arrayPilotes[j].dibuixa(ctx);
  }

  requestAnimationFrame(loop);
}


loop();

// funció booleana que et diu si les pilotes han colisionat o no 
function colisionaPilota(pilota1, pilota2) {
  let distanciaX = pilota1.x - pilota2.x;
  let distanciaY = pilota1.y - pilota2.y;
  let distanciaEuclidiana = Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
  let distanciaMides = pilota1.mida + pilota2.mida;

  return distanciaEuclidiana < distanciaMides;
}