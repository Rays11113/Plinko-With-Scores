Engine = Matter.Engine;
World = Matter.World;
Events = Matter.Events;
Bodies = Matter.Bodies;

var engine, world;

var particle
var particles = [particle];
var plinkos = [];
var divisions = [];
var divisionheight = 300; 
var score = 0; 
var count= 0;
var line;
var gameState = "PLAY";

function setup() {
  createCanvas(800,800);
  Engine = engine.create();
  world = engine.world;
  ground = new Ground (width/2, height, width, 20);


  for (var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height = divisionsHeight/2, 10, divisions));
  }


 for ( var j = 75; j <=width; j = j+50){
   plinkos.push(new Plinko(j, 175));
 }


 for ( var j = 75; j <=width; j = j+50){
  plinkos.push(new Plinko(j,275));
}

for ( var j = 75; j <=width; j = j+50){
  plinkos.push(new Plinko(j,375));

}

}

function draw() {
  background("blue");  
  textSize(20);

  Engine.update(engine);
  ground.display();

  for ( var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(100, 700), 10, 10));
    score++;
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display;
  }
  drawSprites();
}