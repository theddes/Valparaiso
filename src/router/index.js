import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import config from '@/config'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
        const {focus} = to.params
        setTimeout(() => {
            focus && document.getElementById(focus) && document.getElementById(focus).scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        }, 300)
    },
    routes
})

// Global navigational guards and hooks
router.beforeResolve((to, from, next) => {
    document.title = `${config.site.name} - ${to.meta.title}`
    next()
})

export default router
