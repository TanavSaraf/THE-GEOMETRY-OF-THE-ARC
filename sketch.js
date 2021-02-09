var obstaclesGroup1,obstaclesGroup2,obstaclesGroup3;
var inviSprite1,inviSprite2;
var gameState;
var lvl,lvl1,lvl2,lvl3;
var obstacle1,obstacle2,obstacle3;
var score;

function setup() {
  //creating the canvas
  createCanvas(800,400);
  //creating the required shapes
  ground = createSprite(400, 200, 800, 20);
  inviSprite1=createSprite(70,100,20,20);
  inviSprite2=createSprite(inviSprite1.x,inviSprite1.y+200,20,20);
  inviSprite1.visible=false;
  inviSprite2.visible=false;
  //creating the group
  obstaclesGroup1=createGroup();
  obstaclesGroup2=createGroup();
  obstaclesGroup3=createGroup();

  score=0;
  //gamestates for the game
  gameState="start";
  lvl=0;
  lvl1=1;
  lvl2=2;
  lvl3=3;
  STORYLINE="notDone";
}

function draw() 
{
    background(55);  
    
    if(STORYLINE==="notDone")
    {
      push()
        fill("white")
        textStyle(BOLDITALIC);
        textSize(20);

        text("PRESS 'Q' TO CONTINUE",280,300);

        //storyline
        text("You are a 12  year old kid who loves to go out on adventures ",10,20);
        text("You meet an old Uncle who asks you to come with him to get information about ",10,40);
        text("adventures  he went on and you can also go with your family.",10,60);
        text("When you go with him he traps you in a cage and converts you into an arc .",10,80);
        text("You some how get to know that you need to cross 3 levels to convert back ",10,100);
        text("to a human .",10,120);
        text(" You are lonely and independent .Being a self loving human you are ",10,140);
        text("restricted to touch anything .",10,160);
        text("You can control your body with the up arrow key and down arrow key. ",10,180);
        text( " See you soon as a human again.",10,200);
      pop()

      if(keyDown("q"))
      {
        STORYLINE="done";
      }
    }
    else if(STORYLINE==="done")
    {
      
    //setting the position of the controlling sprite2 as 200 more than the first one
      inviSprite2.y=inviSprite1.y+200;


    //instructions to start the game
    if (gameState==="start")
    {
      ground.shapeColor="";
      lvl=0;
      stroke("black");
      strokeWeight(2);
      textSize(20);
      text("press 's' to start the game",300,330);
      if(keyWentDown("s"))
      {
        gameState=lvl1;

      }
    }
    //checks if the arc has collided the shapes or the ground in lvl1
    if(gameState===lvl1){
      if(inviSprite1.isTouching(ground)||inviSprite2.isTouching(ground))
      {
        gameState="end";
      } 
      if(inviSprite1.isTouching(obstaclesGroup1)||inviSprite2.isTouching(obstaclesGroup1))
      {
        gameState="end";
      }
      
    }
    //checks if the arc has collided the shapes or the ground in lvl2
    if(gameState===lvl2)
    {
      if(inviSprite1.isTouching(ground)||inviSprite2.isTouching(ground)||inviSprite1.isTouching(obstaclesGroup3)||inviSprite2.isTouching(obstaclesGroup3))
      {
        
       gameState="end";
      } 

     
    }
    //checks if the arc has collided the shapes or the ground in lvl3
    if(gameState===lvl3)
    {
      if(inviSprite1.isTouching(ground)||inviSprite2.isTouching(ground)||inviSprite1.isTouching(obstaclesGroup3)||inviSprite2.isTouching(obstaclesGroup3))
      {
        
        gameState="end";
       
      } 

     
    }
    //lvl 1
    if(gameState===lvl1){

      inviSprite1.y=inviSprite1.y+0.9;

      //spawns Obstacles
      createObstacle1();

        //increases the score
      score = score + Math.round(getFrameRate() / 60);

      //moves the sprite up and down
        if(keyDown(UP_ARROW) && (inviSprite2.y-10)>(ground.y+10))
        {
          inviSprite1.y=inviSprite1.y-2.9;
        
        }else if(keyDown(DOWN_ARROW))
        {
          inviSprite1.y=inviSprite1.y+2;
        }
        //checks if score is equevalent to 800 and executes the following
        if(score>800)
        {
          
         gameState=lvl2;

          }

        }
        //lvl2
    if(gameState===lvl2)
    {
      //helps reset the score and change lvl to 2 as a flag to execute level 2
      if(keyDown("t"))
       {
          score=0;
          inviSprite1.y=100;
          lvl=2;
       }
      if(lvl===0)
      {
          console.log("hello")
          obstaclesGroup1.destroyEach();
          obstaclesGroup1.setVelocityEach(0,0);
          stroke("black");
          strokeWeight(2);
          textSize(20);
          text("YOU COMPLETED LEVEL1 !",270,330)
          text("PRESS 'T'to continue",270,350);
          text("LEVEL 2",270,100);

      }else if(lvl===2)
      {
          console.log("hello!!")

          

          createObstacle2()

          inviSprite1.y=inviSprite1.y+1;

          //increases the score
          score = score + Math.round(getFrameRate() / 60);

          //moves the sprite up and down
        if(keyDown(UP_ARROW) && (inviSprite2.y-10)>(ground.y+10))
        {
          inviSprite1.y=inviSprite1.y-3.5;

        }else if(keyDown(DOWN_ARROW))
        {
       
          inviSprite1.y=inviSprite1.y+2.5;
       
        }
        //it checks if score is more than 1100 
        if(score>1100)
        {
          gameState=lvl3;
        }

      }         
      
    }
    //lvl3
    if(gameState===lvl3)
    {
       //helps reset the score and change lvl to 3 as a flag to execute level 3
      if(keyDown("t"))
       {
          score=0;
          inviSprite1.y=100;
          lvl=3;
       }
      if(lvl===2)
          {
          obstaclesGroup2.destroyEach();
          obstaclesGroup2.setVelocityEach(0,0);
          stroke("black");
          strokeWeight(2);
          textSize(20);
          text("YOU COMPLETED LEVEL 2 :)",270,330)
          text("PRESS 'T'to continue",270,350);
          text("LEVEL 3",280,100)
          
        }
        if(lvl===3)
        {
            createObstacle3()

            inviSprite1.y=inviSprite1.y+1.4;

            //increases the score
            score = score + Math.round(getFrameRate() / 60);

            //moves the sprite up and down
          if(keyDown(UP_ARROW) && (inviSprite2.y-10)>(ground.y+10))
            {
              inviSprite1.y=inviSprite1.y-3.6;

            }  else if(keyDown(DOWN_ARROW))
              {
            
                inviSprite1.y=inviSprite1.y+2.5;
            
              }
              // checks the score if it is equivalent to 1400
              if(score>1400)
              {
                obstaclesGroup3.destroyEach();
                obstaclesGroup3.setVelocityEach(0,0);
                stroke("black");
                strokeWeight(2);
                textSize(20);
                gameState="win"
              }
          }
    }
    //instructions to restart the game
  if (gameState==="end")
  {
        stroke("black");
        strokeWeight(2);
        textSize(20);
        text("YOU LOST PRESS 'r' TO RESTART",250,330);

        obstaclesGroup1.setVelocityEach(0,0);
        obstaclesGroup2.setVelocityEach(0,0);
        obstaclesGroup3.setVelocityEach(0,0);
      //used to restart the game
      if (keyDown("r"))
        {
          inviSprite1.y=100
          gameState="start";
          obstaclesGroup1.destroyEach();
          obstaclesGroup2.destroyEach();
          obstaclesGroup3.destroyEach();
          score=0;
          lvl=0;
        }
  }
  //executes after the game is won by the player
  if(gameState==="win")
  {
    push()
    textSize(30)
    textStyle(BOLDITALIC)
    text("YOU WON",270,330);
    text("HOORAY ! !",300,380)
    pop()
  }
  
    drawSprites();
      //creating the arc and giving it a color without affecting colors of others
      push()
        strokeWeight(20);
        stroke("blue")
       
        arc(inviSprite1.x,(inviSprite1.y+100),20,200,90,270); 
      pop()
    //text for score visibility to the player 
      push()
            fill("white")
            textSize(15);
            text("SCORE IS :"+score,600,50);


            if(gameState===lvl1)
              {
                text("TARGET IS = 800 ",450,50)
                text("LEFT TO COMPLETE :"+(800-score),450,70)
              }else if(gameState===lvl2 && lvl===2)
              {
                text("TARGET IS = 1100 ",450,50)
                text("LEFT TO COMPLETE :"+(1100-score),450,70)
              }else if (gameState===lvl3 && lvl===3)
              {
                text("TARGET IS = 1400 ",450,50)
                text("LEFT TO COMPLETE :"+(1400-score),450,70)
              }
      pop();
            }
}

