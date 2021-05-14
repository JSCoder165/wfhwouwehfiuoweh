class coach{
constructor(x, y, w, h){
  var options = {
    isStatic: false
  }
  this.w = w
  this.h = h
  
this.body = Bodies.rectangle(x, y, w, h, options);
this.coach = loadImage("images/coach.png")
World.add(world, this.body)
Matter.body.setMass(this.body, this.body.mass*5)
  }

  show(){
imageMode(CENTER);
image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);

  }
}

