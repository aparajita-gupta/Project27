
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof();

	bobObject1 = new Bob(300,560,30);
	bobObject2 = new Bob(365,560,30);
	bobObject3 = new Bob(430,560,30);
	bobObject4 = new Bob(495,560,30);
	bobObject5 = new Bob(560,560,30);

	rope1 = new Rope(bobObject1.body, roof1.body, 25, 0)
	rope2 = new Rope(bobObject2.body, roof1.body, 25, 0)
	rope3 = new Rope(bobObject3.body, roof1.body, 25, 0)
	rope4 = new Rope(bobObject4.body, roof1.body, 25, 0)
	rope5 = new Rope(bobObject5.body, roof1.body, 25, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
	roof1.display();

	bobObject1.display();
	bobObject2.display(); 
	bobObject3.display(); 
	bobObject4.display(); 
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	}
}