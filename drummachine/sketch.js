let CIHat01,
Tom01,
Snr01,
Kick01,
Cymbal,
OpHat01;

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
}

function draw() {
  
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
