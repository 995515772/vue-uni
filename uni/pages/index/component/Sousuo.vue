<template>
	<view class="sousuo">
		<text class="erweima iconfont icon-erweima"></text>
		<view class="input">
			<text class="iconfont icon-sousuo">请输入要搜索的内容</text>
		</view>
		<text class="xinxi iconfont icon-xinxi"></text>
	</view>
</template>

<script>
</script>

<style scoped>
	@import '../../../static/fonts/iconfont.css';
	.sousuo {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffa01a;
		/* position: fixed;
		top: 100rpx;
		z-index: 99; */
	}
	.input {
		flex: 8;
		height: 70%;
		margin-right: 20rpx;
		border: 1rpx solid #ffe9cd;
		border-radius: 30rpx;
		text-align: center;
	}
	.erweima,
	.xinxi {
		line-height: 80rpx;
		font-size: 50rpx;
		flex: 1;
	}
</style>
