//index.js
//获取应用实例
const app = getApp()

Page({
  getData() {
    wx.request({
      url: 'https://fzh9ow05.qcloud.la',
      success(res) {
        wx.showToast({
          title: res.data
        })
      },
      fail(e) {
        wx.showToast({
          title: e.errMsg
        })
      }
    });
  }
})
