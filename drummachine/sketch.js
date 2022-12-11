let CIHat01,
Tom01,
Snr01,
Kick01,
Cymbal,
OpHat01;

let YELLOW;

function preload() {
  soundFormats('wav');
  CIHat01 = loadSound('CYCdh_ElecK01-ClHat01.wav');
  Tom01 = loadSound('CYCdh_ElecK01-Tom01.wav');
  Snr01 = loadSound('CYCdh_ElecK01-Snr01.wav');
  Kick01 = loadSound('CYCdh_ElecK01-Kick01.wav');
  Cymbal = loadSound('CYCdh_ElecK01-Cymbal.wav')
  OpHat01 = loadSound('CYCdh_ElecK01-OpHat01.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  text("Music Radar drum kit samples - Kit 4 Electro", 20, 20);

  text("q - CIHat01", 40, 40);
  text("w - OpHat01", 40, 60);
  text("e - Tom01", 40, 80);
  text("r - Snr01", 40, 100);
  text("o - Kick01", 40, 120);
  text("p - Cymbal", 40, 140);

  YELLOW = color(255, 204, 0);
  BLACK = color(0, 0, 0);
  BLUE = color(0, 0, 255);
  RED = color(255, 0, 0);
}

function reset() {
  let c = color(255, 255, 255);
  fill(c);
  noStroke();

  rect(0, 150, windowWidth, 200);
  stroke(0,0,0);
}

function drawDrums() {
  reset();

  fill(YELLOW);

  circle(100, 200, 80);
  circle(200, 200, 80);

  fill(BLACK);

  circle(100, 300, 80);
  circle(200, 300, 80);

  fill(BLUE);

  circle(300, 200, 80);

  fill(RED);

  circle(300, 300, 80);
}

function hitCIHat() {
  fill(YELLOW);
  circle(100, 200, 85);
}

function hitOpHat() {
  fill(YELLOW);
  circle(200, 200, 85);
}

function hitTom() {
  fill(BLACK);
  circle(100, 300, 85);
}

function hitSnr() {
  fill(BLACK);
  circle(200, 300, 85);
}

function hitSymbol() {
  fill(BLUE);
  circle(300, 200, 85);
}

function hitKick() {
  fill(RED);
  circle(300, 300, 85);
}

function draw() {
  drawDrums();

  if (keyIsDown(81)) {
    hitCIHat();
  }
  if (keyIsDown(87)) {
    hitOpHat();
  }
  if (keyIsDown(69)) {
    hitTom();
  }
  if (keyIsDown(82)) {
    hitSnr();
  }
  if (keyIsDown(79)) {
    hitKick();
  }
  if (keyIsDown(80)) {
    hitSymbol();
  }
}

// https://keyjs.dev/

function keyPressed() {
  switch(keyCode) {
    case 81: // q
      CIHat01.play();
      break;
    case 87: // w
      OpHat01.play();
      break;
    case 69: // e
      Tom01.play();
      break;
    case 82: // r
      Snr01.play();
      break;
    case 79: // o
      Kick01.play();
      break;
    case 80: // p
      Cymbal.play();
      break;
    default:
      break;
  }
}
