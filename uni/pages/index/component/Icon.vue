<template>
	<view class="icon">
		<scroll-view scroll-x="true" class="scroll-view">
			<view class="scrollyi"  v-for="(item,index) in list" :key="index">
				<view class="scroller">
					<image :src="item.imgUrl"></image>
					<view>{{item.title}}</view>
				</view>
			</view>
		
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		created() {
			uni.request({
				url:"http://192.168.43.152:9999/icon",
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
	/* #ifdef MP-WEIXIN */
		.icon {
			margin-top: 60rpx;
		}
	/* #endif */
	.icon {
		margin-top: -30rpx;
	}
	.scroll-view {
		width: 750rpx;
		white-space: nowrap;
	}
	.scroll-view .scrollyi {
		display: inline-block;
		width: 187.5rpx;
		height: 220rpx;
		box-sizing: border-box;
	}
	.scroller {
		width: 187.5rpx;
		box-sizing: border-box;
		height: 50%;
	}
	.scroller image {
		width: 150rpx;
		margin-left: 50%;
		transform: translateX(-50%);
		height: 150rpx;
	}
	.scroller view {
		text-align: center;
		font-size: 26rpx;
	}
</style>
