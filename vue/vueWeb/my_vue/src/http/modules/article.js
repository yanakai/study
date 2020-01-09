import axios from '../axios'
/**
 * 文章模块
 */
// 文章列表分页查询
export const articlePage = (data) => {
    return axios({
        url: '/api/article/list/',
        method: 'post',
        data
    })
}