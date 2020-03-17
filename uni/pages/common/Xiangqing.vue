<template>
	<view class="a">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="xinxi">
			<view class="title">恒源祥2019春季长袖白色t恤 新款春装</view>
			<view class="jiage">
				<text class="xianjia">￥999</text>
				<text class="yuanjia">￥1299</text>
				<text class="zhekou">7折</text>
			</view>
			<view class="liang">
				<view>销量: <text>108</text></view>
				<view>库存: <text>208</text></view>
				<view>游览量: <text>1308</text></view>
			</view>
			<view class="fuwu">
				<view class="yiji">
					<text class="width">购买类型</text>
					<text>白色</text>
					<text class="iconfont icon-jiantou2"></text>
				</view>
				<view class="yiji">
					<text class="width">优惠券</text>
					<text class="red">领取优惠券</text>
					<text class="iconfont icon-jiantou2"></text>
				</view>
				<view class="yiji">
					<text class="width">服务</text>
					<text>7天无理由退换货</text>
				</view>
				
				<view class="yiji">
					<view style="float: left;" class="width">促销活动</view>
					<view class="fuwu-er left">
						<view>新人首单送20元无门槛代金券</view>
						<view>订单满50减10</view>
						<view>订单满100减30</view>
						<view>单笔购买满两件免邮费</view>
					</view>
				</view>
				
			</view>
			<view class="tuwen">
				<view class="tuwen-title">图文详情</view>
				<view class="tuwen-img">
					<image src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" mode=""></image>
					<image src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" mode=""></image>
					<image src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" mode=""></image>
					<image src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="goumai">
			<view class="cart">
				<text class="bor xian">立即购买</text>
				<text>加入购物车</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	@import  '../../static/fonts/iconfont.css';
	.goumai {
		position: fixed;
		bottom: 40rpx;
		width: 690rpx;
		margin-left: 30rpx;
		height: 100rpx;
		background-color: #fff;
		border-radius: 30rpx;
		box-shadow: -10rpx 10rpx 10rpx #bababa;
	}
	.xian {
		border-right: 1rpx solid red;
		display: inline-block;
	}
	.cart {
		border: 1rpx solid red;
		width: 390rpx;
		border-radius: 70rpx;
		text-align: center;
		line-height: 90rpx;
		height: 90rpx;
		margin-top: 5rpx;
		margin-left: 300rpx;
	}
	.cart text {
		display: inline-block;
		line-height: 90rpx;
		height: 90rpx;
		color: #ff8f73;
	}
	.cart .xian {
		border-right: 8rpx solid #adadad;
		color: #ff0000;
	}
	.swiper {
		width: 750rpx;
		height: 400rpx;
	}
	.swiper image{
		width: 750rpx;
		height: 400rpx;
	}
	.xinxi {
		width: 100%;
		padding: 0 30rpx;
	}
	.title {
		margin: 30rpx 0;
	}
	.xianjia {
		color: #fa436a;
		font-size: 42rpx;
	}
	.yuanjia {
		text-decoration: line-through;
		font-size: 26rpx;
		margin-left: 10rpx;
	}
	.zhekou {
		background-color: #fa436a;
		width: 60rpx;
		display: inline-block;
		text-align: center;
		line-height: 44rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
		margin-left: 30rpx;
		color: #fff;
		height: 44rpx;
	}
	.liang {
		display: flex;
		margin: 20rpx 0;
	}
	.liang view {
		flex: 1;
		font-size: 26rpx;
	}
	.liang view text {
		color: #ff9c23;
	}
	.fuwu {
		width: 690rpx;
		line-height: 80rpx;
		height: 480rpx;
		font-size: 30rpx;
	}
	.fuwu .yiji {
		border-bottom: 1rpx solid #C0C0C0;
	}
	.width {
		width: 180rpx;
		display: inline-block;
	}
	.iconfont {
		float: right;
	}
	.red {
		color: #fa436a;
	}
	.left {
		float: left;
	}
	.left view {
		margin-bottom: -35rpx;
	}
	.tuwen {
		width: 690rpx;
		position: relative;
	}
	.tuwen-title {
		width: 690rpx;
		line-height: 80rpx;
		height: 80rpx;
		text-align: center;
		font-size: 40rpx;
	}
	.tuwen-img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
<!-- fa436a -->