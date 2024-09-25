// pages/map/map.js
Page({
  data: {
    latitude:39.154457,
    longitude:117.186755,
    markers:[{
      iconPath:'/images/navi.png',
      id:0,
      latitude:39.154457,
      longitude:117.186755,
      width:40,
      height:40
    },
    {
      iconPath: '/images/navi.png',
      id: 1,
      latitude: 39.144026,
      longitude: 117.192294,
      width: 40,
      height: 40,
      title: "天津古文化街"
    },
    {
      iconPath: '/images/navi.png',
      id: 2,
      latitude: 40.0945,
      longitude: 117.28075,
      width: 40,
      height: 40,
      title: "盘山"
    },
    {
      iconPath: '/images/navi.png',
      id: 3,
      latitude: 39.154082,
      longitude: 117.739271,
      width: 40,
      height: 40,
      title: "天津方特欢乐世界"
    },
    {
      iconPath: '/images/navi.png',
      id: 4,
      latitude: 39.187634,
      longitude: 117.47646,
      width: 40,
      height: 40,
      title: "天津欢乐谷"
    }
  ]
  },
  // buttonTap:function(){
  //   wx.getLocation({
  //     type:'gcj02',
  //     success:function(res){
  //       wx.openLocation({
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //       })
  //     }
  //   })
  // },
  markertap:function(e){
      if (e.detail.markerId===0) {
          wx.openLocation({
            latitude:39.154457,
            longitude:117.186755,
      name:'天津之眼摩天轮',
      address:'天津市红桥区三岔河口永乐桥上(近大悲禅院商业区)'
    })
      }
   else if(e.detail.markerId===1){
      wx.openLocation({
        latitude: 39.144026,
        longitude: 117.192294,
        name: '天津古文化街',
        address: '天津市南开区通北路'
   })
    }
    else if(e.detail.markerId===2){
      wx.openLocation({
        latitude: 40.0945,
        longitude: 117.28075,
        name: '盘山风景名胜区',
        address: '天津市蓟州区莲花岭村'
   })
    }
    else if(e.detail.markerId===3){
      wx.openLocation({
        latitude: 39.154082,
        longitude: 117.739271,
        name: '天津方特欢乐世界',
        address: '天津市滨海新区中生大道4888号'
   })
    }
    else if(e.detail.markerId===4){
      wx.openLocation({
        latitude: 39.187634,
        longitude: 117.47646,
        name: '天津欢乐谷',
        address: '天津市东丽区东丽大道与东丽湖路交叉口'
   })
    }

  }

})