var bg
var alien, alienImg
var spaceship, spaceshipImg
var edges
var lightning, lightningImg

function preload(){
  bg = loadImage("spacebg.jpeg")
  alienImg = loadImage("alien.png")
  spaceshipImg = loadImage("spaceship.png")
  lightningImg = loadImage("lightning.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight - 20);
  spaceship = createSprite(displayWidth / 2, displayHeight - 100, 50, 50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale = 0.3
  edges = createEdgeSprites()
}



function draw() {
  background(bg);
  spaceship.velocityX = 0
  spaceship.velocityY = 0
  spaceship.collide(edges[0])
  spaceship.collide(edges[1])
  spaceship.collide(edges[2])
  spaceship.collide(edges[3])
  if (keyDown(LEFT_ARROW)){
    spaceship.velocityX = -6
  }

  if (keyDown(RIGHT_ARROW)){
    spaceship.velocityX = 6
  }

  if (keyDown(UP_ARROW)){
    spaceship.velocityY = -6
  }

  if (keyDown(DOWN_ARROW)){
    spaceship.velocityY = 6
  }

  spawnAlien()

  if (keyDown("space")){
   createLightning() 
  }

  drawSprites();
}

function spawnAlien(){
  if (frameCount%75===0){
    alien = createSprite(-15, 100)
    alien.y = random(50, displayHeight - 100)
    var rand = Math.round(random(1,2))
    if (rand===1){
      alien.x = -15
      alien.velocityX = 7
    }
    else {
      alien.x = displayWidth + 15
      alien.velocityX = -7
      alien.mirrorX(alien.mirrorX() * (-1))
    }
    alien.addImage(alienImg)
    alien.scale = 0.2
    
  }
}

function createLightning(){
  lightning = createSprite(spaceship.x + 32, spaceship.y - 100)
  lightning.addImage(lightningImg)
  lightning.scale = 0.2
  lightning.velocityY = -6
}