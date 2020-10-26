import Rule   from './rule'

const screenWidth    = window.innerWidth
const screenHeight   = window.innerHeight

// 玩家相关常量设置
const PLAYER_IMG_SRC = 'images/hero.png'
const PLAYER_WIDTH   = 80
const PLAYER_HEIGHT  = 80

export default class Rule1 extends Rule {
  constructor() {
    super()

    // 玩家默认处于屏幕底部居中位置
    this.x = screenWidth / 2 - PLAYER_WIDTH / 2
    this.y = screenHeight - PLAYER_HEIGHT - 100

    this.width = PLAYER_WIDTH
    this.height = PLAYER_HEIGHT

    this.img.src = PLAYER_IMG_SRC

    this.addEventListener()
  }
  
  update(){
    if (this.over){return}
    
    this.display()
    this.visible = true

  }
  collision(ru){
   
  }
  touchStart(x,y){

    if ( this.checkIsFingerOnAir(x, y) ) {
      this.touched = true
      this.setAirPosAcrossFingerPosZ(x, y)
    }
  }
  touchMove(x,y){

    if ( this.touched )
        this.setAirPosAcrossFingerPosZ(x, y)
  }
  /**
   * 当手指触摸屏幕的时候
   * 判断手指是否在飞机上
   * @param {Number} x: 手指的X轴坐标
   * @param {Number} y: 手指的Y轴坐标
   * @return {Boolean}: 用于标识手指是否在飞机上的布尔值
   */
  checkIsFingerOnAir(x, y) {
    const deviation = 30

    return !!(   x >= this.x - deviation
              && y >= this.y - deviation
              && x <= this.x + this.width + deviation
              && y <= this.y + this.height + deviation  )
  }

  /**
   * 根据手指的位置设置飞机的位置
   * 保证手指处于飞机中间
   * 同时限定飞机的活动范围限制在屏幕中
   */
  setAirPosAcrossFingerPosZ(x, y) {
    let disX = x - this.width / 2
    let disY = y - this.height / 2

    if ( disX < 0 )
      disX = 0

    else if ( disX > screenWidth - this.width )
      disX = screenWidth - this.width

    if ( disY <= 0 )
      disY = 0

    else if ( disY > screenHeight - this.height )
      disY = screenHeight - this.height

      this.x = disX
      this.y = disY

      
  }

  
}
