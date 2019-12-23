/**
 * 登录相关的接口模拟
 */

// 登录接口
// 登录接口
export function login () {
  return {
    // isOpen: false,
    url: 'http://localhost:8090/login',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'token': '4344323121398'
        // 其他数据
      }
    }
  }
}