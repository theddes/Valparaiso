import Vue from 'vue'
import * as helpers from './helpers'
import * as filters from './filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Object.keys(helpers).forEach(key => {
    Vue.mixin({
        created: function () {
            this[key] = helpers[key]
        }
    })
})
