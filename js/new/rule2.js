import Rule   from './rule'

const ENEMY_IMG_SRC = 'images/enemy.png'
const ENEMY_WIDTH   = 60
const ENEMY_HEIGHT  = 60

function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start)
}
let ruleList = []
export default class Rule2 extends Rule {
  constructor() {
    super()
    // 玩家默认处于屏幕底部居中位置
    this.x = 0
    this.y = 0

    this.width = ENEMY_WIDTH
    this.height = ENEMY_HEIGHT

    this.img.src = ENEMY_IMG_SRC

    this.speed = 5;
    this.frame = 1;

    this.y = -this.height
    this.x = rnd(0, window.innerWidth - ENEMY_WIDTH)
    this.visible = true
  }
  

  update() {
    if (this.over){return}
    
    this.visible = false

    this.frame += 1
    if (this.frame % 30 == 0) {
      if (this.rules.length > 10){
        var isE = false
        this.rules.forEach(element => {
          if (element.visible == false && isE == false){
            isE = true
             element.visible = true
             element.y = -this.height
             element.x = rnd(0, window.innerWidth - ENEMY_WIDTH)
          }
        });
      }else{
          let r = new Rule2()
          this.rules.push(r)
      }
    }

    this.rules.forEach(element => {
      if (element.visible == true){
        element.display()
        element.y += this.speed
        
        // 对象回收
        if ( element.y > window.innerHeight + element.height ){
             element.visible = false
        }
     }
    });
      
  }
  collision(ru){
    console.log(ru)
    console.log(ru.visible)
    this.visible = false
  }

  // 预定义爆炸的帧动画
  initExplosionAnimation() {
    let frames = []

    const EXPLO_IMG_PREFIX  = 'images/explosion'
    const EXPLO_FRAME_COUNT = 19

    for ( let i = 0;i < EXPLO_FRAME_COUNT;i++ ) {
      frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png')
    }

    this.initFrames(frames)
  }

  
}


