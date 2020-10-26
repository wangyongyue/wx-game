
import Rule from "./rule"
const BULLET_IMG_SRC = 'images/bullet.png'
const BULLET_WIDTH   = 16
const BULLET_HEIGHT  = 30

export default class Rule3 extends Rule {
  constructor() {
    super()

    this.width = BULLET_WIDTH
    this.height = BULLET_HEIGHT

    this.img.src = BULLET_IMG_SRC

    this.audio.src = 'audio/bullet.mp3'
    
    this.x = 0
    this.y = 0
    this.visible = false
    this.speed = 6
    this.frame = 1

  }
  
  update() {
    if (this.over){return}
    if(this.touched == false){
      return
    }
    this.visible = false
    this.frame += 1
    if (this.frame % 10 == 0 ) {
      this.audio.currentTime = 0
      this.audio.play()
      if (this.rules.length > 20){
        var isE = false
        this.rules.forEach(element => {
          if (element.visible == false && isE == false){
            isE = true
             element.visible = true
             element.y = this.y
             element.x = this.x
          }
        });
      }else{
          let r = new Rule3()
          r.visible = true
          r.y = this.y
          r.x = this.x
          this.rules.push(r)
      }
    }
    this.rules.forEach(element => {
      if (element.visible == true){
        element.display()
        element.y -= element.speed
        if ( element.y < -element.height )
        {
          element.visible = false
        }
     }
    });
      
  }
  collision(ru){
    this.visible = false
  }

}
