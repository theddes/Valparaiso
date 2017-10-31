import Vue from 'vue'
import api from './api'

const config = {
    site: {
        name: 'Valparaiso',
        version: 2.0,
        mode: 1 // 0: under construction, 1: online/normal
    },
    data: {
        preserve: 3, // days till data is expired
        loadtime: 1500 // ms to show loader regardless of cache status
    },
    api
}

Vue.mixin({
    created: function () {
        this.$_config = config
    }
})

export default config
