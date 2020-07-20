var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;

function preload()
{
  DBimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;


   paper1 = new Paper(150, 500, 100);   
  
   dustbinRight = new Dustbin(542, 540, 10, 150);
   dustbinMiddle = new Dustbin(680, 600, 300, 10);
   dustbinLeft = new Dustbin(830, 540, 10, 150);
 
   ground = new Ground(600, height-30, 1200, 15); 


   var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
  });
  
	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(200);

//displaying
    paper1.display();
    ground.display();
    image(DBimage,540, 470, 300, 150);
 // dustbinRight.display();
 // dustbinMiddle.display();
 /// dustbinLeft.display();

  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position,
       {x:750, y:-600});
 }
}