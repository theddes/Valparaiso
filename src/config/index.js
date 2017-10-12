import Vue from 'vue'
import api from './api'

const config = {
    app: {
        name: 'Valparaiso',
        version: 1.0
    },
    api
}

Vue.mixin({
    created: function () {
        this.$_config = config
    }
})

export default config
