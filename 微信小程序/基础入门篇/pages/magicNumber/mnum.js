// pages/magicNumber/mnum.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nowIn:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    magicNumber: Math.random(),
  },
  attached() {//生命周期 页面第一次进入的时候执行
  console.log(this.data);
    this.triggerEvent('getMagicNumber', {
      magicNumber: this.data.magicNumber
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTab(event) {
      //this.data.magicNumber=899; 无效
      this.setData({
        magicNumber: Math.random()
      });
      this.triggerEvent('getMagicNumber', {
        magicNumber: this.data.magicNumber
      })
    },
  }
})