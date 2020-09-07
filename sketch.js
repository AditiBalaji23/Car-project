var car1,car2,car3,car4,wall;
var speed,weight,deformation;

function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  createCanvas(1600,1600);
  car1=createSprite(50, 200, 50, 50);
  wall=createSprite(700, 200, 60, height/2);
 
 height=50;
}

function draw() {
  background(255,255,255); 
  car1.velocityX=speed; 
 
  wall.shapeColor=color(80,80,80);
  if (wall.x-car1.x<(car1.width+wall.width)/2)
  {
    car1.velocityX=0;
    var deformtion=0.5 * weight * speed* speed/22500;
if(deformtion>180)
{
  car1.shapeColor=color(255,0,0);
}
if (deformtion<180 && deformtion>100){
car1.shapeColor=color(230,230,0);

}
if(deformtion<100){
  car1.shapeColor=color(0,255,0);
}
}

  drawSprites();
}