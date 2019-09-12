//app.js
const mtjwxsdk = require('./utils/mtj-wx-sdk.js');
const app = this

App({
  // onLaunch: () => {
  //   wx.login({
  //     success(res) {
  //       console.log(res,app, 11111)
  //       if (res.code) {
  //         //发起网络请求
  //         wx.request({
  //           url: app.globalData.basePath + '/kuka/login',
  //           data: {
  //             code: res.code
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  globalData: {
    userInfo: '', //用户信息
    productDetail: '', //产品详情
    identityGuest: false, //是否为客户模式
    user_id: 0,
    basePath: 'https://server.cshen.top',
  }
})