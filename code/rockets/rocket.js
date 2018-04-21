var rocket = function(parentDNA) {
    this.pos = createVector(width / 2, height - 20);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.fitness = 10000;
    this.crash = false;
    this.draw = true;
    this.colour = [0,0,0];

    if (parentDNA) {
        this.DNA = parentDNA;
    } else {
        this.DNA = [];
        for (i = 0; i < len; i++) {
            this.DNA[i] = p5.Vector.random2D().mult(0.2);
        }
    }

    this.update = function() {
        if (!this.crash) {
            this.pos.add(this.vel);
            this.vel.add(this.acc);
            this.acc.mult(0);
            this.acc.add(this.DNA[count])
            var d = dist(this.pos.x, this.pos.y, target.x, target.y);
            if (d < this.fitness) {
                this.fitness = d;
            }
            if (this.pos.x < 10 || this.pos.x > width - 10 || this.pos.y < 10 || this.pos.y > height - 10) {
                this.crash = true;
            } else if ((this.pos.x+20 > obs.x && this.pos.x-20 < obs.x + obs2.x && this.pos.y-50 < obs.y + obs2.y && this.pos.y+50 > obs.y)) {
                this.crash = true;
                this.fitness = 1000;
                this.draw = false;
            } else if (this.pos.x > target.x - 60 && this.pos.x < target.x + 60 && this.pos.y > target.y - 60 && this.pos.y < target.y + 60) {
                this.crash = true;
                this.draw = false;
                success++;
                this.fitness = 0;
            }
            this.colour[2] = map(this.fitness, 0, 1000, 255, 100);
            this.colour[1] = map(this.fitness, 0, 1000, 100, 255);
        }
    }

    this.sketch = function() {
        if (this.draw) {
            push();
            noStroke();
            fill(this.colour[0],this.colour[1],this.colour[2]);
            translate(this.pos.x, this.pos.y);
            rotate(this.vel.heading());
            rect(0, 0, 50, 10);
            pop();
        }
    }
}
