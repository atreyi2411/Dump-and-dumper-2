class dustbin {
 constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   this.image = loadImage("Sprites/dustbin.png");
    World.add(world, this.body);
  }

  display(){
    translate(this.body.position.x, this.body.position.y);
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
   imageMode(CENTER);
   image(this.image, 0, 0, this.width, this.height);
  }
}








