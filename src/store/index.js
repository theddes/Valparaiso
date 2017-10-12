// https://vuex.vuejs.org/en/

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import modal from './modules/modal'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user, modal
    }
})

export default store
