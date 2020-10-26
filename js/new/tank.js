let instance
export default class Tank {
  constructor() {
    if (!instance){
      instance = this
    }
    this.score      = 0
    this.gameOver   = false

  }
  push(rule1,rule2,rule3,bg,info) {
        
    this.rule1 = rule1
    this.rule2 = rule2
    this.rule3 = rule3
    this.ruleBg = bg
    this.info = info

    var self = this
    this.info.resetGame(function(){
      self.gameOver = false
    })
  }
  loop(){
    

    this.ruleBg.over = this.gameOver
    this.rule1.over = this.gameOver
    this.rule2.over = this.gameOver
    this.rule3.over = this.gameOver


    this.ruleBg.update()
    this.rule1.update()
    this.rule2.update()

    
    this.rule3.touched = this.rule1.touched
    this.rule3.x = this.rule1.x + this.rule1.width/2
    this.rule3.y = this.rule1.y - this.rule1.height/2
    this.rule3.update()

    this.info.over = this.gameOver
    this.info.score = this.score
    this.info.update()

    

    this.rule2.rules.forEach(element => {
      if (this.rule1.isCollideWith(element)){
          this.rule1.collision(element)
          element.collision(this.rule1)
          this.gameOver = true
          return
      }
    });
    this.rule2.rules.forEach(element => {
      this.rule3.rules.forEach(element1 => {
        if (element.isCollideWith(element1)){
            element.collision(element1)
            element1.collision(element)

            this.score += 1
        }
      });
    });
    
  }
  

}
