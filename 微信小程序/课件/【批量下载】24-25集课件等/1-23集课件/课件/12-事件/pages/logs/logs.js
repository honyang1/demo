//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  // 页面加载的时候执行, 只会执行一次
  onLoad: function () {
    console.log('Logs 页 Load');
  },
  // 页面第一次渲染完成之后, 只会执行一次
  onReady(){
    console.log('Logs 页 Ready');
  },
  // 页面显示就会执行,
  onShow(){
    console.log('Logs 页 show');
  },
  // 页面隐藏就会执行
  onHide(){
    console.log('Logs 页 hide');
  },
  // 页面卸载的时候执行, 只会执行一次
  onUnload(){
    console.log('Logs 页 unload');
  },
})
