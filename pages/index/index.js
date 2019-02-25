//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    swiper:{ 
      userInfo: {},
      imgUrls: [
          {
              id:1,
          name: 'https://i3.meishichina.com/attachment/magic/2019/02/21/2019022115507147248098197577.jpg'
          },
          {
              id: 1,
            name: 'https://i3.meishichina.com/attachment/magic/2019/01/08/2019010815469162001548197577.jpg'
          },
          {
              id: 1,
            name: 'https://i3.meishichina.com/attachment/magic/2018/12/21/2018122115453575666698197577.jpg'
          },
          {
              id: 1,
            name: 'https://i3.meishichina.com/attachment/magic/2018/11/19/2018111915425940957398197577.jpg'
          } 
      ],
      indicatorDots: true,//是否显示面板指示点
      indicatorColor:'rgba(249,245,236,0.6)',
      indicatorActiveColor:'#FFCC66',
      autoplay: true,//是否自动切换
      interval: 5000,//自动切换时间间隔
      duration: 500,//滑动动画时长
      circular: true//是否自动切换
    },
    todayListArr:[
      {
        imgUrl:'../img/1.jpg',
        text:'西红柿牛腩',
        id:1
      }, 
      {
        imgUrl: '../img/1.jpg',
        text: '西红柿牛腩',
        id: 1
      },
      {
        imgUrl: '../img/1.jpg',
        text: '西红柿牛腩',
        id: 1
      }, 
      {
        imgUrl: '../img/1.jpg',
        text: '西红柿牛腩',
        id: 1
      },
      {
        imgUrl: '../img/1.jpg',
        text: '西红柿牛腩',
        id: 1
      },
      {
        imgUrl: '../img/1.jpg',
        text: '西红柿牛腩',
        id: 1
      },
      {
        imgUrl: '../img/1.jpg',
        text: '西红柿牛腩',
        id: 1
      }
    ],
    isLoading:false,//正在加载中
    noMore:true//是否还有更多数据
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
