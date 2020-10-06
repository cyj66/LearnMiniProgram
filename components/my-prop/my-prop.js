// components/my-prop/my-prop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        //title:String
        title:{
            type:String,
            value:"默认值",
            observer:function(newval,oldval){
                console.log(newval,oldval)    //监听是否有值传入
            }
        }
    },
    externalClasses:['titleclass']

    
})
