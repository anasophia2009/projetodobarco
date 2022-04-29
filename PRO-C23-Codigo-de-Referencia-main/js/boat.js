class boat{
constructor(x,y){
this.body = Bodies.rectangle(x,y,200,200)
this.image=loadImage("boat.png")
World.add(world,this.body)


}
display(){
var posiçao=this.body.position
push()
translate(posiçao.x,posiçao.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.image,posiçao.x,posiçao.y,200,200)
pop()

}

}