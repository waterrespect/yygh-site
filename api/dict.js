import request from '@/utils/request'

const api_name = `/admin/cmn/dict`

export default {
    //  根据dict_code获取下级节点(子节点)
    findByDictCode(dictCode) {
        return request({
            url: `${api_name}/findByDictCode/${dictCode}`,
            method: 'get'
        })
    },
    //  根据数据id查询子数据列表
    findByParentId(parentId) {
        return request({
            url: `${api_name}/findChildren/${parentId}`,
            method: 'get'
        })
    }
}