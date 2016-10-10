var app = getApp();

Page({
  data:{
    user_face:app.user_face,
    user_name:app.user_name,
    "is_scroll-y":true,
     indicatorDots: true,  
    vertical:false,
    autoplay:true, 
    siwper_interval:5000,
    siwper_duration:1000,
    live_siwpers:[{"imgpath":"/static/image/live_swiper/live_swiper01.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper/live_swiper02.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper/live_swiper03.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper/live_swiper04.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/live_swiper/live_swiper05.jpg","url":"www.bilibili.com"}],
    recommend_lives:[{"imgpath":"/static/image/live/a33849b2148ad4cdb8694bd224d5a7e59678b057.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"生活娱乐","title":"老司机开车啦,刷卡上车","userName":"小天不是受QAQ","audience":"1.2万"},
                      {"imgpath":"/static/image/live/0a80ff42169ec61c709bed2e8233684ae5726ae6.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"生活娱乐", "title":"一人饮酒醉【喊麦？！古风来啦】啦啦啦啦啦啦","userName":"啾啾❤安安","audience":"1.1万"},
                      {"imgpath":"/static/image/live/oYYBAFbeVCaARU-1AACu6XEofds765.jpg","url":"http://www.bilibili.com",
                      "type":"御宅文化", "title":"上课好困","userName":"核弹阿茶","audience":"1.8万"},
                      {"imgpath":"/static/image/live/c5968731b405e1f0b8919d2842fa94f32ee2e9fe.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"放映厅","title":"耳机福利，ASMP的花的录播ya","userName":"0o媚儿o0","audience":"2.2万"},
                      {"imgpath":"/static/image/live/706ed5edcd961666e88186b033eae61f080b0518.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"手游直播","title":"老司机冲钻，实力可以上车啦，还等什么","userName":"B站、王子殿下","audience":"3.2万"},
                      {"imgpath":"/static/image/live/oYYBAFbtUxeAWzteAACL2GAnlgY665.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"单机联机","title":"【枫叔】黎明傻机","userName":"狼枫子","audience":"0.2万"}],
    office_recommend:{"imgpath":"/static/image/6029764557e3cbe91475faae26e6e244de8c1d3c.jpg","url":"http://www.bilibili.com",
                      "type":"放映厅","title":"【官方】哔哩哔哩官方音乐台","userName":"哔哩哔哩音乐台","audience":"2.1万"},
   live_recommend_data:{"title":"推荐主播","number":"5305"},
   paint_plate_data:{"title":"绘画专区","number":"1525"},
   mobile_plant_data:{"title":"手机直播","number":"5305"},
   live_recommend_data:{"title":"推荐主播","number":"5305"},
              
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