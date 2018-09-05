//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    count: 0
  },
  onLoad: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo);
              if (wx.getStorageSync('name') && wx.getStorageSync('password')) {
                wx.switchTab({
                  url: '/pages/home/home'
                })
              } else {
                wx.navigateTo({
                  url: '/pages/login/login'
                })
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    // this.getToken()
  },
  getToken: function () {
    wx.request({
      url: app.globalData.basePath + '/kuka/init',
      data: {},
      method: 'get',
      success: function(res){
        wx.setStorageSync('token', res.data)        
      }
    })
  },
  getUserInfo: function (e) {
    if (e.detail && e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      wx.setStorageSync('userInfo', e.detail.userInfo);
      // let userInfo = app.globalData.userInfo;
      wx.navigateTo({
        url: '/pages/login/login'
      })
      // wx.request({
      //   url: app.globalData.basePath + '/kuka/createUser',
      //   method: 'post',
      //   header: {
      //     ['x-csrf-token']: wx.getStorageSync('token')
      //   },
      //   data: {
      //     nickName: userInfo.nickName,
      //     avatarUrl: userInfo.avatarUrl,
      //     gender: (userInfo.gender == 1 ? '男' : (userInfo.gender == 2 ? '女' : '未知')),
      //     city: userInfo.city,
      //     province: userInfo.province,
      //     country: userInfo.country,
      //     language: userInfo.language,
      //     timeStamp: Date.parse(new Date())
      //   },
      //   success: function (res) {
      //     if (res.data && res.data.code == 200) {
      //       app.globalData.user_id = res.data.data.user_id;
      //       wx.setStorageSync('user_id', res.data.data.user_id);
      //       wx.navigateTo({
      //         url: '/pages/login/login'
      //       })
      //     }else {
      //       wx.showToast({
      //         title: res.data.msg,
      //         icon: 'none'
      //       })
      //     }
      //   }
      // })
    }
  },
  handleClick: function () {
    this.setData({
      count: ++this.data.count
    })
    if (this.data.count >= 5) {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
})
