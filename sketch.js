const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7;
var rope;
var sling1,sling2,sling3,sling4,sling5,sling6,sling7;
var canvas;

function setup(){
    canvas = createCanvas(700,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    let canvasmouse = Matter.Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();

    let options={
        mouse: canvasmouse
    }
    mConstraint = Matter.MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    rope = new Rope();

    ball1 = new Pendulum(190,500,35);
    sling1 = new Sling(ball1.body, rope.body,-200,0,700);

    ball2 = new Pendulum(230,500,35);
    sling2 = new Sling(ball2.body, rope.body,-135,0,700);

    ball3 = new Pendulum(270,500,35);
    sling3 = new Sling(ball3.body, rope.body, -65, 0 ,700);
    
    ball4 = new Pendulum(430,500,35);
    sling4 = new Sling(ball4.body, rope.body, 195,0,700);

    ball5 = new Pendulum(390,500,35);
    sling5 = new Sling(ball5.body, rope.body, 130, 0, 700);
    
    ball6 = new Pendulum(350,500,35);
    sling6 = new Sling(ball6.body, rope.body, 65, 0, 700);

    ball7 = new Pendulum(310,500,35);
    sling7 = new Sling(ball7.body, rope.body, 0, 0, 700);

}
function draw(){
    background(rgb(251,141,143));
    Engine.update(engine);
    rope.display();
    ball1.display();
    sling1.display();
    ball2.display();
    sling2.display();
    ball3.display();
    sling3.display();
    ball4.display();
    sling4.display();
    ball5.display();
    sling5.display();
    ball6.display();
    sling6.display();
    ball7.display();
    sling7.display();
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:MouseX,y:mouseY});
}