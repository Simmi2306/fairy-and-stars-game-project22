var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
	fairyImg=loadImage("images/fairy.png");
	music=loadSound("sound/joyMusic.mp3");

}

function setup() {
	createCanvas(900, 700);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy=createSprite(150,400,50,50);
	fairy.addImage("beautiful",fairyImg);
	fairy.scale=0.3;


	star = createSprite(750,50);
	star.addImage(starImg);
	star.scale = 0.05;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(750 , 50 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 310 && starBody.position.y>310 ){
	  Matter.Body.setStatic(starBody,true);
  }

  music.loop();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-10;
	}

	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+10;
	}
	
}
