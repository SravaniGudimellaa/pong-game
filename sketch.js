var box,box2,ball,gameState;
var pScore,cScore;


function setup() {
  createCanvas(400, 400);
   box= createSprite ( 20,50,10,70);
    box2= createSprite ( 380,350,10,70);
    ball=createSprite(200,200,10,10);
  gameState="serve";
  pScore=0;
  cScore=0;
}

function draw() {
 background(51);
  edges=createEdgeSprites();
  //making the divider in the game
  //line(x1,y1,x2,y2)
 // line(200,0,200,10);
//  line(200,20,200,30);
  // for loop for not having to line the line again and again
  for (var i=0; i<400; i=i+20){
     stroke("white");
    line(200,i,200,i+10);
}
  text(cScore,180,15);
  text(pScore,220,15)
 
  //to move the sprite along with the mouse
  box2.y=mouseY;
  //to make the computer paddle move
  box.y=ball.y;
  //to show the initial text
  if (gameState==="serve"){
    fill("white");
    text("press space to start",150,175);
    
}
  //to make the ball move
  if(keyDown("space")&& gameState=="serve"){
    ball.velocityX=5;
    ball.velocityY=5;
    gameState="play";
}
  //making the ball bounce off bottom and top edges
  if (ball.isTouching(edges[2])|| ball.isTouching (edges[3])){
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
    
}
  
  //making the ball bounce off the player paddle
  if (ball.isTouching(box2)){
    ball.bounceOff(box2);
    
  }
  
// making the ball bounce off the computer paddle
  if (ball.isTouching(box)){
    ball.bounceOff(box);
}
  //to reset the ball if player misses
  if (ball.x<0 || ball.x>400){
    //to increase the com score
    if(ball.x>400){
      cScore++
}
    if (ball.x<0){
      pScore++
}
    ball.x=200;
    ball.y=200;
    ball.velocityX=0;
    ball.velocityY=0;
    gameState="serve";
    
}
  //to show the game over message
  if(pScore==5 || cScore==5){
    gameState="over";
    text("game over",180,160);
    text("press r to restart",160,180);
  }
  
  //to make the game restart when r is pressed
  if(keyDown("r")&&gameState=="over"){
    gameState="serve";
    pScore=0;
    cScore=0;
}
  drawSprites();
}