const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;

var blower, blowerTube, ball;
var button;
var blowButton;

function setup() {

  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  blower = new createBlower(550, 332, 175, 225);
  blowerTube = new blowerMouth(425, 420, 250, 50);
  ball = new createBall(550, 150, 50)

  button = createButton("Click to Blow");
  button.position(200, 150);
  button.size(100, 50);
  button.class("blowButton");
  button.mouseClicked(blow);

}

function draw() {

  background("#cfb997");
  Engine.update(engine);

  blower.display();
  blowerTube.display();
  ball.display();

  drawSprites();

}

function blow()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}
