//注册小程序实例
App({
    //生命周期函数
    //1.小程序初始化后执行，可以在后台存活5分钟
    onLaunch:function(){
        console.log("小程序初始化完成：onLaunch")
        //获取用户信息（法1），也可以放在onShow，但请求会比较频繁
        wx.getUserInfo({
          success:function(res){
              console.log(res)
          }
        })
        /*setTimeout(()=>{
            const err=new Error()
            throw err     //手动抛出错误
        },3000)*/
    },
    //2.小程序界面显示出来后执行
    onShow:function(options){
        console.log("界面显示出来：onShow")
        //一、判断小程序的进入场景,在onLaunch中也可
        console.log(options)   
        switch(options.scene){
            case 1001:
                break;
            case 1005:
                break
        }

    },
    //3.小程序隐藏后执行
    onHide:function(){
        console.log("界面隐藏：onHide")
    },
    //4.小程序发生错误时执行
    onError:function(){
        console.log("小程序出错：onError")
    },
    //亦可定义全局数据
    globalData:{
        name:"coderwhy",
        age:18
    }
})