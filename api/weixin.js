import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {
    getLoginParam() {
        return request({
            url: `${api_name}/getLoginParam`,
            method: `get`
        })
    },
    //  生成微信支付二維碼
    createNative(orderId) {
        return request({
            url: `/api/order/weixin/createNative/${orderId}`,
            method: `get`
        })
    },
    //  查詢支付狀態
    queryPayStatus(orderId) {
        return request({
            url: `/api/order/weixin/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },


}
