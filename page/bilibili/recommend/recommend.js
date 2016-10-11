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
    paint_plates:[{"imgpath":"/static/image/live/87e003d145b908ea31ce93d6a190e1cd8599595f.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"使命召唤OL漫画第二话ING","userName":"麻辣图图","audience":"0.1万"},
                      {"imgpath":"/static/image/live/oYYBAFbQJEuAdiIcAADFjDo4fc8827.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"今晚画作业","userName":"丹艾凡","audience":"1.7万"},
                      {"imgpath":"/static/image/live/f4a0c0f3dd4fb2b3b69b250e6ecca508f8671d10.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"宫卫=。=","userName":"暗雪喜欢晚上不睡觉","audience":"0.5万"},
                      {"imgpath":"/static/image/live/973c57ba2227cb0fcbd24266ee8e3edaeb81fe5f.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"巨乳研究中心群582877192","userName":"非非有","audience":"0.6万"}],
              
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