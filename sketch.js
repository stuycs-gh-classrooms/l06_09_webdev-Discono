import processing.video.*;
Capture camera;
PImage img;


function setup() {
createCanvas(640,480);

var cams = Capture.list();
println(cams[0]+"test");


camera = new Capture(this, cams[0]);
camera.start();
img = camera;
}

function draw() {
  // put drawing code here
  image(img, 0, 0);
}

//do note that i wasn't able to test this at home, so it may nd up failing completely and i will have no idea.

function captureEvent(Capture camera){
 camera.read(); 
}


function keyPressed() {
if (key == ' ') {
invert();

}
}

function invert() {
  for (int p = 0; p<img.pixels.length; p++) {
    img.pixels[p] = color(abs(255 - red(img.pixels[p])), abs(255 - blue(img.pixels[p])), abs(255 - green(img.pixels[p])));
  }
  img.updatePixels();
}
