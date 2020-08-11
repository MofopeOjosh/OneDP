import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/onedp',
			name: 'onedp',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/onewp',
			name: 'onewp',
			component: () => import('./views/About.vue')
		},
		{
			path: '/onemp',
			name: 'onemp',
			component: () => import('./views/About.vue')
		},
		{
			path: '*',
			name: '404',
			component: () => import('./views/Page404.vue')
		}
	]
})
