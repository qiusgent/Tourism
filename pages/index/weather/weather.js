var QQMapWX = require('../../../libs/qqmap-wx-jssdk');    
Page({
  data: {
    city: "",
    weaid: "",    // 城市气象编号
    // 数据
    pm2_5: "",
    pm2_5_remark: "",
    weatherArray: [{
      temperature: "",
      temperature_curr: "",
      weather: "",
      wind: "",
      weather_icon:""
    }, {
      temperature: "",
      weather: "",
      weather_icon:""
    }
    ],
    pd:[false,false,false]
  },
  onLoad(e) {
    wx.showLoading({
      title: '拼命加载中...',
    })
    this.getLocationInfo()
  },
  // 获取当前城市
  getLocationInfo() {
    let _this = this
 
    let qqmapsdk = new QQMapWX({
      key: 'NL2BZ-6A46Q-GDY5V-GHTNI-SEL3S-Q6FM5'
    });
 
    wx.getLocation({
      isHighAccuracy: true,
      type: "gcj02",
      success(res) {
        let { latitude, longitude } = res
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            console.log(res.result)
            let city = res.result.address_component.city
            _this.setData({ city })
 
            _this.getcityId()
          },
          fail: function (res) {
            console.log(res);
          },
        });
      }
    })
  },
  // 获取城市编号
  getcityId() {
    let _this = this
    wx.request({
      url: 'http://api.k780.com/?app=weather.city&areaType=cn&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
      method: "GET",
      dataType: "json",
      success: (res) => {
        let dtList = res.data.result.dtList
        for (var key in dtList) {
          if (_this.data.city.indexOf(dtList[key].cityNm) != -1) {
            _this.setData({ weaid: dtList[key].weaId })
            break
          }
        }
        _this.SearchCityWeather()
      },
      fail: (result) => {
        wx.showToast({
          title: '获取城市编号失败',
          icon: "error"
        })
      },
 
    })
  },
  // 获取当前城市的天气指数
  SearchCityWeather() {
    let _this = this
    // 获取今天天气
    wx.request({
      url: 'http://api.k780.com:88/?app=weather.today&weaid=' + _this.data.weaid + '&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
      method: "GET",
      dataType: "json",
      success: (res) => {
        let resultArray = res.data.result
        console.log(resultArray)
        _this.setData({
          'weatherArray[0].temperature': resultArray.temperature,
          'weatherArray[0].temperature_curr': resultArray.temperature_curr,
          'weatherArray[0].weather': resultArray.weather,
          'weatherArray[0].wind': resultArray.wind + " " + resultArray.winp
        })
      },
      fail: (result) => {
        wx.showToast({
          title: '获取当前城市天气失败',
          icon: "error"
        })
      },
      complete:()=>{
        _this.setData({'pd[0]':true})
      }
    })
    // 获取pm2.5
    wx.request({
      url: 'http://api.k780.com/?app=weather.pm25&weaId=' + _this.data.weaid + '&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
      method: "GET",
      dataType: "json",
      success: (res) => {
        let resultArray = res.data.result
        console.log(resultArray)
        _this.setData({
          pm2_5: resultArray.aqi_levnm,
          pm2_5_remark: resultArray.aqi_remark
        })
      },
      fail: (result) => {
        wx.showToast({
          title: '获取当前城市天气失败',
          icon: "error"
        })
      },
      complete:()=>{
        _this.setData({'pd[1]':true})
      }
    })
    // 获取未来天气
    wx.request({
      url: 'http://api.k780.com:88/?app=weather.future&weaid='+_this.data.weaid+'&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
      method: "GET",
      dataType: "json",
      success: (res) => {
       let resultArray = res.data.result
       console.log(resultArray)
 
       _this.setData({
        'weatherArray[0].weather_icon': resultArray[0].weather_icon,
        'weatherArray[1].weather_icon': resultArray[1].weather_icon,
        'weatherArray[1].temperature': resultArray[1].temperature,
        'weatherArray[1].weather': resultArray[1].weather
      })
      },
      fail: (result) => {
        wx.showToast({
          title: '获取未来城市天气失败',
          icon:"error"
        })
      },
      complete:()=>{
        _this.setData({'pd[2]':true})
      }
    })
 
    let Interval = setInterval(()=>{
      if(_this.data.pd[0] && _this.data.pd[1] &&_this.data.pd[2]){
        wx.hideLoading()
        console.log("关闭")
        clearInterval(Interval)
      }
    },500);
  }
})