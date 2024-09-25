// pages/service/service.js
Page({
  mixins: [require('../../mixin/common')],
  data: {
    gallery: false,
    gallery1: false,
    gallery2: false,
    gallery3: false,
    gallery4: false,
  },
  close() {
    this.setData({
      gallery: false,
    });
  },
  open() {
    this.setData({
      gallery: true,
    });
  },

  close1() {
    this.setData({
      gallery1: false,
    });
  },
  open1() {
    this.setData({
      gallery1: true,
    });
  },

  close2() {
    this.setData({
      gallery2: false,
    });
  },
  open2() {
    this.setData({
      gallery2: true,
    });
  },

  close3() {
    this.setData({
      gallery3: false,
    });
  },
  open3() {
    this.setData({
      gallery3: true,
    });
  },

  close4() {
    this.setData({
      gallery4: false,
    });
  },
  open4() {
    this.setData({
      gallery4: true,
    });
  },
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '13700000000',
    })
  },


 
})