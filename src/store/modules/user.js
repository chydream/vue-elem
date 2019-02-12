import {login, getMenu} from '@/api/userApi'
const user = {
    namespaced: true,
    state: {
        userInfo: {},
        permission: {},
        roles: {},
        token: sessionStorage.getItem('token') || '',
        menu: []
    },
    getters: {},
    mutations: {
        SET_TOKEN: (state, params) => {
            state.token = params
            sessionStorage.setItem('token', params)
        },
        SET_MENU: (state, params) => {
            state.menu = params
        }
    },
    actions: {
        Login ({state, commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(res => {
                    commit('SET_TOKEN', res.data.token)
                    resolve(res)
                })
            })
        },
        GetMenu ({state, commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                getMenu(params).then(res => {
                    commit('SET_MENU', res.data)
                    resolve(res)
                })
            })
        },
        // 将菜单列表扁平化形成权限列表
        GetPermissionList ({state}) {
            return new Promise((resolve) => {
                let permissionList = []
                // 将菜单数据扁平化为一级
                function flatNavList (arr) {
                    for (let v of arr) {
                        if (v.children && v.children.length) {
                            flatNavList(v.children)
                        } else {
                            permissionList.push(v)
                        }
                    }
                }
                flatNavList(state.menu)
                resolve(permissionList)
            })
        }
    }
}
export default user
