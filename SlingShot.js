class SlingShot{
    constructor(bodyA,bodyB){
    var_option={
     'bodyA':bodyA,
     'bodyB':bodyB,
     'stifnees':0.3,
     'lenght':0.4
    }
    this.image = loadImage('boy.png')
      this.bodyB = bodyB
      this.bodyB= Constraint.create(this.bodyB)
    
    }
display(){
image(this.boy,40,700)
image(this.boy,250,20)
if(this.body.bodyA){
  this.bodyA = this.body.position
  this.bodyB = this.bodyB
}
}
}