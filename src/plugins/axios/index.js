/**
 * https://github.com/mzabriskie/axios
 *
 * Use async with until utility:
 * const response = await this.until(this.axios.get(`endpoint?param=${value}`))
 *
 * NOTE: Keep in mind that await is only available if you prefix the function with 'async', e.g.:
 * async someMethod () {
 *      await ...
 * }
 */

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import store from '@store'
import config from '../../config'

import './beforeRequest'
import './beforeResponse'

axios.defaults.baseURL = config.api.base

Vue.use(VueAxios, axios)
