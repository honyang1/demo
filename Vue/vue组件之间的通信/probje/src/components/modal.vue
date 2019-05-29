<template>
  <div class="modal-example">
      <div class="modal">
        <div class="modal-header">
          <h4>{{title}}</h4>
        </div>
        <div class="modal-content">
          <div>
            在这里添加内容
          </div>
        </div>
        <div class="modal-footer">
          <input class="btn" type="button" @click="okClick" :value="okValue"   />
          <input class="btn" type="button" value="取消" />
        </div>
      </div>
  </div>
</template>
<script>
import { type } from 'os';
  export default {
		props: {
			title: {
				type: String,
				default: '這是一個標題！'
			},
			okValue: {
				type: String,
				default: "按鈕"
			},
			show:{
				type:Boolean,
				default:false
			},
			isRed:{
				tye:Boolean
			},
			value:{
				tye:Boolean,
				default:false
			}

		},
		methods: {
			okClick() {
				//通知父組件 点击了这个事件
				// this.$emit('clickOk');
				//改变同步的某个属性值，show.sync
				// this.$emit('update:show',false);
				// this.$emit('update:isRed',!this.isRed)
				this.$emit('input',false);
			}
		},
	}
</script>
<style scoped>
p,h4{
	margin:0;
}
.modal{
	width: 500px;
	background-color: #fff;
	border: 1px solid rgba(0,0,0,.2);
	border-radius: 6px;
	box-shadow: 0 3px 9px rgba(0,0,0,.5);
	-position: absolute;
	left: 50%;
	top: 50%;
	-transform: translate(-50%,-50%);
	z-index: 111;
}
.modal-header {
	padding: 15px;
	border-bottom: 1px solid #e5e5e5;
}
.modal-content div {
	padding: 20px;
}
.modal-footer {
	padding: 15px;
	text-align: right;
	border-top: 1px solid #e5e5e5;
}
.btn {
	padding: 5px 15px;

}
</style>

