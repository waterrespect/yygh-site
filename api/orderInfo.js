import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
    //  生成訂單
    saveOrders(scheduleId, patientId) {
        return request({
            url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
            method: 'post'
        })
    },
    //  查看訂單
    getOrders(orderId) {
        return request({
            url: `${api_name}/auth/getOrders/${orderId}`,
            method: 'get'
        })
    },
    //  訂單列表
    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/auth/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    //  訂單狀態
    getStatusList() {
        return request({
            url: `${api_name}/auth/getStatusList`,
            method: 'get'
        })
    },
    //  取消訂單
    cancelOrder(orderId) {
        return request({
            url: `/api/order/orderInfo/auth/cancelOrder/${orderId}`,
            method: 'get'
        })
    },
}