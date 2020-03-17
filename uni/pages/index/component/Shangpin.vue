<template>
	<view class="shangpin">
		<view class="left">
			<scroll-view scroll-y="true" class="left-scroll-view">
				<view class="for"v-for="(item,index) in listleft" :key="index" >
					<view class="title" >{{item.title}}</view>
					<view>
						<image :src="item.imgUrl"></image>
					</view>
					<view>
						<image :src="item.imgUrl"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="right">
			<scroll-view scroll-y="true" class="left-scroll-view">
				<view class="for"v-for="(item,index) in listright" :key="index" >
					<view class="title" >{{item.title}}</view>
					<view>
						<image :src="item.imgUrl"></image>
					</view>
					<view>
						<image :src="item.imgUrl"></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			uni.request({
				url:"http://192.168.43.152:9999/shangpinleft",
				success:(data) => {
					this.listleft = data.data.msg
				}
			})
			uni.request({
				url:"http://192.168.43.152:9999/shangpinright",
				success:(data) => {
					this.listright = data.data.msg
				}
			})
		},
		data(){
			return {
				listleft:[],
				listright:[]
			}
		}
		
	}
</script>

<style scoped>
	.shangpin {
		width: 750rpx;
		padding: 0 30rpx;
		margin-top: 60rpx;
		box-sizing: border-box;
		height: 530rpx;
	}
	.left,
	.right{
		float: left;
		width: 330rpx;
		height: 500rpx;
	}
	.left {
		border-right: 30rpx solid #FFF;
	}
	.for {
		width: 330rpx;
		box-sizing: border-box;
		float: left;
	}
	.for .title {
		width: 330rpx;
		padding-left: 20rpx;
		height: 60rpx;
		box-sizing: border-box;
		line-height: 60rpx;
	}
	.for view {
		width: 164rpx;
		height: 180rpx;
		float: left;
		box-sizing: border-box;
	}
	.for view image {
		width: 164rpx;
		height: 180rpx;
	}
	.left-scroll-view{
		width: 330rpx;
		height: 500rpx;
		box-sizing: border-box;
		border-radius: 40rpx;
		border: 1rpx solid #918977;
		overflow: hidden;
	}

</style>
