class Sling{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA:body1,
            bodyB:body2,
            length:300,
            stiffness:0.08,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
     display(){
         var posA = this.body.bodyA.position;
         var posB = this.body.bodyB.position;
         strokeWeight(2);
         stroke(0);

         var line1x = posA.x;
         var line1y = posA.y;
         var line2x = posB.x+this.offsetX;
         var line2y = posB.y+this.offsetY;

         line(line1x,line1y,line2x,line2y);
     }
}