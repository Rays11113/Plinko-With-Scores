class Plinko {
    constructor (x,y){
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle (x, y, this.r, options);
        World.add (world, this.body);
    }

    display() {

        push();
        var pos = this.body.position;
        fill("white");
        rectMode(CENTER);
        ellipse(0, 0,this.r,this,r);
        pop();
    }

}