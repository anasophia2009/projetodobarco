const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls =[]
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var barco;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(600, height - 1, width * 8, 10, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);

 barco = new boat(300,200)


}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
barco.display()

function mostrarBolasDeCanhao(){
 if (ball){
ball.display()
 }

}

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 8, 10);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  cannonBall.display();

}
for (var i = 0; i < balls.length; i++) {
  mostrarBolaDeCanhao()
}





function KeyPressed(){
 if (KeyCode === DOWN_ARROW){
var cannonBall = new CannonBall(cannon.x ,cannon.y);
balls.push(cannonBall)
 }

}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot();
    
  }
}
