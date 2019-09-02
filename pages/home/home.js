const app = getApp();
Page({
    data: {
        List: [], //搜索结果列表
        searchValue: '', //搜索的值
        identityGuest: false, //是否为客户模式
        name: '', //用户登录名
        password: '', //用户登录密码
    },
    onLoad: function () {
        this.search();
    },
    onShow: function () {
        this.setData({
            identityGuest: app.globalData.identityGuest,
            name: wx.getStorageSync('name'),
            password: wx.getStorageSync('password'),
        })
    },
    change: function (e) {
        this.setData({
            searchValue: e.detail.value
        })
    },
    search: function () {
        wx.showLoading({
            title: '加载中',
        })
        let that = this;
        wx.request({
            url: app.globalData.basePath + '/kuka/product',
            data: {
                name: that.data.searchValue,
                timeStamp: Date.parse(new Date())
            },
            success: function (res) {
                let List = res.data.List || []
                List = List.map(item => {
                    if(item.type === '床') {
                        item.xs_price = (item.low_price*1.7).toFixed(1)
                    } else if(item.type === '床垫') {
                        item.xs_price = (item.low_price*1.8).toFixed(1)
                    } else {
                        item.xs_price = (item.low_price*1.6).toFixed(1)
                    }
                    return item
                })
                that.setData({
                    List: List
                })
            },
            complete: function () {
                wx.hideLoading();
            }
        })
    },
    detail: function (e) {
        let detail = this.data.List[e.currentTarget.dataset.index];
        app.globalData.productDetail = detail;
        wx.navigateTo({
            url: '/pages/detail/detail'
        })
    }
})