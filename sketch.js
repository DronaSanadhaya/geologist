
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1= new Ground(400,680,800,10)
hammer=new Hammer(10,10)
rubber = new Rubber(400,400)
stone = new Stone(200,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  rubber.display();
  stone.display();
  hammer.display();
  drawSprites();
 
}



