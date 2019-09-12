// const app = getApp();
// const bathPath = app.globalData.bathPath

Page({
    data: {
        name: '',
        password: ''
    },
    nameInput: function (e) {
        this.setData({
            name: e.detail.value
        })
    },
    passwordInput: function (e) {
        this.setData({
            password: e.detail.value
        })
    },
    login: function () {
        wx.setStorageSync('name', this.data.name)
        wx.setStorageSync('password', this.data.password)
        wx.switchTab({
            url: '/pages/home/home'
        })
    }
})