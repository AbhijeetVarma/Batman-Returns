class Drop {
    constructor(x, y,r) {
      var options = {
        'isStatic': false,
          'restitution':1,
          'friction':3,
          'density':2
      }
      this.radius = r;
      this.body = Bodies.circle(x, y, r, options);
      
      this.color = color(0,25,225)
      
            
      World.add(world, this.body);
    }

    
 
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
    // score(){
    //   if(this.body.position.y>500 && this.body.position.y<510){
    //     if(this.body.position.x>=0 && this.body.position.x<=80){
    //       score = score+500
 
    //     }else if(this.body.position.x>=80 && this.body.position.x<=160){
    //       score = score+200
    //     }else  if(this.body.position.x>=160 && this.body.position.x<=240){
    //       score = score+100
    //     }else  if(this.body.position.x>=240 && this.body.position.x<=320){
    //       score = score+100
    //     } else if(this.body.position.x>=320 && this.body.position.x<=400){
    //       score = score+200
    //     } else if(this.body.position.x>=400 && this.body.position.x<=480){
    //       score = score+500
    //     }
 
    //   }
    // }
  };