class Rubber{
    constructor (x,y){
        var options={
        density:1,
        friction:5,
        restitution:0.3
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius=50
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push()
        translate (pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("brown");
        ellipse(0,0, this.radius, this.radius);
        pop()
      }
    
}   
