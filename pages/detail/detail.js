// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('页面退出');
        //获取当前在栈中的页面
        const pages=getCurrentPages();
        //console.log(pages);
        const home=pages[0];
        home.setData({
            title:'呼呼呼'
        })
    }

})