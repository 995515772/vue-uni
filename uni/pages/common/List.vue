<template>
	<view class="index">
		<view class="list" v-for="(item, index) in list" :key="index" @tap="xiangqing">
			<view class="list-img"><image :src="item.imgUrl" mode=""></image></view>
			<view class="list-title">{{ item.title }}</view>
			<view class="list-fukuang">
				<text>{{ item.fukuan }}</text>
				付款
			</view>
			<view class="list-jiage">
				{{ item.xianjia }}
				<text>{{ item.yuanjia }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	created() {
		uni.request({
			url:"http://192.168.43.152:9999/list",
			success:(data) => {
				this.list = data.data.msg
			}
		})
	},
	data(){
		return {
			list:[]
		}
	},
	methods: {
		xiangqing() {
			uni.reLaunch({
				url: '/pages/common/Xiangqing'
			});
		}
	}
};
</script>

<style scoped>
.index {
	padding-left: 30rpx;
	width: 750rpx;
}
.list {
	width: 330rpx;
	height: 500rpx;
	float: left;
	margin-right: 30rpx;
	box-sizing: border-box;
	margin-bottom: 16rpx;
}
.list-img {
	width: 330rpx;
	height: 330rpx;
	box-sizing: border-box;
}
.list-img image {
	width: 330rpx;
	height: 330rpx;
}
.list-title {
	width: 330rpx;
	height: 80rpx;
	box-sizing: border-box;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	font-size: 30rpx;
}
.list-fukuang {
	font-size: 30rpx;
	float: right;
	margin-top: 6rpx;
}
.list-fukuang text {
	color: #ff500b;
}
.list-jiage {
	color: #ff842c;
}
.list-jiage text {
	text-decoration: line-through;
	color: #555555;
	font-size: 26rpx;
}
</style>
