Page({
    data: {
        info: {}, //客户个人信息
        delBtnWidth: 150, //删除按钮宽度单位（rpx）
        startX: 0,
        showModal: false,
        product_edit: {
            product_id: 1,
            amount: 1,
            paid: 10,
            pending: 20,
            total: 30
        },
        list: [{
            product_id: 1,
            product: 'Ku009',
            type: '沙发',
            format: '两单一双两单一双两单一双两单一双两单一双',
            size: '100*200',
            amount: 2,
            paid: 99,
            pending: 199,
            total: 298
        }, {
            product_id: 1,
            product: 'Ku102',
            type: '沙发',
            format: '两单一双两单一双两单一双两单一双两单一双',
            size: '100*200',
            amount: 1,
            paid: 99,
            pending: 199,
            total: 298
        }],
    },
    onShow: function() {
        this.setData({
            info: wx.getStorageSync('guest_info')
        })
    },
    //触摸开始
    touchStart: function(e) {
        //判断是否只有一个触摸点
        if (e.touches.length == 1) {
            this.setData({
                //记录触摸起始位置的X坐标
                startX: e.touches[0].clientX
            });
        }
    },
    //触摸中
    touchMove: function(e) {
        let that = this;
        if (e.touches.length == 1) {
            //记录触摸点位置的X坐标
            let moveX = e.touches[0].clientX;
            //计算手指起始点的X坐标与当前触摸点的X坐标的差值
            let disX = that.data.startX - moveX;
            //delBtnWidth 为右侧按钮区域的宽度
            let delBtnWidth = that.data.delBtnWidth;
            let txtStyle = "";
            if (disX == 0 || disX < 0) { //如果移动距离小于等于0，文本层位置不变
                txtStyle = "left:0rpx";
            } else if (disX > 0) { //移动距离大于0，文本层left值等于手指移动距离
                txtStyle = "left:-" + disX + "rpx";
                if (disX >= delBtnWidth) {
                    //控制手指移动距离最大值为删除按钮的宽度
                    txtStyle = "left:-" + delBtnWidth + "rpx";
                }
            }
            //获取手指触摸的是哪一个item
            let index = e.currentTarget.dataset.index;
            let list = that.data.list;
            //将拼接好的样式设置到当前item中
            list[index].txtStyle = txtStyle;
            //更新列表的状态
            this.setData({
                list: list
            });
        }
    },
    //触摸结束
    touchEnd: function(e) {
        let that = this
        if (e.changedTouches.length == 1) {
            //手指移动结束后触摸点位置的X坐标
            let endX = e.changedTouches[0].clientX;
            //触摸开始与结束，手指移动的距离
            let disX = that.data.startX - endX;
            let delBtnWidth = that.data.delBtnWidth;
            //如果距离小于删除按钮的1/2，不显示删除按钮
            let txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";
            //获取手指触摸的是哪一项
            let index = e.currentTarget.dataset.index;
            let list = that.data.list;
            list[index].txtStyle = txtStyle;
            //更新列表的状态
            that.setData({
                list: list
            });
        }
    },
    //编辑产品
    edit: function (e) {
        this.setData({
            showModal: true
        })  
    },
    formSubmit: function (e) {
        console.log(e.detail.value)
    },
    //关闭弹窗
    closeModal: function (e) {
        this.setData({
            showModal: false
        })
    },
    //返回首页
    goToHome: function () {
        wx.switchTab({
            url: '/pages/home/home'
        })
    }
})