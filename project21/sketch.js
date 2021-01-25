var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(800,400);
  head1=createSprite(780,200,10,50);
  bullet=createSprite(760,200,20,5);
  bullet.shapeColor="white";

  wall= createSprite(5,200,thickness,height/2);
  wall.shapeColor="brown";
  
  
  createSprite(400,140,800,10);
  createSprite(400,260,800,10);
}

function draw() {
  background("black");  
  drawSprites();

  speed=random(-223,-321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX = speed;
  bullet.collide(wall);

  if(bullet.collide(wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage >= 10){
      wall.shapeColor="red";
    }

    if(damage <= 10){
      wall.shapeColor="green";
    }
  }
}

