var bg;
var map, heart, tri;
var tigerGroup, powerGroup;
var count=20

function preload(){
   h1=loadImage("Images/1.png")
   h2=loadImage("Images/2.png")
   h3=loadImage("Images/3.png")
   h4=loadImage("Images/4.png")
   bg=loadImage('Images/BG.jpg')
   heart=loadImage('Images/heart.png')
   tri=loadImage('Images/tri.png')
}

function setup(){
    createCanvas(1500,680)
    tigerGroup=createGroup()
    powerGroup=createGroup()
   

    for(var i=0; i<50;i++){
        tiger=new Tiger(Math.round(random(-1500*4-100,width-100)),Math.round(random(-680*4-100,height-100)))
    }
    for(var i=0; i<50;i++){
        power=new Power(Math.round(random(-1500*4-100,width-100)),Math.round(random(-680*4-100,height-100)))
    }
    player=new Player()
    deer=new Deer()
   
    healthBar=createSprite(camera.position.x+800, camera.position.y+100)
    healthBar.addImage(h1)
}

function draw(){
    image(bg,-1500*4,-680*4, width*5, height*5)

    healthBar.x=camera.position.x+500
    healthBar.y=camera.position.y-250

    for (var i = 0; i < powerGroup.length; i++) {
        if (powerGroup.get(i).isTouching(player.sprite)) {
            powerGroup.get(i).destroy();
            count=count+1;
           
        }
    }

    //if(frameCount%50==0){
    //    count-=5
    //} 

    if(count<=20 && count>=16){
        healthBar.addImage(h1)
    }
    if(count<=15 && count>=11){
        healthBar.addImage(h2)
    }
    if(count<=10 && count>=6){
        healthBar.addImage(h3)
    }
    if(count<=5 && count>=0){
        healthBar.addImage(h4)
    }

    if(keyDown('left')){
        player.sprite.x-=10
        player.sprite.y+=0
    }
    if(keyDown('right')){
        player.sprite.x+=10
        player.sprite.y+=0
    }
    if(keyDown('up')){
        player.sprite.x+=0
        player.sprite.y-=10
    }
    if(keyDown('down')){
        player.sprite.x+=0
        player.sprite.y+=10
    }
    
    console.log(mouseX)
    console.log(mouseY)

    camera.position.x=player.sprite.x
    camera.position.y=player.sprite.y
    
   
    drawSprites()
}   

