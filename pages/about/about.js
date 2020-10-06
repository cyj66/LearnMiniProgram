// about/about.js
import request from '../../service/network.js'   //不能用绝对路径
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
        //1、发送携带参数的get请求
        // wx.request({
        //   url: 'http://152.136.185.210:8000/api/w6/home/data',
        //   data:{
        //       type:'sell',
        //       page:1
        //   },
        //   success:function(res){
        //       console.log(res)
        //   }
        // })
        //2、发送携带参数的post请求
        // wx.request({
        //   url: 'http://httpbin.org/post',
        //   method:"post",    //必写，否则默认get请求
        //   data:{
        //       name:"cyj",
        //       age:18
        //   },
        //   success:function(res){
        //       console.log(res)
        //   },
        //   fail:function(err){
        //       console.log(err)
        //   }
        // })
        //3、使用封装的request
        request({
            url:'http://152.136.185.210:8000/api/w6/recommend'
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
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