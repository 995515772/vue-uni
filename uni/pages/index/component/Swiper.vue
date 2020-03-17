<template>
	<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		created() {
			uni.request({
				url:"http://192.168.43.152:9999/swiper",
				success:(data) => {
					this.list = data.data.msg
				}
			})
		},
		data(){
			return {
				list:[]
			}
		}
	}
</script>

<style scoped>
	.swiper{
		width: 100%;
		height: 360rpx;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.swiper-item image {
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
	}
</style>
