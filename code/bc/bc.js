var col, bg
function setup(){
	createCanvas(500,500);
	strokeWeight(1);
	stroke(255);
	col = random(["red","blue","green"])
	bg = 91;
}

function draw() {
	var angle = PI/3;
	background(bg);
	var pm = false;
	var s = toBinary(second());
	var m = toBinary(minute());
	var h = hour();
	if(h>12){
		h = h-12;
		pm = true;
	}
	h = toBinary(h);
	translate(width/2,height/2);
	rotate(PI);
	push();
	for (var i = 0; i < 6; i++) {
		push();
		rotate(angle * i)
		translate(0, 150);
		if(at(m,i,6) == 1){
			fill(col);
		}else{
			fill(bg);
		}
		ellipse(0,0,40-2*i);
		pop();
	}
	pop();
	push();
	for (var i = 0; i < 6; i++) {
		push();
		rotate(angle * i)
		translate(0, 200);
		if(at(s,i,6) == 1){
			fill(col);
		}else{
			fill(bg);
		}
		ellipse(0,0,30-2*i);
		pop();
	}
	pop();
	push();
	for (var i = 0; i < 4; i++) {
		push();
		translate((3*width/24) - (i*width/12), 0);
		if(at(h,i,4) == 1){
			fill(col);
		}else{
			fill(bg);
		}
		ellipse(0,0,40-2*i);
		pop();
	}
	pop();
	//console.log(h + " " + m + " " + s + pm);
	if(pm){
		fill(col);
		ellipse(-100, -20, 20);
		fill(bg);
		ellipse(-100, 20, 20);
	}else{
		fill(col);
		ellipse(-100, 20, 20);
		fill(bg);
		ellipse(-100, -20, 20);
	}

}

function toBinary(a){
	if(a == 0){
		return 0;
	}else{
		return ((a % 2) + 10 * (toBinary(Math.floor(a / 2))));
	}
}

function at(a,b,le){
 	var c = String(a);
 	while(c.length < le){
		c = "0" + c
	}
	return Number(c.charAt(b));
}
