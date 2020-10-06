App({
    globalData:{
        token:''
    },
    onLaunch:function(){
        //1.先从缓存中取出token
        const token=wx.getStorageSync('token')
        //2.判断token是否有值
        if(token&&token.length>0){
            //3.验证token是否过期
            this.check_token(token)
        }
        else{
            this.login()
        }
    },
    //验证过期
    check_token(token){
        console.log('执行了验证token的操作')
        wx.request({
          url: 'http://123.207.32.32:3000/auth',
          method:'post',
          header:{token},
          success:res=>{
              if(!res.data.errCode){    //errCode后端整好的
                console.log('token有效')
                this.globalData.token=token;
              }else{
                  this.login()
              }
          },
          fail:err=>console.log(err)
        })
    },
    //登录操作
    login(){
        console.log('执行了登录操作')
        wx.login({
            //code只有5分钟有效
            success:res=>{
                console.log(res)
                //1.获取code
                const code=res.code;
                //2.将code发送给服务器
                wx.request({
                    url: 'http://123.207.32.32:3000/login',
                    method:'post',
                    data:{code},
                    success:res=>{
                        //1.取出token
                        const token=res.data.token;
                        //2.将token保存在globalData中
                        this.globalData.token=token;
                        //3.小程序一关闭就会被回收，因此要进行本地存储
                        wx.setStorageSync('token', token)
                    }
                })
            }
        })
    }
})