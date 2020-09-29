// home/home.js
//获取App()产生的实例对象
const app=getApp()
console.log(app.globalData.name)
Page({
    //2.初始化一些数据
    data: {
        name:'coderwhy',
        age:18,
        students:[
            {id:0,name:'kobe',age:30},
            {id:1,name:'james',age:28},
            {id:2,name:'curry',age:6},
            {id:3,name:'why',age:18}
        ],
        counter:0,
        list:[]
    },
    handleBtnClick(){
        //错误，没有双向绑定，界面不会刷新
        //this.data.counter++;

        this.setData({
            counter:this.data.counter+1
        })
    },
    //3.监听wxml的事件
    handleGetUserInfo(event){
        console.log(event)
    },

    //1.监听页面的生命周期函数
    //页面被加载出来
    onLoad(){
        console.log('onLoad')
        wx.request({
            url:"http://152.136.185.210:8000/api/z8/recommend",
            success:(res)=>{
                console.log(res)
                const data=res.data.data.list
                this.setData({
                    list:data 
                })
            }
        })
    },
    //页面显示出来
    onShow(){
        console.log('onShow')
    },
    //页面初次渲染完成
    onReady(){
        console.log('onReady')
    },
    //页面隐藏
    onHide(){
        console.log('onHide')
    },
    //离开该页面
    onUnload(){
        console.log('onUnload')
    },
})