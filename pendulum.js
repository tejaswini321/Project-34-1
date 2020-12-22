class Pendulum{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 1
        }
        this.r = r*2
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         ellipseMode(CENTER);
         ellipse(pos.x,pos.y,this.r,this.r);
     }
}