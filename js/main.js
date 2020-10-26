

import Rule1    from './new/rule1'
import Rule2    from './new/rule2'
import Rule3  from './new/rule3'
import RuleBg from './new/ruleBg'
import Tank    from './new/tank'
import RuleInfo from './new/ruleInfo'


/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId    = 0
    this.restart()
  }

  restart() {
  
    this.rule1    = new Rule1()
    this.rule2    = new Rule2()
    this.rule3 = new Rule3()
    this.ruleBg = new RuleBg()
    this.ruleInfo = new RuleInfo()

    

    this.tank = new Tank()

    this.tank.push(this.rule1,this.rule2,this.rule3,this.ruleBg,this.ruleInfo)

    // // 清除上一局的动画
    // window.cancelAnimationFrame(this.aniId);

    this.bindLoop     = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
// 实现游戏帧循环
  loop() {
    this.tank.loop()
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // databus.animations.forEach((ani) => {
    //   if ( ani.isPlaying ) {
    //     ani.aniRender(ctx)
    //   }
    // })

  }
  
}
