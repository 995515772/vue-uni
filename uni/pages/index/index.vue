<template>
	<view class="content">
		<Sousuo></Sousuo>
		<Swiper></Swiper>
		<Icon></Icon>
		<Dianpu></Dianpu>
		<Shangpin></Shangpin>
		<List></List>
	</view>
</template>

<script>
	import Sousuo from './component/Sousuo.vue';
	import Swiper from './component/Swiper.vue';
	import Icon from './component/Icon.vue';
	import Dianpu from './component/Dianpu.vue';
	import Shangpin from './component/Shangpin.vue';
	import List from '../common/List.vue';
	export default {
		components:{
			Sousuo,
			Swiper,
			Icon,
			Dianpu,
			Shangpin,
			List
		}
	}
</script>

<style>
	
</style>
