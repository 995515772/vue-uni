<template>
	<div class="home">
		<el-container>
			<el-aside width="200px">
				<el-menu>
					<el-submenu index="1">
						<template slot="title">
							<span>首页</span>
						</template>
						<el-menu-item-group>
							<router-link class="link" to="swiper"><el-menu-item index="1-1">轮播图</el-menu-item></router-link>
							<router-link class="link" to="icon"><el-menu-item index="1-2">icon图</el-menu-item></router-link>
							<router-link class="link" to="jingxuan"><el-menu-item index="1-3">精选店铺</el-menu-item></router-link>
							<router-link class="link" to="shangpinleft"><el-menu-item index="1-4">热门商品左</el-menu-item></router-link>
							<router-link class="link" to="shangpinright"><el-menu-item index="1-5">热门商品右</el-menu-item></router-link>
							<router-link class="link" to="list"><el-menu-item index="1-6">商品</el-menu-item></router-link>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped="scoped">
.home,
.el-container {
	width: 100%;
	height: 100%;
}
.el-menu {
	height: 100%;
}
.link {
	text-decoration: none;
}
</style>
