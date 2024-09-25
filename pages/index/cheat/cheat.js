// pages/index/cheat/cheat.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
    markers: [{
        id: 0,
        height: 30,
        width: 20,
        longitude: '',
        latitude: ''
    }]
  },
  onLoad(e) {
    this.getLoca() 
  },
  getLoca() {
    wx.getLocation().then(res => {
        console.log(res);
        this.setData({
            longitude: res.longitude,
            latitude: res.latitude,
            markers: [{
                id: 0,
                height: 30,
                width:20,
                longitude: res.longitude,
                latitude: res.latitude
            }]
        })
    })
},
sousuo:function(){
  wx.showModal({
    content: '未查询到欺诈行为',
  })
},


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})