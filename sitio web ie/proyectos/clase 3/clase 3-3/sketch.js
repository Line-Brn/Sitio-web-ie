let numPelotitas =15;
let margen= 90;
let tamano;
let espaciado;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
}

function draw() {
  background(0);
  espaciado=(width-margen*2)/(numPelotitas-1)


  
  for(y= 0;y<numPelotitas;y++){
    for(x=0;x<numPelotitas;x++){
      
      tamano= random(0,60);
      fill(255,random(255));
      circle(margen+x*espaciado,margen+y*espaciado,tamano);
    }
  }
}