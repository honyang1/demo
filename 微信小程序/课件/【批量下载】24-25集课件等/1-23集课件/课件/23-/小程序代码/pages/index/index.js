//index.js


//通过 getApp 全局函数获取应用实例
const app = getApp();

let arr1 = [
  'Matt', 'Moly', 'Joe', 'Hurley'
];
let arr2 = [
  {id: Math.random(), name: 'Matt'},
  {id: Math.random(), name: 'Moly'},
  {id: Math.random(), name: 'Joe'},
  {id: Math.random(), name: 'Hurley'},
];

let maN = Math.random();

Page({

  data: {
    name: "Matt",
    people: {
      n1: 1111,
      n2: 222
    },
    names: 'Matt,Joe,Hurley,Moli',
    score: 80,
    color: 'red',

    num: Math.floor(maN*1000)
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


  onContainerTap(){
    // console.log('container 绑定的事件触发了');
  },
  onInputChange(event){
    console.log(event.detail.value);
    // return Math.random()
  },

  onGetMagicMumber(ev){
    this.setData({
      num: Math.floor(ev.detail*1000)
    })
  },
  onGetUserInfo(e){
    console.log(e);
  },
  onTry(e){
    wx.getUserInfo({
      success: msg=>{
        console.log(msg, 'success');
      },
      fail: e=>{
        console.log(e, 'fail');
      }
    })
  },
  onAuthLocation(){
    wx.authorize({
      scope: 'scope.userLocation',
      success: msg=>console.log(msg, 'location succ'),
      fail: e=>console.log(e, 'loca fail')
    })
  },
  onGetLocation(){
    wx.getLocation({
      success: msg=>console.log(msg, '位置'),
      fail: e=>console.log(e, '没获取到位置')
    })
  },
  onGetSetting(){
    wx.getSetting({
      success: msg=>console.log(msg, '授权相关信息')
    })
  },
  onGotoSetting(){
    wx.openSetting({
      success: msg=>console.log(msg, '设置完成')
    })
  },
  onReq(){
    wx.showLoading({
      title: '请求中'
    });
    wx.request({
      url: 'http://localhost:3000/hello',
      data: {
        name: 'Matt'
      },
      method: "POST",
      success: res=>{
        setTimeout(()=>{
          wx.hideLoading();
        }, 1000)

        // wx.showToast({
        //   title: '请求成功'
        // })
        console.log(res.data);
      }
    })
  }

})
