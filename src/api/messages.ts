/*
 * @Descripttion: 常见的错误信息
 * @Author: 天泽
 * @Date: 2020-07-23 16:52:21
 * @LastEditors: 天泽
 * @LastEditTime: 2020-12-30 17:35:07
 */
import { AxiosResponse } from 'axios';

function errorMessages (response: AxiosResponse) {
  const code = response.data.code;
  let messageMsg = '请求异常，请联系开发人员';
  switch (code) {
    case 403:
      messageMsg = '暂没有权限，请联系管理员';
      break;
    case 404:
      messageMsg = '未找到相关数据';
      break;
    case 500:
      messageMsg = '服务器出错了';
      break;
    default:
      messageMsg = response.data.message;
      break;
  }
  const message = messageMsg || response.statusText;
  const error = new Error(message);
  return error;
}

export default errorMessages;
