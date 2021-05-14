class Rock{
constructor(x, y, w, h){
  var options = {
    isStatic: false}
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.rock = loadImage("images/rock.png")
    world.add(world, this.body);
}
show(){
imageMode(CENTER);
image(this.image, this.body.position.x, this.body.position.y, thos.w, this.h)

}


}