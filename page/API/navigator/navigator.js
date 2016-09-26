Page({
  navigateTo: function () {
    wx.navigateTo({ url: '../../study/study?id=1' })
  },
  navigateBack: function () {
    wx.navigateBack()
  },
  redirectTo: function () {
    wx.redirectTo({ url: './navigator' })
  }
})
