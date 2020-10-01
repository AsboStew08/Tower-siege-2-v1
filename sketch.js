var ground ;
var box8,box9,box10,box11,box12,box13,box14;
var slingShot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 


  
  
  ground = new Ground(600,height,1200,20);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
}

function draw() {
  background(255,255,255);  

  Ground.display();
  Box.display();
  Slingshot.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.Polygon);
  }
}