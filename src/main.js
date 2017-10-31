import Vue from 'vue'
import App from './App'
import router from './router'

import './plugins'
import './utils'
import './directives'

import config from './config'

Vue.config.productionTip = false

new Vue({
    el: '#site',
    name: config.site.name,
    router,
    render: h => h(App)
})
