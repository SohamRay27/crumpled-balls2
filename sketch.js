
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

dustbin=new Dustbin(800,500,200,200)
paper=new Paper(100,590,30)
ground=new Ground(600,600,1200,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

paper.display()
ground.display()
dustbin.display()

  drawSprites();
 

}

function keyPressed(){

if(keyDown === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}

}

