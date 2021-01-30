class Ground{
    constructor(x,y,width,height){   
       var options={
       'friction':2.0,
       'restitution':1.8,
       'density':1.3
       }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body)
    }
    display(){
     var pos = this.body.position
     var angle = this.body.angle
  push()
translate(this.body.position)
strokeWeight(4)
fill(255)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
  pop()
    }
}