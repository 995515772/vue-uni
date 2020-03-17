<template>
	<view class="index">
		<view class="left">
			<view class="left-list" v-for="(item,index) in leftlist" :key="index" @tap="get(index)" :class="k == index?'red':''">{{item.title}}</view>
		</view>
		<view class="right">
			<view class="right-list" v-for="(item,index) in weizhi" :key="index">
				<image :src="item.imgUrl"></image>
				<text>{{item.title}}</text>
			</view>
		
		</view>
	</view>
</template>

<script>
export default {
	created() {
		this.weizhi = this.yi
	},
	methods:{
		get(id){
			if(id == 0){
				this.weizhi = this.yi
				this.k = 0
			}
			if(id == 1){
				this.weizhi = this.er
				this.k = 1
			}
			if(id == 2){
				this.weizhi = this.san
				this.k = 2
			}
			if(id == 3){
				this.weizhi = this.si
			}
		}
	},
	data(){
		return {
			weizhi:[],
			k:null,
			leftlist:[
				{id:1,title:'1上线食品'},
				{id:1,title:'2上线食品'},
				{id:1,title:'3上线食品'},
				{id:1,title:'4上线食品'},
			],
			yi:[
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'1上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
			],
			er:[
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'2上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
			],
			san:[
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'3上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
			],
			si:[
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
				{id:1,title:'4上线食品',imgUrl:'http://img4.imgtn.bdimg.com/it/u=18435015,2451315709&fm=26&gp=0.jpg'},
			]
		}
	}
}
</script>

<style scoped>
	.red {
		color: red !important;
	}
	.right {
		margin-left: 220rpx;
		width: 750rpx;
	}
	.right-list {
		width: 176rpx;
		box-sizing: border-box;
		height: 230rpx;	
		float: left;
		text-align: center;
	}
	.right-list image{
		width: 150rpx;
		height: 150rpx;
		margin-left: 50%;
		margin-top: 10rpx;
		transform: translateX(-50%);
	}
	.right-list text {
		font-size: 34rpx;
	}
	.left {
		width: 200rpx;
		float: left;
	}
	.left-list {
		background-color: #007AFF;
		width: 200rpx;
		border-radius: 30rpx;
		margin: 10rpx 0;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		color: #fff;
		float: left;
	}
</style>
