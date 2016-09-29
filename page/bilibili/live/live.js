var app = getApp();

Page({
  data:{
    user_face:app.user_face,
    user_name:app.user_name,
    "is_scroll-y":true,
    live_siwpers:[{"imgpath":"/static/image/live_swiper01.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper02.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper03.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper04.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper05.jpg","url":"www.bilibili.com"}],
    indicatorDots: true,  
    vertical:false,
    autoplay:true, 
              
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})