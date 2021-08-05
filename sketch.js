var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 BoxPosition=width/2-100;
	 boxY=610;
	 boxLeft=createSprite(BoxPosition,boxY,20,100);
	 boxLeft.shapeColor=color(255,0,0);
	 boxLeftBody=Bodies.rectangle(BoxPosition+20,boxY,20,100,{isStatic:true});
	 World.add(world,boxLeftBody);
	 boxRight=createSprite(BoxPosition+200,boxY,20,100);
	 boxRight.shapeColor=color(255,0,0);
	 boxRightBody=Bodies.rectangle(BoxPosition+200,boxY,20,100,{isStatic:true});
	 World.add(world,boxRightBody);
	 boxBase=createSprite(BoxPosition+100,boxY+40,200,20);
	 boxBase.shapeColor=color(255,0,0);
	 boxBaseBody=Bodies.rectangle(BoxPosition+100,boxY+45,200,20,{isStatic:true});
	 World.add(World,boxBaseBody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
   helicopterSprite.x=helicopterSprite.x-20;
   translation={x:-20,y:0}
   Matter.Body.translate(packageBody,translation);
    
  }
  else if(keyCode=== RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody,translation);
  }
  else if (keyCode===DOWN_ARROW){
	  Matter.Body.setStatic(packageBody,false);
  }
}



