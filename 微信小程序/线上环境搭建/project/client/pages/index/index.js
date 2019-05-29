//index.js
//获取应用实例
const app = getApp()

Page({
  getData(){
    wx.request({
      url: 'http://localhost:5757',
      success:res=>{
        wx.showToast({
          title: res.data,
        })
      },
      fail:e=>{
        wx.showToast({
          title: e.errMsg,
        })
      }
    })
  }
})
