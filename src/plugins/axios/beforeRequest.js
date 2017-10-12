import axios from 'axios'

// before api call
axios.interceptors.request.use(request => {
    return request
})
