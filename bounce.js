var arr;
var pos; //current position we are looking at
var testPos; //second position to be tested
var endPos; //last position needed to be tested


function setup() {
  createCanvas(400, 400);
  background(0);
  arr = randomArray(100);

  pos = 0;
  testPos = pos + 1;
  endPos = arr.length - 1;
}//setup


function draw() {
  background(0);
  
  if (endPos == 0) {
    displayArray(arr, -1, -1, -1);
  }
  
  else {
    displayArray(arr, pos, testPos, endPos);
    //compare values at pos and testPos
    if (arr[pos] >arr[testPos]) {
      swap(arr, testPos,pos);
    }
    //if out of order, swap
    //if not out of order
    else {
      testPos +=1;
      pos+=1;
    
    }
    //if pos is at endpos
    if (pos == endPos) {
      //reset pos to 0 (and testPos to 1)
      //decrease endPos
      pos =0;
      testPos =1;
      endPos-=1;
    }
  }
}//draw


function swap( arr,  i0, i1) {
  var t = arr[i0];
  arr[i0] = arr[i1];
  arr[i1] = t;
}//swap

function randomArray( num) {
  var values = new Array(num};

  for (int i=0; i<values.length; i++) {
    values[i] = int(random(100, 400));
  }//random value loop
  return values;
}//randomArray

function displayArray( arr,  p,  tp,  sp) {
  var barWidth = width / arr.length;
  var x = 0;
  var y = 0;
  noStroke();
  for (int i=0; i<arr.length; i++) {
    y = height - arr[i];
    if (i == p ) {
      fill(230, 0, 230);
    }
    else if (i == tp) {
      fill(0, 230, 230);
    }
    else if (i == sp) {
      fill(230, 230, 0);
    }
    else {
      fill(255);
    }
    rect(x, y, barWidth, arr[i]);
    x+= barWidth;
  }
}//displayArray

