function setup() {
  let width =1000
  let height =1000
  createCanvas(width, height);
}

function draw() {
  background(255); 
  changecolor(mouseX,mouseY)
}
 
  function changecolor(x,y){
    fill(x, y, x-y)
    circle(x,y,x-y)
  }