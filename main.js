import Vue from 'vue'
import App from './App'
import store from './common/store'
Vue.config.productionTip = false
import './common/plugin'

// main.js-
import uView from "uview-ui";
Vue.use(uView);

App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()
