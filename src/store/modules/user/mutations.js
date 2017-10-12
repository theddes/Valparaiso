import Vue from 'vue'

const mutations = {
    set_name (state, name) {
        Vue.set(state, 'name', name)
    }
}

export default mutations
