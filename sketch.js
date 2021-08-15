var spirte;
function setup() {
  createCanvas(1200,600);
  spirte = createSprite(100, 100, 40, 40);
}

function draw() 
{
  background(30);
  spirte.shapeColor = 'cyan';
  if(keyIsDown(LEFT_ARROW)){
    spirte.position.x -= 10;
  }
drawSprites();

}




