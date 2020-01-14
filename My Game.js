const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var gameState="onsling";


function preload()
{
    bg=loadImage("sprites/school.jpg");
}


function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    sanju=new friendzone(910,350);
    
    shivi=new friend(640,350);

   

    log1=new Log(790,300,150,PI);
    log2=new Log(960,300,150,PI);
    log3=new Log(880,200,250,PI/2);
    box5=new Box(810,180,70,70);
    box6=new Box(940,180,70,70);

     karan=new kk(1000,300);

    box1=new Box(700,300,70,70);
    box2=new Box(550,300,70,70);
    log4=new Log(650,250,280,PI/2);
    box3=new Box(700,200,70,70);
    box4=new Box(550,200,70,70);
    log5=new Log(640,150,280,PI/2);
     man1 = new man(200,50);
     man2=new man(100,200);
    
    slingshot = new SlingShot(man1.body,{x:200, y:50});
   
}

function draw()
{
    background(bg);
    Engine.update(engine);

    noStroke();
    textSize(35)
    fill("black")
    text("Score  " + score, width-300, 50)

    sanju.display();
    shivi.display();
   karan.display();
   box5.display();
   box6.display();
    ground.display();
    platform.display();
    log1.display();
    log2.display();
    log3.display();

    box1.display();
    box2.display();
    log4.display();

    box3.display();
    box4.display();
    log5.display();

    slingshot.display();
    man1.display();
    man2.display();

    
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
    
    }



function keyPressed(){
  if(keyCode === 32){

        man1.trajectory=[];
        Matter.Body.setPosition(man1.body, {x: 200 , y: 50});
        //console.log(bird.trajectory)
       slingshot.attach(man1.body);
    }

    if(keyCode===49 && gameState === "launched")
    {
        man2.trajectory=[];
        Matter.Body.setPosition(man2.body, {x: 200 , y: 50});
        //console.log(bird.trajectory)
       slingshot.attach(man2.body);

      
      
      


    }
}
function mouseDragged(){
    
   
    Matter.Body.setPosition(man1.body, {x: mouseX , y: mouseY});


}

/*function mouseDragged(){
    
   
    Matter.Body.setPosition(man2.body, {x: mouseX , y: mouseY});


}/*/

function mouseReleased(){
slingshot.fly();
gameState = "launched";

}