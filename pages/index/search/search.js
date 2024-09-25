// pages/index/search.js
Page({
  data: {
    inputShowed: false,
    inputVal: '',
    searchValue: '',
    dialogShow: false,
    historyWords: [{ title: "天津之眼" }, { title: "五大道文化旅游区" }, { title: "古文化街旅游区" }, { title: "盘山风景区" }, { title: "独乐寺" }, { title: "天津大沽口炮台遗址" }, { title: "杨柳青博物馆" }, { title: "凯旋王国主题乐园" }, { title: "天津宝成博物苑" }, { title: "北宁公园" }, { title: "天津热带植物观光园" }],
    popularWords: [{ title: "天津之眼" }, { title: "云南丽江古城" }, { title: "广西桂林" }, { title: "上海外滩" }, { title: "颐和园" }, { title: "八达岭" }, { title: "喀拉峻风景区" }, { title: "德天大瀑布" }, { title: "故宫" }, { title: "额济纳胡杨林景区" }, { title: "巴松措" }, { title: "恩施大峡谷" }, { title: "世界魔鬼城景区" }],
  },
  handleClearHistory: function () {
    var _this = this
     wx.showModal({
      content: '确认清除所有历史记录?',
      success: function (res) {
        if (res.confirm) {
           wx.removeStorage({
            key: 'historyWords',
            success: function (res) {
              _this.setData({
                historyWords: []
              })
              wx.setStorageSync("historyWords", [])
            },
          })
        } else {
          console.log("点击取消")
        }
      },
    })
  },
  // showInput() {
  //   this.setData({
  //     inputShowed: true,
  //   });
  // },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value,
    });
  },
  handleHistoryTap:function(){
    wx.reLaunch({
      url: '/pages/scene/scene',
    })
  }
})
