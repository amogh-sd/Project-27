const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(650, 250, 400 , 5)
bob1 = new Ball(520, 500 , 40)
bob2 = new Ball(600, 500 , 40)
bob3 = new Ball(680, 500 , 40)
bob4 = new Ball(750, 500 , 40)
bob5 = new Ball(830, 500 , 40)
rope1 = new Rope(roof.body, bob1.body, -160, 0)
rope2 = new Rope(roof.body, bob2.body, -80,0)
rope3 = new Rope(roof.body, bob3.body,0,0)
rope4 = new Rope(roof.body, bob4.body,80,0)
rope5 = new Rope(roof.body, bob5.body,160,0)
	Engine.run(engine);
  

}


function draw() {
background(20,20,200);
  

 roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
}
function keyPressed (){
if (keyCode===LEFT_ARROW){
Body.applyForce(bob1.body,bob1.body.position, {x:-300 , y: -300} )

}


if (keyCode ===RIGHT_ARROW){
	Body.applyForce(bob5.body,bob5.body.position, {x:300 , y: -300} )
}

if (keyCode ===UP_ARROW){
	Body.applyForce(bob5.body,bob5.body.position, {x:1000 , y: -1000} )
}

if (keyCode ===DOWN_ARROW){
	Body.applyForce(bob1.body,bob1.body.position, {x:-1000 , y: -1000} )
}
}






