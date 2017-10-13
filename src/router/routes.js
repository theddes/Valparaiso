import config from '@/config'

import Index from '@/pages/Index'
import Construction from '@/pages/Construction'

let routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: ''
        }
    }
]

if (!config.site.mode) {
    routes = [
        {
            path: '*',
            name: 'UnderConstruction',
            component: Construction,
            meta: {
                title: 'Under construction'
            }
        }
    ]
}

export default routes
