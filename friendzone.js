class friendzone extends BaseClass {
    constructor(x, y){
      super(x,y,100,150);
      this.image = loadImage("sprites/shashank.png");
     // Matter.Body.scale(this.body,10,10);
     // this.image=image;
      this.Visiblity = 255;
    }

   /* addingimage(image)
    {
        this.body.image=loadImage(image);
    }*/
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 100, 100);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };