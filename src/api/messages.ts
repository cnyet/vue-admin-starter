/*
 * @Descripttion: 常见的错误信息
 * @Author: 天泽
 * @Date: 2020-07-23 16:52:21
 * @LastEditors: 天泽
 * @LastEditTime: 2021-10-01 17:29:41
 */
import { AxiosError } from 'axios'

function errorMessages (error: AxiosError): Error {
  let code: string | number | undefined = error.code
  let msg = error.message
  if (error.response) {
    if (error.response.data) {
      code = error.response.data.code
      msg = error.response.data.message
    } else {
      code = error.response.status
      msg = error.response.statusText
    }
  }
  let messageMsg = '请求异常，请联系开发人员'
  switch (code) {
  case 'ECONNABORTED':
    messageMsg = '请求超时'
    break
  case 403:
    messageMsg = '暂没有权限，请联系管理员'
    break
  case 404:
    messageMsg = '未找到相关数据'
    break
  case 500:
    messageMsg = '服务器出错了'
    break
  default:
    messageMsg = msg
    break
  }
  const result = new Error(messageMsg)
  return result
}

export default errorMessages
