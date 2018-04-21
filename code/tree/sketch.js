var mousee = true;
var angle;
var i = 0;
var a;
var l;
var len;

function mousePressed(){
  if(mousee){
    mousee = false;
  }else{
    mousee = true;
  }
}

function setup() {
  createCanvas(500,500);
  colorMode(HSB);
  
}

function draw() {
  a = map(mouseX,0,width,0,PI/4);
  l = map(mouseY,0,height,115,0);
  if(mousee){
    angle = a;
    len = l;
  }else{
    angle = sin(i);
    i=i+0.05;
    len = 100;
  }
  var pos1=createVector(0,-1)
  background(0,20,50);
  stroke(100,100,100);
  translate(width/2,height);
  line(0,0,pos1.x*len,pos1.y*len);
  translate(pos1.x*len,pos1.y*len);
  grow(pos1,len);
  
}

function grow(pos,len){
  var len = len / 1.35;
  var right = pos.rotate(angle).copy();
  var left = pos.rotate(-2*angle).copy();
  if(len > 5){
    var hu = map(len,100,0,100,166);
    stroke(hu,255,255);
    line(0,0,right.x*len,right.y*len);
    line(0,0,left.x*len,left.y*len);
    push();
    translate(right.x*len,right.y*len);
    grow(right,len);
    pop();
    translate(left.x*len,left.y*len);
    grow(left,len);
  }
}

function grow2(pos,len){
  var len = len - 5;
  var right = pos.rotate(angle).copy();
  var left = pos.rotate(-2*angle).copy();
  var mid = pos.rotate(angle).copy();

  if(len > 5){
    line(0,0,right.x*len,right.y*len);
    line(0,0,left.x*len,left.y*len);
    line(0,0,mid.x*len,mid.y*len);
    push();
    translate(right.x*len,right.y*len);
    grow(right,len);
    pop();
    push();
    translate(left.x*len,left.y*len);
    grow(left,len);
    pop();
    translate(mid.x*len,mid.y*len);
    grow(mid,len);
  }
}

