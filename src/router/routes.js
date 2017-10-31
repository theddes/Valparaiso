import config from '@/config'

const Index = () => import('@/pages/Index')
const Volunteer = () => import('@/pages/Volunteer')
const Construction = () => import('@/pages/Construction')

let routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: ''
        }
    },
    {
        path: '/become-a-volunteer',
        alias: ['/volunteer', '/volunteering'],
        name: 'Volunteer',
        component: Volunteer,
        meta: {
            title: 'Become a volunteer'
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
