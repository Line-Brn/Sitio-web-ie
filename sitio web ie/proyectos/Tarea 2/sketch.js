 function setup() {
  let width =400
  let height =400
  createCanvas(width, height);
}

function draw() {
  background(255); 

  let cornerSize = 200;
  let cornerSizetop = 200;

  if (mouseX < cornerSize && mouseY < cornerSizetop) {
    // en haut à gauche
    fill(0, 0, 255);
    
    let circleDiameter = 50;
    ellipse(width / 2, height / 2, circleDiameter, circleDiameter);
  }
  
  if (mouseX < cornerSize && mouseY > cornerSize) {
    //en bas à gauche
    fill(0, 255, 0);

  }
  
  if (mouseX > cornerSize && mouseY > cornerSize) {
    //en bas à droite
    fill(255, 0, 0);
    
  }
  
   if (mouseX > cornerSize && mouseY < cornerSize) {
    //en bas à droite
    fill("yellow");
    
 }
  
  let circleDiameter = 100;
  ellipse(width / 2, height / 2, circleDiameter, circleDiameter);
  
  
}