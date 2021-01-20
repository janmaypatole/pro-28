class BaseClass{
    constructor(x,y,width,height){   
       var options={
       'friction':2.0,
       'restitution':1.8,
       'density':1.3
       }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.image = loadImage('Plucking mangoes/boy.png')
    World.add(world.this.body)
    }
    display(){
  var angle = this.body.angle
  push()
Translate(this.body.position)
strokeWeight(4)
fill(255)
rotate(angle)
imageMode(CENTER)
image(x,y,0,0,this.width,this.height)
  pop()
    }
}