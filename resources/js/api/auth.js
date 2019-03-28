import axios from 'axios'

export default {
    login: (params) => {
        return axios.post('login', params)
    },
    logout: () => {
        return axios.post('logout')
    },
    refreshToken: () => {
        return axios.post('refreshToken')
    },
    fetch: () => {
        return axios.get('fetch')
    },
}