function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background("green");
  for(let i = 0; i<6; i++){
    fill(255*(i/20));
    circle(width/2,height/2,300-(i*50));
  }
}