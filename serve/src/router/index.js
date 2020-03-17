import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Swiper from '../components/index/Swiper.vue'
import Icon from '../components/index/Icon.vue'
import Jingxuan from '../components/index/Jingxuan.vue'
import Shangpinleft from '../components/index/Shangpinleft.vue'
import Shangpinright from '../components/index/Shangpinright.vue'
import List from '../components/common/List.vue'


Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{path: 'swiper',name: 'Swiper',component: Swiper},
			{path: 'icon',name: 'Icon',component: Icon},
			{path: 'jingxuan',name: 'Jingxuan',component: Jingxuan},
			{path: 'shangpinleft',name: 'Shangpinleft',component: Shangpinleft},
			{path: 'shangpinright',name: 'Shangpinright',component: Shangpinright},
			{path: 'list',name: 'List',component: List},
		]
	}
	// {
	//   path: '/about',
	//   name: 'About',
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	routes
})

export default router
