<template>
	<view class="dianpu">
		<view class="title">
			<text class="name">精选店铺</text>
			<text class="iconfont icon-jiantou2"></text>
		</view>
		<view class="img">
			<view class="top"><image :src="imgyi" mode=""></image></view>
			<view class="bottom">
				<view><image :src="imger" mode=""></image></image></view>
				<view class="center"><image :src="imgsan" mode=""></image></image></view>
				<view><image :src="imgsi" mode=""></image></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			uni.request({
				url:"http://192.168.43.152:9999/jingxuan",
				success: (data) => {
					this.list = data.data.msg
					this.imgyi = this.list[0].imgUrl
					this.imger = this.list[1].imgUrl
					this.imgsan = this.list[2].imgUrl
					this.imgsi = this.list[3].imgUrl
				}
			})
		},
		data(){
			return {
				imgyi:'',
				imger:'',
				imgsan:'',
				imgsi:'',
			}
		}
	}
	
</script>

<style scoped>
	@import '../../../static/fonts/iconfont.css';
.dianpu {
	width: 670rpx;
	margin: 0 40rpx;
}
.title {
	width: 670rpx;
	height: 70rpx;
	line-height: 70rpx;
	box-sizing: border-box;
	padding: 0 15rpx;
}
.name {
	float: left;
}
.iconfont {
	float: right;
}
.img {
	width: 670rpx;
	overflow: hidden;
	border-radius: 40rpx;
}
.top {
	width: 670rpx;
	height: 200rpx;
	border-bottom: 10rpx solid #FFF;
}
.top image {
	width: 670rpx;
	height: 100%;
}
.bottom {
	width: 670rpx;
	height: 200rpx;
}
.bottom view {
	width: 216.6666666666667rpx;
	height: 200rpx;
	float: left;
}
.center {
	border-left: 12rpx solid #FFF;
	border-right: 12rpx solid #FFF;
}
.bottom view image {
	width: 216.6666666666667rpx;
	height: 200rpx;
}
</style>
