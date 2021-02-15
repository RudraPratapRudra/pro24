class Dustbin
{ 
   constructor(x,y)
   {     
      var options={
        isStatic:true               
         }

        this.x=x;
        this.y=y;
        this.angle=0;
        this.dustbinWidth=250;
        this.dustbinHeight=100;
        this.wallThickness=25;
        
        this.boxbottom=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,options)
        this.leftwall=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,options)
        Matter.Body.setAngle(this.leftwall, this.angle);
        this.rightwall=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,options)
        
        
        Matter.Body.setAngle(this.rightwall,-1* this.angle);

        World.add(world,this.boxbottom);
        World.add(world,this.leftwall);
        World.add(world,this.rightwall);
    }

   display()
   {
    var posbottom=this.boxbottom.position;
    var posleft=this.leftwall.position;
    var posright=this.rightwall.position;

    push();
    translate( posbottom.x, posbottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    stroke(255);
    fill(255,0,0);
    rect(0,0,this.dustbinWidth,this.wallThickness);
    pop();

    push();
    translate( posleft.x, posleft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    stroke(255);
    fill(255,0,0);
    rotate(this.angle);
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop();

    push();
    translate( posright.x, posright.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    stroke(255);
    fill(255,0,0);
    rotate(-1*this.angle);
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop();
   
   } 
    

}