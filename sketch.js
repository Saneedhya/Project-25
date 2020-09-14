
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	dustbinSprite=createSprite(700,320,100,50);


	//Create the Bodies Here.
	Matter.Bodies.circle(x, y, 70, [options], [maxSides]);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(KeyCode === UP_ARROW){

       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}

