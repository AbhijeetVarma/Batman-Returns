const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var walkingAnimation
var boltimg,bolt2img,bolt3img,bolt4img
var boltGroup

var drops = []
function preload(){
    bolt1_img = loadImage("1.png")
    bolt2_img = loadImage("2.png")
    bolt3_img = loadImage("3.png")
    bolt4_img = loadImage("4.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(400,400)
    
 walkingAnimation = new Person(200,300,80,130)

   boltGroup = new Group()
}

function draw(){
    Engine.update(engine);
   background(0)
   lightning();
   if(frameCount% 250 === 10){
    boltGroup.destroyEach()
  }

  if(frameCount%5 === 0){
    drops.push(new Drop(random(0,400),10,5))
  }
  
   drawSprites() 
   for(var i=0;i<drops.length;i++){
    drops[i].display();
    
  }
  walkingAnimation.display()
  
}   

function lightning(){
if(frameCount%250 === 0){
    var bolt = createSprite(random(100,300),50)
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: bolt.addImage("bolt1",bolt1_img);
    
        break;
        case 2: bolt.addImage("bolt1", bolt2_img);
        break;
        case 3: bolt.addImage("bolt1", bolt3_img);
        break;
        case 4: bolt.addImage("bolt1", bolt4_img);
        break;
        
    }
  bolt.scale = 0.5

    boltGroup.add(bolt);

    
}
}