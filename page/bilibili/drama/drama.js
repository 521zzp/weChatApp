var app = getApp();

Page({
  data:{
    // text:"这是一个页面"
    "user_face":app.user_face,
    "user_name":app.user_name,
    "is_scroll-y":true,
    live_siwpers:[{"imgpath":"/static/image/recommend_swiper/c89d65cb9c56d819c688464e712a38bb6e3dc3ac.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/785a892778b941f276a2208b68541be852445382.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/889c27bab8f2e2f7d412de9c8665fd9e48512f2f.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/89034a38a9415654004ecf66d6455cca8513830d.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/09c7f6f70de45e477ecdfc08b40cda77536ef996.jpg","url":"www.bilibili.com"}],
    indicatorDots: true,  
    vertical:false,
    autoplay:true, 
    siwper_interval:5000,
    siwper_duration:1000,
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