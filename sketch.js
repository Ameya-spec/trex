var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 80);
 movingRect=createSprite(600,200,80,50);
 fixedRect.debug=true;
 movingRect.debug=true;
 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
fixedRect.velocityX=6;
}
function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 
  bounce (fixedRect,movingRect);
  
  drawSprites();
}
