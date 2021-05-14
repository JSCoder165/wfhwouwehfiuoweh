class Line{
constructor(bodyA, bodyB){
var options = {
  bodyA: bodyA,
  bodyB: bodyB,
  stiffness: 0.4
}
this.line = Constraint.create(options)
world.add(world, this.line);
}
show(){

var bodyC = this.line.bodyA.position
var bodyD = this.line.bodyB.position

strokeWeight(10)
  line(bodyC.x, bodyC.y, bodyD.x, bodyD.y)
}

}