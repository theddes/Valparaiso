import config from '@/config'

import Index from '@/pages/Index'
import Construction from '@/pages/Construction'

const uc = (config.site.mode && window.location.hostname !== 'localhost' || config.site.mode === 2)
const indexComponent = uc ?
    Construction :
    Index

const routes = [
    {
        path: '/',
        name: 'Index',
        component: indexComponent,
        meta: {
            title: (uc) ? 'Under construction' : ''
        }
    }
]

export default routes