function createObstacle1()
{
  ground.shapeColor="pink";
  //for level 1 helps spawn obstacles after every 100 frames
    if(frameCount % 100 ===0)
    {
      var ranH =random(70,120);
      var ranW = random(40,130);
      var ranY = random(-60,60);
      obstacle1=createSprite(800,200+ranY,ranW,ranH);
      obstacle1.shapeColor="pink";
      
      obstacle1.velocityX=-5;
      obstacle1.depth=inviSprite1.depth;
      obstaclesGroup1.add(obstacle1);
      obstaclesGroup1.setLifetimeEach(900);
    }
 
}
function createObstacle2()
{
  ground.shapeColor="red";
  //helps spawn obstacles for lvl 2 after every 70 frames 
  if(frameCount % 70 ===0)
    {
      var ranH =random(70,140);
      var ranW = random(40,150);
      var ranY = random(-60,65);
      obstacle2=createSprite(800,200+ranY,ranW,ranH);
      obstacle2.shapeColor="red";
      obstacle2.velocityX=-5;
      obstacle2.depth=inviSprite1.depth;
      obstaclesGroup2.add(obstacle2);
      obstaclesGroup2.setLifetimeEach(900);
    }
}

function createObstacle3()
{
  ground.shapeColor="orange";
   //helps spawn obstacles for lvl 3 after every 50 frames 
   if(frameCount % 50 ===0)
   {
     var ranH =random(70,140);
     var ranW = random(40,150);
     var ranY = random(-60,65);
     obstacle3=createSprite(800,200+ranY,ranW,ranH);
     obstacle3.shapeColor="orange";
    
     obstacle3.velocityX=-5;
     obstacle3.depth=inviSprite1.depth;
     obstaclesGroup3.add(obstacle3);
     obstaclesGroup3.setLifetimeEach(900);
   }
}