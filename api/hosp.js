import request from '@/utils/request'

const api_name = `/api/hosp/hospital`

export default {
    //  查询医院列表
    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    //  根据医院模糊查询
    getByHosname(hosname) {
        return request({
            url: `${api_name}/findByHostName/${hosname}`,
            method: 'get'
        })
    },
    //  医院详细信息
    show(hoscode) {
        return request({
            url: `${api_name}/findHospDetail/${hoscode}`,
            method: 'get'
        })
    },
    //  医院科室信息
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    },
    //  獲取可預約信息
    getBookingScheduleRule(page, limit, hoscode, depcode) {
        return request({
            url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method: 'get'
        })
    },
    //  獲取排班信息
    findScheduleList(hoscode, depcode, workDate) {
        return request({
            url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
            method: 'get'
        })
    },
    //  獲取科室排班詳細信息
    getSchedule(id) {
        return request({
          url: `${api_name}/getSchedule/${id}`,
          method: 'get'
        })
    }
        

}