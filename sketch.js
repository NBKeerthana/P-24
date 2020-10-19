
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paperBall;
var bottomBin, rightBin, leftBin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(400,680,800,20);
	World.add(world,ground);


	//Create the Bodies Here.
	paperBall=new Paper (150,250,20,20);
	bottomBin=new Dustbin(500,650,200,20);		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(400,680,800,20);

  paperBall.display();
  bottomBin.display();
  
  drawSprites();
 
}



