import axios from 'axios'

let instance = axios.create({});

instance.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return Promise.reject(err)
    }
)


export default instance