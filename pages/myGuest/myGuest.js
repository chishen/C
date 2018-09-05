const app = getApp();
Page({
    data: {
        list: [{
            guest_id: 1,
            name: '池深',
            sex: '男',
            phone: '18344434543',
            address: '仓前街道仓前仓前街道仓前仓前街道仓前仓前街道仓前',
            msg: '按时打发打发'
        }, {
            guest_id: 2,
            name: 'cs',
            sex: '女',
            phone: '18344434543',
            address: '仓前街道',
            msg: '按时打发打发'
        }], //客户列表
        delBtnWidth: 150, //删除按钮宽度单位（rpx）
        startX: 0,
        addGuest: false, //新增客户弹窗
        // isMan: true, //性别
        editDetail: {
            name: '',
            sex: '',
            phone: '',
            address: '',
            msg: ''
        },
        isEdit: false
    },
    onLoad: function () {
    },
    //获取客户列表
    getList: function () {
        let user_id = app.globalData.user_id || wx.getStorageSync('user_id');
        wx.request({
            url: app.globalData.basePath + '/kuka/guestList',
            method: 'get',
            data: {
                user_id: user_id,
                timeStamp: Date.parse(new Date())
            },
            success: res => {
                console.log(res)
                this.setData({
                    list: [{
                        guest_id: 1,
                        name: 'cs',
                        sex: '男',
                        phone: '18344434543',
                        address: '仓前街道'
                    }, {
                        guest_id: 2,
                        name: 'cs',
                        sex: '男',
                        phone: '18344434543',
                        address: '仓前街道'
                    }]
                })
            }
        })
    },
    //跳转到客户详情
    guestDetail: function (e) {
        let index = e.currentTarget.dataset.index;
        wx.setStorageSync('guest_info', this.data.list[index]);
        wx.navigateTo({
            url: '/pages/guestDetail/guestDetail'
        })
    },
    //新增客户
    addGuest: function () {
        this.setData({
            addGuest: true
        })
    },
    //提交表单
    formSubmit: function (e) {
        let params = e.detail.value;
        let required_name = (params.name ? '' : '客户姓名不能为空');
        let required_sex = (params.sex ? '' : '客户性别不能为空');
        let required_phone = (params.phone ? '' : '客户电话不能为空');
        let required_address = (params.address ? '' : '客户地址不能为空');
        if (params.name && params.sex && params.phone && params.address) {
            params.user_name = app.globalData.userInfo.nickName || wx.getStorageSync('userInfo').nickName;
            params.user_id = app.globalData.user_id || wx.getStorageSync('user_id');
            params.timeStamp = Date.parse(new Date());
            console.log(wx.getStorageSync('userInfo'))
            wx.request({
                url: app.globalData.basePath + '/kuka/addGuest',
                method: 'post',
                header: {
                    ['x-csrf-token']: wx.getStorageSync('token')
                },
                data: params,
                success: res => {
                    this.setData({
                        addGuest: false
                    })
                    wx.showToast({
                        title: '新增客户成功'
                    })
                    this.getList();
                }
            })
        } else {
            wx.showToast({
                title: required_name || required_sex || required_phone || required_address,
                icon: 'none'
            })
        }

    },
    //关闭弹窗
    closeModal: function () {
        this.setData({
            addGuest: false,
            editDetail: {
                name: '',
                sex: '',
                phone: '',
                address: '',
                msg: ''
            },
            isEdit: false
        })
    },
    //触摸开始
    touchStart: function (e) {
        //判断是否只有一个触摸点
        if (e.touches.length == 1) {
            this.setData({
                //记录触摸起始位置的X坐标
                startX: e.touches[0].clientX
            });
        }
    },
    //触摸中
    touchMove: function (e) {
        let that = this;
        if (e.touches.length == 1) {
            //记录触摸点位置的X坐标
            let moveX = e.touches[0].clientX;
            //计算手指起始点的X坐标与当前触摸点的X坐标的差值
            let disX = that.data.startX - moveX;
            //delBtnWidth 为右侧按钮区域的宽度
            let delBtnWidth = that.data.delBtnWidth;
            let txtStyle = "";
            if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
                txtStyle = "left:0rpx";
            } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
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
    touchEnd: function (e) {
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
    //删除客户
    delete: function (e) {
        let index = e.currentTarget.dataset.index;
        let name = e.currentTarget.dataset.name;
        wx.showModal({
            title: '提示',
            content: '确认删除客户：' + name,
            showCancel: true,
            confirmText: '确认'
        })
    },
    //编辑客户
    edit: function (e) {
        let index = e.currentTarget.dataset.index;
        this.setData({
            editDetail: this.data.list[index],
            addGuest: true,
            isEdit: true
        })
    }
})