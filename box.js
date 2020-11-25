class Can {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          friction:2,
          density:0.3,
          stiffness:4
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 3) {
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      } else {
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop();
      }
    }
  };
