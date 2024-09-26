let angle =0

function setup() {
  let width =400
  let height =400
  rectMode(CENTER);
  angleMode(DEGREES);
  createCanvas(width, height);
  noStroke();

}

function draw() {
  background(0); 
  translate(width/2, height/2); 
  rotate(angle);
  
  push();
  
  scale(1 + sin(frameCount * 2) * 0.8);
  fill("white");
  ellipse(0, 0, 200, 200);
  angle = angle + 1;
  pop();
  
  
  let cornerSize = 200;
  let cornerSizetop = 200;

  if (mouseX < cornerSize && mouseY < cornerSizetop) {
    // en haut à gauche
    fill(0, 0, 255);

  }
  
  if (mouseX < cornerSize && mouseY > cornerSize) {
    //en bas à gauche
    fill(0, 255, 0); }
  
  if (mouseX > cornerSize && mouseY > cornerSize) {
    //en bas à droite
    fill(255, 0, 0); }
  
   if (mouseX > cornerSize && mouseY < cornerSize) {
    //en bas à droite
    fill("yellow"); }
  

    ellipse(0, 0, 100, 200);

  
  
}