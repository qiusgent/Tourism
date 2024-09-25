Page({
  data: {
  },
})
//组成
Component({
  data: {
    animationData: {}
  },
  /**
   * 函数
   */
  methods: {
    
  },

  lifetimes:{
    ready(){
      this.animationData.translate(0,25).step()
      .translate(0, -7).step()
      this.setData({
        animationData: this.animationData.export()
    })
    }
  },
  attached(){
    this.animationData = wx.createAnimation({
      duration: 1000,
      delay: 500,
      timingFunction: 'ease'
    })
     // 第二种方式通过组件的生命周期函数执行代码
   },
 })
 