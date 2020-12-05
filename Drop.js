class Drop{
   constructor(x,y)
	{
		var options={
			
			restitution:0.3,
			friction:0.5,
			

			
			}
		this.rain =Bodies.circle(x,y,5,options)
		this.radius =5;
		World.add(World, this.rain)

	}
	updateY(){
		if(this.rain.position.y>height){
			Matter.Body.setPostion(this.rain,{x:random(0,400),y:random(0,400)})
				}

	}
	showDrop(){
		fill("Blue")
		ellipseMode(CENTER);
		ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
	}
	}