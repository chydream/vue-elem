import axios from './axios'
import qs from 'qs'
import {baseUrl} from '@/config/config'
import '../mock/userMock'
import '../mock/menuMock'
export const login = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/user/login',
            method: 'post',
            data: qs.stringify(params)
        }).then(res => {
            var data = res.data
            if (params.username == data.account[0].username && params.password == data.account[0].password) {
                resolve({data: {token: '123456789'}, message: '登录成功', success: true})
            } else {
                resolve({data: {}, message: '登录失败', success: false})
            }
        })
    })
}

export const getMenu = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/user/menu',
            method: 'post',
            data: qs.stringify(params)
        }).then(res => {
            resolve({data: res.data.admin, message: '获取成功', success: true})
        })
    })
}
