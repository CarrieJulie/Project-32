class createBall
{
    constructor(x, y, r)
    {
        var options ={
            restitution: 0.85
        };

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;

        push();
        ellipseMode(CENTER);
        stroke("#4b0082");
        fill("#4b0082");
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}