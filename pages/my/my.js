// pages/person/person.js
Page({

  data: {
    imgUrl:'/images/shenping.jpg',//初始化头像
  },
  changeAvatar:function(e){
    wx.chooseImage({
      count: 1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:(res)=>{
        //tempFilePaths可以作为img标签的src属性显示图片
        var tempFilePaths=res.tempFilePaths
        this.setData({
          imgUrl:tempFilePaths,
        })
      }
    })
  },

  info:function(){
    wx.navigateTo({
      url: '/pages/my/detail/detail',
    })
  },
  address:function(){
    wx.navigateTo({
      url: '/pages/index/weather/weather',
    })
  },
  contact:function(){
    wx.navigateTo({
      url: '/pages/my/question/question',
    })
  },
})