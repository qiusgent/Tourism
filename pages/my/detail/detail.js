
Page({
  data: {
    imgUrl:'/images/shenping.jpg',//初始化头像
    array: ['天津电子信息职业技术学院', '天津职业技术师范大学', '天津财经大学', '天津中德应用技术大学','天津青年职业学院','天津现代职业技术学院','天津轻工职业技术学院','天津海运职业学院','天津机电职业技术学院'],
    index: 0,
  array1: ['计算机应用技术', '软件技术', '移动应用开发', '云计算技术应用','大数据技术','人工智能技术应用','建筑设计','动漫制作技术','数字媒体技术院','广播影视节目制作等专业'],
  index1: 0,
  date: '2016-09-01',
  hideToast: false,
  toast: false,

  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value,
    });
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindPickerChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index1: e.detail.value,
    });
  },
  pickerChange:function(e){
       //设置数据
    this.setData({
      'picker.index':e.detail.value
    })
  },
  nameChange:function(e){
    this.checkName(e.detail.value)
  },
  phoneChange:function(e){
    this.checkPhone(e.detail.value)
  },
  checkName:function(data){
    var reg=/^[\u4E00-\u9FA5A-Za-z]+$/ ;
    return this.check(data, reg,'姓名输入错误！')
  },
  checkPhone:function(data){
    var reg=/^(((13)|(15)|(17)|(18))\d{9})$/
    return this.check(data, reg,'手机号码输入有误！')
  },
  check:function(data, reg, errMsg){
    if(!reg.test(data)){
      wx.showToast({
        title: errMsg,
        icon:'none',
        duration:1500 //持续时间
      })
      return false
    }
    return true
  },
  formSubmit:function(e){
    var name=e.detail.value.name
    var phone=e.detail.value.phone
    if (this.checkName(name) && this.checkPhone(phone)){
      //在此处可编写代写代码将e.detail.value提交到服务器
      wx.showToast({
        title: '提交成功',
        icon:'success',
        duration:1500
      })
    }
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
  openToast() {
    this.setData({
      toast: true,
    });
    setTimeout(() => {
      this.setData({
        hideToast: true,
      });
      setTimeout(() => {
        this.setData({
          toast: false,
          hideToast: false,
        });
      }, 300);
    }, 3000);
  },

})