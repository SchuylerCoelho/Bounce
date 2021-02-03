var fixedRect
var movingRect
var leftRect
var rightRect
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,50,50)
  fixedRect = createSprite(400, 300, 50, 50);
  fixedRect.shapeColor = ("green")
  movingRect.shapeColor = ("blue")
  movingRect.velocityY = 2
  fixedRect.velocityY = -2
  leftRect = createSprite(100,300,50,100)
  rightRect = createSprite(300,300,100,50)
  leftRect.velocityX = 2
  rightRect.velocityX = -2
}

function draw() {
  background(0);  
bounce(leftRect,rightRect);


  drawSprites();
}
