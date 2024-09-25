// index.js
Page({
  data:{
    array: ['北京', '天津', '上海', '三亚'],
    index: 1,
    inputShowed: false,
    inputVal: '',
    imgSrcs:[
      { "id": 1,"src": "http://p1.meituan.net/hotel/428a0cd654da4162e86f0aaa42c80691_1_b8eb8f1aa8e3ef7a_1_beq5KqD61ASnd6kqCLQjijH/XdTCYtInMhn/PiG7vcgJB1OxSsMKsik8hO0k/y8A+DNCZwcSD+GTRWA+G4OPCRJ12jyXemPdnHhNnPdcMyzV+u/NcasSZyKRxvBSfg3h"},
      { "id": 2,"src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.maigoo.com%2Fupload%2Fimages%2F20200327%2F11344843988_1200x801.jpg&refer=http%3A%2F%2Fimage.maigoo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656495474&t=292577ea8acb989bf54064806c8ee00c"},
      { "id": 3,"src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsales.mafengwo.net%2Fmfs%2Fs16%2FM00%2FD7%2F20%2FCoUBUl6WfhiAHuZJAAMxtITHC2M88.jpeg&refer=http%3A%2F%2Fsales.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656495584&t=0c6636a0551f3caa7566ddb4d6caa5b5"},
      { "id": 4,"src": "../../images/4.jpg"},
      { "id": 5,"src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F202106%2F13%2F153147brwfysocquakdp92.jpg&refer=http%3A%2F%2Fclubimg.club.vmall.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656495800&t=590ac792940ef668c3a6bd10a618d19c"}],
    tabList:[
      {"title":"天津古文化街旅游区","id": 1,"src": "http://p0.meituan.net/hoteltdc/43572d0c9c332139c5296bb6e79e8941_1_b8eb8f1aa8e3ef7a_1_/Yhl5UN79G/U1HyTTuXRVXJQPuUrPCWSoMbNCTQUUUIkPmKpHXPPfTNJG3So0jKU92OgKKauV45i2JwDo8jpRLf0ja2mSTDl7JAK+pWFOFwXbHw2TKN7jvIg8V+USnMn"},
      { "title":"盘山","id": 2,"src": "	https://p0.meituan.net/hotel/eebb1541dd304e598dc19b4b06276f251100188.png@275w_156h_1e_1c"},
      {"title":"天津之眼", "id": 3,"src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0609%252Fcc8bb5e3j00qufd2q00f5c000u000k4m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656494110&t=6370ea0797b81812eef2001a0d3f7e1e"},
      { "title":"方特欢乐世界","id": 4,"src": "https://p0.meituan.net/travel/4687fa7d910be48490149512e318a3b3357773.png@275w_156h_1e_1c"},
      {"title":"天津欢乐谷", "id": 5,"src": "https://p1.meituan.net/tdctraveldark/3a26401a487c8840af164ae6e2f4bc814029566.jpg@275w_156h_1e_1c"}
    ],
    tabs: ["美食", "景点", "酒店"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    
    job:[],
    jobList:[],
    id:'',
    isClick:false,
    isClick1:false,
    isClick2:false,
    jobStorage:[],
    jobId:''
  },
  showInput() {
    wx.navigateTo({ url: '/pages/index/search/search' });
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
//   onLoad: function () {
//     var that = this;
//     wx.getSystemInfo({
//         success: function(res) {
//             that.setData({
//                 sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
//                 sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
//             });
//         }
//     });
// },
tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
},
//收藏
  haveSave(e){
    if(!this.data.isClick == true){
      let jobData = this.data.jobStorage;
      jobData.push({
        jobid:jobData.length,
        id:this.data.job.id
      })
      wx.setStorageSync('jobData', jobData);
      wx.showToast({
        title: '谢谢你喜欢我',
        icon:'none',
        duration: 1500,
      });
    }else{
      wx.showToast({
        title: '哎呀，下次再来哦',
        icon:'none',
        duration: 1500,
      })
    }
    this.setData({
      isClick:!this.data.isClick
    })
  },
  haveSave1(e){
    if(!this.data.isClick1 == true){
      let jobData = this.data.jobStorage;
      jobData.push({
        jobid:jobData.length,
        id:this.data.job.id
      })
      wx.setStorageSync('jobData', jobData);
      wx.showToast({
        title: '谢谢你喜欢我',
        icon:'none',
        duration: 1500,
      });
    }else{
      wx.showToast({
        title: '哎呀，下次再来哦',
        icon:'none',
        duration: 1500,
      })
    }
    this.setData({
      isClick1:!this.data.isClick1
    })
  },
  haveSave2(e){
    if(!this.data.isClick2 == true){
      let jobData = this.data.jobStorage;
      jobData.push({
        jobid:jobData.length,
        id:this.data.job.id
      })
      wx.setStorageSync('jobData', jobData);
      wx.showToast({
        title: '谢谢你喜欢我',
        icon:'none',
        duration: 1500,
      });
    }else{
      wx.showToast({
        title: '哎呀，下次再来哦',
        icon:'none',
        duration: 1500,
      })
    }
    this.setData({
      isClick2:!this.data.isClick2
    })
  },
  tabList:function(){
    wx.switchTab({ 
      url:'/pages/service/service'
    })
  },
  recommend:function(){
    wx.navigateTo({
      url: '/pages/index/recommmend/recommmend',
    })
  },

  plan:function(){
    wx.navigateTo({
      url: '/pages/index/plan/plan',
    })
  },
  food:function(){
    wx.navigateTo({
      url: '/pages/index/food/food?',
    })
  },
  video:function(){
    wx.navigateTo({
      url: '/pages/index/video/video',
    })
  },
  weather:function(){
    wx.navigateTo({
      url: '/pages/index/weather/weather',
    })
  },
  cheat:function(){
    wx.navigateTo({
      url: '/pages/index/cheat/cheat',
    })
  },
  ridership:function(){
    wx.navigateTo({
      url: '/pages/index/ridership/ridership',
    })
  },
})
