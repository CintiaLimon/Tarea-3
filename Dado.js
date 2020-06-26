var n_a

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  if(mouseIsPressed){
  n_a = int(random(1,7))
    }else if(n_a == 1){
  ellipse(200,200,70,70)
    }else if(n_a == 2){
  ellipse(300,100,70,70);
  ellipse(100,300,70,70);
    }else if(n_a == 3){
  ellipse(300,100,70,70);
  ellipse(200,200,70,70);
  ellipse(100,300,70,70);
    }else if(n_a == 4){
  ellipse(100,100,70,70);
  ellipse(300,100,70,70);
  ellipse(100,300,70,70);
  ellipse(300,300,70,70);
    }else if(n_a == 5){
  ellipse(100,100,70,70);
  ellipse(300,100,70,70);
  ellipse(200,200,70,70);
  ellipse(100,300,70,70);
  ellipse(300,300,70,70);
    }else if(n_a == 6){
  ellipse(100,100,70,70);
  ellipse(300,100,70,70);
  ellipse(100,200,70,70);
  ellipse(300,200,70,70);
  ellipse(100,300,70,70);
  ellipse(300,300,70,70);
    }
}
