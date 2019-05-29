// pages/movie/movie.js
//注册Page
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('Movie页面 onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('Movie页面 onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('Movie页面 onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('Movie页面 onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('Movie页面 onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChache(){
    // wx.setStorage({ 异步存储 与获取
    //   key: 'name',
    //   data: {p1:'Matt'},
    //   success:()=>{
    //      wx.getStorage({
    //        key: 'name',
    //        success: function(res) {
    //          console.log(res);
    //        },
    //      })
    //   }
    // })
    wx.setStorageSync('names', 'Hurley');//同步存储 与获取
    let ns= wx.getStorageSync('names');
    console.log(ns);
  }
})