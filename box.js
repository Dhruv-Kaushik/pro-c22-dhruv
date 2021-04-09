class Box{
    constructor(x,y,width,height){
         this.width = width;
         this.height = height;
         this.options = {
             restitution:0.3,
             friction:2,
             density:4
         }
         this.body = Bodies.rectangle(x,y,this.width,this.height,this.options)
         World.add(world,this.body)
    }
    add(){
        var pos = this.body.position;
        console.log(this.body)
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}