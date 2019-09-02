
// http请求失败错误码
const httpErrorCode = (err) => {
  let title = '错误'
  let content = ''
  switch (err.error) {
    case 11:
      content = '无权跨域'
      break;
    case 12:
      content = '网络出错'
      break;
    case 13:
      content = '超时'
      break;
    case 14:
      content = '解码失败'
      break;
    case 19:
      content = 'HTTP错误'
      break;
    default:
      title = `${err.status}错误`
      content = err.data.msg
  }
  dd.alert({
    title,
    content
  })
}

export default function(url = '', data = {}, method = 'get', opts = {}) {
  return new Promise((resolve, reject) => {
    dd.httpRequest({
      url: (url || ''),
      data: JSON.stringify(data),
      headers: (method.toLowerCase() === 'post' ? {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': headerToken
      } : {
          'Authorization': headerToken
        }),
      method,
      ...opts,
      success: res => {
        // TODO
        let code = res.data && res.data.code;
        if (code === 2001) { // 登录失效
          reAuthLogin && reAuthLogin();
        }
        resolve(res)
      },
      fail: err => {
        if (err.status === 401 || err.status === 402) {
          reAuthLogin && reAuthLogin();
          return;
        }
        reject(err)
        if (err.status !== 400) {
          httpErrorCode(err)
        }
        console.log(err, '===')
        console.log(data, '---')
        console.log(url, '11111')
        dd.hideLoading()
      }
    })
  })
}

