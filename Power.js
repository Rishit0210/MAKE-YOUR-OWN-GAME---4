class Power{  
    constructor(x,y){
       this.sprite=createSprite(x,y)
       var rand=Math.round(random(1,2))
       switch(rand){
           case 1:this.sprite.addImage("power", heart)
           break
           case 2:this.sprite.addImage("power", tri)
           break
       }
       powerGroup.add(this.sprite)
       //this.sprite.addImage("power", this.Image)
    }
    
    
}