
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject,groundObject;
var world;



function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1200,650)
	PaperObject=new Paper(200,450,40)
	groundObject=new Ground(width/2,670,width,20)

	//Create the Bodies Here.
    var render=Render.create({
	element: document.body,
	engine: engine,
	options:{
	  width:1200,
	  height:700,
	  wireframes: false
	}

 		
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine) ;
  groundObject.display();
  dustbinObj.display();
  PaperObject.display();

  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
   
	Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
   
 }
}


