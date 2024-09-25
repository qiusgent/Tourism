// pages/scene/scene.js
Page({
  data: {
    iosDialog2: false,
    androidDialog2: false,
    tabList:[
      {"title":"“天津之眼”摩天轮，又称天津永乐桥摩天轮，位于天津市河北区李公祠大街与五马路交口的永乐桥上，跨海河连接河北区与红桥区，是一座跨河建设、桥轮合一的摩天轮，兼具观光和交通功用，是天津地标之一。 于2008年4月22日基本完成安装建设；于2009年4月16日正式对外开放。",
      "id": 1,
      "src": "http://p1.meituan.net/hotel/428a0cd654da4162e86f0aaa42c80691_1_b8eb8f1aa8e3ef7a_1_beq5KqD61ASnd6kqCLQjijH/XdTCYtInMhn/PiG7vcgJB1OxSsMKsik8hO0k/y8A+DNCZwcSD+GTRWA+G4OPCRJ12jyXemPdnHhNnPdcMyzV+u/NcasSZyKRxvBSfg3h"},
      { "title":"陕西省商洛市金丝峡景区，位于商洛市商南县东南部新开岭腹地。距商南县城40公里，距金丝峡镇18公里。景区内有白龙峡、黑龙峡、青龙峡、石燕寨和丹江源五大景区，一百多个景点，峡谷总长度20.5公里，纵深10多公里。2015年10月，批准为国家AAAAA级旅游景区、同时为国家地质公园，是秦岭地区罕见的而且是最完整的嶂谷地质构造。",
      "id": 2,
      "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13631897908%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656840608&t=6f442d70ad6d07739a82d61269519e01"},
      {"title":"那拉提旅游风景区，位于新疆新源县境内，地处天山腹地，伊犁河谷东端，总规划面积960平方公里。风景区自南向北由高山草原观光区、哈萨克民俗风情区、旅游生活区组成。", 
      "id": 3,
      "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200408%2F65b8edce730a4b158e3f8d55aff1c492.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656840929&t=2f58aad6433fb5cd8c49a991d99cf52b"},
      { "title":"广州长隆旅游度假区是综合性主题旅游度假区，总占地面积1万亩，集旅游景区、酒店餐饮、娱乐休闲于一体,拥有长隆欢乐世界、长隆国际大马戏、长隆野生动物世界、长隆水上乐园、长隆飞鸟乐园、广州长隆酒店、香江酒店、长隆高尔夫练习中心和香江酒家等设施。",
      "id": 4,
      "src": "https://bkimg.cdn.bcebos.com/pic/dcc451da81cb39dbb6fd1b1ea8461e24ab18972b9a61"},
      {"title":"克拉玛依魔鬼城属于雅丹地貌，在大自然鬼斧神工长期作用下，形成了一个梦幻般的迷宫世界。由于风雨剥蚀，地面形成深浅不一的沟壑，裸露的石层被狂风雕琢得奇形怪状，在起伏的山坡上，布满血红、湛蓝、洁白、橙黄的各色石子，宛如魔女遗珠，更增添了几许神密色彩，内城地处风口，四季多风。每当大风乔来，黄沙遮天，大风在风城里激荡回旋，凄厉呼啸，如同鬼哭，“魔鬼城”因此面得名。", 
      "id": 5,
      "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12919274835%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656841401&t=9140c035cd405a2588e44898ae0fab8a"}
    ],
  },
  loading:function(e) { 
    wx.redirectTo({
      url: '/pages/index/search/search'
  })
  },
  openIOS2() {
    this.setData({
      iosDialog2: true,
    });
    
  },
  close() {
    this.setData({
      iosDialog2: false,
      androidDialog2: false,
    });
  },
  map:function(e){
    wx.reLaunch({
      url: '/pages/map/map',
    })

  },
 
 
})