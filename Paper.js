class Paper{
	constructor(x,y,r){
	this.image=loadimage("paper.png")
	var options = {
        isStatic:false,
		'restitution':0.3,
		'friction':5,
		'density':1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display(){
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255);
			ellipse(0,0,this.r,this.r);
			pop()
	}

}