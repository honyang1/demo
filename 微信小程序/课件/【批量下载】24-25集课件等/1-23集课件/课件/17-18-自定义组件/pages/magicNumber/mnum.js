
Component({
  properties: {
    nowIn: String
  },
  data: {
    magicNumber: Math.random(),
  },

  attached(){
    console.log(this.data);
    this.triggerEvent('getMagicNumber', this.data.magicNumber)
  },

  methods: {
    onTap(event){
      // this.data.magicNumber = 8999;
      this.setData({
        magicNumber: Math.random()
      });

      this.triggerEvent('getMagicNumber', this.data.magicNumber)

    },
  }


})
