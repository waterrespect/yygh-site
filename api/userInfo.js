import request from '@/utils/request'

const api_name = `/api/user`

export default {
    //  1、手機登錄
    login(userInfo) {
        return request({
            url: `${api_name}/login`,
            method: `post`,
            data: userInfo
        })
    },

    //  2、用戶認證
    saveUserAuth(userAuth) {
        return request({
            url:`${api_name}/auth/userAuth`,
            method:`post`,
            data: userAuth
        })
    },

    //  3、用戶信息
    getUserInfo() {
        return request({
            url:`${api_name}/auth/getUserInfo`,
            method:`get`
        })
    }
}
