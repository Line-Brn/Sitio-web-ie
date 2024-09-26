
let posicionX= 200
let posicionY= 200
let diametro = 200
let valor = 3;

    
    function setup() {
  createCanvas(400, 400);
      noStroke();
      background(220);
}

function draw() {
 if(mouseIsPressed){
   fill (random(255),random(255),random(255));
   circle(mouseX, mouseY,50);
 }
  else(mouseIsPressed)
    fill("grey");
    circle(mouseX,mouseY,10);

}