var len = 600;
var Rockets = [];
var count = 0;
var num = 500;
var target;
var pool = [];
var obs;
var obs2;
var generation = 0;
var success = 0;
var maxsuccess = 0;

function setup() {
    c = createCanvas(1000, 1000);
    for (var i = 0; i < num; i++) {
        Rockets[i] = new rocket();
    }
    target = createVector(width / 2, 100);
    obs = createVector(275, 500);
    obs2 = createVector(450, 50);
    textSize(16);
    var p = createP("<h1> Genetic Algorithm </h1> <br> The rectangular moving objects are using a genetic algorithm to get to the TARGET <br> as quickly and efficiently as possible moving around the obstacle. <br> They 'learn' from their mistakes using simulated natural selection");
    c.style("float","left");
    p.style("float","left");
    p.style("margin-left","20px");

}

function draw() {
    background(70, 90);
    fill(255);
    ellipse(target.x, target.y, 120);
    rect(obs.x, obs.y, obs2.x, obs2.y);
    fill(0);
    text("TARGET", target.x - 35, target.y);
    text("Successes: " + success, target.x - 58, target.y + 16);
    text(count, 10, 25);
    text("Generation: " + generation, width - 150, 25);
    if (success > maxsuccess) {
        maxsuccess = success;
    }
    text("Max Successes: " + maxsuccess, width - 150, 41);
    for (var i = 0; i < Rockets.length; i++) {
        Rockets[i].sketch();
        Rockets[i].update();
    }
    if (count < len) {
        count++;
    } else {
        pool = [];
        for (var i = 0; i < Rockets.length; i++) {
            var fit;
            if (Rockets[i].fitness < 1) {
                fit = 120000 / count;
            } else {
                fit = floor(map(Rockets[i].fitness, 0, width, 100, 0));
            }

            for (j = 0; j < fit; j++) {
                pool.push(Rockets[i]);
            }
        }
        Rockets = [];
        for (var i = 0; i < num; i++) {
            var parentDNA = newDNA(random(pool), random(pool));
            Rockets[i] = new rocket(parentDNA);
        }
        count = 0;
        generation++;
        console.log(success);
        success = 0;
    }
}


function newDNA(parentA, parentB) {
    var DNAA = [];
    var randompos = floor(random(0, len))
    for (var i = 0; i < len; i++) {
        var mutation = random(0, 1);
        if (mutation < 0.0000001) {
            DNAA[i] = p5.Vector.random2D().mult(0.2);
        } else {
            if (i < randompos) {
                DNAA[i] = parentA.DNA[i];
            } else {
                DNAA[i] = parentB.DNA[i]
            }
        }
    }
    return DNAA;
}
