class Paper {
  constructor(x, y,radius,radius) {
    var options = {
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
    this.body = Bodies.circle(x, y, radius,radius, options);
    this.radius=radius;
    
    World.add(world, this.body);
  }
  display(){  
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    fill(255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
    pop();
  }
}