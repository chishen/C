const app = getApp();
Page({
    data: {
        avatarUrl: '', //用户头像
        nickName: '', //用户昵称
        user_id: '', //用户id
    },
    onLoad: function () {
        let userInfo = app.globalData.userInfo || wx.getStorageSync('userInfo');
        this.setData({
            avatarUrl: userInfo.avatarUrl,
            nickName: userInfo.nickName
        })
    },
    onShow: function () {
        this.setData({
            user_id: wx.getStorageSync('user_id')
        })
    },
    //修改密码
    changePassword: function () {
        wx.navigateTo({
            url: '/pages/login/login'
        })
    },
    //我的客户
    myGuest: function () {
        wx.navigateTo({
            url: '/pages/myGuest/myGuest'
        })
    },
    //客户模式
    switchIdentity: function (e) {
        app.globalData.identityGuest = e.detail.value;
    },
    //用户授权
    goAuthorize: function () {
        wx.navigateTo({
            url: '/pages/authorize/authorize'
        })
    }
})