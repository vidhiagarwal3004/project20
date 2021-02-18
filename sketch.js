var car,wall,col;
var speed,weight;

function setup() {
  createCanvas(1600,400);
   car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

  console.log(car.x - wall.x);

}

function draw() {
  background(0,0,0);  

  if(car.x - wall.x <wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y -wall.y < wall.height/2 + car.height/2
    &&wall.y -car.y < wall.height/2 + car.height/2) 
    {
    car.velocityX=0;
    var defor = 0.5*weight*speed*speed/22500;
    if(defor>180)
    {
      car.shapeColor="red";
      col = "lethal"
    }
    if(defor<180 && defor >100)
    {
      car.shapeColor="yellow";
      col= "average";
    }
    if(defor<100)
    {
      car.shapeColor="green";
      col = "good";
    }
    
  }
  drawSprites();
}