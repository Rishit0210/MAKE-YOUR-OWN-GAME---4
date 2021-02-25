class Player{  
    constructor(){
       this.sprite=createSprite(748, 339)
       this.Image=loadAnimation('Images/Running/1.png', 'Images/Running/2.png', 'Images/Running/3.png', 'Images/Running/4.png', 'Images/Running/5.png', 'Images/Running/6.png')
       this.sprite.addAnimation("running", this.Image)
    }
    
    
}
