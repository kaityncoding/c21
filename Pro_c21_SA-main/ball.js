class Ball{
constructor (x, y, r){
  let option = {
      restitution : 0.8
  }  
  this.body = Bodies.circle(x, y, r, option)
  this.r = r
  World.add(world, this.body)
}
show() { 
    var pos = this.body.position;
    ellipse(pos.x, pos.y, this.r)
}


}