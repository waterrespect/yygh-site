import request from '@/utils/request'

const api_name = `/api/user/patient`

export default {
    //  1、獲取就診人列表
    findList() {
        return request({
            url: `${api_name}/auth/findAll`,
            method: `get`,
        })
    },

    //  2、添加就診人,即用戶
    save(patient) {
        return request({
            url:`${api_name}/auth/save`,
            method:`post`,
            data: patient
        })
    },

    //  3、根據id獲取就診人信息
    getById(id) {
        return request({
            url:`${api_name}/auth/get/${id}`,
            method:`get`
        })
    },

    //  4、修改就診人
    updatePatient(patient) {
        return request({
            url:`${api_name}/auth/update`,
            method:`put`,
            data: patient
        })
    },

    //  5、刪除就診人
    removeById(id) {
        return request({
            url:`${api_name}/auth/remove/${id}`,
            method:`delete`
        })
    },
    //
}
