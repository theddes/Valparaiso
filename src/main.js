import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import './plugins'
import './utils'
import './directives'

import config from './config'

sync(store, router)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    name: config.site.name,
    store, router,
    render: h => h(App)
})
