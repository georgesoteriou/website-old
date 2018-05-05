let data = [];
let j;
let network;
function setup(){
	network = new brain.NeuralNetwork();
	let div;
	let buttons = [];
	for(i=1;i<10;i++){
		createButton(i,i)
		.mousePressed(function(){
			div.html("Started training on Number: "+ this.elt.value);
			let img = get();
    			img.resize(28, 28);
    			img.loadPixels();
			let inputs = img.pixels.filter(function (value, index, ar) {
    				return (index % 4 == 0);
			});
			data.push({input:  inputs, output: {[this.elt.value]:1}});
			network = new brain.NeuralNetwork();
			network.trainAsync(data).then(res=>{	
				div.html("Finished training on Number: " + this.elt.value 
					+"<br> (Data size: " + data.length +")");
			});
			background(0);
		});
	}
	createButton("Predict")
	.mousePressed(function(){
    		let img = get();
    		img.resize(28, 28);
    		img.loadPixels();
		let inputs = img.pixels.filter(function (value, index, ar) {
    			return (index % 4 == 0);
		});
		var result;
		if(network.outputs){
			result = brain.likely(inputs,network);
		}
		if(result){	
			div.html("I Predict: " + result);
		}else{
			div.html("Train me first!");
		}
	}).addClass("long");

	createButton("Clear")
	.mousePressed(function(){
		background(0);
	}).addClass("long");
	
	createButton("Forget")
	.mousePressed(function(){
		data = [];
		network = new brain.NeuralNetwork();
		div.html("Data Size: 0<br>Train me by drawing and choosing the number you drew.");
	}).addClass("long");

	createButton("Load")
	.mousePressed(function(){
		div.html("loading");
		network = new brain.NeuralNetwork();
		loadJSON("data.json",x =>{ 
			data = data.concat(Object.keys(x).map(i => x[i]));
			div.html("Data Size: "+data.length+"<br>Loaded pre-trained brain.");
			network.train(data);
		});
	}).addClass("long");

	createCanvas(600,600);
	background(0);
	div = createDiv("Train me by drawing and choosing the number you drew.").size(600,100).addClass("text");
	
	
}  

function mouseDragged(){
	stroke(255);
	strokeWeight(60);
        line(mouseX,mouseY,pmouseX,pmouseY);
}

