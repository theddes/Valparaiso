import Vue from 'vue'
import api from './api'

const config = {
    site: {
        name: 'Valparaiso',
        version: 2.0,
        dev_url: 'valparaiso.surge.sh',
        mode: 0 // 0: under construction, 1: online/normal, 2: show under construction even in local/dev environment
    },
    api
}

Vue.mixin({
    created: function () {
        this.$_config = config
    }
})

export default config
