var fixedRect, movingRect, gameOlb1, gameOlb2, gameOlb3, gameOlb4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameOlb1= createSprite(100, 200,80,30);
  gameOlb1.shapeColor = "green";
  gameOlb1.debug = true;

  gameOlb2= createSprite(200, 200,80,30);
  gameOlb2.shapeColor = "green";
  gameOlb2.debug = true;

  gameOlb3= createSprite(100, 400,80,30);
  gameOlb3.shapeColor = "green";
  gameOlb3.debug = true;

  gameOlb4= createSprite(200, 400,80,30);
  gameOlb4.shapeColor = "green";
  gameOlb4.debug = true;


 


}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  isTouching(gameOlb1, movingRect);

  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2&&
    object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      
      object1.shapeColor = "blue"
      object2.shapeColor = "blue"
}
else 
{

  object1.shapeColor = "green"
  object2.shapeColor = "green"
}

}

