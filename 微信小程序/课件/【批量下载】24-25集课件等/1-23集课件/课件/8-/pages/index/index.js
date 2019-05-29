//index.js


//通过 getApp 全局函数获取应用实例
const app = getApp();



Page({

  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // tab 之间的切换,不会让页面重新加载, 也就不会卸载, 只会隐藏于先生
  // 在进行 NavigatorTo, 跳转到的那个目标页面会别加载(load), 跳转之前的页面会被隐藏(hide)
  // 回退(NavigatorBack), 目标页面会 show (不是加载), 回退之前的页面会被卸载(unload)

  // 页面加载的时候执行, 只会执行一次
  onLoad: function () {
    console.log('Index 页 Load');
  },
  // 页面第一次渲染完成之后, 只会执行一次
  onReady(){
    console.log('Index 页 Ready');
  },
  // 页面显示就会执行,
  onShow(){
    console.log('Index 页 show');
  },
  // 页面隐藏就会执行
  onHide(){
    console.log('Index 页 hide');
  },
  // 页面卸载的时候执行, 只会执行一次
  onUnload(){
    console.log('Index 页 unload');
  },

})
