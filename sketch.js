const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,polygon,slingshot;

function preload(){
polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(600,400,500,20);
    
    block1 = new Block(510,390);
    block2 = new Block(540,390);
    block3 = new Block(570,390);
    block4 = new Block(600,390);
    block5 = new Block(630,390);
    block6 = new Block(660,390);
    block7 = new Block(690,390);

    block8 = new Block(540,330);
    block9 = new Block(570,330);
    block10 = new Block(600,330);
    block11 = new Block(630,330);
    block12 = new Block(660,330);

    block13 = new Block(570,270);
    block14 = new Block(600,270);
    block15 = new Block(630,270);

    block16 = new Block(600,210);
    polygon = Bodies.circle(50,200,40)
    World.add(world,polygon)
    slingshot = new SlingShot(this.polygon,{x:50,y:200})
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    platform.display();
    fill("red")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("blue")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("yellow")
    block13.display();
    block14.display();
    block15.display();
    fill("green")
    block16.display();
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}