<template>
	<view>
		<view class="warning">
			<view class="sos">
				<view class="sos_device sos_bg">sos</view>
				<view class="sos_content">心率超高，160/100 mmHg</view>
				<view class="sos_time">10分钟前</view>
			</view>
			<view class="sos">
				<view class="sos_device sos_bg">sos</view>
				<view class="sos_content">心率超高，160/100 mmHg</view>
				<view class="sos_time">10分钟前</view>
			</view>
		</view>
		<view v-if="false">
			<view class="status">服务中心 正在处理中...</view>
			<button type="primary" class="btn btn_sos">事态紧急 立刻救助</button>
		</view>
		<view class="warning task">
			<view class="head">
				<view class="title">我的任务：1</view>
				<view class="eventType">事件类型：健康</view>
			</view> 
			<view class="task_btn">
				<button type="primary" class="btn">确认处置方式</button>
				<button type="primary" class="btn">其他任务</button>
				<button type="primary" class="btn">其他任务</button>
			</view>
		</view>

		<view class=" info">
			<view class="warning head">
				<view class="title">群消息</view>
				<view class="eventType">物业 - 锁已开 刚刚</view>
			</view>
			<view class="chat"></view>
		</view>
	</view>
</template>

<script>

</script>

<style lang="scss" scoped="">
	$padding:8px 10px 5px 10px;
	$white:#fff;
	.info {
		margin-top: 10px;
		height: calc(100vh - 260px);
		background: #fff;
		.info_title {
			display: flex;
			justify-content: space-between;
			padding: $padding;
		}
		.eventType {
			margin-right: 10px;
		}
		.chat {
			height: calc(100% - 46px);
		}
	}

	.head {
		padding: $padding;
		display: flex;
		justify-content: space-between;
	}

	.warning {
		box-shadow: 0px 1px 4px 0px #e7e7e7;
		border-top: 1px solid rgb(234, 233, 233);
	}

	.status {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		color: rgb(16, 16, 16);
	}

	.btn {

		height: 30px;
		line-height: 30px;
		border-radius: 4px;
		background-color: rgba(25, 137, 250, 0.72);
		color: white;
		font-size: 14px;
		text-align: center;
		-webkit-box-shadow: 0px 1px 4px 0px #dddcdc;
		box-shadow: 0px 1px 4px 0px #dddcdc;
		font-family: Arial;
	}

	.btn_sos {
		margin-top: 30px;
		width: 170px;
	}

	.sos {
		background: $white;
		padding: $padding;
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-content: space-between;

		.sos_device {
			width: 32px;
			height: 32px;
			line-height: 30px;
			color: $white;
		}

		.sos_bg {
			background: rgba(25, 137, 250, 0.72);
			border-radius: 25px;
			text-align: center;
		}

		.sos_content {
			line-height: 32px;
			color: #101010;
			font-size: 14px;
			text-align: left;
			float: left;
			margin-left: 10px;
		}

		.sos_time {
			line-height: 32px;
			color: rgba(128, 128, 128, 1);
			font-size: 12px;
			text-align: right;
			margin-left: auto;
		}
	}

	.title,
	.eventType {
		line-height: 32px;
		color: #101010;
		font-size: 14px
	}

	.eventType {
		color: gray;
	}



	.task {
		margin-top: 10px;
		padding-bottom: 10px;
		background: $white;




		.task_btn {
			display: flex;
			justify-content: space-between;
		}

	}
</style>
