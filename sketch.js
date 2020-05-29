var player;

var enemy = [];

var checkpoint = [[200,200],[],[],[],[]];
var tab = 0;

var pos;

function setup(){
  createCanvas(1000,400);

  obsGroup = createGroup();
  
  pos = new spawn();

  player = new Ship(100,100,"triangle");

}
function draw(){
  background(240);
  

  //controls
  playerControls();

  if(enemy.length < 10){
    enemy.push(new Ship(pos.x, pos.y , Math.round(random(1,3))));
  }

  for( var i = 0; i < enemy.length; i++){
    enemy[i].display();
  }

  console.log(enemy);
  

  //camera Properties
  camera.x = player.body.x;
  camera.y = player.body.y;
  camera.zoom.in = 2;

  drawSprites();
  
  player.display();
}

function keyPressed(){
  if(keyCode === 49){
    tab = 0;
  }
  else if(keyCode === 50){
    tab = 1;
  }
  else if(keyCode === 51){
    tab = 2;
  }
  else if(keyCode === 52){
    tab = 3;
  }
  else if(keyCode === 53){
    tab = 4;
  }

  if(keyCode === 90){
    checkpoint[tab] = [];
    checkpoint[tab][0] = player.body.x;
    checkpoint[tab][1] = player.body.y;
  }
  if(keyCode === 32){
    if(checkpoint[tab] != undefined){
      player.body.x = checkpoint[tab][0];
      player.body.y = checkpoint[tab][1];

      player.body.velocityX = 0;
      player.body.velocityY = 0;
    }
  }
}



//controls
function playerControls(){
  if(keyIsDown(RIGHT_ARROW)){
    player.body.velocityX += 1;
  }
  else if(keyIsDown(LEFT_ARROW)){
    player.body.velocityX -= 1;
  }

  if(keyIsDown(UP_ARROW)){
    player.body.velocityY -= 1;
  }
  else if(keyIsDown(DOWN_ARROW)){
    player.body.velocityY += 1;
  }
}


function spawn(){
  var rand = Math.round(random(1,2));
  this.x;
  this.y
  if(rand === 1){
    this.x = random(camera.x - camera.width/2,camera.x - camera.width/2 - 100);
  }
  else{
    this.x = random(camera.x + camera.width/2,camera.x + camera.width/2 + 100)
  }
  
  rand = Math.round(random(1,2));

  if(rand === 1){
    this.y = random(camera.y - camera.height/2, camera.y - camera.height/2 - 100);
  }
  else{
    this.y = random(camera.y + camera.height/2,camera.y + camera.height/2 + 100);
  }
}