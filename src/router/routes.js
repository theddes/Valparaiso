import config from '@/config'

import Index from '@/pages/Index'
import Construction from '@/pages/Construction'

const mode = config.site.mode
const indexComponent = (mode && window.location.hostname !== 'localhost' || mode === 2) ?
    Construction :
    Index

const routes = [
    {
        path: '/',
        name: 'Index',
        component: indexComponent,
        meta: {
            title: ''
        }
    }
]

export default routes
