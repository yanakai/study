/* 
 * 接口统一集成模块
 */
import * as login from './modules/login'
import * as article from './modules/article'


// 默认全部导出
export default {
    login,
    article
}