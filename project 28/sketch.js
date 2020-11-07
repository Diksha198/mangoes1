
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  world;
var tree, rock, mangoes;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(200,200,50,100)
	rock = new Rock(300,300,30,30)
	mangoes = new Mangoes(200,200,40,40)

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
	tree.display();
	rock.display();
	mangoes.display();

  	drawSprites();
 
}



