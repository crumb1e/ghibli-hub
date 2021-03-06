import axios from 'axios'
import NProgress from 'nprogress'

const http = axios.create({
    baseURL: `https://ghibliapi.herokuapp.com/`
})

NProgress.configure({
    easing: 'ease',
    speed: 1000
})

http.interceptors.request.use(config => {
    NProgress.start()
    return config
})

http.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default http