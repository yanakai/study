
import { baseUrl } from '@/utils/global'

export default {
  method: 'get',
  // 基础url前缀
  baseUrl: baseUrl,
  // 请求头信息
  headers: {
    'Access-Control-Allow-Origin':'localhost:8080',
    'Access-Control-Allow-Methods': "PUT,POST,GET,DELETE,OPTIONS",
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    "X-Powered-By":' 3.2.1',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json'
}