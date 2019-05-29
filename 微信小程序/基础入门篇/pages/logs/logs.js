//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('logs页面 onLoad');
  },
  //页面第一次渲染完成之后，只会执行一次
  onReady() {
    console.log('logs页面 onReady');
  },
  //页面显示就会执行
  onShow() {
    console.log('logs页面 onShow');
  },
  //页面隐藏就会执行
  onHide() {
    console.log('logs页面 onHide');
  },
  //页面卸载的时候执行，只会执行一次
  onUnload() {
    console.log('logs页面 onUnload');
  },
})
