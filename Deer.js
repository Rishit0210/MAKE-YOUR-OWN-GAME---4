class Deer{  
    constructor(){
       this.sprite=createSprite(150, 100)
       this.Image=loadImage('Images/goldendeer.png')
       this.sprite.scale=0.4
       this.sprite.addImage("deer", this.Image)
    }
    
    
}