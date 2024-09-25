// pages/index/video/video.js
Page({
  data: {
    src:'https://vd3.bdstatic.com/mda-mmee19692wsvz0fk/1080p/cae_h264/1639564152490314027/mda-mmee19692wsvz0fk.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1654162238-0-0-2058c339a4723f7f3e708a2ac87a77f4&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0038407339&vid=6237603557292641244&abtest=101830_1-102148_2-102599_1-17451_2-3000225_2-3000232_1&klogid=0038407339',
    danmuList:[
      {text:'时髦天津我可以啊哈哈',color:'#fff',time:1},
      {text:'这么美，为何点赞这么少',color:'#fff',time:4},
    ]
  },
  videoContext:null,
  inputValue:'',
  onReady :function(){
    this.videoContext=wx.createVideoContext('myVideo')
  }, 
  bindInputBlur:function(e){
    this.inputValue= e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color: '#fff'
    })
  },
})