const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  ball1 = new Ball(100, 100, 20)


  rectMode(CENTER);
  ellipseMode(RADIUS);


left = createImg('up.png')
left.position(200, 30)
left.size(50, 50)
left.mouseClicked(upforce)


right = createImg('right.png')
right.position(100, 30)
right.size(50, 50)
right.mouseClicked(xforce)

  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
ball1.show();
  
  Engine.update(engine);
}
function upforce()
{
  Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:0,y:-0.06})
}
function xforce()
{
  Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:0.06,y:0})
}