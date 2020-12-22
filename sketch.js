
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1;
var ground1;
var dustbin;
var up,upImage;
var tree1;
var bird1;

function preload()
{
upImage=loadImage("upImage.jpg")	;
}

function setup() {
	createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   trash1=new Trash(100,300,70);
   ground1=new Ground(600,350,1200,100);
   bird1=new Bird(200,50,100,100);

  dustbin=new Dustbin(900,350);
  tree1=new Tree(1175,100,500,500);

up=createSprite(450,200,20,20);
up.addImage(upImage);
up.scale=0.2;
	
	
	Engine.run(engine);
  }

  function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

trash1.display();
ground1.display();
tree1.display();
dustbin.display();
bird1.display();

  drawSprites();
  fill("black");
  textStyle("bold");
  textSize(30);
  text("Trash Throwing Game",400,35);
 }

function keyPressed() {
	if(keyCode===UP_ARROW) {
  Matter.Body.applyForce(trash1.body,trash1.body.position,{x:130,y:-130})
  up.visible=false;
	}
	  
	}
  
  


