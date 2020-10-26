/**
 * 游戏基础的精灵类
 */
const screenWidth    = window.innerWidth
const screenHeight   = window.innerHeight
export default class Rule {
  
  constructor() {
    this.ctx   = canvas.getContext('2d')
    this.audio = new Audio()
    this.audio.src = ''

    this.img     = new Image()
    this.img.src = ""

    this.width  = 0
    this.height = 0

    this.x = 0
    this.y = 0

    this.rules = []
    this.over = false
    this.score = 0
    this.touched = false
  }
  update(){
    
  }
  collision(ru){
  }
  touchStart(x,y){

  }
  touchMove(x,y){

  }
  
  isCollideWith(sp) {
    let spX = sp.x + sp.width / 2
    let spY = sp.y + sp.height / 2

    
    
    if (this.visible == false ){
      return false
    }
    if (sp.visible == false ){
      return false
    }
    if (sp.y < 0 || sp.y > screenHeight || this.y < 0 || this.y > screenHeight){
      return false
    }

    return !!(   spX >= this.x
              && spX <= this.x + this.width
              && spY >= this.y
              && spY <= this.y + this.height  )
  }

  /**
   * 将精灵图绘制在canvas上
   */
  display() {
    
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

  /**
   * 玩家响应手指的触摸事件
   * 改变战机的位置
   */
  addEventListener() {
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()

      
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      this.touchStart(x,y)

      

    }).bind(this))

    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()

      
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      this.touchMove(x,y)
      

    }).bind(this))

    canvas.addEventListener('touchend', ((e) => {
      e.preventDefault()
      this.touched = false
      
    }).bind(this))
  }
  
}
