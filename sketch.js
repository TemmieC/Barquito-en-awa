var ship
var shipImg
var ocean
var oceanImg

function preload(){
  shipImg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  oceanImg = loadImage ("sea.png")

}

function setup(){
  createCanvas(400,400);
  ocean = createSprite (200,200)
  ship = createSprite (200,200)
  ship.addAnimation("barquito",shipImg);
  ship.scale = 0.5
  ocean.addImage("awa",oceanImg)
}

function draw() {
  background("blue");
 drawSprites();
}