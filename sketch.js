
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var stone,ground 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone = new Stone(200,400,40,50)
   ground = new Ground(750,450,700,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  stone.display();
  ground.display();
  drawSprites();
 
}



