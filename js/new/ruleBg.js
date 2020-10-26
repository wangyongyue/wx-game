import Rule from './rule'

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = 'images/bg.jpg'
const BG_WIDTH     = 512
const BG_HEIGHT    = 512

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class RuleBg extends Rule {
  constructor() {
    super()
    this.x = 0
    this.y = 0
    this.width = BG_WIDTH
    this.height = BG_HEIGHT
    this.img.src = BG_IMG_SRC

    this.audio.loop = true
    this.audio.src  = 'audio/bgm.mp3'
    

    this.top = 0

  }

  update() {
    if (this.over){
      this.audio.pause()
      return
    }else{
      this.audio.play()
    }

    this.ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      -screenHeight + this.top,
      screenWidth,
      screenHeight
    )

    this.ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      this.top,
      screenWidth,
      screenHeight
    )

    this.top += 2
    if ( this.top >= screenHeight )
      this.top = 0
  }

  
}
