import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	getters: {
		smallScreen(){
			if(screen.width > 600){
				return false
			}
			else{
				return true
			}

		}
	},
	mutations: {
		
	},
	actions: {

	}
})
