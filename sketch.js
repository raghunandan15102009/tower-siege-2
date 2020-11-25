const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, obj, slingShot, polygon;
var engine, world, options;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  obj = new Can(510, 200, 30, 50)
  obj1 = new Can(540, 220, 30, 50)
  obj2 = new Can(570, 220, 30, 50)
  obj3 = new Can(600, 220, 30, 50)
  obj4 = new Can(630, 220, 30, 50)
  obj5 = new Can(660, 220, 30, 50)
  obj6 = new Can(690, 220, 30, 50)
  obj14 = new Can(910, 120, 30, 50);
  obj15 = new Can(940, 120, 30, 50);
  obj16 = new Can(970, 120, 30, 50);
  obj17 = new Can(1000, 120, 30, 50);
  obj18 = new Can(1030, 120, 30, 50);
  obj19 = new Can(940, 90, 30, 50)
  obj20 = new Can(970, 90, 30, 50)
  obj21 = new Can(1000, 90, 30, 50)
  obj22 = new Can(970, 40, 30, 50)
  obj23 = new Can(540, 180, 30, 50);
  obj24 = new Can(570, 180, 30, 50);
  obj25 = new Can(600, 180, 30, 50);
  obj26 = new Can(630, 180, 30, 50);
  obj27 = new Can(660, 180, 30, 50);
  obj28 = new Can(570, 130, 30, 50)
  obj29 = new Can(600, 130, 30, 50)
  obj30 = new Can(630, 130, 30, 50)
  obj31 = new Can(600, 80, 30, 50)
  polygon = new Polygon(370,220);
  ground = new Ground(600, 250);
  ground1 = new Ground(970, 150);
  slingShot=new SlingShot(polygon.body,{x:200,y:200})
  Engine.run(engine);
  Engine.update(engine);
}
function draw() {
  background(0);
  ground.display();
  ground1.display();
  fill("white");
  obj.display();
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();
  obj6.display();
  fill("red");
  obj14.display();
  obj15.display();
  obj16.display();
  obj17.display();
  obj18.display();
  fill("green");
  obj19.display();
  obj20.display();
  obj21.display();
  fill("yellow");
  obj22.display();
  fill("brown");
  obj23.display();
  obj24.display();
  obj25.display();
  obj26.display();
  obj27.display();
  fill("pink");
  obj28.display();
  obj29.display();
  obj30.display();
  fill("blue");
  obj31.display();
  fill("magenta");
  polygon.display();
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}