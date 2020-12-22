class Rope{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(350,100,590,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,590,20);
    }
}