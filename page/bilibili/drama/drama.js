var app = getApp();

Page({
  data:{
    // text:"这是一个页面"
    "user_face":app.user_face,
    "user_name":app.user_name,
    "is_scroll-y":true,
    loading:false,
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
    new_drama_title:{'url':'www.baidu.com','type':'新番连载','more_msg':'更多连载>'},
    navitve_cartoon_title:{'url':'www.baidu.com','type':'国产动画','more_msg':'更多>'},
    new_month_drama_title:{'url':'www.baidu.com','type':'七月新番','more_msg':'分季列表>'},
    drama_recommend_title:{'url':'www.baidu.com','type':'番剧推荐'},
    new_drama_datas:[{'url':'www.bilibili.com','imgpath':'/static/image/drama/small/2673ac643b48eb5bda64c960a2ca850fbebb839d.jpg_135x180.jpg',
                      'watchingnum':'5415','title':'夏目友人帐夏目友人帐夏目友人帐','now_update':'5'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/9f31310735390821ec07e42e77eec72828ad5738.jpg_135x180.jpg',
                      'watchingnum':'1425','title':'鬼斩','now_update':'42'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/bf5603c57dee60c2ccfdc1c8b907e1b20e24ce1b.jpg_135x180.jpg',
                      'watchingnum':'1553','title':'星之梦','now_update':'7'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/212345f11472cd39d6209652ca926f2249fdff36.jpg_135x180.jpg',
                      'watchingnum':'8552','title':'火影忍者X疾风传','now_update':'756'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/32b173fbb55ca90b39eb68d94492eed725d0c61e.jpg_135x180.jpg',
                      'watchingnum':'3245','title':'动画锻炼XX同一屋檐下','now_update':'32'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/29b8227afb9fba418fae7c9214c9187ca4f36cb3.jpg_135x180.jpg',
                      'watchingnum':'7227','title':'魔装学园HxH','now_update':'24'},],
    navite_cartoon_datas:[{'url':'www.bilibili.com','imgpath':'/static/image/drama/small/5661c3188712ad4878be95a664303fec2799c137.jpg_135x180.jpg',
                      'update_time':'上午11：43','title':'戒魔人'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/375067c6f49a706855595a32f4bd9f007bb60e7b.jpg_135x180.jpg',
                      'update_time':'上午10：24','title':'无畏少女'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/e440d843d935e0d389897d9038ca102d8978d81e.jpg_135x180.jpg',
                      'update_time':'上午09：45','title':'一课一练 中文版'}],
    new_month_drama_datas:[{'url':'www.bilibili.com','imgpath':'/static/image/drama/small/4a039a611da32dfc0940d74f909868e9b0ffadba.jpg_135x180.jpg',
                      'concern_num':'140.2万','title':'红伤骑士X'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/6814d147a842deb2e69bcd9d2cd59067e55fb347.jpg_135x180.jpg',
                      'concern_num':'300.2万','title':'Grane Game Girl'},
                      {'url':'www.bilibili.com','imgpath':'/static/image/drama/small/296a1d5fd863c94c4a0b7d8e60afd7a1cab19ff7.jpg_135x180.jpg',
                      'concern_num':'296.7万','title':'百武装战记'}],
    drama_bigger_datas:[{'url':'www.bilibili.com','imgpath':'/static/image/drama/big/35db812a06a2f73c3b7a6b7136d3773544bf6e0a.jpg','title':'逆转监督',
                        'more_msg':'那个曾经背叛ETU的男人回来了 带回了改变以及一句“弱小的队伍也能打败强大的家伙”'},
                        {'url':'www.bilibili.com','imgpath':'/static/image/drama/big/ce56141335cc4961d8cbf996dcdbd8c5fd8a4cfa.jpg','title':'刀剑乱舞-花丸-03',
                        'more_msg':'许多“希望樱树开花”的祈愿纸条中 偷偷藏着一两张“想找点见到一期哥”'},
                        {'url':'www.bilibili.com','imgpath':'/static/image/drama/big/dc45a74d3b2672cb9b3dd97edaa75c486813d54b.jpg','title':'SHOW BY ROCK!!第二季 03',
                        'more_msg':'Plasmagica女子力的危机！甜点系女子组Dollyolly Dolci登场以及蜜汁高富帅组合的出现 新的风暴即将来临！？'},
                        {'url':'www.bilibili.com','imgpath':'/static/image/drama/big/278bc1ae4e66cd7a61cfedbbda2f01b35066c877.jpg','title':'工作狂人',
                        'more_msg':'每天与同事一起奔波的弘子 经常废寝忘食，无法与男友约会 一旦进入工作模式，弘子可是比任何人都卖力！'},
                        {'url':'www.bilibili.com','imgpath':'/static/image/drama/big/cecdb2aed91704a8cbdcdba0c96f9b8d4e5a821d.jpg','title':'少女编号 02',
                        'more_msg':'躲得过PV，挺得过正片吗————日程这么乱来真的没关系？ 新人惴惴不安中……'},
                        {'url':'www.bilibili.com','imgpath':'/static/image/drama/big/d895c7396d2c0f20e0b3ec1f3f3ad5817ea9e961.jpg','title':'女神异闻录5',
                        'more_msg':'这是众多可能性中的一种，却不是注定的未来 天鹅绒房间中的就烦啊啊，你的名字是？'}],
  },
  loadMore:function(e){
    const that = this;
    if(!that.data.loading){
      that.setData({loading:true});
    //此处应请求后端数据填充
    setTimeout(function(){
      var more = that.data.drama_bigger_datas;
      var arr1 = [];
      for(var index in that.data.drama_bigger_datas){
          arr1.push(that.data.drama_bigger_datas[index]);
      }
      for(var i=0;i< 6;i++){
          arr1.push(that.data.drama_bigger_datas[i]);
      }

      that.setData({drama_bigger_datas:arr1});
      that.setData({loading:false});
    },5000);
    }
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