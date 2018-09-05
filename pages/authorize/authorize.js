const app = getApp();
Page({
    data: {
        user_id: wx.getStorageSync('user_id')
    },
    onShow: function () {
        wx.request({
            url: app.globalData.basePath + '/kuka/userList',
            data: {
                user_id: this.data.user_id
            },
            method: 'get', 
            success: function(res){
                console.log(res)
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
})