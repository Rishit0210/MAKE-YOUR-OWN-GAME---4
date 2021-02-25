class Tiger{  
    constructor(x,y){
       this.sprite=createSprite(x,y)
       this.Image=loadAnimation('Images/Tiger Running/1.png', 'Images/Tiger Running/2.png', 'Images/Tiger Running/3.png', 'Images/Tiger Running/4.png', 'Images/Tiger Running/5.png', 'Images/Tiger Running/6.png')
       this.sprite.addAnimation("running", this.Image)
       tigerGroup.add(this.sprite)
    }
    
    
}
