var ySpeed;
var rectX;
var rectY;
var xSpeed; 

function setup() {
 background(255);
 createCanvas(1920,1080);
 rectX = int(random(width-300));
 rectY = int(random(height-100));
 varRandomize();
 //println ( "yspeed: " + ySpeed + "\txspeed: " + xSpeed + "\trectX: " + rectX + "\trectY: " + rectY);
}
function draw() {

  saver();
  saver();
}

function varRandomize() {
  
 xSpeed = int(random(-50,50));
 ySpeed = int(random(-50,50));
 if (xSpeed == 0 || ySpeed == 0) {
  varRandomize();
  } 
}

function saver() {
    background(0);
    rect(rectX, rectY, 300,100);
    if ( rectX > width-300 || rectX<=0) {
      xSpeed = xSpeed * -1;
    }
    
    if ( rectY > height-100 || rectY<=0) {
      ySpeed = ySpeed * -1;
    }
    rectX += xSpeed;
    rectY += ySpeed;
}
