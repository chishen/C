const app = getApp();
Page({
    data: {
        item: {
            product_id: '', //序号
            product: '', //货号
            name: '', //名称
            format: '', //规格
            size: '', //尺寸
            shelf_size: '', //搭配排骨架尺寸
            height: '', //厚度
            model: '', //型号
            type: '', //品类
            low_price: '', //批发价
            mid_price: '', //拿货价
            high_price: '', //销售价
            table: '', //来自表 
            source: '', //来源
            material: '', //材质
            bed_box: '', //是否带床箱
            foot_color: '', //出木/脚色
            color: '', //配色方案
            info: '' //备注
        },
        name: '', //用户登录名
        password: '', //用户登录密码
    },
    onShow: function () {
        let item = app.globalData.productDetail;
        this.setData({
            item: item,
            name: wx.getStorageSync('name'),
            password: wx.getStorageSync('password'),
        }) 
    }
})