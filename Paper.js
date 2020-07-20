class Paper {
    constructor(x, y, radius) {
      var options = {
           restitution:0.5,
           friction:0.5,
           density:0.5
          
      }
      this.image =loadImage("paper.png");
      this.x=x;
      this.y=y;
      this.radius=radius/2
      this.body = Bodies.circle(x,y,radius, options);
     
      
      World.add(world, this.body);
    }

  display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
     // ellipse(0, 0, this.width, this.height);
      image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  };