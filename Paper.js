class Paper {
    constructor(x,y,diameter) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
    }

     this.body = Bodies.circle(x,y,diameter,options);
     this.diameter = diameter;
     World.add(world, this.body);
     this.image = loadImage("Sprites/paper.png");
}
display(){ 
      translate(this.body.position.x, this.body.position.y);

      var pos =this.body.position;
      ellipseMode(CENTER);
      circle(pos.x, pos.y, this.diameter);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
    }
 }