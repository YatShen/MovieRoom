import Auth from '@/api/auth'   // 主要是异步调用接口文件,下面有介绍
import { getToken, setToken, removeToken } from '@/plugins/auth'

export default{
    state: {
        account: '',
        name: '',
        mobile: '',
        email: '',
        avatar: '',
        roles: []
    },
    mutations: {
        SET_ACCOUNT: (state, account) => {
            state.account = account
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_MOBILE: (state, mobile) => {
            state.mobile = mobile
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        RESET_AUTH: (state) => {
            state.account = ''
            state.name = ''
            state.mobile = ''
            state.email = ''
            state.avatar = ''
            state.role = []
        }
    },
    actions: {
        async login({commit}, params) {
            return new Promise((resolve, reject) => {
                Auth.login(params).then(response => {
                    commit('SET_ACCOUNT', response.account)
                    commit('SET_NAME', response.name)
                    commit('SET_MOBILE', response.mobile)
                    commit('SET_EMAIL', response.email)
                    commit('SET_AVATAR', response.avatar)
                    setToken(response.token)

                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async logout({commit}) {
            return new Promise((resolve, reject) => {
                Auth.logout().then(() => {
                    commit('RESET_AUTH')
                    removeToken()

                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async refreshToken({commit}, token) {
            setToken(token)
        },
        async fetch({commit}) {
            return new Promise((resolve, reject) => {
                Auth.fetch().then(response => {
                    commit('SET_ACCOUNT', response.account)
                    commit('SET_NAME', response.name)
                    commit('SET_MOBILE', response.mobile)
                    commit('SET_EMAIL', response.email)
                    commit('SET_AVATAR', response.avatar)
                    setToken(response.token)

                    resolve()
                }).catch(error => {
                    commit('RESET_AUTH')
                    removeToken()

                    reject(error)
                })
            })
        }
    }
}