// about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        counter:0
    },
    increment(event){    //组件内的函数需要写在methods里面,pages的不用
        this.setData({
            counter:++this.data.counter    //记得要写data
        })
        console.log(event)
    },
    taptaptap(event){
        console.log(event)
    },
    
    incrementcpn(){
        const my_sel=this.selectComponent('.sel-class');
        //直接修改组件中的data不太合理
        // my_sel.setData({
        //     counter:my_sel.data.counter+20
        // })
        my_sel.incre(10)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})