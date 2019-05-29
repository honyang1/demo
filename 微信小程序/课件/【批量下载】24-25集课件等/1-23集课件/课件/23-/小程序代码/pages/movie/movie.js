
// 2. 注册 Page
Page({
  // 页面加载的时候执行, 只会执行一次
  onLoad: function () {
    console.log('Movie 页 Load');
  },
  // 页面第一次渲染完成之后, 只会执行一次
  onReady(){
    console.log('Movie 页 Ready');
  },
  // 页面显示就会执行,
  onShow(){
    console.log('Movie 页 show');
  },
  // 页面隐藏就会执行
  onHide(){
    console.log('Movie 页 hide');
  },
  // 页面卸载的时候执行, 只会执行一次
  onUnload(){
    console.log('Movie 页 unload');
  },

  onCache(){
    // wx.setStorage({
    //   key: 'name',
    //   data: {p1: 'Matt'},
    //   success: ()=>{
    //     wx.getStorage({
    //       key: 'name',
    //       success: (data)=>{
    //         console.log(data);
    //       }
    //     })
    //   }
    // })

    wx.setStorageSync('names', 'Hurley');

    let ns = wx.getStorageSync('names');

    console.log(ns);

  }
})
