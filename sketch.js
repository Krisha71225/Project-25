
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 200, 30);

	ground = new Ground(600, height, 1200, 20);

	dustbin = new Dustbin(541, 815, 150, 20);

	Engine.run(engine);

}



function draw() {
	ellipseMode(CENTER);
	background("lightyellow");

	paper.display();
	ground.display();
	dustbin.display();
	
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 280, y: -560 })
	}
}


