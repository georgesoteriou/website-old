var a;
var l;
var mouse;

function setup(){
	createCanvas(1000,1000);
	background(51);
	a = 22;
	l = 250;
	push();
	translate(width/2,height/2-(1.2*l));
	push();
}

function draw() {
	translate(width/2,height/2-(1.2*l));
	pop();
	if(mouse){
		pop();
		push();
		a = map(mouseX,0,width,1,42);
		l = map(mouseY,0,height,300,0);
		translate(width/2,height/2-(1.2*l));
		background(51);
		mouse = false;
	}
    rotate(PI/a);
    translate(l/10,0);
    stroke(random(255),random(255),random(255));
    noFill()
    ellipse(0,0,l);
    push();
}

function mousePressed(){
	mouse = true;
}